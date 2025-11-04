"use client"
import styled from '@emotion/styled';
import { motion } from 'framer-motion'
import Link from 'next/link';

const Section = styled.section`
  max-width: 70%;
  margin: 0 auto;
  padding: 3rem 1.5rem;
  font-size: clamp(1.125rem, 2vw, 1.375rem);
  font-weight: 300;
  line-height: 1.2;
  color: #222;
  text-align: center;
  letter-spacing: 0.02em;
  padding-bottom: 8rem;
  span {
    font-weight: bold;
}
      @media (max-width: 480px) {
    max-width: unset;
    text-align: left;
  padding: 3rem 1.5rem;
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
		max-width: unset;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    text-align: left;
  }
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
  transition: all .3s ease;
  font-size: 16px;
  &:hover {
    transform: scale(1.04);
  }
  @media(max-width: 768px){
    width: 100%;
    font-size: 14px;
  }
`
const CtaContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 32px;

`


export default function Quote() {
  return (
    <Section>
      <Title>¿Necesitas apoyo o información?</Title>
      <p>        En DiversaRed estamos aquí para escucharte. Escríbenos y juntos
        encontraremos la mejor forma de acompañarte a ti, tu familia o tu
        comunidad hacia una vida más plena, digna y conectada.</p>
      <CtaContainer initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: .4 }}
        viewport={{ once: true }}>
        <CallToAction href="https://wa.me/56942006905?text=Hola%20Diversared!,%20quisiera%20conocer%20m%C3%A1s%20sobre%20sus%20servicios">
          Agenda una conversación gratuita
        </CallToAction>
      </CtaContainer>
    </Section>
  )
}