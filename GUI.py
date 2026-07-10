import os
import webbrowser
from pathlib import Path

# Used "tomlkit" instead of "toml" because it doesn't change formatting on "dump"
import tomlkit
from flask import (
    Flask,
    jsonify,
    redirect,
    render_template,
    request,
    send_from_directory,
    url_for,
)

import utils.gui_utils as gui
from utils.remote_control import is_authorized, manager

# Set the hostname (use 0.0.0.0 to allow remote access)
HOST = os.environ.get("GUI_HOST", "localhost")
# Set the port number
PORT = int(os.environ.get("GUI_PORT", "4000"))

# Configure application
app = Flask(__name__, template_folder="GUI")

# Configure secret key only to use 'flash'
app.secret_key = b'_5#y2L"F4Q8z\n\xec]/'


# Ensure responses aren't cached
@app.after_request
def after_request(response):
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    response.headers["Expires"] = 0
    response.headers["Pragma"] = "no-cache"
    return response


# Display index.html
@app.route("/")
def index():
    return render_template("index.html", file="videos.json")


@app.route("/control", methods=["GET"])
def control():
    return render_template("control.html", file="control")


def _unauthorized_response():
    return jsonify({"ok": False, "error": "Unauthorized"}), 401


def _check_auth():
    token = request.headers.get("X-Auth-Token") or request.args.get("token")
    if not is_authorized(token):
        return _unauthorized_response()
    return None


@app.route("/api/status", methods=["GET"])
def api_status():
    auth_error = _check_auth()
    if auth_error:
        return auth_error
    return jsonify(manager.get_status())


@app.route("/api/logs", methods=["GET"])
def api_logs():
    auth_error = _check_auth()
    if auth_error:
        return auth_error
    since = request.args.get("since", default=0, type=int)
    return jsonify({"logs": manager.get_logs(since)})


@app.route("/api/start", methods=["POST"])
def api_start():
    auth_error = _check_auth()
    if auth_error:
        return auth_error

    post_id = request.form.get("post_id", "").strip() or None
    result = manager.start(post_id)
    status_code = 200 if result.get("ok") else 409
    return jsonify(result), status_code


@app.route("/api/stop", methods=["POST"])
def api_stop():
    auth_error = _check_auth()
    if auth_error:
        return auth_error

    result = manager.stop()
    status_code = 200 if result.get("ok") else 409
    return jsonify(result), status_code


@app.route("/backgrounds", methods=["GET"])
def backgrounds():
    return render_template("backgrounds.html", file="backgrounds.json")


@app.route("/background/add", methods=["POST"])
def background_add():
    # Get form values
    youtube_uri = request.form.get("youtube_uri").strip()
    filename = request.form.get("filename").strip()
    citation = request.form.get("citation").strip()
    position = request.form.get("position").strip()

    gui.add_background(youtube_uri, filename, citation, position)

    return redirect(url_for("backgrounds"))


@app.route("/background/delete", methods=["POST"])
def background_delete():
    key = request.form.get("background-key")
    gui.delete_background(key)

    return redirect(url_for("backgrounds"))


@app.route("/settings", methods=["GET", "POST"])
def settings():
    config_load = tomlkit.loads(Path("config.toml").read_text())
    config = gui.get_config(config_load)

    # Get checks for all values
    checks = gui.get_checks()

    if request.method == "POST":
        # Get data from form as dict
        data = request.form.to_dict()

        # Change settings
        config = gui.modify_settings(data, config_load, checks)

    return render_template("settings.html", file="config.toml", data=config, checks=checks)


# Make videos.json accessible
@app.route("/videos.json")
def videos_json():
    return send_from_directory("video_creation/data", "videos.json")


# Make backgrounds.json accessible
@app.route("/backgrounds.json")
def backgrounds_json():
    return send_from_directory("utils", "backgrounds.json")


# Make videos in results folder accessible
@app.route("/results/<path:name>")
def results(name):
    return send_from_directory("results", name, as_attachment=True)


# Make voices samples in voices folder accessible
@app.route("/voices/<path:name>")
def voices(name):
    return send_from_directory("GUI/voices", name, as_attachment=True)


# Run browser and start the app
if __name__ == "__main__":
    if HOST in ("localhost", "127.0.0.1"):
        webbrowser.open(f"http://{HOST}:{PORT}", new=2)
        print("Website opened in new tab. Refresh if it didn't load.")
    else:
        print(f"Remote control GUI listening on http://{HOST}:{PORT}")
    app.run(host=HOST, port=PORT)
