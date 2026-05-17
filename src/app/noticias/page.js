// src/app/noticias/page.js
import Link from "next/link";
import { articulos } from "@/content/noticias/index";

const fraunces = { fontFamily: "var(--font-fraunces), serif" };

const categoriasColores = {
  "Estudio científico": { bg: "#eff6ff", color: "#3b82f6", border: "#bfdbfe" },
  "Evidencia clínica": { bg: "#f0fdf4", color: "#16a34a", border: "#bbf7d0" },
  "Consejos": { bg: "#fefce8", color: "#ca8a04", border: "#fde68a" },
  "Testimonio": { bg: "#fdf4ff", color: "#9333ea", border: "#e9d5ff" },
};

function formatFecha(fechaStr) {
  const fecha = new Date(fechaStr);
  return fecha.toLocaleDateString("es-CL", { year: "numeric", month: "long", day: "numeric" });
}

export const metadata = {
  title: "Noticias | Kineduca SpA",
  description: "Artículos, estudios y recursos sobre kinesiología, gerontología y cuidado del adulto mayor.",
};

export default function NoticiasPage() {
  return (
    <main className="bg-white min-h-screen">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-12 h-16 bg-white border-b border-slate-200 sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
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

      {/* HERO */}
      <section
        className="px-12 py-16 text-white relative overflow-hidden"
        style={{ background: "linear-gradient(140deg, #1d4ed8 0%, #3b82f6 50%, #60a5fa 100%)" }}
      >
        <div className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-white pointer-events-none" style={{ opacity: 0.05 }} />
        <div className="max-w-2xl relative z-10">
          <p className="text-[11px] tracking-widest uppercase font-medium mb-3" style={{ color: "rgba(255,255,255,0.6)" }}>
            Kineduca · Publicaciones
          </p>
          <h1 className="text-4xl font-semibold mb-4" style={{ ...fraunces, letterSpacing: "-0.02em" }}>
            Noticias y estudios
          </h1>
          <p style={{ color: "rgba(255,255,255,0.8)" }} className="text-base leading-relaxed max-w-lg">
            Resúmenes de investigaciones recientes, consejos basados en evidencia y recursos
            sobre gerontología y cuidado del adulto mayor.
          </p>
        </div>
      </section>

      {/* LISTADO */}
      <section className="px-12 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col gap-6">
            {articulos.map((art) => {
              const colores = categoriasColores[art.categoria] || categoriasColores["Estudio científico"];
              return (
                <Link
                  key={art.slug}
                  href={`/noticias/${art.slug}`}
                  className="group block bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-lg hover:border-blue-200 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="text-[11px] font-medium px-3 py-0.5 rounded-full border"
                      style={{ background: colores.bg, color: colores.color, borderColor: colores.border }}
                    >
                      {art.categoria}
                    </span>
                    <span className="text-[12px] text-slate-400">{formatFecha(art.fecha)}</span>
                    <span className="text-[12px] text-slate-400">· {art.tiempo_lectura} lectura</span>
                  </div>

                  <h2
                    className="text-xl font-semibold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors leading-snug"
                    style={{ ...fraunces, letterSpacing: "-0.01em" }}
                  >
                    {art.titulo}
                  </h2>

                  <p className="text-sm text-slate-500 leading-relaxed mb-4">
                    {art.resumen}
                  </p>

                  <span className="text-sm text-blue-500 font-medium group-hover:underline">
                    Leer artículo →
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="px-12 py-5 flex justify-between items-center text-xs mt-8"
        style={{ background: "#1e3a8a", borderTop: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.35)" }}
      >
        <span>© {new Date().getFullYear()} Kineduca SpA · Todos los derechos reservados</span>
        <span>contacto@kineduca.cl</span>
      </footer>

    </main>
  );
}
