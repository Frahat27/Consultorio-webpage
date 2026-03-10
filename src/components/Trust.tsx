const pillars = [
  {
    number: "01",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    title: "Especialistas por área",
    description:
      "Cada tratamiento lo lleva adelante un profesional especializado. No improvisamos: derivamos internamente para que siempre te atienda quien más sabe.",
  },
  {
    number: "02",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Tiempo real para cada paciente",
    description:
      "Turnos con la duración que corresponde, sin apuros. Porque un buen diagnóstico y un buen tratamiento necesitan dedicación.",
  },
  {
    number: "03",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Honestidad y claridad",
    description:
      "Te contamos qué necesitás, qué no, y por qué. Sin tratamientos inventados, sin presión. Decidís con información clara y a tu ritmo.",
  },
  {
    number: "04",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1 1 .03 2.798-1.442 2.798H4.24c-1.47 0-2.441-1.798-1.442-2.798L4.2 15.3" />
      </svg>
    ),
    title: "Tecnología de última generación",
    description:
      "Trabajamos con equipamiento digital moderno para diagnósticos más precisos, tratamientos más rápidos y mejores resultados para cada paciente.",
  },
];

export default function Trust() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Título */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-800 sm:text-4xl lg:text-5xl">
            Por qué elegirnos
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-amber-400" />
          <p className="mx-auto mt-4 max-w-xl text-lg text-neutral-500">
            Atención integral con foco en vos: tu tiempo, tu diagnóstico, tu comodidad.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="group relative overflow-hidden rounded-2xl border border-neutral-100 bg-neutral-50 p-8 transition-all hover:border-brand-200 hover:shadow-md"
            >
              {/* Número decorativo de fondo */}
              <span className="pointer-events-none absolute -right-3 -top-4 select-none text-8xl font-black text-neutral-100 transition-colors group-hover:text-brand-50">
                {pillar.number}
              </span>

              {/* Ícono */}
              <div className="relative mb-5 inline-flex rounded-xl bg-brand-600 p-3 text-white shadow-sm">
                {pillar.icon}
              </div>

              {/* Texto */}
              <h3 className="relative text-xl font-bold text-neutral-900">
                {pillar.title}
              </h3>
              <p className="relative mt-3 text-base leading-relaxed text-neutral-500">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
