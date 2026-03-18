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
            Kineduca
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
            Terapia Física y Rehabilitación a Domicilio
          </h1>

          <p className="text-xl mb-8 max-w-xl">
            Atención personalizada para niños, adultos y tercera edad.
            Tratamientos profesionales enfocados en mejorar tu calidad de vida.
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
            Servicios de Rehabilitación
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
                Dolor Crónico
              </h3>
              <p>
                Tratamiento especializado para aliviar dolor persistente
                y mejorar la funcionalidad diaria.
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
                Estimulación Cognitiva
              </h3>
              <p>
                Actividades terapéuticas para fortalecer memoria,
                atención y habilidades cognitivas.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* PACIENTES */}
      <section id="pacientes" className="bg-gray-100 py-24 px-6">

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-3xl font-bold mb-8">
            Atención para todas las edades
          </h2>

          <p className="text-lg">
            Nuestros servicios están orientados a niños, adultos y personas
            de la tercera edad. Cada tratamiento se adapta a las necesidades
            específicas de cada paciente.
          </p>

        </div>

      </section>

      {/* NOSOTROS */}
      <section id="nosotros" className="py-24 px-6">

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-3xl font-bold mb-8">
            Sobre Kineduca
          </h2>

          <p className="text-lg leading-relaxed">
            Kineduca es un servicio de terapia física y rehabilitación enfocado
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
            kineduca@gmail.com
          </p>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 text-gray-500 text-sm">
        © {new Date().getFullYear()} Kineduca. Todos los derechos reservados.
      </footer>

    </main>
  )
}