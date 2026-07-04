import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import type { NewsPost } from "@/content/site";

type NewsSectionProps = {
  posts: NewsPost[];
};

export function NewsSection({ posts }: NewsSectionProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <FadeIn>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-white/45">
              Haberler & Duyurular
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              Sektörden güncellemeler
            </h2>
          </div>
          <Link
            href="/haberler"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/70 transition hover:text-white"
          >
            Tüm haberler
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </FadeIn>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {posts.map((post, index) => (
          <FadeIn key={post.slug} delay={index * 0.08}>
            <article className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <time className="text-xs uppercase tracking-[0.2em] text-white/40">
                {new Date(post.date).toLocaleDateString("tr-TR", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
              <h3 className="mt-4 text-xl font-semibold leading-8 text-white">
                {post.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-white/60">
                {post.excerpt}
              </p>
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
  );
}
