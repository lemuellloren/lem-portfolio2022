import Image from 'next/image';
import AnimatedContent from './AnimatedContent';
import BlurText from './BlurText ';
import { defaultAnimationConfig, experience } from '@/data/config';

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
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-gray-200 dark:bg-zinc-900 rounded-lg p-5 w-full"
            >
              <div className="flex items-center gap-x-4 w-full sm:w-auto">
                <img
                  alt={item.company}
                  src={item.logo}
                  className="w-10 h-10 rounded-full bg-gray-50"
                />
                <div className="min-w-0">
                  <h3 className="font-semibold">{item.company}</h3>
                  <p className="mt-1 text-sm font-bold flex flex-wrap gap-2">
                    {item.position}{' '}
                    <span className="text-gray-500">{item.year}</span>
                  </p>
                  {item.link && (
                    <a
                      href={item.link}
                      className="sm:hidden flex items-center mt-2"
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
              </div>
              {item.link && (
                <div className="hidden sm:flex">
                  <a
                    href={item.link}
                    className="flex items-center"
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
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </AnimatedContent>
  );
}
