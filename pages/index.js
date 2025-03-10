import Footer from '@/components/Footer';
import Head from 'next/head';
import Hero from '@/components/Hero';
import Stack from '@/components/Stack';
import { meta } from '@/data/config';
import Navigation from '@/components/Navigation';
import { About } from '@/components/About';
import { Projects } from '@/components/Projects';
import { Experience } from '@/components/Experience';
import { Contact } from '@/components/Contact';

export default function Index() {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
      </Head>

      <div className="p-6 md:p-8 m-auto w-full">
        <Navigation />
        <Hero />
        <div className="p-0 space-y-10">
          <About />
          <Projects />
          <Experience />
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  );
}
