import React from 'react';

const HoverTextButton = ({
  as = 'button',
  href,
  onClick,
  children,
  className = '',
  background = false
}) => {
  const Tag = as === 'a' ? 'a' : 'button';

  const baseTextColor = background
    ? 'text-white dark:text-white'
    : 'text-black dark:text-white';
  const backgroundClasses = background
    ? 'bg-black rounded-lg dark:bg-zinc-900 text-white dark:text-white p-5'
    : '';
  const baseBackground = background ? 'bg-lemon dark:bg-current' : 'bg-current';

  return (
    <Tag
      href={as === 'a' ? href : undefined}
      onClick={onClick}
      className={`relative py-1 group inline-flex items-center justify-center overflow-hidden transition-colors duration-500 ${backgroundClasses} ${className}`}
    >
      <div
        className={`inline-flex w-full translate-y-0 items-center justify-center transition duration-500 group-hover:-translate-y-[150%] ${baseTextColor}`}
      >
        {children}
      </div>

      <div className="absolute inline-flex w-full translate-y-[100%] items-center justify-center transition duration-500 group-hover:translate-y-0">
        <span className="absolute translate-y-full skew-y-12 scale-y-0 transition duration-500 group-hover:translate-y-0 group-hover:scale-150"></span>
        <span className={`z-10 font-normal ${baseTextColor}`}>{children}</span>
      </div>

      <span
        className={`absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-500 group-hover:w-full ${baseBackground}`}
      ></span>
    </Tag>
  );
};

export default HoverTextButton;
