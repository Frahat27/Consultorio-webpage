import { prices } from "@/data/prices";

export default function Prices() {
  return (
    <section id="precios" className="bg-neutral-50/50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            Precios orientativos
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-neutral-600">
            Los valores son de referencia y pueden variar según el diagnóstico
            individual de cada paciente.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-8 md:grid-cols-2">
          {prices.map((category) => (
            <div
              key={category.category}
              className="rounded-2xl border border-neutral-100 bg-white p-6 shadow-sm"
            >
              <h3 className="mb-5 text-lg font-semibold text-neutral-900">
                {category.category}
              </h3>
              <div className="space-y-3">
                {category.items.map((item) => (
                  <div
                    key={item.treatment}
                    className="flex items-baseline justify-between gap-4 border-b border-neutral-50 pb-3 last:border-0"
                  >
                    <span className="text-sm text-neutral-700">
                      {item.treatment}
                    </span>
                    <span className="flex-shrink-0 text-sm font-medium text-neutral-900">
                      {item.range}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-neutral-500">
          Estos valores son orientativos y fueron actualizados por última vez en{" "}
          <span className="font-medium">[PENDIENTE: fecha]</span>. El presupuesto
          final depende del diagnóstico clínico. Consultá sin compromiso.
        </p>
      </div>
    </section>
  );
}
