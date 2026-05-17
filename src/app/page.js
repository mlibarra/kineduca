import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  return (
    <main className="bg-white text-gray-800">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-8 py-4 shadow-md">
        <div className="flex items-center gap-3">
          <Image 
            src="/logo.png" 
            alt="Kineduca logo" 
            width={50} 
            height={50} 
          />
          <span className="text-xl font-bold text-blue-600">
            Kineduca SpA
          </span>
        </div>

        <div className="space-x-6 hidden md:flex">
          <a href="#servicios" className="hover:text-blue-600">Servicios</a>
          <a href="#pacientes" className="hover:text-blue-600">Pacientes</a>
          <a href="#nosotros" className="hover:text-blue-600">Nosotros</a>
          <a href="#contacto" className="hover:text-blue-600">Contacto</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="bg-blue-600 text-white py-28 px-6">
        <div className="max-w-6xl mx-auto">

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Kinesiología Domiciliaria
          </h1>

          <p className="text-xl mb-8 max-w-xl">
            Atención profesional personalizada para adultos y personas de tercera edad.
            Terapia física y rehabilitación enfocada en mejorar tu calidad de vida.
          </p>

          <a
            href="https://wa.me/56995192872"
            target="_blank"
            className="flex items-center justify-center gap-2 bg-green-500 text-white px-7 py-3 rounded-lg font-semibold shadow-md hover:bg-green-600"
          >
            <FaWhatsapp size={20} />
            Contactar por WhatsApp
          </a>

        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold text-center mb-16">
            Servicios
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="p-8 border rounded-xl shadow-sm hover:shadow-md">
              <h3 className="font-semibold text-xl mb-3">
                Kinesiología Domiciliaria
              </h3>
              <p>
                Tratamientos personalizados en la comodidad de tu hogar,
                adaptados a tus necesidades de recuperación.
              </p>
            </div>

            <div className="p-8 border rounded-xl shadow-sm hover:shadow-md">
              <h3 className="font-semibold text-xl mb-3">
                Terapia Respiratoria
              </h3>
              <p>
                Rehabilitación para mejorar la función pulmonar y apoyar
                procesos de recuperación respiratoria.
              </p>
            </div>

            <div className="p-8 border rounded-xl shadow-sm hover:shadow-md">
              <h3 className="font-semibold text-xl mb-3">
                Atención Gerontológica
              </h3>
              <p>
                Tratamiento especializado para el adulto mayor.
              </p>
            </div>

            <div className="p-8 border rounded-xl shadow-sm hover:shadow-md">
              <h3 className="font-semibold text-xl mb-3">
                Rehabilitación Musculoesquelética
              </h3>
              <p>
                Tratamiento de lesiones, recuperación postoperatoria
                y mejora del movimiento.
              </p>
            </div>

            <div className="p-8 border rounded-xl shadow-sm hover:shadow-md">
              <h3 className="font-semibold text-xl mb-3">
                Estimulación Cognitiva para el Adulto Mayor
              </h3>
              <p>
                Actividades terapéuticas para fortalecer memoria,
                atención y habilidades cognitivas en personas de tercera edad.
              </p>
            </div>

            <div className="p-8 border rounded-xl shadow-sm hover:shadow-md">
              <h3 className="font-semibold text-xl mb-3">
                Capacitación
              </h3>
              <p>
                Formación práctica y especializada para fortalecer las habilidades y conocimientos de quienes cuidan personas mayores.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* PACIENTES */}
      <section id="pacientes" className="bg-gray-100 py-24 px-6">

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-3xl font-bold mb-8">
            Atención Especializada
          </h2>

          <p className="text-lg">
            Nuestros servicios están orientados a adultos y personas
            de la tercera edad. Cada tratamiento se adapta a las necesidades
            específicas de cada paciente.
          </p>

        </div>

      </section>

      {/* NOSOTROS */}
      <section id="nosotros" className="py-24 px-6">

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-3xl font-bold mb-8">
            Sobre Kineduca SpA
          </h2>

          <p className="text-lg leading-relaxed">
            Kineduca SpA es un servicio de terapia física y rehabilitación enfocado
            en brindar atención cercana, profesional y personalizada.
            Nuestro objetivo es mejorar la calidad de vida de los pacientes
            mediante tratamientos basados en evidencia y educación en salud.
          </p>

        </div>

      </section>

      {/* CONTACTO */}
      <section id="contacto" className="bg-blue-600 text-white py-24 px-6">

        <div className="max-w-4xl mx-auto text-center">
          <Image 
            src="/logo.png" 
            alt="Kineduca logo" 
            width={80} 
            height={80} 
            className="mx-auto mb-6"
          />

          <h2 className="text-3xl font-bold mb-8">
            Agenda tu atención
          </h2>

          <p className="text-lg mb-6">
            Contáctanos para más información o para coordinar una atención.
          </p>

          <p className="text-xl font-semibold">
            +56 9 9519 2872
          </p>

          <p className="mt-2">
            contacto@kineduca.cl
          </p>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 text-gray-500 text-sm">
        © {new Date().getFullYear()} Kineduca SpA. Todos los derechos reservados.
      </footer>

    </main>
  )
}