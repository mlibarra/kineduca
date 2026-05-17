// src/app/noticias/[slug]/page.js
import Link from "next/link";
import { notFound } from "next/navigation";
import { articulos } from "../../../content/noticias/index";

const fraunces = { fontFamily: "var(--font-fraunces), serif" };

const categoriasColores = {
  "Estudio científico": { bg: "#eff6ff", color: "#3b82f6", border: "#bfdbfe" },
  "Evidencia clínica":  { bg: "#f0fdf4", color: "#16a34a", border: "#bbf7d0" },
  "Consejos":           { bg: "#fefce8", color: "#ca8a04", border: "#fde68a" },
  "Testimonio":         { bg: "#fdf4ff", color: "#9333ea", border: "#e9d5ff" },
};

function formatFecha(fechaStr) {
  return new Date(fechaStr).toLocaleDateString("es-CL", {
    year: "numeric", month: "long", day: "numeric",
  });
}

// Renderiza cada sección según su tipo
function Seccion({ seccion }) {
  switch (seccion.tipo) {
    case "h2":
      return (
        <h2
          className="text-2xl font-semibold text-slate-800 mt-10 mb-4"
          style={{ ...fraunces, letterSpacing: "-0.01em" }}
        >
          {seccion.texto}
        </h2>
      );
    case "h3":
      return (
        <h3
          className="text-xl font-semibold text-slate-700 mt-8 mb-3"
          style={fraunces}
        >
          {seccion.texto}
        </h3>
      );
    case "p":
      return (
        <p className="text-slate-600 leading-relaxed mb-4 text-base">
          {seccion.texto}
        </p>
      );
    case "callout":
      return (
        <div className="bg-blue-50 border-l-4 border-blue-400 rounded-r-xl px-6 py-4 my-6">
          <p className="text-blue-800 text-sm leading-relaxed">{seccion.texto}</p>
        </div>
      );
    case "lista":
      return (
        <ul className="my-4 flex flex-col gap-2">
          {seccion.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-slate-600 text-sm leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0 mt-2" />
              {item}
            </li>
          ))}
        </ul>
      );
    case "tabla":
      return (
        <div className="overflow-x-auto my-6 rounded-xl border border-slate-200">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                {seccion.cabeceras.map((cab, i) => (
                  <th key={i} className="px-4 py-3 font-medium text-slate-700 text-xs uppercase tracking-wide">
                    {cab}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {seccion.filas.map((fila, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  {fila.map((celda, j) => (
                    <td key={j} className="px-4 py-3 text-slate-600 border-b border-slate-100">
                      {celda}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "referencias":
      return (
        <div className="mt-10 pt-6 border-t border-slate-200">
          <p className="text-xs uppercase tracking-widest text-slate-400 font-medium mb-4">Referencias</p>
          <ol className="flex flex-col gap-2">
            {seccion.items.map((ref, i) => (
              <li key={i} className="text-xs text-slate-500 leading-relaxed flex gap-2">
                <span className="text-slate-300 flex-shrink-0">{i + 1}.</span>
                {ref}
              </li>
            ))}
          </ol>
        </div>
      );
    default:
      return null;
  }
}

export async function generateStaticParams() {
  return articulos.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const art = articulos.find((a) => a.slug === slug);
  if (!art) return {};
  return {
    title: `${art.titulo} | Kineduca SpA`,
    description: art.resumen,
  };
}

export default async function ArticuloPage({ params }) {
  const { slug } = await params;
  const art = articulos.find((a) => a.slug === slug);
  if (!art) notFound();

  const colores = categoriasColores[art.categoria] || categoriasColores["Estudio científico"];

  return (
    <main className="bg-white min-h-screen">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-12 h-16 bg-white border-b border-slate-200 sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center">
            <img src="/logo.png" alt="Kineduca logo" width={22} height={22} />
          </div>
          <span className="text-lg font-semibold text-blue-500" style={fraunces}>
            Kineduca SpA
          </span>
        </Link>

        <div className="hidden md:flex gap-8">
          <Link href="/#servicios" className="text-sm text-slate-500 hover:text-blue-500 transition-colors">Servicios</Link>
          <Link href="/#pacientes" className="text-sm text-slate-500 hover:text-blue-500 transition-colors">Pacientes</Link>
          <Link href="/#nosotros" className="text-sm text-slate-500 hover:text-blue-500 transition-colors">Nosotros</Link>
          <Link href="/noticias" className="text-sm text-blue-500 font-medium">Noticias</Link>
          <Link href="/#contacto" className="text-sm text-slate-500 hover:text-blue-500 transition-colors">Contacto</Link>
        </div>

        <a
          href="https://wa.me/56995192872"
          target="_blank"
          className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-5 py-2 rounded-lg transition-colors"
        >
          Agendar atención
        </a>
      </nav>

      {/* HEADER */}
      <section
        className="px-12 py-16 text-white relative overflow-hidden"
        style={{ background: "linear-gradient(140deg, #1d4ed8 0%, #3b82f6 50%, #60a5fa 100%)" }}
      >
        <div className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-white pointer-events-none" style={{ opacity: 0.05 }} />
        <div className="max-w-3xl relative z-10">
          <Link
            href="/noticias"
            className="inline-flex items-center gap-2 text-xs mb-6 transition-colors"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            ← Volver a Noticias
          </Link>

          <div className="flex items-center gap-3 mb-5">
            <span
              className="text-[11px] font-medium px-3 py-0.5 rounded-full border"
              style={{ background: "rgba(255,255,255,0.15)", color: "white", borderColor: "rgba(255,255,255,0.3)" }}
            >
              {art.categoria}
            </span>
            <span className="text-[12px]" style={{ color: "rgba(255,255,255,0.6)" }}>
              {formatFecha(art.fecha)}
            </span>
            <span className="text-[12px]" style={{ color: "rgba(255,255,255,0.6)" }}>
              · {art.tiempo_lectura} lectura
            </span>
          </div>

          <h1
            className="text-4xl font-semibold leading-tight mb-5"
            style={{ ...fraunces, letterSpacing: "-0.02em" }}
          >
            {art.titulo}
          </h1>

          <p className="text-base leading-relaxed max-w-2xl" style={{ color: "rgba(255,255,255,0.82)" }}>
            {art.resumen}
          </p>
        </div>
      </section>

      {/* CONTENIDO */}
      <section className="px-12 py-16">
        <div className="max-w-3xl mx-auto">
          <article>
            {art.secciones.map((seccion, i) => (
              <Seccion key={i} seccion={seccion} />
            ))}
          </article>

          {/* CTA */}
          <div
            className="mt-16 rounded-2xl p-8 text-center text-white"
            style={{ background: "linear-gradient(140deg, #1d4ed8 0%, #3b82f6 70%, #60a5fa 100%)" }}
          >
            <h3 className="text-xl font-semibold mb-2" style={fraunces}>
              ¿Tienes dudas sobre este tema?
            </h3>
            <p className="mb-6 text-sm" style={{ color: "rgba(255,255,255,0.8)" }}>
              Nuestros profesionales pueden orientarte y diseñar un plan personalizado.
            </p>
            <a
              href="https://wa.me/56995192872"
              target="_blank"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl text-sm font-medium transition-all hover:-translate-y-px"
            >
              Consultar por WhatsApp
            </a>
          </div>

          <div className="mt-10 pt-8 border-t border-slate-200">
            <Link href="/noticias" className="text-sm text-blue-500 hover:underline">
              ← Ver todas las publicaciones
            </Link>
          </div>
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
