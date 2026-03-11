import type { Metadata } from "next";

const SITE_URL = "https://dentalhat.up.railway.app";
const SITE_NAME = "Dental Hat – Odontología y Ortodoncia";

export const defaultMetadata: Metadata = {
  title: {
    default: "Dental Hat – Odontología y Ortodoncia en Belgrano, CABA",
    template: "%s | Dental Hat",
  },
  description:
    "Centro odontológico en Belgrano con especialistas en implantes, ortodoncia, estética dental y odontología general. Atención personalizada y diagnóstico honesto. Coordiná tu turno por WhatsApp.",
  keywords: [
    "dentista belgrano",
    "odontólogo belgrano",
    "centro odontológico caba",
    "implantes dentales belgrano",
    "ortodoncia belgrano",
    "blanqueamiento dental belgrano",
    "odontopediatría belgrano",
    "dentista zona norte caba",
    "turno dentista belgrano",
    "urgencia dental belgrano",
    "dental hat belgrano",
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
    title: "Dental Hat – Odontología y Ortodoncia en Belgrano",
    description:
      "Especialistas en cada área, atención personalizada y diagnóstico honesto. Implantes, ortodoncia, estética dental y más. Belgrano, CABA.",
    images: [
      {
        url: "/consultorio/equipo-banner-2.png",
        width: 1200,
        height: 630,
        alt: "Dental Hat – Centro Odontológico en Belgrano, CABA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dental Hat – Odontología y Ortodoncia en Belgrano",
    description:
      "Especialistas en cada área, atención personalizada y diagnóstico honesto. Belgrano, CABA.",
    images: ["/consultorio/equipo-banner-2.png"],
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
    name: "Dental Hat – Odontología y Ortodoncia",
    description:
      "Centro odontológico en Belgrano con especialistas en implantes, ortodoncia, estética dental y odontología general.",
    url: SITE_URL,
    telephone: "+54-11-4165-7011",
    email: "DentalHat@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Virrey del Pino 4191, 3C",
      addressLocality: "Belgrano",
      addressRegion: "Ciudad Autónoma de Buenos Aires",
      postalCode: "1426",
      addressCountry: "AR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -34.5618,
      longitude: -58.4608,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "08:30",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday"],
        opens: "10:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "08:30",
        closes: "13:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "271",
      bestRating: "5",
    },
    priceRange: "$$",
    image: `${SITE_URL}/consultorio/equipo-banner-2.png`,
    areaServed: [
      "Belgrano",
      "Núñez",
      "Saavedra",
      "Colegiales",
      "Coghlan",
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
