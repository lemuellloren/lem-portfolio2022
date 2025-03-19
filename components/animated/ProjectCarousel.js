import React, { useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '@/data/config';

import '@splidejs/react-splide/css/core';

const ProjectCarousel = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e, index) => {
    if (!e.currentTarget) return;

    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
    setHoveredIndex(index);
  };

  return (
    <div className="relative">
      <Splide
        aria-label="Projects"
        options={{
          type: 'loop',
          drag: 'free',
          perPage: 3,
          gap: '1rem',
          pagination: false,
          arrows: false,
          autoScroll: {
            speed: 1,
            pauseOnHover: true,
            pauseOnFocus: true
          },
          breakpoints: {
            1024: { perPage: 2 },
            768: { perPage: 1 }
          }
        }}
        extensions={{ AutoScroll }}
      >
        {projects.projects.map((project, index) => {
          const projectLink = project.link || project.github;
          const projectLinkText = project.link ? 'View Site' : 'View Code';

          return (
            <SplideSlide key={index}>
              <div
                className="relative group overflow-hidden"
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <a href={projectLink} target="_blank" rel="noopener noreferrer">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-lg"
                  />
                </a>

                <AnimatePresence mode="wait">
                  {hoveredIndex === index && projectLink && (
                    <motion.div
                      className="absolute w-max"
                      style={{
                        left: cursorPos.x,
                        top: cursorPos.y,
                        transform: 'translate(-50%, -50%)',
                        pointerEvents: 'none'
                      }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ ease: 'easeOut', duration: 0.2 }}
                    >
                      <div className="rounded-lg bg-black text-white p-2">
                        {projectLinkText}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <p>{project.title}</p>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
};

export default ProjectCarousel;
