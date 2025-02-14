import { useState } from 'react';
import clsx from 'clsx';
import Image from 'next/image';

const LogoWall = ({
  items = [],
  direction = 'horizontal',
  pauseOnHover = false,
  size = '8rem',
  duration = '60s',
  textColor = '#ffffff',
  showText = false
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

  const renderItems = (keyPrefix) =>
    items.map((item, idx) => (
      <div
        key={`${keyPrefix}-${idx}`}
        className="logo-wrap flex items-center dark:bg-dark bg-white rounded-lg  p-2"
      >
        <Image
          className="h-12 w-12 object-contain"
          src={item.logo}
          alt={item.text}
          width={20}
          height={20}
        />
        {showText && (
          <h4 className="font-normal ml-2 whitespace-nowrap">{item.text}</h4>
        )}
      </div>
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
          <div className="marquee__group">{renderItems(`original-${i}`)}</div>
          <div className="marquee__group" aria-hidden="true">
            {renderItems(`dup-${i}`)}
          </div>
        </div>
      ))}
    </article>
  );
};

export default LogoWall;
