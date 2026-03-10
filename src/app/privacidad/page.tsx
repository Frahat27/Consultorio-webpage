import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description: "Política de privacidad de CYNTHIAH Centro Odontológico Integral.",
};

export default function Privacidad() {
  return (
    <main className="mx-auto max-w-3xl px-4 pb-20 pt-32 sm:px-6">
      <h1 className="text-3xl font-bold text-neutral-900">
        Política de privacidad
      </h1>
      <div className="mt-8 space-y-6 text-base leading-relaxed text-neutral-700">
        <p>
          En CYNTHIAH Centro Odontológico Integral valoramos la privacidad de
          nuestros pacientes y visitantes. Esta política describe cómo
          recopilamos, usamos y protegemos la información personal.
        </p>

        <h2 className="text-xl font-semibold text-neutral-900">
          Información que recopilamos
        </h2>
        <p>
          Podemos recopilar información de contacto (nombre, teléfono, email)
          cuando nos escribís por WhatsApp, completás un formulario o agendás
          un turno. También recopilamos datos clínicos necesarios para tu
          atención odontológica.
        </p>

        <h2 className="text-xl font-semibold text-neutral-900">
          Uso de la información
        </h2>
        <p>
          Utilizamos tu información exclusivamente para brindarte atención
          odontológica, coordinar turnos y comunicarnos con vos sobre tu
          tratamiento. No vendemos ni compartimos tus datos con terceros con
          fines comerciales.
        </p>

        <h2 className="text-xl font-semibold text-neutral-900">
          Cookies y analytics
        </h2>
        <p>
          Este sitio puede utilizar cookies técnicas y herramientas de analítica
          web para mejorar la experiencia de navegación. No se recopilan datos
          personales identificables a través de estas herramientas.
        </p>

        <h2 className="text-xl font-semibold text-neutral-900">Contacto</h2>
        <p>
          Si tenés preguntas sobre esta política, podés contactarnos a través
          de los canales indicados en nuestra página principal.
        </p>

        <p className="text-sm text-neutral-500">
          Última actualización: [PENDIENTE: fecha]
        </p>
      </div>
    </main>
  );
}
