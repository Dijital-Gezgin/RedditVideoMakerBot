import os
import subprocess
import sys
import threading
import time
from collections import deque
from dataclasses import dataclass, field
from enum import Enum
from pathlib import Path
from typing import Deque, Dict, List, Optional


class JobStatus(str, Enum):
    IDLE = "idle"
    RUNNING = "running"
    COMPLETED = "completed"
    FAILED = "failed"
    STOPPED = "stopped"


@dataclass
class JobState:
    status: JobStatus = JobStatus.IDLE
    started_at: Optional[float] = None
    finished_at: Optional[float] = None
    post_id: Optional[str] = None
    exit_code: Optional[int] = None
    error: Optional[str] = None
    logs: Deque[str] = field(default_factory=lambda: deque(maxlen=500))


class RemoteControlManager:
    def __init__(self) -> None:
        self._lock = threading.Lock()
        self._process: Optional[subprocess.Popen] = None
        self._reader_thread: Optional[threading.Thread] = None
        self._state = JobState()

    def get_status(self) -> Dict:
        with self._lock:
            return {
                "status": self._state.status.value,
                "started_at": self._state.started_at,
                "finished_at": self._state.finished_at,
                "post_id": self._state.post_id,
                "exit_code": self._state.exit_code,
                "error": self._state.error,
                "logs": list(self._state.logs),
            }

    def get_logs(self, since: int = 0) -> List[str]:
        with self._lock:
            logs = list(self._state.logs)
        return logs[since:]

    def start(self, post_id: Optional[str] = None) -> Dict:
        with self._lock:
            if self._state.status == JobStatus.RUNNING:
                return {"ok": False, "error": "A video is already being generated."}

            if not Path("config.toml").is_file():
                return {
                    "ok": False,
                    "error": "config.toml not found. Run the bot once locally to create it.",
                }

            self._state = JobState(
                status=JobStatus.RUNNING,
                started_at=time.time(),
                post_id=post_id or None,
            )

            command = [sys.executable, "main.py"]
            if post_id:
                command.extend(["--post-id", post_id])

            try:
                self._process = subprocess.Popen(
                    command,
                    cwd=Path().absolute(),
                    stdout=subprocess.PIPE,
                    stderr=subprocess.STDOUT,
                    text=True,
                    bufsize=1,
                )
            except OSError as err:
                self._state.status = JobStatus.FAILED
                self._state.finished_at = time.time()
                self._state.error = str(err)
                return {"ok": False, "error": str(err)}

            self._reader_thread = threading.Thread(
                target=self._watch_process,
                daemon=True,
            )
            self._reader_thread.start()

        return {"ok": True, "message": "Video generation started."}

    def stop(self) -> Dict:
        with self._lock:
            if self._state.status != JobStatus.RUNNING or self._process is None:
                return {"ok": False, "error": "No video generation is currently running."}

            self._process.terminate()

        return {"ok": True, "message": "Stop signal sent."}

    def _append_log(self, line: str) -> None:
        with self._lock:
            self._state.logs.append(line.rstrip())

    def _watch_process(self) -> None:
        process = self._process
        if process is None or process.stdout is None:
            return

        for line in process.stdout:
            self._append_log(line)

        exit_code = process.wait()

        with self._lock:
            self._state.finished_at = time.time()
            self._state.exit_code = exit_code

            if self._state.status == JobStatus.RUNNING:
                if exit_code == 0:
                    self._state.status = JobStatus.COMPLETED
                elif exit_code < 0:
                    self._state.status = JobStatus.STOPPED
                    self._state.error = "Process was stopped."
                else:
                    self._state.status = JobStatus.FAILED
                    self._state.error = f"Process exited with code {exit_code}."

            self._process = None


manager = RemoteControlManager()


def is_authorized(token: Optional[str]) -> bool:
    expected = os.environ.get("GUI_AUTH_TOKEN", "").strip()
    if not expected:
        return True
    return token == expected
