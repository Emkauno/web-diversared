"use client";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";

// Styled Components
const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 36rem;
  padding: 5rem 1rem;
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;

  @media (min-width: 768px) {
    max-width: 64rem;
    padding: 5rem 2rem;
  }

  @media (min-width: 1024px) {
    padding-left: 3rem;
    padding-right: 3rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 100px;
  position: relative;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  @media(max-width: 768px) {
    height: 450px;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 1.5rem;
`;

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 1rem;

  @media (min-width: 768px) {
    padding-top: 0;
  }
`;

const Name = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: black;

  .dark & {
    color: white;
  }
`;

const Designation = styled.p`
  font-size: 0.875rem;
  color: #6b7280;

  .dark & {
    color: #737373;
  }
`;

const Quote = styled(motion.p)`
  margin-top: 2rem;
  font-size: 1rem;
  color: #6b7280;
  line-height: 1.45;
  font-style: italic;
  .dark & {
    color: #d4d4d4;
  }
`;

const Controls = styled.div`
  display: flex;
  gap: 1rem;
  padding-top: 3rem;
    justify-content: center;
    align-items: center;
  @media (max-width: 768px) {
    padding-top: 0;
    order: -1;
    width: 100%;

}
`;

const ArrowButton = styled.button`
  display: flex;
  width: 60px;
  height: 60px;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  background-color: var(--color-green);
  outline: none;
  border: none;
  cursor: pointer;
  .dark & {
    background-color: #262626;
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
    color: black;
    transition: transform 0.3s;

    .dark & {
      color: #a3a3a3;
    }
  }

  &:hover svg.left {
    transform: rotate(12deg);
  }

  &:hover svg.right {
    transform: rotate(-12deg);
  }
`;

export const AnimatedTestimonials = ({ testimonials, autoplay = false }) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index) => index === active;

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => Math.floor(Math.random() * 21) - 10;

  return (
    <Container>
      <Grid>
        <ImageWrapper>
          <AnimatePresence>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.src}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  z: -100,
                  rotate: randomRotateY(),
                }}
                animate={{
                  opacity: isActive(index) ? 1 : 0.7,
                  scale: isActive(index) ? 1 : 0.95,
                  z: isActive(index) ? 0 : -100,
                  rotate: isActive(index) ? 0 : randomRotateY(),
                  zIndex: isActive(index)
                    ? 40
                    : testimonials.length + 2 - index,
                  y: isActive(index) ? [0, -80, 0] : 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                  z: 100,
                  rotate: randomRotateY(),
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                }}
                style={{ position: "absolute", inset: 0, transformOrigin: "bottom" }}
              >
                <StyledImage
                  src={testimonial.src}
                  alt={testimonial.name}
                  width={500}
                  height={500}
                  draggable={false}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </ImageWrapper>
        <TextSection>
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <Name>{testimonials[active].name}</Name>
            <Designation>{testimonials[active].designation}</Designation>
            <Quote>
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                  animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  style={{ display: "inline-block" }}
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </Quote>
          </motion.div>
          <Controls>
            <ArrowButton onClick={handlePrev}>
              <IconArrowLeft className="left" />
            </ArrowButton>
            <ArrowButton onClick={handleNext}>
              <IconArrowRight className="right" />
            </ArrowButton>
          </Controls>
        </TextSection>
      </Grid>
    </Container>
  );
};
