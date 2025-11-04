import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function EquipoCarousel() {
  const testimonials = [
    {
      quote:
        "Terapeuta Ocupacional de la Universidad de Playa Ancha (UPLA), acompaño terapéuticamente a personas en tiempos de crisis del ciclo vital como también de salud mental, favoreciendo la recuperación del proyecto de vida. Son esenciales para mi trabajo, considerar la biografía y narrativa personal, identificar habilidades y talentos, las relaciones familiares, sociales y contextos de desempeño. Mi experiencia se ha basado en brindar apoyos a adolescentes y adultos con necesidades psicosociales, cognitivas y neurodivergentes",
      name: "SOLANGE VALLEJOS FUENTES",
      designation: "Gestión de Servicios de Apoyo y Capacitación",
      src: "/solange.jpg",
    },
    {
      quote:
        "Terapeuta Ocupacional de la Universidad de Chile (UdeChile) desde hace más de 20 años. Mi experiencia profesional ha sido el acompañamiento de adolescentes, adultos y personas mayores con necesidades psicosociales, cognitivas y neurodivergentes tanto en instituciones sin fines de lucro como en servicios dependientes del Estado.",
      name: "XIMENA VARGAS ALLENDES",
      designation: "Gestión de Servicios de Apoyo y Capacitación",
      src: "/ximena.jpg",
    },
    {
      quote:
        "Trabajador Social de la Universidad Tecnológica Metropolitana (UTEM) y Gerontólogo Psicosocial. Acompaño a familias y personas mayores con necesidades psicosociales, cognitivas y neurodivergentes. Me intereso en contextualizar el proceso histórico en que desarrollan su ciclo vital. Todo mi acompañamiento se basa en el respeto a todo evento de la dignidad del ser humano por sobre toda creencia e interés personal, valorando la importancia de la familia y el vínculo con su entorno.",
      name: "CLAUDIO SOTO CASTRO",
      designation: "Gestión General",
      src: "/claudio.jpeg",
    },
    {
      quote:
        "Soy un profesional de la salud con experiencia en acompañamiento a personas adolescentes y adultas que presentan desafíos psicosociales, fomentando su participación e inclusión en diversos contextos. Me mantengo atento a las demandas de nuevas necesidades como el universo de personas neurodiversas, lo que me ha llevado a profundizar en sus situaciones y teorías que aportan a una vida con mayor participación e inclusión.",
      name: "IGNACIO GRABOWSKI PINTO",
      designation: "Terapeuta Ocupacional",
      src: "/ignacio.jpg",
    },
    {
      quote:
        "Terapeuta Ocupacional titulada en la Universidad Andrés Bello y Terapeuta Ayurvédica, con experiencia en el acompañamiento terapéutico de personas que transitan desafíos en su salud mental y condiciones neurodivergentes, tanto en la adolescencia como en la vida adulta. Mi enfoque se fundamenta en una mirada humanista, integrativa y neuroafirmativa, orientada a generar espacios seguros y empáticos donde cada persona pueda reconectar con su potencial, cultivar prácticas sostenibles de autocuidado y construir una vida con propósito y bienestar. A través de intervenciones personalizadas, promuevo la autonomía, la participación significativa y el desarrollo integral.",
      name: "MARIANELA CERDA ALARCÓN",
      designation: "Coordinación de Servicios de Apoyo, Terapeuta Ocupacional",
      src: "/marianela.jpg",
    },
    {
      quote:
        "Acompaño a adultos y personas mayores que presentan necesidades psicosociales. Promuevo junto con ellos todo tipo de actividades domésticas y de la vida diaria que estimulen y/o mantengan su independencia con el objetivo de mejorar su calidad de vida en la cotidianidad.",
      name: "LEYDY VALLECILLA PEÑA",
      designation: "Gestora de Apoyos para la Autonomía",
      src: "/leidy.jpeg",
    },
    {
      quote:
        "Soy un profesional del área de la salud con experiencia en el acompañamiento de personas adolescentes y adultas que presentan desafíos psicosociales, fomentando su participación e inclusión en diferentes contextos. Mantengo mi experiencia y conocimiento al margen de las necesidades de la población neurodiversa,lo que me ha permitido profundizar en sus situaciones, realizar trabajos en beneficio de la participación e inclusión, y aportar a la calidad de vida de estas personas.",
      name: "SEBASTIÁN CORTEZ VÁSQUEZ",
      designation: "Terapeuta Ocupacional, Gestor de Apoyos para la Autonomía",
      src: "/sebastian.jpeg",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
