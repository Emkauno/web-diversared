
import Hero from '@/components/sections/Hero';
import Intro from '@/components/sections/Intro';
import ImageText from '@/components/sections/ImageText';
import Gallery from '@/components/sections/Gallery';
import Quote from '@/components/sections/Quote';
import Connection from '@/components/sections/Connection';
import { Testimonials } from '@/components/ui/testimonials';


export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <ImageText />
      <Connection />
      <Gallery />
      <Testimonials />
      <Quote />
    </>
  );
}