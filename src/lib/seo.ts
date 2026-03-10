import type { Metadata } from "next";

const SITE_URL = "https://cynthiah.vercel.app"; // [PENDIENTE: confirmar dominio]
const SITE_NAME = "CYNTHIAH – Centro Odontológico Integral";

export const defaultMetadata: Metadata = {
  title: {
    default: "CYNTHIAH – Centro Odontológico Integral en Belgrano, CABA",
    template: "%s | CYNTHIAH",
  },
  description:
    "Centro odontológico en Belgrano con especialistas en implantes, ortodoncia, estética dental y odontología general. Atención personalizada, diagnóstico honesto y precios claros. Zona norte de CABA.",
  keywords: [
    "dentista belgrano",
    "odontólogo belgrano",
    "centro odontológico caba",
    "implantes dentales belgrano",
    "ortodoncia belgrano",
    "blanqueamiento dental belgrano",
    "odontopediatría belgrano",
    "dentista zona norte caba",
    "consultorio odontológico belgrano",
    "odontología integral buenos aires",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "CYNTHIAH – Centro Odontológico Integral en Belgrano",
    description:
      "Especialistas en cada área, atención personalizada y diagnóstico honesto. Implantes, ortodoncia, estética dental y más. Belgrano, CABA.",
    images: [
      {
        url: "/og-image.jpg", // [PENDIENTE: crear imagen OG 1200x630]
        width: 1200,
        height: 630,
        alt: "CYNTHIAH Centro Odontológico Integral",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CYNTHIAH – Centro Odontológico Integral en Belgrano",
    description:
      "Especialistas en cada área, atención personalizada y diagnóstico honesto. Belgrano, CABA.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export function generateJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: "CYNTHIAH – Centro Odontológico Integral",
    description:
      "Centro odontológico en Belgrano con especialistas en implantes, ortodoncia, estética dental y odontología general.",
    url: SITE_URL,
    telephone: "[PENDIENTE: teléfono]",
    email: "[PENDIENTE: email]",
    address: {
      "@type": "PostalAddress",
      streetAddress: "[PENDIENTE: dirección]",
      addressLocality: "Buenos Aires",
      addressRegion: "CABA",
      postalCode: "[PENDIENTE: código postal]",
      addressCountry: "AR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "[PENDIENTE: latitud]",
      longitude: "[PENDIENTE: longitud]",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "[PENDIENTE: hora apertura]",
        closes: "[PENDIENTE: hora cierre]",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "270",
      bestRating: "5",
    },
    priceRange: "$$",
    image: `${SITE_URL}/og-image.jpg`,
    areaServed: [
      "Belgrano",
      "Núñez",
      "Saavedra",
      "Colegiales",
      "Palermo",
      "Villa Urquiza",
      "Vicente López",
      "Olivos",
      "San Isidro",
    ],
    medicalSpecialty: [
      "Odontología general",
      "Implantología",
      "Ortodoncia",
      "Endodoncia",
      "Odontopediatría",
      "Cirugía bucomaxilofacial",
    ],
  };
}
