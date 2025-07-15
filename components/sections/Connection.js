"use client"
import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion'

const Section = styled.section`
  max-width: 70%;
  margin: 0 auto;
  padding: 3rem 1.5rem;
  font-size: clamp(1.125rem, 2vw, 1.375rem);
  line-height: 1.3;
  color: #222;
  text-align: center;
  letter-spacing: 0.02em;
  display: flex;
  justify-content: center;
  span {
    font-weight: bold;
}
  @media (max-width: 480px) {
  max-width: 100%;
  padding: 3rem 1.5rem;

}
`;

const Title = styled(motion.h2)`
  font-size: 3rem;
  text-align: center;
  max-width: 90%;
  font-weight: 800;

  span {
  font-weight: 800;
    &.green {
      color: var(--color-green);
        font-weight: 600;
      margin-right: 8px;

    }
    &.lightblue {
      color: var(--color-lightblue);
        font-weight: 600;
      margin-right: 8px;

    }
    &.yellow {
      color: var(--color-yellow);  
        font-weight: 600;
        margin: 0;
    }
  }
  @media (max-width: 1024px) {
    font-size: 3.5rem;
    span {
      display: block;
    margin: 0;
    }
        br {
    display: none;
  }
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
		max-width: unset;

  }

  @media (max-width: 480px) {
    font-size: 2rem;
    max-width: 100%;
    span {
    margin: 0;
    }

`;
export default function Connection() {
  return (
    <Section>
      <Title>
        <motion.span
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: .2 }}
          viewport={{ once: true }}
          className="green"
        >
          Crece,
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: .4 }}
          viewport={{ once: true }}
          className="lightblue"
        >
          conecta,
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: .6 }}
          viewport={{ once: true }}
          className="yellow"
        >
          transforma.
        </motion.span>
        <br />
        <motion.span
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 1 }}
          viewport={{ once: true }}
        >
          Somos diversos.
        </motion.span></Title>
    </Section>
  );
}