"use client"
import styled from '@emotion/styled';
import { motion } from 'framer-motion'
import Link from 'next/link';

const Section = styled.section`
  max-width: 70%;
  margin: 0 auto;
  padding: 3rem 1.5rem 8rem;
  font-size: clamp(1.125rem, 2vw, 1.375rem);
  font-weight: 300;
  line-height: 1.2;
  color: #222;
  text-align: center;
  letter-spacing: 0.02em;

  span {
    font-weight: bold;
  }

  @media (max-width: 480px) {
    max-width: unset;
    width: 100%;
    font-size: 16px;
    text-align: center;
    padding-bottom: 6rem;
  }
`;

const Title = styled(motion.h2)`
  font-size: 4rem;
  text-transform: uppercase;
  text-align: center;

  @media (max-width: 1024px) {
    font-size: 3.5rem;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    text-align: center;
  }
`;

const StepperContainer = styled.div`
  margin: 4rem 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    align-items: center;
  }
`;

const Step = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  z-index: 1;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    background-color: #ccc;
    z-index: 0;

    /* Ocultar línea en mobile */
    @media (max-width: 768px) {
      display: none;
    }

    /* Mostrar línea en desktop */
    @media (min-width: 769px) {
      top: 24px;
      right: -50%;
      left: auto;
      transform: none;
      width: 100%;
      height: 2px;
      display: block;
    }
  }
`;

const StepCircle = styled.div`
  background-color: #85c4da;
  color: white;
  font-weight: bold;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.5rem;
  z-index: 2;
`;

const StepLabel = styled.div`
  font-size: 1rem;
  text-align: center;
  max-width: 120px;
  @media(max-width: 500px){
    max-width: 180px;
  }
`;

const CtaContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 32px;
`;

const CallToAction = styled(Link)`
  padding: 12px 24px;
  font-weight: 600;
  color: white;
  border-radius: 24px;
  background: var(--color-green);
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  text-transform: uppercase;
  cursor: pointer;
  text-decoration: none;
  transform: scale(1);
  transition: all 0.3s ease;
  font-size: 16px;

  &:hover {
    transform: scale(1.04);
  }

  @media (max-width: 768px) {
    width: 100%;
    font-size: 14px;
    text-align: center;
  }
`;

export default function QuoteServices() {
  return (
    <Section>
      <Title>¿Cómo funciona?</Title>

      <StepperContainer>
        <Step>
          <StepCircle>1</StepCircle>
          <StepLabel>Primera entrevista</StepLabel>
        </Step>
        <Step>
          <StepCircle>2</StepCircle>
          <StepLabel>Levantamiento de las necesidades de apoyo</StepLabel>
        </Step>
        <Step>
          <StepCircle>3</StepCircle>
          <StepLabel>Acuerdo de los servicios a entregar</StepLabel>
        </Step>
        <Step>
          <StepCircle>4</StepCircle>
          <StepLabel>Evaluación integral</StepLabel>
        </Step>
        <Step>
          <StepCircle>5</StepCircle>
          <StepLabel>Propuesta personalizada</StepLabel>
        </Step>
        <Step>
          <StepCircle>6</StepCircle>
          <StepLabel>Acompañamiento continuo</StepLabel>
        </Step>
      </StepperContainer>

      <p>
        En DiversaRed estamos aquí para escucharte. Escríbenos y juntos
        encontraremos la mejor forma de acompañarte a ti, tu familia o tu
        comunidad.
      </p>

      <CtaContainer
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
        viewport={{ once: true }}
      >
        <CallToAction href="https://wa.me/56942006905?text=Hola%20Diversared!,%20quisiera%20conocer%20m%C3%A1s%20sobre%20sus%20servicios">
          Agenda una conversación gratuita
        </CallToAction>
      </CtaContainer>
    </Section>
  );
}
