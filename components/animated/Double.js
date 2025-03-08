'use client';

import { useRef, useState } from 'react';

export default function Double({ projects, reversed }) {
  const imageRefs = useRef([]);
  let requestAnimationFrameId = null;
  let xPercent = reversed ? 100 : 0;
  let currentXPercent = reversed ? 100 : 0;
  const speed = 0.15;

  const manageMouseMove = (e) => {
    xPercent = (e.clientX / window.innerWidth) * 100;
    if (!requestAnimationFrameId)
      requestAnimationFrameId = requestAnimationFrame(animate);
  };

  const animate = () => {
    currentXPercent += (xPercent - currentXPercent) * speed;

    const firstImagePercent = 66.66 - currentXPercent * 0.33;
    const secondImagePercent = 33.33 + currentXPercent * 0.33;

    imageRefs.current.forEach((img, index) => {
      img.style.setProperty(
        '--width',
        `${index === 0 ? firstImagePercent : secondImagePercent}%`
      );
    });

    if (Math.round(xPercent) === Math.round(currentXPercent)) {
      cancelAnimationFrame(requestAnimationFrameId);
      requestAnimationFrameId = null;
    } else {
      requestAnimationFrame(animate);
    }
  };

  return (
    <div onMouseMove={manageMouseMove} className="double">
      {projects.map((project, index) => (
        <a
          key={index}
          href={project.link || project.github}
          target="_blank"
          rel="noopener noreferrer"
          ref={(el) => (imageRefs.current[index] = el)}
          className="imageContainer"
          style={{ width: 'var(--width, 50%)' }}
        >
          <div className="stretchyWrapper">
            <img src={project.image} alt={project.title} />
          </div>
          <div className="p-4">
            <h3 className="text-xs md:text-xl font-normal">{project.title}</h3>
            <p className="text-xs md:text-base font-light">
              {project.description}
            </p>
          </div>
        </a>
      ))}
    </div>
  );
}
