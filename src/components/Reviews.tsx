"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { reviews, reviewsConfig } from "@/data/reviews";

export default function Reviews() {
  const [current, setCurrent] = useState(0);
  const max = reviews.length - 3;

  const next = useCallback(() => {
    setCurrent((c) => (c >= max ? 0 : c + 1));
  }, [max]);

  const prev = () => setCurrent((c) => (c <= 0 ? max : c - 1));

  useEffect(() => {
    const id = setInterval(next, 4000);
    return () => clearInterval(id);
  }, [next]);

  return (
    <section id="resenas" className="bg-neutral-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Título con línea decorativa */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-800 sm:text-4xl lg:text-5xl">
            ¿Qué dicen de Nosotros?
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-amber-400" />
        </div>

        <div className="mt-14 grid grid-cols-1 items-center gap-8 lg:grid-cols-4">

          {/* Panel izquierdo – sin borde, solo contenido flotante */}
          <div className="flex flex-col items-center justify-center text-center lg:col-span-1">
            <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border border-neutral-200 bg-white shadow-sm">
              <Image
                src="/logo-stacked.png"
                alt="Dental Hat"
                width={80}
                height={60}
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="mt-3 text-base font-bold leading-snug text-neutral-800">
              CYNTHIAH
              <br />
              <span className="font-normal text-neutral-500 text-sm">
                Odontología y Ortodoncia
              </span>
            </p>

            <div className="mt-3 flex items-center gap-1.5">
              <span className="text-2xl font-bold text-amber-500">
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
            <p className="mt-1 text-sm text-neutral-500">
              Basado en {reviewsConfig.totalReviews} reseñas.
            </p>
            <div className="mt-1 flex items-center gap-1 text-sm text-neutral-400">
              <span>powered by</span>
              <GoogleWordmark />
            </div>
            <a
              href={reviewsConfig.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-brand-600 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
            >
              valóranos en
              <GoogleGIcon className="h-4 w-4" />
            </a>
          </div>

          {/* Carrusel */}
          <div className="relative lg:col-span-3">
            <div className="grid grid-cols-1 gap-4 px-8 sm:grid-cols-3">
              {[0, 1, 2].map((offset) => {
                const review = reviews[(current + offset) % reviews.length];
                return (
                  <div key={`${current}-${offset}`} className={offset > 0 ? "hidden sm:block" : ""}>
                    <ReviewCard review={review} />
                  </div>
                );
              })}
            </div>

            {/* Arrow prev */}
            <button
              type="button"
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white shadow-sm transition hover:bg-neutral-50"
              aria-label="Anterior"
            >
              <svg className="h-4 w-4 text-neutral-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            {/* Arrow next */}
            <button
              type="button"
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white shadow-sm transition hover:bg-neutral-50"
              aria-label="Siguiente"
            >
              <svg className="h-4 w-4 text-neutral-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

function ReviewCard({ review }: { review: (typeof reviews)[0] }) {
  const initials = review.author
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      className="relative flex flex-col rounded-2xl bg-white p-5"
      style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.07)", border: "1px solid #e5e7eb" }}
    >
      {/* Google G – top right */}
      <div className="absolute right-4 top-4">
        <GoogleGIcon className="h-5 w-5" />
      </div>

      {/* Header */}
      <div className="flex items-center gap-3 pr-8">
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-semibold text-neutral-500">
          {initials}
        </div>
        <div>
          <p className="text-sm font-semibold text-brand-600 leading-tight">
            {review.author}
          </p>
          <p className="text-xs text-neutral-400">{review.date}</p>
        </div>
      </div>

      {/* Stars */}
      <div className="mt-3 flex gap-0.5">
        {Array.from({ length: review.rating }).map((_, i) => (
          <svg key={i} className="h-5 w-5 text-amber-400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" />
          </svg>
        ))}
      </div>

      {/* Text */}
      <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-600">
        {review.text}
      </p>
    </div>
  );
}

function GoogleGIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );
}

function GoogleWordmark() {
  return (
    <span className="font-semibold text-sm">
      <span style={{ color: "#4285F4" }}>G</span>
      <span style={{ color: "#EA4335" }}>o</span>
      <span style={{ color: "#FBBC05" }}>o</span>
      <span style={{ color: "#4285F4" }}>g</span>
      <span style={{ color: "#34A853" }}>l</span>
      <span style={{ color: "#EA4335" }}>e</span>
    </span>
  );
}
