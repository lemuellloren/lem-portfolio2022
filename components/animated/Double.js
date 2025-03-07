'use client';
import { useRef } from 'react';

export default function Double({ projects, reversed }) {
  const firstImage = useRef(null);
  const secondImage = useRef(null);
  let requestAnimationFrameId = null;
  let xPercent = reversed ? 100 : 0;
  let currentXPercent = reversed ? 100 : 0;
  const speed = 0.15;

  const manageMouseMove = (e) => {
    const { clientX } = e;
    xPercent = (clientX / window.innerWidth) * 100;

    if (!requestAnimationFrameId) {
      requestAnimationFrameId = window.requestAnimationFrame(animate);
    }
  };

  const animate = () => {
    //Add easing to the animation
    const xPercentDelta = xPercent - currentXPercent;
    currentXPercent = currentXPercent + xPercentDelta * speed;

    //Change width of images between 33.33% and 66.66% based on cursor
    const firstImagePercent = 66.66 - currentXPercent * 0.33;
    const secondImagePercent = 33.33 + currentXPercent * 0.33;
    console.log(secondImagePercent);
    firstImage.current.style.width = `${firstImagePercent}%`;
    secondImage.current.style.width = `${secondImagePercent}%`;

    if (Math.round(xPercent) == Math.round(currentXPercent)) {
      window.cancelAnimationFrame(requestAnimationFrameId);
      requestAnimationFrameId = null;
    } else {
      window.requestAnimationFrame(animate);
    }
  };

  return (
    <div
      onMouseMove={(e) => {
        manageMouseMove(e);
      }}
      className="double"
    >
      <a
        href={projects[0].link || projects[0].github}
        target="_blank"
        rel="noopener noreferrer"
        ref={firstImage}
        className="imageContainer"
      >
        <div className="stretchyWrapper">
          <img src={projects[0].image} alt={projects[0].title} />
        </div>
        <div className="mt-8">
          <h3 className="md:text-2xl font-normal">{projects[0].title}</h3>
          <p className="font-normal">{projects[0].description}</p>
        </div>
      </a>

      <a
        href={projects[1].link || projects[1].github}
        target="_blank"
        rel="noopener noreferrer"
        ref={secondImage}
        className="imageContainer"
      >
        <div className="stretchyWrapper">
          <img src={projects[1].image} alt={projects[1].title} />
        </div>
        <div className="mt-8">
          <h3 className="md:text-2xl font-normal">{projects[1].title}</h3>
          <p className="font-normal">{projects[1].description}</p>
        </div>
      </a>
    </div>
  );
}
