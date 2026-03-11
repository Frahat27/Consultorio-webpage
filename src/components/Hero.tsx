import Image from "next/image";
import { getWhatsAppUrl } from "@/data/contact";
import { reviewsConfig } from "@/data/reviews";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden"
    >
      {/* Mobile photo */}
      <Image
        src="/consultorio/Consultorio 1.jpg"
        alt="Dental Hat – consultorio"
        width={800}
        height={1000}
        className="block w-full h-auto sm:hidden"
        priority
      />

      {/* Desktop photo */}
      <Image
        src="/consultorio/equipo-banner-2.png"
        alt="Equipo Hat Dental en el consultorio"
        width={1920}
        height={800}
        className="hidden w-full h-auto sm:block"
        priority
      />

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Contenido */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-start pt-24 px-4 text-center sm:justify-center sm:pt-0">
        {/* Nombre */}
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-7xl">
          Dental Hat
        </h1>

        {/* Subtítulo */}
        <p className="mt-4 max-w-xl text-base font-light italic tracking-wide text-white/90 sm:mt-5 sm:text-xl">
          Cuidamos tu sonrisa con un enfoque moderno y personalizado para toda tu familia
        </p>

        {/* CTAs */}
        <div className="mt-6 flex flex-col items-center gap-3 sm:mt-8 sm:flex-row">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-8 py-3.5 text-base font-semibold text-neutral-900 transition-all hover:bg-amber-300 hover:shadow-lg"
          >
            ¡Coordiná un turno!
          </a>
          <a
            href="#tratamientos"
            className="inline-flex items-center gap-2 rounded-full border border-white/40 px-8 py-3.5 text-base font-medium text-white transition-all hover:bg-white/10"
          >
            Ver tratamientos
          </a>
        </div>

        {/* Scroll indicator — solo desktop */}
        <a
          href="#tratamientos"
          className="mt-14 hidden animate-bounce text-white/60 hover:text-white/90 sm:flex"
          aria-label="Scroll hacia abajo"
        >
          <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </a>
      </div>

      {/* Rating – solo desktop */}
      <div className="absolute bottom-6 right-6 z-10 hidden flex-col items-end gap-1 sm:flex">
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-amber-400">
            {reviewsConfig.averageRating}
          </span>
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} className="h-5 w-5 text-amber-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" />
              </svg>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-1 text-sm text-white/70">
          <span>powered by</span>
          <GoogleWordmark />
        </div>
      </div>
    </section>
  );
}

function GoogleWordmark() {
  return (
    <span className="font-semibold">
      <span style={{ color: "#4285F4" }}>G</span>
      <span style={{ color: "#EA4335" }}>o</span>
      <span style={{ color: "#FBBC05" }}>o</span>
      <span style={{ color: "#4285F4" }}>g</span>
      <span style={{ color: "#34A853" }}>l</span>
      <span style={{ color: "#EA4335" }}>e</span>
    </span>
  );
}
