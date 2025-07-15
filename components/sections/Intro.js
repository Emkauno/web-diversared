"use client"
import styled from '@emotion/styled';
import { motion } from 'framer-motion'

const Section = styled.section`
  max-width: 70%;
  margin: 0 auto;
  padding: 6rem 1.5rem;
  font-size: clamp(1.125rem, 2vw, 1.375rem);
  font-weight: 300;
  line-height: 1.6;
  color: #222;
  text-align: center;
  letter-spacing: 0.02em;
  
  span {
    font-weight: bold;
}
      @media (max-width: 480px) {
    max-width: unset;
    text-align: left;
  padding: 3rem 1.5rem;

  }
`;

const Title = styled(motion.h2)`
  font-size: 4rem;
  text-transform: uppercase;
  text-align: center;
    max-width: 90%;
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
export default function Intro() {
  return (
    <Section>
        <Title initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: 'easeOut' }}
				viewport={{ once: true }}>¿Quiénes Somos?</Title>
      <span>DiversaRed nace del encuentro entre profesionales con una visión común:</span><br/> acompañar con dignidad a quienes enfrentan barreras psicosociales. Llevamos más de 20 años fortaleciendo redes humanas con foco en la autonomía y la participación.
    </Section>
  );
}