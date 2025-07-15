"use client";
import { useState } from "react";
import Link from "next/link";  // <--- Importa Link de next/link
import styled from "@emotion/styled";
import { motion, AnimatePresence } from "framer-motion";

// === Styled Components ===

const HeaderWrapper = styled.header`
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 50;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(255,255,255,.8);
  backdrop-filter: blur(20px);
`;

const Logo = styled.img`
  width: 90px;
  height: auto;
`;

const Nav = styled.nav`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    gap: 2rem;
  }
  
`;

const NavItem = styled.a`
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  color: #111;
  position: relative;
  &:hover {
    color: #555;
  }

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: var(--color-lightblue);
    left: 0;
    height: 3px;
    bottom: -4px;
    border-radius: 2px;
    transform: scaleX(0);
    transform-origin: left;
    transition: all .3s ease;
  }
  &:hover::after {
    transform: scaleX(1);
  }

  .dark & {
    color: #eee;
    &:hover {
      color: #aaa;
    }
  }
`;

const Hamburger = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  cursor: pointer;
  position: absolute; 
  top: 30px;
  right: 30px;
  z-index: 60;

  @media (min-width: 768px) {
    display: none;
  }

  div {
    height: 2px;
    width: 24px;
    background: #111;
    transition: all 0.3s ease;
  z-index: 60;


    .dark & {
      background: #eee;
    }
  }
`;

const MobileMenuWrapper = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 55;
  background: white;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .dark & {
    background: #111;
    color: white;
  }
`;

const MobileNavItem = styled.a`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 1rem 0;
  text-decoration: none;
  color: inherit;

  &:hover {
    opacity: 0.8;
  }
`;

const MobileLogo = styled(Logo)`
  position: absolute;
  bottom: 2rem;
`;

export const Header = () => {
  const [open, setOpen] = useState(false);
  const pages = [
    {name:"Inicio", url: '/'}, 
    {name:"Servicios", url: '/servicios'}, 
    {name:"Nuestro equipo", url: '/nosotros'}, 
  ];

  const handleMenuClick = (e) => {
    if (!e.target.closest("[data-menu-item]")) {
      setOpen(false);
    }
  };

  return (
    <>
      <HeaderWrapper>
        <Link href="/">
            <Logo src="/logo.png" alt="Logo" />
        </Link>

        <Nav>
          {pages.map((page) => (
            <NavItem key={page.name} href={`${page.url}`}>
              {page.name}
            </NavItem>
          ))}
        </Nav>

        <Hamburger onClick={() => setOpen(!open)}>
          <motion.div animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }} />
          <motion.div animate={{ opacity: open ? 0 : 1 }} />
          <motion.div animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }} />
        </Hamburger>
      </HeaderWrapper>

      <AnimatePresence>
        {open && (
          <MobileMenuWrapper
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleMenuClick}
          >
            {pages.map((page) => (
              <MobileNavItem
                key={page.name}
                href={`${page.url}`}
                onClick={() => setOpen(false)}
                data-menu-item
              >
                {page.name}
              </MobileNavItem>
            ))}
          </MobileMenuWrapper>
        )}
      </AnimatePresence>
    </>
  );
};
