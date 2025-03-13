'use client';

import { useRef, useEffect } from 'react';

export default function Double({ projects, reversed }) {
  const imageRefs = useRef([]);
  const requestAnimationFrameId = useRef(null);
  const xPercent = useRef(reversed ? 100 : 0);
  const currentXPercent = useRef(reversed ? 100 : 0);
  const speed = 0.25; // Increased speed for a snappier response

  const manageMouseMove = (e) => {
    xPercent.current = (e.clientX / window.innerWidth) * 100;
    if (!requestAnimationFrameId.current) {
      requestAnimationFrameId.current = requestAnimationFrame(animate);
    }
  };

  const animate = () => {
    currentXPercent.current +=
      (xPercent.current - currentXPercent.current) * speed;

    let firstImagePercent = Math.max(
      35,
      Math.min(65, 66.66 - currentXPercent.current * 0.33)
    );
    let secondImagePercent = 100 - firstImagePercent; // Keep total width at 100%

    imageRefs.current.forEach((img, index) => {
      if (img) {
        img.style.setProperty(
          '--width',
          `${index === 0 ? firstImagePercent : secondImagePercent}%`
        );
      }
    });

    if (Math.abs(xPercent.current - currentXPercent.current) < 0.5) {
      cancelAnimationFrame(requestAnimationFrameId.current);
      requestAnimationFrameId.current = null;
    } else {
      requestAnimationFrameId.current = requestAnimationFrame(animate);
    }
  };

  useEffect(() => {
    return () => {
      if (requestAnimationFrameId.current) {
        cancelAnimationFrame(requestAnimationFrameId.current);
      }
    };
  }, []);

  return (
    <div
      onMouseMove={manageMouseMove}
      className="mb-32 double flex w-full mt-[10vh] mb-[10vh] md:mb-[23vh]"
    >
      {projects.map((project, index) => (
        <a
          key={index}
          href={project.link || project.github}
          target="_blank"
          rel="noopener noreferrer"
          ref={(el) => (imageRefs.current[index] = el)}
          className="imageContainer transition-all duration-150 ease-out"
          style={{ width: 'var(--width, 50%)' }}
        >
          <div className="stretchyWrapper">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto"
            />
          </div>
          <div className="p-4">
            <h3 className="md:text-4xl font-normal">{project.title}</h3>
            <p className="text-xs md:text-base font-light">
              {project.description}
            </p>
          </div>
        </a>
      ))}
    </div>
  );
}
