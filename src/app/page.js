import Image from "next/image";

export default function Home() {
  return (
    <main style={{fontFamily:"sans-serif", padding:"40px", maxWidth:"900px", margin:"auto"}}>

      <h1>Kineduca</h1>
      <p>Terapia Física y Rehabilitación con atención personalizada.</p>

      <h2>Servicios</h2>
      <ul>
        <li>Terapia física y rehabilitación</li>
        <li>Kinesiología domiciliaria</li>
        <li>Terapia respiratoria</li>
        <li>Rehabilitación musculoesquelética</li>
        <li>Tratamiento de dolor crónico</li>
        <li>Estimulación cognitiva</li>
      </ul>

      <h2>Pacientes</h2>
      <p>
        Atención para adultos, niños y personas de la tercera edad.
        Evaluación y tratamiento personalizado según las necesidades de cada paciente.
      </p>

      <h2>Contacto</h2>
      <p>Celular / WhatsApp: +56 9 9519 2872</p>
      <p>Email: kineduca@gmail.com</p>

    </main>
  )
}