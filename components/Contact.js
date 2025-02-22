import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { contact, defaultAnimationConfig } from '@/data/config';
import AnimatedContent from './AnimatedContent';
import VariableProximity from './VariableProximity';
import GradientText from './GradientText';
import BlurText from './BlurText ';

export default function Stack() {
  const containerRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <AnimatedContent {...defaultAnimationConfig}>
      <div>
        <div className="overflow-x-hidden w-full">
          <BlurText
            text={contact.title}
            as="h2"
            delay={150}
            animateBy="words"
            direction="top"
            className="landingSectionTitle max-w-max mx-0 text-left relative mb-4 md:w-max text-2xl md:text-4xl"
          />
        </div>

        <div className="f">
          {isMounted && (
            <div
              className="mt-8"
              ref={containerRef}
              style={{ position: 'relative' }}
            >
              <VariableProximity
                as="h2"
                label="Email me"
                className="font-bold text-3xl md:text-8xl tracking-tight cursor-pointer"
                fromFontVariationSettings="'wght' 400, 'opsz' 9"
                toFontVariationSettings="'wght' 1000, 'opsz' 40"
                containerRef={containerRef}
                radius={100}
                falloff="linear"
              />
            </div>
          )}

          {isMounted ? (
            <a href={`mailto:${contact.email}`}>
              <GradientText
                as="p"
                colors={['#40ffaa', '#4079ff', '#40ffaa', '#4079ff', '#40ffaa']}
                animationSpeed={5}
                showBorder={false}
                className="text-xl md:text-3xl font-bold"
              >
                {contact.email}
              </GradientText>
            </a>
          ) : (
            <p className="text-xl md:text-3xl font-bold">{contact.email}</p>
          )}
        </div>

        <div className="flex space-x-5 mt-5 text-lightText transition-colors duration-500 hover:underline">
          {contact.github && (
            <a
              href={`https://github.com/${contact.github}`}
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/static/icons/github.svg"
                width={20}
                height={20}
                alt="Github icon"
              />
            </a>
          )}
          {contact.dribbble && (
            <a
              href={`https://dribbble.com/${contact.dribbble}`}
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/static/icons/dribbble.svg"
                width={20}
                height={20}
                alt="Dribbble icon"
              />
            </a>
          )}
          {contact.linkedin && (
            <a
              href={`https://linkedin.com/in/${contact.linkedin}`}
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/static/icons/linkedin.svg"
                width={20}
                height={20}
                alt="LinkedIn icon"
              />
            </a>
          )}
        </div>
      </div>
    </AnimatedContent>
  );
}
