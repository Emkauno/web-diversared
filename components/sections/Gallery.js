"use client"
import styled from '@emotion/styled';
import { motion } from 'framer-motion'
import Image from 'next/image';

const Section = styled.section`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.5rem;
  padding-top: 0;
  padding-bottom: 3rem;
  @media (max-width: 480px) {
    padding: 0 1.5rem;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  transform-origin: center;
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
`;

const Card = styled(motion.div)`
  border-radius: 1.5rem;
  box-shadow: rgba(0, 0, 0, 0.05) 0 10px 30px;
  object-fit: cover;
  aspect-ratio: 4 / 3;
  transition: transform 0.3s ease;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  flex-direction: flex-start;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  gap: 1rem;
  cursor: default;
  &:hover {
    cursor: pointer;
  }
  &.green {
    background-image:
    linear-gradient(to top, rgba(255, 255, 255, 0.7) 30%, rgba(155, 203, 64, 1)),
    url('/orienta.png');
    background-size: cover;
    background-position: center;
  }
  &.lightblue {

        background-image:
    linear-gradient(to top, rgba(255, 255, 255, 0.7) 30%, rgba(133, 196, 218, 1)),
    url('/apoyo.jpg');
    background-size: cover;
    background-position: center;
  }
  &.yellow {

        background-image:
     linear-gradient(to top, rgba(255, 255, 255, 0.7) 30%, rgba(250, 221, 14, 1)),
    url('/red.avif');
    background-size: cover;
    background-position: center;
  }
`

const CardHeader = styled(motion.h3)`
  width: 100%;
  margin: 0;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  z-index: 2;
  gap: 20px;
`

const CardIcon = styled(motion.div)`
  width: 40px;
  height: 40px;
  z-index: 2;
  position: relative;
`
const CardTitle = styled(motion.div)`
  flex: 1;
  z-index: 2;
  
`
const CardText = styled(motion.p)`
  width: 100%;
  font-size: 16px;
  text-align: left;
  font-weight: 500;
  margin: 0;
  z-index: 2;
`

export default function Gallery() {
  return (
    <Section>
      <Card className="green">
        <CardHeader>
          <CardIcon>
            <Image src="/icon3.png" fill alt="ícono de orientación"/>
          </CardIcon>
          <CardTitle>
            Orientación y Derivación
          </CardTitle>
        </CardHeader>
        <CardText>
          Te orientamos con cercanía y claridad. Evaluamos tus necesidades, resolvemos tus dudas y te conectamos con los apoyos que realmente necesitas.
        </CardText>
      </Card>
      <Card className="lightblue">
        <CardHeader>
          <CardIcon>
            <Image src="/icon1.png" fill alt="ícono de apoyo"/>
          </CardIcon>
          <CardTitle>
            Apoyo personalizado, todos los días
          </CardTitle>
        </CardHeader>
        <CardText>
          Nuestros gestores están contigo en el día a día. Te acompañamos en tu hogar, en tu comunidad o en tu espacio educativo, siempre desde el respeto y la autonomía.
        </CardText>
      </Card>
      <Card className="yellow">
        <CardHeader>
          <CardIcon>
            <Image src="/icon2.png" fill alt="ícono de redes"/>
          </CardIcon>
          <CardTitle>
            Formamos redes que cuidan
          </CardTitle>
        </CardHeader>
        <CardText>
          Capacitamos a instituciones, equipos y familias para fortalecer el bienestar mental colectivo. Creamos entornos más humanos, informados y solidarios.
        </CardText>
      </Card>
    </Section>
  );
}