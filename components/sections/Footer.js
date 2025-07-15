"use client";
import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";

const FooterWrapper = styled.footer`
  padding: 2rem 1.5rem;
  background-color: #f3f4f6;
  color: #4b5563;
  font-size: 0.9rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  
  a.footer-link {
    text-decoration: none;
  font-weight: 500;
  color: inherit;
  position: relative;
  transition: color 0.3s ease;

  &:hover {
    color: #000;
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    height: 2px;
    width: 0%;
    background: #fcde0c;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  .dark & {
    color: #f3f4f6;
    &:hover {
      color: #fff;
    }
    &::after {
      background: #facc15;
    }
  }
  }
  .dark & {
    background-color: #111827;
    color: #9ca3af;
  }

  @media (min-width: 768px) {
    align-items: flex-start;
    gap: 2rem;
    padding: 2.5rem 4rem;
  }
`;

const TopSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;


const Social = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;

  a {
    color: inherit;
    transition: opacity 0.3s ease;
    position: relative;
    width: 30px;
    height: 30px;
    &:hover {
      opacity: 0.7;
    }
  }
`;

const Copy = styled.div`
  font-size: 0.85rem;
  color: inherit;
  text-align: center;

  @media (min-width: 768px) {
    width: 100%;
    text-align: left;
  }
`;

const pages = [
  { name: "Inicio", url: '/' },
  { name: "Servicios", url: '/servicios' },
  { name: "Nuestro equipo", url: '/nosotros' },
];

const Footer = () => {
  return (
    <FooterWrapper>
      <TopSection>
        <Nav aria-label="Footer navigation">
          {pages.map((page) => (
            <Link className="footer-link" key={page.name} href={page.url} passHref>
              {page.name}
            </Link>
          ))}
        </Nav>

        <Social>
          <a
            href="https://instagram.com/diversared"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Image src="/instagram.png" alt="instagram" fill/>
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Image src="/linkedin.png" alt="instagram" fill/>
          </a>
        </Social>
      </TopSection>

      <Copy>
        © {new Date().getFullYear()} DiversaRed. Todos los derechos reservados.
      </Copy>
    </FooterWrapper>
  );
};

export default Footer;