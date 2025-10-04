import GlobalStyles from '@/styles/GlobalStyles';
import { Inter } from 'next/font/google';
import { Header } from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
import BackgroundOrbits from '@/components/background/BackgroundOrbits';

export const metadata = {
  title: "DiversaRed – Bienestar mental, comunidad y autonomía",
  description:
    "Acompañamos a personas, familias y comunidades que enfrentan desafíos psicosociales, cognitivos o del desarrollo. Promovemos la inclusión, autonomía y redes de apoyo a través de orientación, acompañamiento y capacitación.",
  keywords: [
    "DiversaRed",
    "salud mental",
    "acompañamiento psicosocial",
    "apoyos personalizados",
    "discapacidad cognitiva",
    "inclusión",
    "comunidad",
    "terapia ocupacional",
    "bienestar mental",
    "capacitación en salud mental",
    "gestores de apoyo",
    "redes comunitarias",
    "inclusión social",
    "Chile"
  ],
  authors: [{ name: "DiversaRed", url: "https://diversared.cl" }],
  creator: "DiversaRed",
  icons: {
    icon: [
      { url: '/favicon.png', sizes: 'any', type: 'image/png' },
    ]
  },
  openGraph: {
    title: "DiversaRed – Bienestar mental, comunidad y autonomía",
    description:
      "Servicios de apoyo y orientación para personas, familias y comunidades. Nuestro enfoque se basa en los derechos humanos, la diversidad y la colaboración.",
    url: "https://diversared.cl",
    siteName: "DiversaRed",
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "DiversaRed – Bienestar mental y comunidad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DiversaRed – Bienestar mental, comunidad y autonomía",
    description:
      "Servicios de apoyo y orientación con enfoque inclusivo, humano y comunitario.",
    images: ["/logo.png"],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <BackgroundOrbits
          blobCount={16}       // more particles on desktop baseline
          opacity={0.2}       // base; desktopBoost lifts to ~0.41
          speed={0.018}
        />
        <Header />
        <GlobalStyles />
        {children}
        <Footer />
      </body>
    </html>
  );
}