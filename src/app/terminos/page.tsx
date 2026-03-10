import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y condiciones",
  description: "Términos y condiciones de uso del sitio web de CYNTHIAH Centro Odontológico Integral.",
};

export default function Terminos() {
  return (
    <main className="mx-auto max-w-3xl px-4 pb-20 pt-32 sm:px-6">
      <h1 className="text-3xl font-bold text-neutral-900">
        Términos y condiciones
      </h1>
      <div className="mt-8 space-y-6 text-base leading-relaxed text-neutral-700">
        <p>
          Al acceder y utilizar este sitio web, aceptás los siguientes términos
          y condiciones de uso.
        </p>

        <h2 className="text-xl font-semibold text-neutral-900">
          Información del sitio
        </h2>
        <p>
          Este sitio tiene fines informativos. Los contenidos publicados no
          reemplazan una consulta profesional. Los tratamientos, precios y
          tiempos indicados son orientativos y pueden variar según el
          diagnóstico clínico individual.
        </p>

        <h2 className="text-xl font-semibold text-neutral-900">
          Propiedad intelectual
        </h2>
        <p>
          Todo el contenido de este sitio (textos, imágenes, diseño, logotipos)
          es propiedad de CYNTHIAH Centro Odontológico Integral o se utiliza
          con autorización. Queda prohibida su reproducción sin consentimiento
          previo.
        </p>

        <h2 className="text-xl font-semibold text-neutral-900">
          Limitación de responsabilidad
        </h2>
        <p>
          CYNTHIAH no se responsabiliza por decisiones tomadas exclusivamente
          en base a la información publicada en este sitio. Ante cualquier
          duda de salud, consultá con un profesional.
        </p>

        <p className="text-sm text-neutral-500">
          Última actualización: [PENDIENTE: fecha]
        </p>
      </div>
    </main>
  );
}
