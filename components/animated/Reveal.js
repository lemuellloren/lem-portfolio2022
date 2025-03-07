import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { about } from '@/data/config';

export const Reveal = ({
  children,
  as: Tag = 'p',
  delay = 0,
  tagClassName = 'text-4xl'
}) => {
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      transition={{ delay, duration: 0.6 }}
    >
      <Tag className={tagClassName}>{children}</Tag>
    </motion.div>
  );
};
