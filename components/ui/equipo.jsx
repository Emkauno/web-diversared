import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function EquipoCarousel() {
  const testimonials = [
    {
      quote:
        "Estudió en la Universidad de Playa Ancha, es Diplomada en Rehabilitación Psicosocial Comunitaria de la Universidad Mayor y en Gestión y Dirección de Organizaciones sin Fines de Lucro de la Fundación Simón de Cirene.",
      name: "SOLANGE VALLEJOS FUENTES",
      designation: "Gestión de Servicios de Apoyo y Capacitación, Terapeuta ocupacional",
      src: "/solange.jpg",
    },
    {
      quote:
        "Estudió en la Universidad de Chile, es Diplomada en Rehabilitación Psicosocial Comunitaria de la Universidad Mayor.",
      name: "XIMENA VARGAS ALLENDES",
      designation: "Gestión de Servicios de Apoyo y Capacitación, Terapeuta ocupacional",
      src: "/ximena.jpg",
    },
    {
      quote:
        "Estudió en la Universidad Tecnológica Metropolitana, es Magister en Historia y Políticas Sociales de la Universidad Alberto Hurtado, además de Diplomado en Técnicas de Intervención con Familias de la misma Casa de Estudios y en Gestión de Recursos Humanos del Instituto Profesional Santo Tomás.",
      name: "CLAUDIO SOTO CASTRO",
      designation: "Gestión General, Trabajador social",
      src: "/claudio.jpg",
    },
    {
      quote:
        "Estudió en la Universidad Andrés Bello y actualmente es candidata a Magister en Terapia Ocupacional de la misma Casa de Estudios.",
      name: "MARIANELA CERDA ALARCÓN",
      designation: "Coordinación de Servicios de Apoyo, Terapeuta ocupacional",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
