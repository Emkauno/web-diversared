'use client';
/** @jsxImportSource @emotion/react */
import { Global, css } from '@emotion/react';

const GlobalStyles = () => (
  <Global
    styles={css`
      html, body {
        margin: 0;
        padding: 0;
        font-family: var(--font-inter), sans-serif;
        color: #000;
        overflow-x: hidden;
      }

      * {
        box-sizing: border-box;
      }
        :root {
        --background: #ffffff;
        --foreground: #171717;
        --color-yellow: #fadd0e;
        --color-lightblue: #85c4da;
        --color-green: #9bcb40;
      }
    `}
  />
);

export default GlobalStyles;