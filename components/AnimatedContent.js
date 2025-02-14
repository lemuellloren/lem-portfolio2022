import { useRef, useEffect, useState, useMemo } from 'react';
import { useSpring, animated } from '@react-spring/web';

const AnimatedContent = ({
  children,
  distance = 100,
  direction = 'vertical',
  reverse = false,
  config = { tension: 50, friction: 25 },
  initialOpacity = 0,
  animateOpacity = true,
  scale = 1,
  threshold = 0.1,
  delay = 0
}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef();

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) =>
        entry.isIntersecting &&
        setTimeout(() => {
          setInView(true);
          observer.disconnect();
        }, delay),
      { threshold }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, delay]);

  const axis = useMemo(
    () => (direction === 'horizontal' ? 'X' : 'Y'),
    [direction]
  );

  const springProps = useSpring({
    from: {
      transform: `translate${axis}(${
        reverse ? -distance : distance
      }px) scale(${scale})`,
      opacity: animateOpacity ? initialOpacity : 1
    },
    to: inView && { transform: `translate${axis}(0px) scale(1)`, opacity: 1 },
    config
  });

  return (
    <animated.div ref={ref} style={springProps}>
      {children}
    </animated.div>
  );
};

export default AnimatedContent;
