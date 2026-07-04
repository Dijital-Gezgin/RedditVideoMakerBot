import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CtaBanner } from "@/components/PageHero";
import { GalleryGrid } from "@/components/GalleryGrid";
import { PageHero } from "@/components/PageHero";
import { FadeIn } from "@/components/FadeIn";
import { getService, services } from "@/content/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <PageHero
        eyebrow="Hizmetler"
        title={service.title}
        description={service.description}
        image={service.image}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
          <FadeIn>
            <h2 className="text-2xl font-semibold text-white">Neler sunuyoruz?</h2>
            <p className="mt-4 text-lg leading-8 text-white/70">{service.description}</p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-sm uppercase tracking-[0.2em] text-white/45">
                Öne çıkanlar
              </h3>
              <ul className="mt-4 space-y-3">
                {service.highlights.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-white/75">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      <GalleryGrid images={service.gallery} title={`${service.shortTitle} projeleri`} />
      <CtaBanner />
    </>
  );
}
