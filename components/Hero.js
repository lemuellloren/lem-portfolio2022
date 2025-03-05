import { contact, defaultAnimationConfig, hero } from '@/data/config';
import AnimatedContent from './AnimatedContent';

export default function Hero() {
  return (
    <AnimatedContent {...defaultAnimationConfig}>
      <div className="h-[90vh] md:flex justify-end items-center relative">
        <div
          className="w-full md:max-w-xs"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <img src={hero.profile} alt={hero.title} />
          <div className="text-sm text-black dark:text-white mt-2">
            {hero.description}
          </div>
        </div>
      </div>
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-full text-center px-4">
        <h1 className="text-8xl md:text-[156px] text-[80px] font-normal text-black dark:text-white text-center">
          {hero.title}
        </h1>
        <div className="flex justify-between text-lg text-black dark:text-white">
          {contact.github && (
            <a
              href={`https://github.com/${contact.github}`}
              className="m-0 text-center text-black dark:text-white"
            >
              [github]
            </a>
          )}
          {contact.linkedin && (
            <a
              href={`https://linkedin.com/in/${contact.linkedin}`}
              className="m-0 text-center text-black dark:text-white"
            >
              [linkedin]
            </a>
          )}
          {contact.dribbble && (
            <a
              href={`https://dribbble.com/${contact.dribbble}`}
              className="m-0 text-center text-black dark:text-white"
            >
              [dribbble]
            </a>
          )}
        </div>
      </div>
    </AnimatedContent>
  );
}
