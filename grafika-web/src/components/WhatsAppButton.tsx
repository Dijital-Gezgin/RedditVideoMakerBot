import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/content/site";

export function WhatsAppButton() {
  const message = encodeURIComponent(
    "Merhaba, Grafika web sitesi üzerinden iletişime geçiyorum. Projem hakkında bilgi almak istiyorum.",
  );
  const href = `https://wa.me/902324630223?text=${message}`;

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-black/30 transition hover:scale-105"
      aria-label="WhatsApp ile iletişime geç"
    >
      <MessageCircle className="h-5 w-5" />
      WhatsApp
    </Link>
  );
}

export function StagingBanner() {
  return (
    <div className="bg-amber-500 px-4 py-2 text-center text-sm font-medium text-black">
      TEST ORTAMI — Canlı site (grafika.com.tr) etkilenmedi. Bu yeni tasarımın önizlemesidir.
    </div>
  );
}
