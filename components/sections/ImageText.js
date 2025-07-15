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

export default function ImageText() {
  return (
    <Section>
      <Title initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: 'easeOut' }}
				viewport={{ once: true }}>Nuestra comunidad</Title>
    <SectionImage>
      <Img src="/grouphands.jpg" alt="Nuestra comunidad" />
      <Text initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: 'easeOut' }}
				viewport={{ once: true }}>
        Trabajamos con personas en situación de discapacidad psicosocial, cognitiva y del desarrollo, sus familias, instituciones educativas y comunidades locales.
      </Text>
    </SectionImage>
    </Section>
  );
}