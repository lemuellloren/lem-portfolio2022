'use client';

import { useRef, useState } from 'react';
import { contact, defaultAnimationConfig, hero } from '@/data/config';
import { motion, useSpring } from 'framer-motion';
import HoverTextButton from './animated/HoverTextButton';
import { About } from './About';
import AnimatedContent from './animated/AnimatedContent';

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
          <div className="profile-title border-b border-dark dark:border-white w-full">
            <h1
              ref={h1Ref}
              className="pb-4 md:flex gap-4 mt-16 text-5xl md:text-[12rem] font-normal text-black dark:text-white text-left cursor-pointer group relative overflow-hidden"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              onMouseMove={handleMouseMove}
            >
              {hero.title}

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
            <p className="text-xs md:text-xl font-normal">
              Front-end Developer
            </p>
            <p className="text-xs md:text-xl font-normal">UI/UX Designer</p>
            <HoverTextButton
              as="a"
              href="#contactMe"
              className="text-xs md:text-xl font-normal"
            >
              Contact me
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
