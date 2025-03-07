import { about } from '@/data/config';
import { Reveal } from './animated/Reveal';

export const About = () => {
  return (
    <section id="about-section" className="mt-8 h-[600px] flex items-center">
      <div className="flex flex-col md:flex-row w-full">
        <div className="md:w-1/4">
          <h2 className="text-2xl font-normal mb-4 md:mb-0">{about.title}</h2>
        </div>
        <div className="md:w-3/4">
          {about.descriptions.map((description, index) => (
            <Reveal key={index} as="p" delay={index * 0.2}>
              {description}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
