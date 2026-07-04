import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  image?: string;
};

export function PageHero({ eyebrow, title, description, image }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 pt-28">
      {image && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="absolute inset-0 bg-black/75" />
        </>
      )}
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <FadeIn>
          {eyebrow && (
            <p className="text-sm uppercase tracking-[0.3em] text-white/45">{eyebrow}</p>
          )}
          <h1 className="mt-3 max-w-4xl text-4xl font-semibold text-white sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">{description}</p>
          )}
        </FadeIn>
      </div>
    </section>
  );
}

export function CtaBanner() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <FadeIn>
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 via-white/[0.03] to-transparent px-8 py-12 sm:px-12 sm:py-16">
          <p className="text-sm uppercase tracking-[0.3em] text-white/45">Bir sonraki proje</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold text-white sm:text-4xl">
            Fuar standınız veya mekân projeniz için hemen teklif alın.
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-white/65">
            Tasarım, üretim ve uygulamayı tek ekip yönetiyor. Projenizi birlikte
            planlayalım.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/iletisim"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
            >
              Teklif Al
            </Link>
            <Link
              href="/referanslar"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Referansları Gör
            </Link>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
