export interface Treatment {
  id: string;
  title: string;
  description: string;
  indication: string;
  specialist: string;
  duration: string;
  category: "general" | "estetica" | "rehabilitacion" | "ortodoncia";
}

export const treatments: Treatment[] = [
  {
    id: "odontologia-general",
    title: "Odontología general y controles",
    description:
      "Revisiones periódicas, diagnóstico integral y plan de tratamiento personalizado. Incluye radiografías digitales y evaluación completa de tu salud bucal.",
    indication:
      "Recomendado cada 6 meses como control preventivo, o ante cualquier molestia o consulta sobre tu salud dental.",
    specialist: "Odontólogo/a general",
    duration: "30 – 45 minutos",
    category: "general",
  },
  {
    id: "limpiezas-dentales",
    title: "Limpiezas dentales",
    description:
      "Limpieza profesional con ultrasonido y pulido para eliminar sarro y manchas superficiales. Fundamental para prevenir caries y enfermedad periodontal.",
    indication:
      "Se indica al menos una vez al año, o con mayor frecuencia si hay tendencia a acumulación de sarro.",
    specialist: "Odontólogo/a general o periodoncista",
    duration: "30 – 40 minutos",
    category: "general",
  },
  {
    id: "caries-arreglos",
    title: "Caries y arreglos",
    description:
      "Restauraciones estéticas con resinas de alta calidad que devuelven forma, función y color natural a tus dientes. Trabajamos con materiales de última generación.",
    indication:
      "Cuando hay caries, fracturas dentales o restauraciones antiguas que necesitan recambio.",
    specialist: "Odontólogo/a restaurador/a",
    duration: "30 – 60 minutos por pieza",
    category: "general",
  },
  {
    id: "odontopediatria",
    title: "Odontopediatría",
    description:
      "Atención dental especializada para bebés, niños y adolescentes. Enfoque en prevención, acompañamiento y adaptación para que la visita al dentista sea una experiencia positiva.",
    indication:
      "Desde la erupción del primer diente (6 meses aprox.) y durante toda la infancia y adolescencia.",
    specialist: "Odontopediatra",
    duration: "20 – 40 minutos",
    category: "general",
  },
  {
    id: "cirugias-extracciones",
    title: "Cirugías y extracciones",
    description:
      "Extracciones simples y complejas (incluidas muelas de juicio) con técnica mínimamente invasiva. Priorizamos tu comodidad y una recuperación rápida.",
    indication:
      "Cuando un diente no puede conservarse, está impactado o genera complicaciones en la salud bucal.",
    specialist: "Cirujano/a bucomaxilofacial",
    duration: "30 – 60 minutos",
    category: "general",
  },
  {
    id: "implantes",
    title: "Implantes dentales",
    description:
      "Reemplazo de piezas perdidas con implantes de titanio de alta gama. Planificación digital 3D para máxima precisión y resultados predecibles a largo plazo.",
    indication:
      "Ante la pérdida de uno o más dientes, cuando se busca una solución fija, duradera y estética.",
    specialist: "Implantólogo/a",
    duration: "60 – 90 minutos (cirugía) + período de integración",
    category: "rehabilitacion",
  },
  {
    id: "protesis",
    title: "Prótesis dentales",
    description:
      "Prótesis fijas (coronas, puentes) y removibles de última generación. Devolvemos función masticatoria y estética con materiales biocompatibles de alta calidad.",
    indication:
      "Cuando faltan piezas dentales y se necesita rehabilitar la mordida, la estética o ambas.",
    specialist: "Prostodoncista",
    duration: "Varias sesiones (2 – 5 citas según complejidad)",
    category: "rehabilitacion",
  },
  {
    id: "endodoncia",
    title: "Endodoncia y tratamientos de conducto",
    description:
      "Tratamiento del nervio dental para salvar piezas comprometidas. Utilizamos instrumental rotatorio y localizador electrónico para un procedimiento más rápido y preciso.",
    indication:
      "Cuando hay dolor intenso, infección o inflamación del nervio (pulpa) dental.",
    specialist: "Endodoncista",
    duration: "45 – 90 minutos (1 – 2 sesiones)",
    category: "general",
  },
  {
    id: "ortodoncia-brackets",
    title: "Ortodoncia con brackets",
    description:
      "Tratamiento con brackets metálicos o estéticos (cerámicos) para corregir la posición dental y la mordida. Seguimiento personalizado mes a mes.",
    indication:
      "Dientes apiñados, separados, mordida cruzada, sobremordida u otros problemas de alineación.",
    specialist: "Ortodoncista",
    duration: "12 – 24 meses (citas mensuales de 20 – 30 min)",
    category: "ortodoncia",
  },
  {
    id: "ortodoncia-alineadores",
    title: "Ortodoncia con alineadores",
    description:
      "Alineadores transparentes removibles para corregir la posición dental de forma prácticamente invisible. Planificación digital con visualización del resultado final.",
    indication:
      "Casos leves a moderados de apiñamiento, espaciado o maloclusión, especialmente cuando se busca discreción.",
    specialist: "Ortodoncista",
    duration: "6 – 18 meses (controles cada 4 – 6 semanas)",
    category: "ortodoncia",
  },
  {
    id: "blanqueamiento",
    title: "Blanqueamiento dental",
    description:
      "Blanqueamiento profesional en consultorio con tecnología LED y geles de alta concentración. Resultados visibles en una sola sesión, sin dañar el esmalte.",
    indication:
      "Dientes oscurecidos o amarillentos por café, té, tabaco o envejecimiento natural del esmalte.",
    specialist: "Odontólogo/a estético/a",
    duration: "60 – 90 minutos",
    category: "estetica",
  },
];

export const treatmentCategories = {
  general: "Consultas y prevención",
  estetica: "Estética dental",
  rehabilitacion: "Rehabilitación oral",
  ortodoncia: "Ortodoncia",
} as const;
