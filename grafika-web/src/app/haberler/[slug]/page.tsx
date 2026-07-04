import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { FadeIn } from "@/components/FadeIn";
import { getNewsPost, newsPosts } from "@/content/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return newsPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getNewsPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function NewsDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getNewsPost(slug);
  if (!post) notFound();

  return (
    <>
      <PageHero eyebrow="Haber" title={post.title} description={post.excerpt} />

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <FadeIn>
          <time className="text-xs uppercase tracking-[0.2em] text-white/40">
            {new Date(post.date).toLocaleDateString("tr-TR", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </time>
          <div className="prose prose-invert mt-8 max-w-none">
            <p className="text-lg leading-8 text-white/75">{post.excerpt}</p>
            <p className="leading-8 text-white/65">
              Bu içerik mevcut WordPress sitenizden taşınmıştır. Canlıya geçmeden önce
              tam metin ve görseller birlikte güncellenebilir.
            </p>
          </div>
          <Link
            href="/haberler"
            className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-white/70 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Tüm haberler
          </Link>
        </FadeIn>
      </section>
    </>
  );
}
