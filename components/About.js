import { about } from '@/data/config';
import FlipInXText from './animated/FlipInXText';

export const About = () => {
  return (
    <section id="aboutSection" className="t-8 md:py-48 max-w-5xl mx-auto">
      <div>
        <FlipInXText
          as="p"
          className="text-2xl md:text-7xl font-normal leading-[1.2] w-full max-w-[ch-unit]"
        >
          {about.description}
        </FlipInXText>
        <div className="mt-8 md:mt-52 grid grid-cols-1 md:grid-cols-4 gap-4 row-span-1">
          {about.technologies.map((tech, index) => (
            <div key={index} className="mb-9 md:mb-0">
              <FlipInXText as="h2" className="md:text-4xl font-normal">
                {tech.header}
              </FlipInXText>
              <FlipInXText as="p" className="mt-8 font-sm font-light">
                {tech.description}
              </FlipInXText>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
