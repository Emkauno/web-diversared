"use client"
import styled from '@emotion/styled';
import { motion } from 'framer-motion'
import Image from 'next/image';
import Link from 'next/link';

const Section = styled(motion.section)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 120px 2rem;
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  @media (max-width: 768px) {
    align-items: flex-start;
    height: 75vh;
    flex-direction: column;
  }
`;

const ContentHalf = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 2rem;
  position: relative;
  height: 100%;
  border-radius: 24px;
  &.image-container {
    min-height: 500px;
      @media (max-width: 768px) {
    min-height: 230px;
  }
  }
  img {
    object-fit: cover;
    border-radius: 24px;
  }

`
const Title = styled(motion.h1)`
  font-size: 4rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  text-align: center;
  width: 100%;
  margin: 0;

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

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  max-width: 650px;
  margin: 0 auto;
  text-align: center;

  @media (max-width: 1024px) {
    font-size: 1.25rem;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
    max-width: 90%;
  }

  @media (max-width: 480px) {
    font-size: 1.125rem;
    line-height: 1.5;
    text-align: left;
    margin: 0;
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
  margin: 0 auto;
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
  justify-content: flex-start;
  align-items: center;
`

export default function Hero() {
  return (
    <Section>
      <ContentHalf>
        <Title
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          Nuestro equipo
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: .2}}
          viewport={{ once: true }}
        >
          Conformamos un equipo con historia, formación y un compromiso inquebrantable: hacer que la salud mental sea accesible, digna y colectiva.
        </Subtitle>
      </ContentHalf>
      <ContentHalf className='image-container' initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: 'easeOut' }}
				viewport={{ once: true }}>
        <Image src="/equipo.png" fill alt="Equipo DiversaRed"/>
      </ContentHalf>
    </Section>
  );
}