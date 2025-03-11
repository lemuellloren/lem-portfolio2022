import { contact, defaultAnimationConfig, hero } from '@/data/config';
import AnimatedContent from './animated/AnimatedContent';

export default function Hero() {
  return (
    <section>
      <div className="md:h-[100vh] md:flex justify-center items-end relative mt-24 md:mt-0">
        <h1 className="mt-32 text-8xl md:text-[18.75rem] text-[80px] font-normal text-black dark:text-white text-left">
          {hero.title}
        </h1>
      </div>
    </section>
  );
}
