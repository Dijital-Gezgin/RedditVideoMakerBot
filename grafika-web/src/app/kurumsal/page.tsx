import type { Metadata } from "next";
import { CtaBanner } from "@/components/PageHero";
import { PageHero } from "@/components/PageHero";
import { FadeIn } from "@/components/FadeIn";
import { aboutSections, siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Kurumsal",
  description: siteConfig.description,
};

export default function KurumsalPage() {
  return (
    <>
      <PageHero
        eyebrow="Kurumsal"
        title="1996'dan bugüne tasarım ve uygulama"
        description="Fuar standları ve iç mekân dekorasyonlarında tasarım, üretim ve uygulamayı tek çatı altında yönetiyoruz."
        image="https://www.grafika.com.tr/wp-content/uploads/2025/12/07.jpg"
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {aboutSections.map((section, index) => (
            <FadeIn key={section.title} delay={index * 0.08}>
              <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
                <h2 className="text-2xl font-semibold text-white">{section.title}</h2>
                <p className="mt-4 leading-8 text-white/70">{section.body}</p>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <div className="mt-12 grid gap-6 rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:grid-cols-3">
            <div>
              <p className="text-3xl font-semibold text-white">{siteConfig.foundingYear}</p>
              <p className="mt-2 text-sm text-white/55">Kuruluş yılı</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-white">2</p>
              <p className="mt-2 text-sm text-white/55">Ofis — İzmir & İstanbul</p>
            </div>
            <div>
              <p className="text-xl font-semibold text-white">{siteConfig.founder}</p>
              <p className="mt-2 text-sm text-white/55">Kurucu ve Proje Yöneticisi</p>
            </div>
          </div>
        </FadeIn>
      </section>

      <CtaBanner />
    </>
  );
}
