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
  a {
    display: flex;
    justify-content: center;
    align-items: center; 
  }
  @media(max-width: 768px){
    padding: 1rem;
  }
`;

const Logo = styled.img`
  height: 45px;
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
  right: 1rem;
  z-index: 60;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-tap-highlight-color: transparent;

  .ham {
    transform: scale(0.4);
  }
  svg {
  transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
}
.active svg {
  transform: rotate(90deg);
}
path {
  transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1),
    stroke-dasharray 500ms cubic-bezier(0.4, 0, 0.2, 1),
    stroke-dashoffset 500ms cubic-bezier(0.4, 0, 0.2, 1);
}
path:nth-child(1) {
  transform-origin: 36% 40%;
}
path:nth-child(2) {
  stroke-dasharray: 29 299;
}
path:nth-child(3) {
  transform-origin: 35% 63%;
}
path:nth-child(4) {
  stroke-dasharray: 29 299;
}
path:nth-child(5) {
  transform-origin: 61% 52%;
}
path:nth-child(6) {
  transform-origin: 62% 52%;
}
.active path:nth-child(1) {
  transform: translateX(9px) translateY(1px) rotate(45deg);
}
.active path:nth-child(2) {
  stroke-dasharray: 225 299;
  stroke-dashoffset: -72px;
}
.active path:nth-child(3) {
  transform: translateX(9px) translateY(1px) rotate(-45deg);
}
.active path:nth-child(4) {
  stroke-dasharray: 225 299;
  stroke-dashoffset: -72px;
}
.active path:nth-child(5) {
  transform: translateX(9px) translateY(1px) rotate(-45deg);
}
.active path:nth-child(6) {
  transform: translateX(9px) translateY(1px) rotate(45deg);
}

  @media (min-width: 768px) {
    display: none;
  }
    .dark & {
      background: #eee;
    }
`;

const MobileMenuWrapper = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 45;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
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
          <div className={open ? 'ham active': 'ham'}>
  <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 200 200">
        <g stroke-width="6.5" stroke-linecap="round">
          <path
            d="M72 82.286h28.75"
            fill="#009100"
            fill-rule="evenodd"
            stroke="#000"
          />
          <path
            d="M100.75 103.714l72.482-.143c.043 39.398-32.284 71.434-72.16 71.434-39.878 0-72.204-32.036-72.204-71.554"
            fill="none"
            stroke="#000"
          />
          <path
            d="M72 125.143h28.75"
            fill="#009100"
            fill-rule="evenodd"
            stroke="#000"
          />
          <path
            d="M100.75 103.714l-71.908-.143c.026-39.638 32.352-71.674 72.23-71.674 39.876 0 72.203 32.036 72.203 71.554"
            fill="none"
            stroke="#000"
          />
          <path
            d="M100.75 82.286h28.75"
            fill="#009100"
            fill-rule="evenodd"
            stroke="#000"
          />
          <path
            d="M100.75 125.143h28.75"
            fill="#009100"
            fill-rule="evenodd"
            stroke="#000"
          />
        </g>
      </svg>
</div>
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
