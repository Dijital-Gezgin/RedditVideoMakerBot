import { siteConfig } from "@/content/site";

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteConfig.url}/#grafika-org`,
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    url: siteConfig.url,
    logo: siteConfig.logo,
    description: siteConfig.description,
    foundingDate: String(siteConfig.foundingYear),
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: siteConfig.addresses.map((address) => ({
      "@type": "PostalAddress",
      streetAddress: address.lines[0],
      addressLocality: address.lines[1]?.split(",")[0],
      addressCountry: "TR",
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
