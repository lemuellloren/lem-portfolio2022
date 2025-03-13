'use client';

import { useEffect, useState, useRef } from 'react';

const FlipInXText = ({
  as: Tag = 'p',
  children,
  className,
  delay = 'delay-200'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`${
        isVisible ? `animate-flipInX opacity-100 ${delay}` : 'opacity-0'
      } transition-opacity duration-[1.2s] ease-in-out ${className}`}
    >
      {children}
    </Tag>
  );
};

export default FlipInXText;
