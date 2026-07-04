import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { navLinks, services, siteConfig } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050505]">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-1">
          <Image
            src={siteConfig.logo}
            alt={siteConfig.name}
            width={140}
            height={48}
            className="mb-6 h-10 w-auto brightness-0 invert"
          />
          <p className="text-sm leading-7 text-white/60">{siteConfig.description}</p>
          <p className="mt-4 text-xs uppercase tracking-[0.2em] text-white/40">
            {siteConfig.foundingYear}&apos;dan bugüne
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
            Hizmetler
          </h3>
          <ul className="space-y-3">
            {services.slice(0, 6).map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/${service.slug}`}
                  className="text-sm text-white/70 transition hover:text-white"
                >
                  {service.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
            Kurumsal
          </h3>
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/70 transition hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/haberler"
                className="text-sm text-white/70 transition hover:text-white"
              >
                Haberler
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
            İletişim
          </h3>
          <ul className="space-y-4 text-sm text-white/70">
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-white/40" />
              <a href={siteConfig.phoneHref} className="hover:text-white">
                {siteConfig.phone}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-white/40" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                {siteConfig.email}
              </a>
            </li>
            {siteConfig.addresses.map((address) => (
              <li key={address.label} className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white/40" />
                <div>
                  <p className="font-medium text-white/85">{address.label}</p>
                  {address.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-6 text-center text-xs text-white/40">
        © {new Date().getFullYear()} {siteConfig.legalName}. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}
