'use client';
import { experience } from '@/data/config';
import { motion, useSpring } from 'framer-motion';
import React, { useState, useRef } from 'react';

export const Experience = () => {
  const [img, setImg] = useState({
    src: '',
    alt: '',
    opacity: 0
  });
  const imageRef = useRef(null);
  const containerRef = useRef(null);

  const spring = {
    stiffness: 150,
    damping: 15,
    mass: 0.1
  };
  const imagePos = {
    x: useSpring(0, spring),
    y: useSpring(0, spring)
  };
  const handleMove = (e) => {
    if (!imageRef.current || !containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const { clientX, clientY } = e;
    const relativeX = clientX - containerRect.left;
    const relativeY = clientY - containerRect.top;
    imagePos.x.set(relativeX - imageRef.current.offsetWidth / 2);
    imagePos.y.set(relativeY - imageRef.current.offsetHeight / 2);
  };
  const handleImageInteraction = (item, opacity) => {
    setImg({ src: item.logo, alt: item.company, opacity });
  };
  return (
    <section>
      <h2 className="text-center text-2xl md:text-8xl	font-normal py-8 lowercase">
        {experience.title}
      </h2>
      <div
        ref={containerRef}
        onMouseMove={handleMove}
        className="relative max-w-4xl mx-auto w-full py-8"
      >
        {experience.experiences.map((experience) => (
          <div
            key={experience.company}
            onMouseEnter={() => handleImageInteraction(experience, 1)}
            onMouseMove={() => handleImageInteraction(experience, 1)}
            onMouseLeave={() => handleImageInteraction(experience, 0)}
            className="w-full py-10 cursor-pointer text-center  text-white  border-b border-dark dark:border-white last:border-none"
          >
            <a
              href={experience.link}
              target="_blank"
              rel="noreferrer"
              className="flex justify-between items-end"
            >
              <div className="flex items-end gap-4">
                <h2 className="text-xs md:text-4xl font-normal">
                  {experience.company}
                </h2>
                <span className="text-xs md:text-lg font-normal">
                  {experience.position}
                </span>
              </div>
              <span className="text-xs md:text-lg font-normal">
                {experience.year}
              </span>
            </a>
          </div>
        ))}

        <motion.img
          ref={imageRef}
          src={img.src}
          alt={img.alt}
          className="w-14 h-14 object-cover absolute top-0 left-0 transition-opacity duration-200 ease-in-out pointer-events-none"
          style={{
            x: imagePos.x,
            y: imagePos.y,
            opacity: img.opacity
          }}
        />
      </div>
    </section>
  );
};
