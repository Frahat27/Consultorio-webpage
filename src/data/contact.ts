// [PENDIENTE]: Completar con datos reales del consultorio.
export const contact = {
  phone: "5491141657011",
  whatsapp: "5491141657011",
  whatsappMessage: "Hola, quiero consultar por un turno en CYNTHIAH.",
  email: "DentalHat@gmail.com",
  address: "Virrey del Pino 4191, 3C",
  neighborhood: "Belgrano",
  city: "CABA",
  zone: "Zona norte de CABA (Belgrano y alrededores)",
  googleMapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.5!2d-58.4614!3d-34.5625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sVirrey+del+Pino+4191%2C+Buenos+Aires!5e0!3m2!1ses!2sar",
  googleMapsLink: "https://share.google/LOraInO9dMhQL7zoH",
  hours: [
    { days: "Lunes a jueves", time: "8:30 – 18:00" },
    { days: "Viernes", time: "10:00 – 18:00" },
    { days: "Sábados", time: "8:30 – 13:00" },
  ],
  nearbyAreas: [
    "Belgrano",
    "Núñez",
    "Saavedra",
    "Colegiales",
    "Coghlan",
    "Palermo",
    "Villa Crespo",
    "Villa Urquiza",
    "Villa Pueyrredón",
    "Villa Devoto",
    "Vicente López",
    "Olivos",
    "San Isidro",
  ],
};

export function getWhatsAppUrl() {
  return `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(contact.whatsappMessage)}`;
}
