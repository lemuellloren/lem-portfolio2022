'use client';

import { defaultAnimationConfig, hero } from '@/data/config';
import HoverTextButton from './animated/HoverTextButton';
import AnimatedContent from './animated/AnimatedContent';
import FlipInXText from './animated/FlipInXText';
import ProjectCarousel from './animated/ProjectCarousel';
import RotatingText from './animated/RotatingText';

export default function Hero() {
  return (
    <section className="relative mt-32 md:h-[90vh] w-full">
      <div className="mb-20">
        <FlipInXText as="h1" className="text-2xl md:text-7xl font-normal">
          {hero.title}
        </FlipInXText>

        <RotatingText
          positions={hero.position}
          className="md:text-4xl font-normal"
        />
        <AnimatedContent {...defaultAnimationConfig}>
          <div className="pt-10 pb-12 flex gap-4">
            <HoverTextButton
              as="a"
              href="#aboutSection"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black rounded-lg dark:bg-zinc-900 text-white p-5"
            >
              About me
            </HoverTextButton>
            <HoverTextButton
              as="a"
              href="#contactMe"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact me
            </HoverTextButton>
          </div>
        </AnimatedContent>
      </div>
      <ProjectCarousel />
    </section>
  );
}
