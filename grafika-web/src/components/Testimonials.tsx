"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import type { Testimonial } from "@/content/site";

type TestimonialsProps = {
  testimonials: Testimonial[];
};

export function Testimonials({ testimonials }: TestimonialsProps) {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  return (
    <section className="border-y border-white/10 bg-[#0d0d0d]">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <FadeIn>
          <p className="text-sm uppercase tracking-[0.3em] text-white/45">
            Referans yorumları
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            Bizim için ne söylediler?
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-12 grid gap-8 lg:grid-cols-[280px_1fr] lg:items-center">
            <div className="relative mx-auto aspect-square w-full max-w-[280px] overflow-hidden rounded-full border border-white/10">
              <Image
                src={current.image}
                alt={current.name}
                fill
                className="object-cover"
                sizes="280px"
              />
            </div>

            <div>
              <Quote className="h-10 w-10 text-white/20" />
              <blockquote className="mt-6 text-xl leading-9 text-white/80 sm:text-2xl">
                “{current.quote}”
              </blockquote>
              <div className="mt-8">
                <p className="text-lg font-semibold text-white">{current.name}</p>
                <p className="text-white/55">
                  {current.role}
                  {current.company ? ` — ${current.company}` : ""}
                </p>
              </div>

              <div className="mt-8 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() =>
                    setIndex(
                      (value) => (value - 1 + testimonials.length) % testimonials.length,
                    )
                  }
                  className="rounded-full border border-white/15 p-3 text-white transition hover:bg-white/10"
                  aria-label="Önceki yorum"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={() => setIndex((value) => (value + 1) % testimonials.length)}
                  className="rounded-full border border-white/15 p-3 text-white transition hover:bg-white/10"
                  aria-label="Sonraki yorum"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
                <span className="ml-2 text-sm text-white/45">
                  {index + 1} / {testimonials.length}
                </span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
