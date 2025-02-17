import Image from 'next/image';
import { defaultAnimationConfig, experience } from '@/data/config';
import AnimatedContent from './AnimatedContent';
import BlurText from './BlurText ';

export default function Experience() {
  return (
    <AnimatedContent {...defaultAnimationConfig}>
      <div>
        <div className="overflow-x-hidden w-full">
          <BlurText
            text={experience.title}
            as="h2"
            delay={150}
            animateBy="words"
            direction="top"
            className="landingSectionTitle max-w-max mx-0 text-left relative mb-4 md:w-max text-2xl md:text-4xl"
          />
        </div>
        <p className="text-lg">{experience.desc}</p>

        <ul role="list" className="flex gap-4 flex-col mt-8">
          {experience.experiences.map((item, index) => (
            <li
              key={index}
              className="flex justify-between gap-4 dark:bg-dark bg-white rounded-lg p-5"
            >
              <div className="flex min-w-0 gap-x-4">
                <img
                  alt={item.company}
                  src={item.logo}
                  className="w-8 h-8 rounded-full flex-none rounded-full bg-gray-50"
                />
                <div className="min-w-0 flex-auto">
                  <h3>{item.company}</h3>
                  <p className="mt-1 text-sm font-bold">{item.position}</p>
                  <p className="mt-1 text-sm">{item.year}</p>
                </div>
              </div>

              <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                {item.link && (
                  <a
                    href={item.link}
                    className="flex items-center py-1 px-3"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src="/static/icons/external-link.svg"
                      width={18}
                      height={18}
                      alt="Link icon"
                    />
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </AnimatedContent>
  );
}
