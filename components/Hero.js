'use client';

import { useRef, useState } from 'react';
import { defaultAnimationConfig, hero } from '@/data/config';
import { motion, useSpring } from 'framer-motion';
import HoverTextButton from './animated/HoverTextButton';
import { About } from './About';
import AnimatedContent from './animated/AnimatedContent';
import FlipInXText from './animated/FlipInXText';

export default function Hero() {
  const [hovered, setHovered] = useState(false);
  const h1Ref = useRef(null);
  const imageRef = useRef(null);

  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  const handleMouseMove = (e) => {
    if (!h1Ref.current || !imageRef.current) return;

    const rect = h1Ref.current.getBoundingClientRect();
    const { clientX, clientY } = e;
    const relativeX = clientX - rect.left;
    const relativeY = clientY - rect.top;

    x.set(relativeX - imageRef.current.offsetWidth / 2);
    y.set(relativeY - imageRef.current.offsetHeight / 2);
  };

  return (
    <section className="flex relative mt-24 md:mt-0">
      <AnimatedContent {...defaultAnimationConfig}>
        <div className="w-full">
          <div className="profile-title w-full relative overflow-hidden">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: 1.2,
                ease: 'easeInOut',
                delay: 0.2
              }}
              className="border-b border-dark dark:border-white origin-left absolute left-0 bottom-0 w-full"
            />
            <h1
              ref={h1Ref}
              className="pb-4 md:flex gap-4 mt-16 text-5xl md:text-[12rem] font-normal text-black dark:text-white text-left cursor-pointer group relative"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              onMouseMove={handleMouseMove}
            >
              <FlipInXText as="span">{hero.title}</FlipInXText>

              {hovered && (
                <motion.img
                  ref={imageRef}
                  src={hero.profile}
                  alt="Hover Effect"
                  className="hidden md:block absolute md:w-32 md:h-32 object-cover pointer-events-none transition-opacity duration-300 ease-in-out"
                  style={{
                    x,
                    y,
                    opacity: hovered ? 1 : 0,
                    mixBlendMode: 'difference'
                  }}
                />
              )}
            </h1>
          </div>

          <div className="mt-8 hidden md:flex justify-between">
            <FlipInXText as="p" className="text-xs md:text-xl font-normal">
              Front-End Developer
            </FlipInXText>

            <FlipInXText as="p" className="text-xs md:text-xl font-normal">
              UI/UX Designer
            </FlipInXText>

            <HoverTextButton
              as="a"
              href="#contactMe"
              className="text-xs md:text-xl font-normal"
            >
              <FlipInXText as="span">Contact me</FlipInXText>
            </HoverTextButton>
          </div>
          <div className="mt-8 md:mt-0">
            <About />
          </div>
        </div>
      </AnimatedContent>
    </section>
  );
}
