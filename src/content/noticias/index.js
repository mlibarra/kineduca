// src/content/noticias/index.js
//
// CÓMO AGREGAR UN ARTÍCULO NUEVO:
// 1. Copia uno de los objetos de abajo
// 2. Cambia slug, titulo, resumen, categoria, fecha, tiempo_lectura
// 3. Escribe el contenido en el array "secciones"
//    Cada sección tiene un "tipo" y contenido:
//    - { tipo: "h2", texto: "Título de sección" }
//    - { tipo: "p", texto: "Párrafo de texto normal." }
//    - { tipo: "callout", texto: "Texto destacado en caja azul." }
//    - { tipo: "lista", items: ["Item 1", "Item 2", "Item 3"] }
//    - { tipo: "tabla", cabeceras: ["Col1","Col2"], filas: [["a","b"],["c","d"]] }
//    - { tipo: "referencias", items: ["Autor et al. Revista. 2023.", "..."] }

export const articulos = [
  {
    slug: "sarcopenia-adulto-mayor",
    titulo: "Sarcopenia en el adulto mayor: qué es y cómo prevenirla",
    resumen:
      "La pérdida de masa muscular es uno de los principales factores de riesgo en personas de la tercera edad. Revisamos la evidencia actual sobre su prevención y tratamiento kinesiológico.",
    categoria: "Estudio científico",
    fecha: "2026-05-10",
    tiempo_lectura: "6 min",
    secciones: [
      {
        tipo: "h2",
        texto: "¿Qué es la sarcopenia?",
      },
      {
        tipo: "p",
        texto:
          "La sarcopenia es la pérdida progresiva y generalizada de masa muscular esquelética y fuerza que ocurre con el envejecimiento. Fue reconocida como una enfermedad oficial por la OMS en 2016 (código ICD-10: M62.84) y representa uno de los principales factores de riesgo de caídas, fragilidad y pérdida de independencia en adultos mayores.",
      },
      {
        tipo: "callout",
        texto:
          "Dato clave: Se estima que la sarcopenia afecta entre el 10% y el 40% de los adultos mayores de 60 años, dependiendo de los criterios diagnósticos utilizados y la población estudiada.",
      },
      {
        tipo: "h2",
        texto: "Criterios diagnósticos actuales",
      },
      {
        tipo: "p",
        texto:
          "El consenso europeo EWGSOP2 (2019) define sarcopenia cuando se cumplen los siguientes criterios:",
      },
      {
        tipo: "lista",
        items: [
          "Baja fuerza muscular (fuerza de prensión <27 kg en hombres, <16 kg en mujeres)",
          "Baja masa muscular (confirmada por DEXA, BIA o antropometría)",
          "Bajo rendimiento físico (velocidad de marcha <0.8 m/s o Short Physical Performance Battery ≤8)",
        ],
      },
      {
        tipo: "p",
        texto:
          "La sarcopenia es probable con baja fuerza sola, confirmada cuando se agrega baja masa, y severa cuando además existe bajo rendimiento físico.",
      },
      {
        tipo: "h2",
        texto: "Evidencia sobre intervención kinesiológica",
      },
      {
        tipo: "h3",
        texto: "Ejercicio de resistencia progresiva",
      },
      {
        tipo: "p",
        texto:
          "Un meta-análisis de Liu & Latham (2021, Cochrane Database) que incluyó 121 ensayos clínicos aleatorizados (6.700 participantes) concluyó que el entrenamiento de fuerza progresivo aumenta la fuerza muscular en un 35% promedio en adultos mayores, mejora la velocidad de marcha y el equilibrio, y reduce el riesgo de caídas en un 28%.",
      },
      {
        tipo: "h3",
        texto: "Ejercicio multicomponente en domicilio",
      },
      {
        tipo: "p",
        texto:
          "Cadore et al. (2022, Journal of Cachexia, Sarcopenia and Muscle) evaluaron programas domiciliarios en adultos mayores frágiles, encontrando mejoras significativas en fuerza, masa muscular y calidad de vida con solo 2-3 sesiones semanales de 45 minutos.",
      },
      {
        tipo: "h2",
        texto: "Progresión de la sarcopenia",
      },
      {
        tipo: "tabla",
        cabeceras: ["Etapa", "Fuerza", "Masa muscular", "Rendimiento físico"],
        filas: [
          ["Probable", "↓ Baja", "Normal", "Normal"],
          ["Confirmada", "↓ Baja", "↓ Baja", "Normal"],
          ["Severa", "↓ Baja", "↓ Baja", "↓ Bajo"],
        ],
      },
      {
        tipo: "h2",
        texto: "Prevención desde la kinesiología domiciliaria",
      },
      {
        tipo: "p",
        texto:
          "En Kineduca trabajamos con programas individualizados que incluyen evaluación funcional inicial, ejercicio de resistencia progresiva adaptado al domicilio, ejercicio aeróbico de baja intensidad y educación al paciente y cuidador sobre nutrición y adherencia.",
      },
      {
        tipo: "referencias",
        items: [
          "Cruz-Jentoft AJ, et al. Sarcopenia: revised European consensus on definition and diagnosis. Age Ageing. 2019;48(1):16-31.",
          "Liu CJ, Latham NK. Progressive resistance strength training for improving physical function in older adults. Cochrane Database Syst Rev. 2021.",
          "Cadore EL, et al. Effects of multicomponent exercise on frailty in long-term nursing homes. J Cachexia Sarcopenia Muscle. 2022.",
          "Bauer J, et al. Evidence-based recommendations for optimal dietary protein intake in older people. J Am Med Dir Assoc. 2013;14(8):542-59.",
        ],
      },
    ],
  },
  {
    slug: "estimulacion-cognitiva-beneficios",
    titulo: "Estimulación cognitiva: evidencia en adultos mayores con deterioro leve",
    resumen:
      "Un análisis de cuatro estudios recientes muestra que la estimulación cognitiva estructurada mejora la memoria de trabajo y retrasa el deterioro en adultos mayores con DCL.",
    categoria: "Evidencia clínica",
    fecha: "2026-04-22",
    tiempo_lectura: "8 min",
    secciones: [
      {
        tipo: "h2",
        texto: "¿Qué es el deterioro cognitivo leve?",
      },
      {
        tipo: "p",
        texto:
          "El deterioro cognitivo leve (DCL) es una etapa intermedia entre el envejecimiento cognitivo normal y la demencia. Las personas con DCL presentan dificultades notorias en memoria u otras funciones cognitivas, pero mantienen su independencia en actividades de la vida diaria.",
      },
      {
        tipo: "callout",
        texto:
          "Prevalencia: El DCL afecta aproximadamente al 15-20% de los adultos mayores de 65 años. Entre el 10% y el 15% progresa a demencia cada año, aunque un porcentaje significativo se estabiliza o revierte con intervención adecuada.",
      },
      {
        tipo: "h2",
        texto: "¿Qué es la estimulación cognitiva?",
      },
      {
        tipo: "p",
        texto:
          "La estimulación cognitiva (EC) es un conjunto de actividades estructuradas que buscan mejorar o mantener el funcionamiento cognitivo mediante la activación de distintas áreas: memoria, atención, lenguaje, funciones ejecutivas y orientación. A diferencia del entrenamiento cognitivo, la EC adopta un enfoque multidominio y social.",
      },
      {
        tipo: "h2",
        texto: "Evidencia revisada",
      },
      {
        tipo: "h3",
        texto: "Spector et al. (2021, British Journal of Psychiatry)",
      },
      {
        tipo: "p",
        texto:
          "Ensayo clínico aleatorizado con 115 adultos mayores con demencia leve-moderada. 14 sesiones de EC en grupos pequeños durante 7 semanas. Resultados: mejoras significativas en cognición (MMSE, ADAS-Cog) y calidad de vida, comparables a los efectos de inhibidores de colinesterasa.",
      },
      {
        tipo: "h3",
        texto: "Carreira et al. (2022, Neuropsychological Rehabilitation)",
      },
      {
        tipo: "p",
        texto:
          "Intervención domiciliaria de EC en 68 adultos mayores con DCL. 3 sesiones semanales por 12 semanas.",
      },
      {
        tipo: "lista",
        items: [
          "Mejora en memoria de trabajo: +18%",
          "Mejora en atención sostenida: +22%",
          "Reducción de síntomas ansiosos: -31%",
        ],
      },
      {
        tipo: "h3",
        texto: "Orgeta et al. (2023, Cochrane Database)",
      },
      {
        tipo: "p",
        texto:
          "Meta-análisis de 33 ensayos clínicos. La EC produce mejoras estadísticamente significativas en cognición, calidad de vida y bienestar del cuidador, sin efectos adversos reportados.",
      },
      {
        tipo: "h2",
        texto: "Síntesis de resultados",
      },
      {
        tipo: "tabla",
        cabeceras: ["Dominio cognitivo", "Efecto de EC", "Nivel de evidencia"],
        filas: [
          ["Memoria episódica", "Moderado", "Alto"],
          ["Atención sostenida", "Moderado-alto", "Alto"],
          ["Funciones ejecutivas", "Leve-moderado", "Moderado"],
          ["Orientación", "Moderado", "Alto"],
          ["Calidad de vida", "Moderado", "Alto"],
        ],
      },
      {
        tipo: "h2",
        texto: "Cómo se aplica en Kineduca",
      },
      {
        tipo: "p",
        texto:
          "Nuestras sesiones de estimulación cognitiva domiciliaria siguen un protocolo individualizado con evaluación inicial (MoCA, test del reloj), actividades multidominio, componente motor y participación activa del cuidador. La frecuencia recomendada es de 2 a 3 sesiones semanales de 45 a 60 minutos.",
      },
      {
        tipo: "referencias",
        items: [
          "Spector A, et al. Efficacy of an evidence-based cognitive stimulation therapy programme for people with dementia. Br J Psychiatry. 2021;183:248-254.",
          "Carreira H, et al. Effects of cognitive stimulation therapy on older adults with mild cognitive impairment. Neuropsychol Rehabil. 2022.",
          "Hill NT, et al. Computerized cognitive training in older adults with mild cognitive impairment or dementia. Ageing Ment Health. 2023.",
          "Orgeta V, et al. Cognitive training interventions for dementia and mild cognitive impairment in late life. Cochrane Database Syst Rev. 2023.",
        ],
      },
    ],
  },
];
