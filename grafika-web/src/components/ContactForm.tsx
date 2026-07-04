"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    window.setTimeout(() => setStatus("success"), 900);
  }

  if (status === "success") {
    return (
      <div className="rounded-3xl border border-emerald-500/20 bg-emerald-500/10 p-8 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-emerald-400" />
        <h3 className="mt-4 text-xl font-semibold text-white">Mesajınız alındı</h3>
        <p className="mt-2 text-white/65">
          En kısa sürede sizinle iletişime geçeceğiz. Teşekkür ederiz.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm text-white/60">Ad Soyad</span>
          <input
            required
            name="name"
            className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-white/30"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm text-white/60">Firma / Marka</span>
          <input
            name="company"
            className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-white/30"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm text-white/60">Telefon</span>
          <input
            required
            name="phone"
            type="tel"
            className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-white/30"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm text-white/60">E-posta</span>
          <input
            required
            name="email"
            type="email"
            className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-white/30"
          />
        </label>
      </div>

      <label className="mt-5 block">
        <span className="mb-2 block text-sm text-white/60">Mesajınız</span>
        <textarea
          required
          name="message"
          rows={5}
          className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-white/30"
        />
      </label>

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90 disabled:opacity-70"
      >
        {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
        Formu Gönder
      </button>

      <p className="mt-4 text-xs leading-6 text-white/40">
        Bu form test ortamındadır. Canlıya alırken e-posta servisi veya CRM
        entegrasyonu bağlanacaktır.
      </p>
    </form>
  );
}
