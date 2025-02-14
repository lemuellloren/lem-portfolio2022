import Image from 'next/image';
import { contact, defaultAnimationConfig } from '@/data/config';
import AnimatedContent from './AnimatedContent';
import BlurText from './BlurText ';

export default function Stack() {
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
        <p>
          Shoot me an email:{' '}
          <a
            className="dark:text-white text-black transition-colors duration-500"
            href={`mailto:${contact.email}`}
          >
            {contact.email}
          </a>
        </p>
        <div className="flex space-x-5 mt-5 text-lightText transition-colors duration-500">
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
