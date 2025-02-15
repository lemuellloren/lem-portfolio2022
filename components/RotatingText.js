import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RotatingText = ({
  positions = [],
  interval = 2000,
  className = '',
  spanClassName = ''
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % positions.length);
    }, interval);
    return () => clearInterval(timer);
  }, [positions.length, interval]);

  return (
    <div className={`relative h-12 w-fit overflow-hidden ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={positions[index]}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className={spanClassName}
        >
          {positions[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default RotatingText;
