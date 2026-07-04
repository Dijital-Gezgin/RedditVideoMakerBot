import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import type { Service } from "@/content/site";

type ServiceGridProps = {
  services: Service[];
  title?: string;
  subtitle?: string;
};

export function ServiceGrid({
  services,
  title = "Hizmetlerimiz",
  subtitle = "Tasarımdan uygulamaya, markanızı mekâna taşıyan anahtar teslim çözümler.",
}: ServiceGridProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <FadeIn>
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-white/45">Ne yapıyoruz</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
          <p className="mt-4 text-lg leading-8 text-white/65">{subtitle}</p>
        </div>
      </FadeIn>

      <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {services.map((service, index) => (
          <FadeIn key={service.slug} delay={index * 0.08}>
            <Link
              href={`/${service.slug}`}
              className="group relative block overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-white/50">
                      0{index + 1}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-white">
                      {service.shortTitle}
                    </h3>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-white/70 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
