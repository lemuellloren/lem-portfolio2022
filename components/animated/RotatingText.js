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
          initial={{ rotateX: 90, opacity: 0 }}
          animate={{ rotateX: 0, opacity: 1 }}
          exit={{ rotateX: -90, opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          style={{ display: 'inline-block', transformOrigin: 'center' }}
          className={spanClassName}
        >
          {positions[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default RotatingText;
