import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

const fraunces = { fontFamily: "var(--font-fraunces), serif" };

const servicios = [
  {
    title: "Kinesiología Domiciliaria",
    desc: "Tratamientos personalizados en la comodidad de tu hogar, adaptados a tus necesidades de recuperación.",
    tag: "Principal",
    icon: (
      <svg className="w-5 h-5 stroke-blue-500" fill="none" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: "Terapia Respiratoria",
    desc: "Rehabilitación para mejorar la función pulmonar y apoyar procesos de recuperación respiratoria.",
    tag: "Respiratorio",
    icon: (
      <svg className="w-5 h-5 stroke-blue-500" fill="none" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Atención Gerontológica",
    desc: "Tratamiento especializado y con enfoque humano para el adulto mayor, mejorando movilidad y bienestar.",
    tag: "Adulto mayor",
    icon: (
      <svg className="w-5 h-5 stroke-blue-500" fill="none" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
  },
  {
    title: "Rehabilitación Musculoesquelética",
    desc: "Tratamiento de lesiones, recuperación postoperatoria y mejora del movimiento articular y muscular.",
    tag: "Rehabilitación",
    icon: (
      <svg className="w-5 h-5 stroke-blue-500" fill="none" strokeWidth={1.5} viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <line x1="14.31" y1="8" x2="20.05" y2="17.94" />
        <line x1="9.69" y1="8" x2="21.17" y2="8" />
        <line x1="7.38" y1="12" x2="13.12" y2="2.06" />
        <line x1="9.69" y1="16" x2="3.95" y2="6.06" />
        <line x1="14.31" y1="16" x2="2.83" y2="16" />
        <line x1="16.62" y1="12" x2="10.88" y2="21.94" />
      </svg>
    ),
  },
  {
    title: "Estimulación Cognitiva",
    desc: "Actividades terapéuticas para fortalecer memoria, atención y habilidades cognitivas en personas de tercera edad.",
    tag: "Cognitivo",
    icon: (
      <svg className="w-5 h-5 stroke-blue-500" fill="none" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
      </svg>
    ),
  },
  {
    title: "Capacitación a Cuidadores",
    desc: "Formación práctica y especializada para fortalecer las habilidades de quienes cuidan personas mayores.",
    tag: "Formación",
    icon: (
      <svg className="w-5 h-5 stroke-blue-500" fill="none" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
        <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
      </svg>
    ),
  },
];

const pacientes = [
  { title: "Adultos en recuperación", desc: "Post-cirugía, accidentes o lesiones musculoesqueléticas." },
  { title: "Adultos mayores (+60 años)", desc: "Movilidad, equilibrio, cognición y bienestar general." },
  { title: "Cuidadores y familias", desc: "Capacitación para entregar mejor apoyo en el hogar." },
];

const nosotros = [
  { title: "Basado en evidencia", desc: "Protocolos clínicos actualizados y probados." },
  { title: "Enfoque educativo", desc: "Educamos al paciente y su entorno para mejores resultados." },
];

const stats = [
  { value: "100%", label: "PERSONALIZADO" },
  { value: "+55", label: "AÑOS FOCO" },
];

const heroCards = [
  {
    label: "Atención domiciliaria",
    sub: "Llegamos donde estés en Santiago",
    icon: (
      <svg className="w-5 h-5 stroke-white" fill="none" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    label: "Horarios flexibles",
    sub: "Coordinamos según tus tiempos",
    icon: (
      <svg className="w-5 h-5 stroke-white" fill="none" strokeWidth={1.5} viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <main className="bg-white text-slate-800">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-12 h-16 bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center">
            <Image src="/logo.png" alt="Kineduca logo" width={22} height={22} />
          </div>
          <span className="text-lg font-semibold text-blue-500" style={fraunces}>
            Kineduca SpA
          </span>
        </div>

        <div className="hidden md:flex gap-8">
          <a href="#servicios" className="text-sm text-slate-500 hover:text-blue-500 transition-colors">Servicios</a>
          <a href="#pacientes" className="text-sm text-slate-500 hover:text-blue-500 transition-colors">Pacientes</a>
          <a href="#nosotros" className="text-sm text-slate-500 hover:text-blue-500 transition-colors">Nosotros</a>
          <a href="#contacto" className="text-sm text-slate-500 hover:text-blue-500 transition-colors">Contacto</a>
        </div>

        <a
          href="https://wa.me/56995192872"
          target="_blank"
          className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-5 py-2 rounded-lg transition-colors"
        >
          Agendar atención
        </a>
      </nav>

      {/* HERO */}
      <section
        className="text-white px-12 py-24 grid md:grid-cols-2 gap-16 items-center relative overflow-hidden"
        style={{ background: "linear-gradient(140deg, #1d4ed8 0%, #3b82f6 50%, #60a5fa 100%)" }}
      >
        <div className="absolute -right-16 -top-16 w-96 h-96 rounded-full bg-white pointer-events-none" style={{ opacity: 0.05 }} />
        <div className="absolute right-32 -bottom-24 w-64 h-64 rounded-full bg-white pointer-events-none" style={{ opacity: 0.04 }} />

        <div className="relative z-10">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-wide mb-6"
            style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.25)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-300 inline-block" />
            Atención en tu hogar · Santiago
          </div>

          <h1
            className="text-5xl font-semibold leading-tight mb-5"
            style={{ ...fraunces, letterSpacing: "-0.02em" }}
          >
            Kinesiología{" "}
            <em className="not-italic font-light" style={{ color: "rgba(255,255,255,0.8)" }}>a domicilio,</em>
            <br />cuando más la necesitas
          </h1>

          <p className="text-base leading-relaxed mb-9 max-w-md" style={{ color: "rgba(255,255,255,0.82)" }}>
            Terapia física y rehabilitación personalizada para adultos y adultos mayores.
            Profesionales que llegan a tu hogar.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://wa.me/56995192872"
              target="_blank"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl text-sm font-medium transition-all hover:-translate-y-px"
            >
              <FaWhatsapp size={18} />
              Contactar por WhatsApp
            </a>
            <a
              href="#servicios"
              className="flex items-center gap-2 text-white px-6 py-3 rounded-xl text-sm transition-colors"
              style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.28)" }}
            >
              Ver servicios →
            </a>
          </div>
        </div>

        {/* Cards flotantes */}
        <div className="relative z-10 flex flex-col gap-4">
          {heroCards.map((card) => (
            <div
              key={card.label}
              className="rounded-2xl p-5 flex items-center gap-4"
              style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)" }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(255,255,255,0.18)" }}
              >
                {card.icon}
              </div>
              <div>
                <p className="text-sm font-medium text-white">{card.label}</p>
                <span className="text-xs" style={{ color: "rgba(255,255,255,0.65)" }}>{card.sub}</span>
              </div>
            </div>
          ))}

          <div className="flex gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex-1 rounded-xl p-4 text-center"
                style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.18)" }}
              >
                <strong className="block text-3xl font-semibold text-white" style={fraunces}>
                  {s.value}
                </strong>
                <span className="text-[11px] tracking-wide" style={{ color: "rgba(255,255,255,0.6)" }}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="py-20 px-12">
        <div className="mb-11">
          <p className="text-[11px] tracking-widest uppercase text-blue-500 font-medium mb-2">Lo que hacemos</p>
          <h2 className="text-4xl font-semibold mb-3" style={{ ...fraunces, letterSpacing: "-0.02em" }}>
            Nuestros servicios
          </h2>
          <p className="text-slate-500 max-w-lg leading-relaxed">
            Tratamientos basados en evidencia adaptados a cada paciente, en la comodidad de su hogar.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {servicios.map((s) => (
            <div
              key={s.title}
              className="bg-white border border-slate-200 rounded-2xl p-7 hover:shadow-lg hover:border-blue-200 hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-5">
                {s.icon}
              </div>
              <h3 className="font-medium text-base text-slate-800 mb-2 leading-snug">{s.title}</h3>
              <p className="text-[13px] text-slate-500 leading-relaxed">{s.desc}</p>
              <span className="inline-block mt-4 text-[11px] font-medium text-blue-500 bg-blue-50 border border-blue-100 px-3 py-0.5 rounded-full">
                {s.tag}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* PACIENTES + NOSOTROS */}
      <section className="bg-slate-50 px-12 py-20 grid md:grid-cols-2 gap-16 items-start" id="pacientes">
        <div>
          <p className="text-[11px] tracking-widest uppercase text-blue-500 font-medium mb-2">A quién atendemos</p>
          <h2 className="text-4xl font-semibold mb-4" style={{ ...fraunces, letterSpacing: "-0.02em" }}>
            Atención especializada
          </h2>
          <p className="text-slate-500 leading-relaxed">
            Nuestros servicios están orientados a adultos y personas de la tercera edad.
            Cada tratamiento se adapta a las necesidades específicas del paciente.
          </p>
          <div className="mt-6 flex flex-col gap-4">
            {pacientes.map((p) => (
              <div key={p.title} className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0 mt-1.5" />
                <div>
                  <strong className="block text-sm font-medium text-slate-800">{p.title}</strong>
                  <p className="text-sm text-slate-500 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div id="nosotros">
          <p className="text-[11px] tracking-widest uppercase text-blue-500 font-medium mb-2">Quiénes somos</p>
          <h2 className="text-4xl font-semibold mb-4" style={{ ...fraunces, letterSpacing: "-0.02em" }}>
            Sobre Kineduca
          </h2>
          <p className="text-slate-500 leading-relaxed">
            Kineduca SpA es un servicio de terapia física y rehabilitación enfocado en brindar
            atención cercana, profesional y personalizada. Nuestro objetivo es mejorar la calidad
            de vida mediante tratamientos basados en evidencia y educación en salud.
          </p>
          <div className="mt-6 flex flex-col gap-4">
            {nosotros.map((p) => (
              <div key={p.title} className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0 mt-1.5" />
                <div>
                  <strong className="block text-sm font-medium text-slate-800">{p.title}</strong>
                  <p className="text-sm text-slate-500 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section
        id="contacto"
        className="text-white px-12 py-20"
        style={{ background: "linear-gradient(140deg, #1d4ed8 0%, #3b82f6 70%, #60a5fa 100%)" }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[11px] tracking-widest uppercase font-medium mb-3" style={{ color: "rgba(255,255,255,0.5)" }}>
            Contáctanos
          </p>
          <h2 className="text-4xl font-semibold mb-4" style={{ ...fraunces, letterSpacing: "-0.02em" }}>
            Agenda tu atención
          </h2>
          <p className="mb-10" style={{ color: "rgba(255,255,255,0.75)" }}>
            Contáctanos para coordinar una sesión o resolver cualquier consulta. Respondemos rápido.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-8 text-left">
            {[
              { label: "WhatsApp", value: "+56 9 9519 2872" },
              { label: "Correo", value: "contacto@kineduca.cl" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl p-5"
                style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)" }}
              >
                <p className="text-[11px] uppercase tracking-wider mb-1" style={{ color: "rgba(255,255,255,0.55)" }}>
                  {item.label}
                </p>
                <p className="text-white font-medium">{item.value}</p>
              </div>
            ))}
          </div>

          <a
            href="https://wa.me/56995192872"
            target="_blank"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-7 py-3.5 rounded-xl text-sm font-medium transition-all hover:-translate-y-px"
          >
            <FaWhatsapp size={18} />
            Escribir por WhatsApp
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="px-12 py-5 flex justify-between items-center text-xs"
        style={{ background: "#1e3a8a", borderTop: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.35)" }}
      >
        <span>© {new Date().getFullYear()} Kineduca SpA · Todos los derechos reservados</span>
        <span>contacto@kineduca.cl</span>
      </footer>

    </main>
  );
}
