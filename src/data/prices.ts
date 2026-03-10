export interface PriceItem {
  treatment: string;
  range: string;
}

export interface PriceCategory {
  category: string;
  items: PriceItem[];
}

// Precios de referencia (sección desactivada en el sitio por ahora).
// Para activarla: descomentar <Prices /> en src/app/page.tsx
// y agregar { href: "#precios", label: "Precios" } en Header.tsx navLinks.
export const prices: PriceCategory[] = [
  {
    category: "Consultas y prevención",
    items: [
      { treatment: "Consulta general", range: "$45.000" },
      { treatment: "Limpieza dental", range: "$80.000" },
      { treatment: "Restauración (caries)", range: "$70.000 – $90.000" },
    ],
  },
  {
    category: "Estética dental",
    items: [
      { treatment: "Blanqueamiento en consultorio", range: "$240.000" },
    ],
  },
  {
    category: "Rehabilitación oral",
    items: [
      { treatment: "Implante dental (por pieza)", range: "$540.000" },
      { treatment: "Endodoncia (conducto)", range: "$260.000" },
      { treatment: "Extracciones", range: "$150.000 – $240.000" },
    ],
  },
  {
    category: "Ortodoncia",
    items: [
      { treatment: "Ortodoncia (tratamiento completo)", range: "USD 1.100 – USD 2.000" },
    ],
  },
];
