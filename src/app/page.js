import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white text-gray-800">

      {/* HERO */}
      <section className="bg-blue-600 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Kineduca
          </h1>
          <p className="text-xl mb-6">
            Terapia Física y Rehabilitación con atención personalizada a domicilio.
          </p>

          <a
            href="https://wa.me/56995192872"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold"
          >
            Contactar por WhatsApp
          </a>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Servicios
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="p-6 border rounded-xl">
              <h3 className="font-semibold text-xl mb-2">
                Kinesiología domiciliaria
              </h3>
              <p>
                Atención en la comodidad de tu hogar con evaluación y tratamiento personalizado.
              </p>
            </div>

            <div className="p-6 border rounded-xl">
              <h3 className="font-semibold text-xl mb-2">
                Terapia respiratoria
              </h3>
              <p>
                Tratamiento para mejorar la función pulmonar y recuperación respiratoria.
              </p>
            </div>

            <div className="p-6 border rounded-xl">
              <h3 className="font-semibold text-xl mb-2">
                Rehabilitación musculoesquelética
              </h3>
              <p>
                Tratamiento de lesiones, dolor crónico y recuperación funcional.
              </p>
            </div>

            <div className="p-6 border rounded-xl">
              <h3 className="font-semibold text-xl mb-2">
                Estimulación cognitiva
              </h3>
              <p>
                Actividades terapéuticas orientadas a mejorar memoria, atención y funciones cognitivas.
              </p>
            </div>

            <div className="p-6 border rounded-xl">
              <h3 className="font-semibold text-xl mb-2">
                Rehabilitación integral
              </h3>
              <p>
                Programas personalizados de rehabilitación física y funcional.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* PACIENTES */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-3xl font-bold mb-6">
            Atención para todas las edades
          </h2>

          <p className="text-lg">
            Brindamos atención especializada para niños, adultos y personas de la tercera edad,
            adaptando cada tratamiento a las necesidades de cada paciente.
          </p>

        </div>
      </section>

      {/* SOBRE NOSOTROS */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-3xl font-bold mb-6">
            Sobre Kineduca
          </h2>

          <p className="text-lg">
            Kineduca es un servicio de terapia física y rehabilitación enfocado en entregar
            atención personalizada, educación en salud y programas de recuperación adaptados
            a cada persona. Nuestro objetivo es mejorar la calidad de vida de los pacientes
            mediante tratamientos profesionales y cercanos.
          </p>

        </div>
      </section>

      {/* CONTACTO */}
      <section className="bg-blue-600 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-3xl font-bold mb-6">
            Contacto
          </h2>

          <p className="text-lg mb-4">
            Agenda tu atención o solicita más información.
          </p>

          <p className="text-xl font-semibold">
            +56 9 9519 2872
          </p>

          <p className="mt-2">
            kineduca@gmail.com
          </p>

        </div>
      </section>

    </main>
  )
}