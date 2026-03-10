export interface TeamMember {
  name: string;
  role: string;
  specialty: string;
  highlights: string[];
  image: string;
}

// [PENDIENTE]: Completar con los datos reales de cada profesional.
// Reemplazar nombres, especialidades y bullets de formación.
export const team: TeamMember[] = [
  {
    name: "Dra. Cynthia Hatzerian",
    role: "Dirección clínica",
    specialty: "Odontología general, ortodoncia y estética",
    highlights: [
      "Ortodoncia con brackets y alineadores invisibles",
      "Blanqueamiento dental profesional",
      "Coordinación y planificación de tratamientos integrales",
    ],
    image: "/team/Cynthia.png",
  },
  {
    name: "Dra. Daiana Perez",
    role: "Especialista",
    specialty: "Cirugía y extracciones",
    highlights: [
      "Cirugías bucomaxilofaciales",
      "Extracciones simples y complejas",
      "Técnica mínimamente invasiva",
    ],
    image: "/team/Daiana_Perez.jpg",
  },
  {
    name: "Dr. Diego Figueiras",
    role: "Especialista",
    specialty: "Implantología",
    highlights: [
      "Implantes dentales de alta gama",
      "Planificación digital 3D",
      "Rehabilitación sobre implantes",
    ],
    image: "/team/Diego_figueiras_2.jpg",
  },
  {
    name: "Dra. Ana Miño",
    role: "Especialista",
    specialty: "Odontología general y odontopediatría",
    highlights: [
      "Atención integral para adultos y niños",
      "Odontopediatría con enfoque en contención",
      "Prevención y controles periódicos",
    ],
    image: "/team/ana-mino.jpg",
  },
  {
    name: "Dr. Ignacio Fernandez",
    role: "Especialista",
    specialty: "Endodoncia y tratamientos de conducto",
    highlights: [
      "Tratamientos de conducto con instrumental rotatorio",
      "Localización electrónica de precisión",
      "Resolución de casos complejos",
    ],
    image: "/team/ignacio-fernandez.png",
  },
  {
    name: "Edymar Falcon",
    role: "Recepción",
    specialty: "Atención al paciente",
    highlights: [
      "Primer contacto y bienvenida",
      "Gestión de turnos y seguimiento",
      "Atención cálida y organizada",
    ],
    image: "/team/Edymar_Falcon.jpg",
  },
];
