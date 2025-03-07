import { contact, defaultAnimationConfig, hero } from '@/data/config';
import AnimatedContent from './animated/AnimatedContent';

export default function Hero() {
  return (
    <AnimatedContent {...defaultAnimationConfig}>
      <div className="h-[90vh] md:flex justify-end items-center relative mt-24 md:mt-0">
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
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-full text-center">
        <h1 className="text-8xl md:text-[156px] text-[80px] font-normal text-black dark:text-white text-left">
          {hero.title}
        </h1>
      </div>
    </AnimatedContent>
  );
}
