import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { FadeIn } from "@/components/FadeIn";
import { newsPosts } from "@/content/site";

export const metadata: Metadata = {
  title: "Haberler & Duyurular",
  description: "Grafika'dan sektör haberleri ve duyurular.",
};

export default function HaberlerPage() {
  return (
    <>
      <PageHero
        eyebrow="Haberler"
        title="Haberler & Duyurular"
        description="Sektörden güncellemeler, fuar haberleri ve Grafika duyuruları."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6">
          {newsPosts.map((post, index) => (
            <FadeIn key={post.slug} delay={index * 0.06}>
              <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
                <time className="text-xs uppercase tracking-[0.2em] text-white/40">
                  {new Date(post.date).toLocaleDateString("tr-TR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
                <h2 className="mt-4 text-2xl font-semibold text-white">{post.title}</h2>
                <p className="mt-3 max-w-3xl leading-8 text-white/65">{post.excerpt}</p>
                <Link
                  href={`/haberler/${post.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white transition hover:text-white/80"
                >
                  Devamını oku
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
