import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { about } from '@/data/config';

export const About = () => {
  const controls = useAnimation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('about-section');
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (visible) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [visible, controls]);

  return (
    <section id="about-section" className="mt-8 py-32 md:py-44">
      <div className="flex flex-col md:flex-row w-full">
        <div className="md:w-1/4">
          <h2 className="text-2xl font-normal mb-4 md:mb-0">{about.title}</h2>
        </div>
        <div className="md:w-3/4">
          {about.descriptions.map((description, index) => (
            <motion.p
              key={index}
              className="text-4xl"
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              {description}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
};
