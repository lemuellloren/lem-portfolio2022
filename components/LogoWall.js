import { useState } from 'react';
import clsx from 'clsx';

const LogoWall = ({
  items = [],
  direction = 'horizontal',
  pauseOnHover = false,
  size = 'clamp(8rem, 1rem + 30vmin, 25rem)',
  duration = '60s',
  textColor = '#ffffff'
}) => {
  const [isPaused, setIsPaused] = useState(false);

  const handleHover = (state) => pauseOnHover && setIsPaused(state);

  const wrapperClass = clsx('logoWall-wrapper', {
    'wrapper--vertical': direction === 'vertical'
  });

  const marqueeClass = clsx('marquee', {
    'marquee--vertical': direction === 'vertical',
    paused: isPaused
  });

  const renderImages = (keyPrefix) =>
    items.map((item, idx) => (
      <img
        className="bg-gray-200 rounded-lg dark:bg-zinc-900"
        key={`${keyPrefix}-${idx}`}
        src={item.logo}
        alt={item.altText}
      />
    ));

  return (
    <article
      className={wrapperClass}
      style={{
        '--size': size,
        '--duration': duration,
        '--color-text': textColor
      }}
    >
      {['', 'marquee--reverse'].map((reverse, i) => (
        <div
          key={i}
          className={clsx(marqueeClass, reverse)}
          onMouseEnter={() => handleHover(true)}
          onMouseLeave={() => handleHover(false)}
        >
          <div className="marquee__group">{renderImages(`original-${i}`)}</div>
          <div className="marquee__group" aria-hidden="true">
            {renderImages(`dup-${i}`)}
          </div>
        </div>
      ))}
    </article>
  );
};

export default LogoWall;
