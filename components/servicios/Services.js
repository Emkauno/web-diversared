"use client"
import styled from '@emotion/styled';
import { motion } from 'framer-motion'

const Section = styled.section`
  display: flex;
  gap: 3rem;
  align-items: center;
  padding: 4rem 2rem;
  max-width: 1100px;
  margin: 0 auto;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;
const SectionImage = styled.section`
  display: flex;
  gap: 4rem;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Img = styled.img`
  flex: 1;
  border-radius: 1.5rem;
  box-shadow: rgba(0, 0, 0, 0.15) 0 10px 30px;
  object-fit: cover;
  width: 100%;
  max-height: 400px;
`;

const Text = styled(motion.div)`
  flex: 1;
  font-size: clamp(1.125rem, 1.5vw, 1.2rem);
  line-height: 1.6;
  color: #333;
  font-weight: 300;
`;

const Title = styled(motion.h2)`
  font-size: 3rem;
  text-align: center;
  max-width: 90%;
  margin: 0;
  text-transform: uppercase;
  span.green {
    color: var(--color-green);
  }
  span.lightblue {
    color: var(--color-lightblue);
  }
  @media (max-width: 1024px) {
    font-size: 3.5rem;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
    max-width: unset;

  }

  @media (max-width: 480px) {
    font-size: 2rem;
    text-align: left;
  }
`;

export default function Services() {
  return (
    <>
    <Section>
      <Title initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}>¿No sabes por dónde empezar?</Title>
    <SectionImage>
      <Img src="/apoyo.jpg" alt="Evaluación integral" />
      <Text initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}>
        Te ayudamos a identificar recursos, resolver dudas y conectarte con apoyos adecuados.<br/> Incluye:
        <ul>
          <li>Evaluación integral</li>
          <li>Plan de acompañamiento</li>
          <li>Charlas informativas</li>
        </ul>
      </Text>
    </SectionImage>
    </Section>
    <Section>
      <Title initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}>Presencia activa para una vida <span className="lightblue">autónoma</span></Title>
    <SectionImage>
      <Text initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}>
        Nuestros gestores acompañan de forma continua a personas y familias en contextos cotidianos.<br/> Tipos de apoyo:
        <ul>
          <li>Vida diaria</li>
          <li>Educación</li>
          <li>Participación social</li>
        </ul>
      </Text>
      <Img src="/apoyo.jpg" alt="Apoyo cotidiano" />
    </SectionImage>
    </Section>
  <Section>
      <Title initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}>Capacitación</Title>
    <SectionImage>
      <Img src="/orienta.png" alt="Capacitación" />
      <Text initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}>
        Capacitamos a instituciones, comunidades y familias en herramientas de bienestar mental y trato digno.
        <ul>
          <li>Talleres escolares</li>
          <li>Formación de gestores</li>
          <li>Cursos para instituciones</li>
        </ul>
      </Text>
    </SectionImage>
    </Section>
        <Section>
      <Title initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}>Redes locales <span className="green">que cuidan</span></Title>
    <SectionImage>
      <Text initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}>
        Diseñamos e implementamos iniciativas en barrios, escuelas y organizaciones para fomentar el autocuidado, la participación y la salud mental comunitaria.
      </Text>
      <Img src="/community.jpg" alt="Programas comunitarios" />
    </SectionImage>
    </Section>
    </>
  );
}