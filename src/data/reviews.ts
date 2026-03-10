export interface Review {
  author: string;
  rating: number;
  text: string;
  date: string;
}

// [PENDIENTE]: Reemplazar con reseñas reales de Google Maps.
// [PENDIENTE]: Actualizar el link de Google Maps y la cantidad de reseñas.
export const reviewsConfig = {
  averageRating: 5.0,
  totalReviews: 271,
  googleMapsUrl: "https://www.google.com/search?q=cynthiah+odontologia+y+ortodoncia#lrd=0x95bcb7ef52d76b17:0xfb9fbfd69fffab7c,1,,,,",
  placeId: "0x95bcb7ef52d76b17:0xfb9fbfd69fffab7c",
};

export const reviews: Review[] = [
  {
    author: "María L.",
    rating: 5,
    text: "Excelente atención. Me explicaron todo con mucha paciencia y claridad. Se nota que el equipo trabaja con mucho profesionalismo y calidez humana.",
    date: "Hace 2 semanas",
  },
  {
    author: "Juan P.",
    rating: 5,
    text: "Fui por una urgencia y me atendieron el mismo día. Muy agradecido con el trato y la dedicación. Recomiendo 100%.",
    date: "Hace 1 mes",
  },
  {
    author: "Carolina S.",
    rating: 5,
    text: "Llevo a mis dos hijos y están encantados. La odontopediatra es un amor y los chicos ya no le tienen miedo al dentista.",
    date: "Hace 1 mes",
  },
  {
    author: "Martín R.",
    rating: 5,
    text: "Me hice implantes acá y el resultado es impecable. Planificaron todo con tecnología 3D y me explicaron cada paso. Muy profesionales.",
    date: "Hace 2 meses",
  },
  {
    author: "Lucía D.",
    rating: 5,
    text: "Lo que más valoro es la honestidad. Me dijeron exactamente qué necesitaba y qué no, sin inventar tratamientos de más. Eso no se consigue en cualquier consultorio.",
    date: "Hace 3 meses",
  },
  {
    author: "Fernando G.",
    rating: 5,
    text: "Arranqué con alineadores y estoy muy contento con el seguimiento. La ortodoncista es muy detallista y siempre se toma su tiempo.",
    date: "Hace 3 meses",
  },
];
