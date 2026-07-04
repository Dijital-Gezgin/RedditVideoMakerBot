import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { FadeIn } from "@/components/FadeIn";
import { siteConfig } from "@/content/site";
import { Mail, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Teklif Al",
  description: "Fuar standı ve mekân projeleriniz için Grafika ile iletişime geçin.",
};

export default function IletisimPage() {
  return (
    <>
      <PageHero
        eyebrow="İletişim"
        title="Projeniz için teklif alın"
        description="Tasarım, üretim ve uygulama süreçlerini tek ekip yönetiyoruz. Formu doldurun, sizi arayalım."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[360px_1fr]">
          <FadeIn>
            <div className="space-y-6">
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <Phone className="h-5 w-5 text-white/50" />
                <h2 className="mt-4 text-lg font-semibold text-white">Telefon</h2>
                <a href={siteConfig.phoneHref} className="mt-2 block text-white/70 hover:text-white">
                  {siteConfig.phone}
                </a>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <Mail className="h-5 w-5 text-white/50" />
                <h2 className="mt-4 text-lg font-semibold text-white">E-posta</h2>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="mt-2 block text-white/70 hover:text-white"
                >
                  {siteConfig.email}
                </a>
              </div>

              {siteConfig.addresses.map((address) => (
                <div
                  key={address.label}
                  className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
                >
                  <MapPin className="h-5 w-5 text-white/50" />
                  <h2 className="mt-4 text-lg font-semibold text-white">{address.label}</h2>
                  {address.lines.map((line) => (
                    <p key={line} className="mt-1 text-white/70">
                      {line}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <ContactForm />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
