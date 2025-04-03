'use client';

import { defaultAnimationConfig, hero } from '@/data/config';
import HoverTextButton from './animated/HoverTextButton';
import AnimatedContent from './animated/AnimatedContent';
import FlipInXText from './animated/FlipInXText';
import ProjectCarousel from './animated/ProjectCarousel';
import RotatingText from './animated/RotatingText';
import { useState } from 'react';

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative mt-32 md:h-[90vh] w-full">
      <div className="mb-24 md:mb-32 max-w-5xl mx-auto">
        <FlipInXText
          as="h1"
          className="text-2xl md:text-7xl font-normal flex items-center gap-4 relative cursor-pointer"
        >
          <span
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
          >
            {hero.title}
          </span>
          <span className="relative inline-block">
            <img
              src={hero.profile}
              alt={hero.title}
              className={`w-24 object-cover transition-all rounded-full h-12 ${
                isHovered ? 'opacity-100 scale-110' : 'opacity-0 scale-90'
              }`}
            />
          </span>
        </FlipInXText>
        <FlipInXText as="p" className="text-2xl md:max-w-md">
          {hero.subTitle}
        </FlipInXText>
        <AnimatedContent {...defaultAnimationConfig}>
          <div className="pt-10 pb-12 flex gap-4">
            <HoverTextButton
              as="a"
              href="#aboutSection"
              target="_blank"
              rel="noopener noreferrer"
              background={true}
            >
              Learn more
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
