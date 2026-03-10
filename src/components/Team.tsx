import Image from "next/image";
import { team } from "@/data/team";

// Triplicamos para que el loop sea perfectamente continuo
const loopedTeam = [...team, ...team, ...team];

export default function Team() {
  return (
    <section id="equipo" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
            Quiénes somos
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-neutral-600">
            Somos un equipo de profesionales coordinados para ofrecerte la
            mejor atención. Cada especialista se dedica a lo que mejor sabe
            hacer.
          </p>
        </div>

      </div>

      {/* Carrusel continuo — acotado al contenedor */}
      <div className="mx-auto mt-12 max-w-7xl overflow-hidden px-4 sm:px-6 lg:px-8">
        <div
          className="carousel-track flex gap-5"
          style={{ width: "max-content" }}
        >
          {loopedTeam.map((member, i) => (
            <MemberCard key={i} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MemberCard({ member }: { member: (typeof team)[0] }) {
  return (
    <div
      className="flex w-72 flex-shrink-0 flex-col rounded-2xl border border-neutral-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
    >
      {/* Photo */}
      <div className="mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full bg-neutral-100 ring-4 ring-brand-50">
        <Image
          src={member.image}
          alt={`${member.name} – ${member.specialty}`}
          width={192}
          height={192}
          className="h-full w-full object-cover object-top"
        />
      </div>

      <div className="text-center">
        <h3 className="text-sm font-semibold text-neutral-900 sm:text-base">
          {member.name}
        </h3>
        <p className="mt-0.5 text-xs font-medium text-brand-600">
          {member.specialty}
        </p>
        <p className="mt-0.5 text-xs text-neutral-400">{member.role}</p>
      </div>

      <ul className="mt-4 space-y-1.5">
        {member.highlights.map((highlight, i) => (
          <li key={i} className="flex items-start gap-2 text-xs text-neutral-600">
            <svg
              className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-brand-500"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            {highlight}
          </li>
        ))}
      </ul>
    </div>
  );
}
