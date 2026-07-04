import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";

type GalleryGridProps = {
  images: string[];
  title?: string;
};

export function GalleryGrid({ images, title = "Projeler" }: GalleryGridProps) {
  if (images.length === 0) return null;

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <FadeIn>
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">{title}</h2>
      </FadeIn>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image, index) => (
          <FadeIn key={image} delay={index * 0.05}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
              <Image
                src={image}
                alt={`${title} ${index + 1}`}
                fill
                className="object-cover transition duration-500 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
