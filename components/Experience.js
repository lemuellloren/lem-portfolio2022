'use client';

import { defaultAnimationConfig, experience } from '@/data/config';
import { motion, useSpring } from 'framer-motion';
import React, { useState, useRef } from 'react';
import AnimatedContent from './animated/AnimatedContent';

export const Experience = () => {
  const [content, setContent] = useState({
    title: '',
    description: '',
    opacity: 0
  });

  const contentRef = useRef(null);
  const containerRef = useRef(null);

  const spring = {
    stiffness: 150,
    damping: 15,
    mass: 0.1
  };

  const contentPos = {
    x: useSpring(0, spring),
    y: useSpring(0, spring)
  };

  const handleMove = (e) => {
    if (!contentRef.current || !containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const { clientX, clientY } = e;
    const relativeX = clientX - containerRect.left;
    const relativeY = clientY - containerRect.top;
    contentPos.x.set(relativeX - contentRef.current.offsetWidth / 2);
    contentPos.y.set(relativeY - contentRef.current.offsetHeight / 2);
  };

  const handleContentInteraction = (item, opacity) => {
    setContent({
      logo: item.logo,
      title: item.company,
      description: item.description,
      responsibilities: item.responsibilities,
      opacity
    });
  };

  return (
    <section>
      <AnimatedContent {...defaultAnimationConfig}>
        <h2 className="md:mb-40 lowercase text-2xl md:text-9xl font-normal text-right">
          {experience.title}
        </h2>

        <div
          ref={containerRef}
          onMouseMove={handleMove}
          className="relative w-full py-8"
        >
          {experience.experiences.map((experience) => (
            <div
              key={experience.company}
              onMouseEnter={() => handleContentInteraction(experience, 1)}
              onMouseMove={() => handleContentInteraction(experience, 1)}
              onMouseLeave={() => handleContentInteraction(experience, 0)}
              className="w-full py-14 cursor-pointer text-center text-white border-b border-dark dark:border-white last:border-none"
            >
              <a
                href={experience.link}
                target="_blank"
                rel="noreferrer"
                className="flex justify-between"
              >
                <div className="text-left">
                  <h2 className="text-xs md:text-7xl font-normal">
                    {experience.company}
                  </h2>
                  <span className="text-xs md:text-lg font-light">
                    {experience.position}
                  </span>
                </div>
                <span className="text-xs md:text-sm font-normal">
                  {experience.year}
                </span>
              </a>
            </div>
          ))}

          <motion.div
            ref={contentRef}
            className="w-1/4 hidden md:block absolute top-0 left-0 bg-black dark:bg-white p-4 md:p-6 pointer-events-none transition-opacity duration-200 ease-in-out"
            style={{
              x: contentPos.x,
              y: contentPos.y,
              opacity: content.opacity
            }}
          >
            <div className="flex flex-row items-center gap-4">
              <img
                src={content.logo}
                alt={content.title}
                width={30}
                height={30}
              />
              <h2 className="md:text-4xl font-normal text-white dark:text-black">
                {content.title}
              </h2>
            </div>
            <p className="mt-8 font-sm font-normal text-white dark:text-black">
              {content.description}
            </p>
            <ul className="list-none">
              <li>
                <p className="mt-8 font-sm font-bold text-white dark:text-black">
                  Responsibilities:
                </p>
              </li>
              <li>
                <p className="text-xs md:text-sm font-normal text-white dark:text-black">
                  {content.responsibilities}
                </p>
              </li>
            </ul>
          </motion.div>
        </div>
      </AnimatedContent>
    </section>
  );
};
