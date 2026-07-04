import type { Metadata } from "next";
import { CtaBanner } from "@/components/PageHero";
import { GalleryGrid } from "@/components/GalleryGrid";
import { PageHero } from "@/components/PageHero";
import { FadeIn } from "@/components/FadeIn";
import { referenceBrands, services } from "@/content/site";

export const metadata: Metadata = {
  title: "Referanslar",
  description:
    "Grafika'nın 1996'dan bugüne gerçekleştirdiği fuar standı ve mekân projelerinden referans markalar.",
};

const galleryImages = services.flatMap((service) => service.gallery).slice(0, 12);

export default function ReferanslarPage() {
  return (
    <>
      <PageHero
        eyebrow="Referanslar"
        title="Global markaların yaratıcı çözüm ortağı"
        description="1996'dan bugüne dünya çapında gerçekleştirdiğimiz ödüllü fuar standı ve mekân projelerinden seçkiler."
        image="https://www.grafika.com.tr/wp-content/uploads/2026/01/savronik01.jpg"
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-2xl font-semibold text-white">Referans markalar</h2>
          <p className="mt-3 max-w-3xl text-white/65">
            Farklı sektörlerde birlikte çalıştığımız markalardan bazıları.
          </p>
        </FadeIn>

        <div className="mt-10 flex flex-wrap gap-3">
          {referenceBrands.map((brand, index) => (
            <FadeIn key={brand} delay={index * 0.02}>
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/75">
                {brand}
              </span>
            </FadeIn>
          ))}
        </div>
      </section>

      <GalleryGrid images={galleryImages} title="Proje galerisi" />
      <CtaBanner />
    </>
  );
}
