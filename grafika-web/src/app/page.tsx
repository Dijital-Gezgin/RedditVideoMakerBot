import { CtaBanner } from "@/components/PageHero";
import { Hero } from "@/components/Hero";
import { NewsSection } from "@/components/NewsSection";
import { ServiceGrid } from "@/components/ServiceGrid";
import { Testimonials } from "@/components/Testimonials";
import { FadeIn } from "@/components/FadeIn";
import { newsPosts, services, siteConfig, testimonials } from "@/content/site";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.3em] text-white/45">Grafika</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-5xl">
              {siteConfig.tagline}
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/70">
              Fuar standları ve iç mekân dekorasyonlarında yaratıcı fikirleri, güçlü
              üretim ve kusursuz uygulamayla hayata geçiriyoruz. Markaların kendini en
              iyi şekilde ifade ettiği, ziyaretçilerin aklında kalan özgün mekânlar
              tasarlıyoruz.
            </p>
          </div>
        </FadeIn>
      </section>

      <ServiceGrid services={services.slice(0, 4)} />
      <Testimonials testimonials={testimonials} />
      <NewsSection posts={newsPosts} />
      <CtaBanner />
    </>
  );
}
