import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { defaultAnimationConfig, projects } from '@/data/config';
import Image from 'next/image';
import AnimatedContent from './AnimatedContent';
import BlurText from './BlurText ';

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const firstItemRef = useRef(null);

  const visibleProjects = showAll
    ? projects.projects
    : projects.projects.slice(0, 3);

  const handleToggle = () => {
    setShowAll(!showAll);
    if (showAll && firstItemRef.current) {
      setTimeout(() => {
        firstItemRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }, 300);
    }
  };

  return (
    <AnimatedContent {...defaultAnimationConfig}>
      <div>
        <div className="overflow-x-hidden w-full" ref={firstItemRef}>
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

        <ul role="list" className="flex gap-4 flex-col mt-8">
          <AnimatePresence initial={false}>
            {visibleProjects.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                whileHover={{ scale: 1.03, cursor: 'pointer' }}
                className="flex flex-col sm:flex-row justify-between gap-4 bg-gray-200 dark:bg-zinc-900 rounded-lg p-5 transition-transform duration-300"
              >
                <div className="min-w-0 flex-auto">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm">{item.description}</p>

                  <div className="flex sm:hidden gap-3 items-center mt-2">
                    {item.link && (
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
                    )}
                    {item.github && (
                      <a
                        href={`https://github.com/${item.github}`}
                        className="flex items-center"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Image
                          src="/static/icons/github.svg"
                          width={18}
                          height={18}
                          alt="GitHub icon"
                        />
                      </a>
                    )}
                  </div>
                </div>

                <div className="hidden sm:flex gap-3 items-center">
                  {item.link && (
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
                  )}
                  {item.github && (
                    <a
                      href={`https://github.com/${item.github}`}
                      className="flex items-center"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        src="/static/icons/github.svg"
                        width={18}
                        height={18}
                        alt="GitHub icon"
                      />
                    </a>
                  )}
                </div>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>

        {projects.projects.length > 3 && (
          <motion.button
            onClick={handleToggle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 rounded-xl py-2 px-4 inline-flex items-center bg-gray-200 dark:bg-zinc-900"
          >
            {showAll ? 'Show Less' : 'Show More'}
          </motion.button>
        )}
      </div>
    </AnimatedContent>
  );
}
