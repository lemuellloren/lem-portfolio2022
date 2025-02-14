import Image from 'next/image';
import { defaultAnimationConfig, experience } from '@/data/config';
import AnimatedContent from './AnimatedContent';
import BlurText from './BlurText ';

export default function Experience() {
  return (
    <AnimatedContent {...defaultAnimationConfig}>
      <div className="">
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
        <div className="grid md:grid-cols-2 gap-4 mt-8">
          {experience.experiences.map((item, index) => {
            return (
              <div
                key={index}
                className="dark:bg-dark bg-white h-full p-5 mx-auto border border-lightText mb-4 rounded-xl w-full"
              >
                <div className="flex items-center flex-wrap gap-4 mb-5">
                  <div>
                    <img
                      className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                      src={item.logo}
                      alt={item.company}
                    />
                  </div>
                  <div className="company-name">
                    <h3>{item.company}</h3>
                  </div>
                  <div className="company-url">
                    {item.link && (
                      <a
                        href={item.link}
                        className="flex items-center  py-1 px-3"
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
                <div className="mb-2">
                  <div className="font-bold text-sm">{item.position}</div>
                  <div className="text-sm">{item.year}</div>
                </div>
                <p className="text-sm mb-5">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </AnimatedContent>
  );
}
