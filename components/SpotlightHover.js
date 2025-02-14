import { useRef, useCallback, useEffect } from 'react';

const SpotlightHover = ({
  children,
  className = '',
  spotlightColor = 'rgba(255, 255, 255, 0.25)'
}) => {
  const divRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    if (!divRef.current) return;

    const { left, top } = divRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    divRef.current.style.setProperty('--mouse-x', `${x}px`);
    divRef.current.style.setProperty('--mouse-y', `${y}px`);
  }, []);

  useEffect(() => {
    if (divRef.current) {
      divRef.current.style.setProperty('--spotlight-color', spotlightColor);
    }
  }, [spotlightColor]);

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      className={`card-spotlight ${className}`}
    >
      {children}
    </div>
  );
};

export default SpotlightHover;
