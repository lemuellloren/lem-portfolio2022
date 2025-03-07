import { defaultAnimationConfig, stack } from '@/data/config';
import LogoWall from './animated/LogoWall';
import AnimatedContent from './animated/AnimatedContent';
import BlurText from './animated/BlurText ';

export default function Stack() {
  return (
    <AnimatedContent {...defaultAnimationConfig}>
      <div>
        <div className="overflow-x-hidden w-full">
          <BlurText
            text={stack.title}
            as="h2"
            delay={150}
            animateBy="words"
            direction="top"
            className="landingSectionTitle max-w-max mx-0 text-left relative mb-4 md:w-max text-2xl md:text-4xl"
          />
        </div>
        <div className="w-full flex flex-wrap -m-2">
          <LogoWall
            items={stack.stack}
            direction="horizontal"
            pauseOnHover={true}
            duration="60s"
            showText={true}
          />
        </div>
      </div>
    </AnimatedContent>
  );
}
