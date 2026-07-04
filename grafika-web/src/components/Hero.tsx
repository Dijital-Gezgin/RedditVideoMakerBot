"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { heroSlides } from "@/content/site";

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((current) => (current + 1) % heroSlides.length),
      6000,
    );
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[index];

  return (
    <section className="relative min-h-screen overflow-hidden">
      {heroSlides.map((item, slideIndex) => (
        <div
          key={item.image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            slideIndex === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={item.image}
            alt={item.title}
            fill
            priority={slideIndex === 0}
            className="object-cover"
            sizes="100vw"
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-black/30" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-4 pb-24 pt-32 sm:px-6 lg:px-8">
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-white/60">
          Fuar standı · İç mekân · Tabela
        </p>
        <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-7xl">
          {slide.title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75 sm:text-xl">
          {slide.subtitle}
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/fuar-standi"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
          >
            Projelerimizi İnceleyin
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/iletisim"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Teklif Alın
          </Link>
        </div>

        <div className="mt-16 flex gap-2">
          {heroSlides.map((_, dotIndex) => (
            <button
              key={dotIndex}
              type="button"
              aria-label={`Slayt ${dotIndex + 1}`}
              onClick={() => setIndex(dotIndex)}
              className={`h-1.5 rounded-full transition-all ${
                dotIndex === index ? "w-10 bg-white" : "w-4 bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
