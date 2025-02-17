import Image from 'next/image';
import { defaultAnimationConfig, projects } from '@/data/config';
import AnimatedContent from './AnimatedContent';
import BlurText from './BlurText ';

export default function Projects() {
  return (
    <AnimatedContent {...defaultAnimationConfig}>
      <div className="">
        <div className="overflow-x-hidden w-full">
          <BlurText
            text={projects.title}
            as="h2"
            delay={150}
            animateBy="words"
            direction="top"
            className="landingSectionTitle max-w-max mx-0 text-left relative mb-4 md:w-max text-2xl md:text-4xl"
          />
        </div>
        <p className="text-lg">{projects.desc}</p>
        <div className="mt-8 grid md:grid-cols-3 gap-4 mt-8">
          {projects.projects.map((item, index) => {
            return (
              <div key={index} className="mx-auto  mb-4 rounded-xl w-full">
                <div className="h-full dark:bg-dark bg-white p-5 rounded-xl">
                  <h3 className="mb-2">{item.title}</h3>
                  <div className="text-sm">{item.description}</div>
                  <div className="flex items-center flex-wrap -m-3 pt-5">
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
                    {item.github && (
                      <a
                        href={`https://github.com/${item.github}`}
                        className="flex items-center py-1 px-3"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Image
                          src="/static/icons/github.svg"
                          width={18}
                          height={18}
                          alt="Link icon"
                        />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AnimatedContent>
  );
}
