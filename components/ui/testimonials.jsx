import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function Testimonials() {
  const testimonials = [
    {
      quote:
        '"Excelente trabajo en el acompañamiento a los pacientes.El equipo de profesionales muestra una comprensión profunda y empatía hacia las necesidades de los pacientes, brindando un apoyo invaluable en su camino hacia la recuperación. Su compromiso con la calidad y la calidez en el trato hace que los pacientes se sientan seguros y apoyados."',
      name: "J.R.V.",
      src: "/person1.avif",
    },
    {
      quote:
        '"Soy usuaria de Diversared, a través de mis padres, quienes reciben la visita de su terapeuta cada semana. Esta instancia de acompañamiento es “su momento” de bienestar, donde se divierten, juegan, recuerdan, bailan y lo pasan regio. Semanalmente recibimos un informe y reporte de las actividades realizadas con mis padres."',
      name: "M.A.C.",
      src: "/person3.jpg",
    },
    {
      quote:
        '"Durante los últimos meses de vida de mi abuela, DiversaRed fue un apoyo fundamental. El equipo la acompañó con cariño, paciencia y una sensibilidad que hizo una gran diferencia en su bienestar y en el de nuestra familia. En cada visita, lograban hacerla sonreír, mantenerla activa y sentirse valorada. Nos entregaban reportes claros y afectuosos, y siempre sentimos que había un genuino interés por su historia y su forma de ser. Agradezco profundamente la humanidad con la que trabajaron; no solo cuidaron a mi abuela, también nos cuidaron a nosotros."',
      name: "E.S.S.",
      src: "/person2.jpg",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
