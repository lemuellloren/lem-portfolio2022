import Contact from '@/components/Contact';
import Head from 'next/head';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Stack from '@/components/Stack';
import SpotlightHover from '@/components/SpotlightHover';
import { meta } from '@/data/config';

export default function Index() {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
      </Head>

      <SpotlightHover
        className="custom-spotlight-card"
        spotlightColor="rgba(0, 229, 255, 0.2)"
      >
        <div className="p-6 lg:p-20 max-w-4xl m-auto w-full">
          <Hero />
          <div className="p-0 space-y-10">
            <Projects />
            <Experience />
            <Stack />
            <Contact />
          </div>
        </div>
      </SpotlightHover>
    </>
  );
}
