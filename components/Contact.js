import { contact, defaultAnimationConfig } from '@/data/config';
import React from 'react';
import ScrollVelocity from './animated/ScrollVelocity';
import HoverTextButton from './animated/HoverTextButton';
import AnimatedContent from './animated/AnimatedContent';
import FlipInXText from './animated/FlipInXText';

export const Contact = () => {
  return (
    <section className="mt-8 md:py-48">
      <div>
        <ScrollVelocity
          texts={contact.titleVelocity}
          velocity={100}
          className="lowercase text-2xl md:text-9xl font-normal p-2"
        />
      </div>
      <AnimatedContent {...defaultAnimationConfig}>
        <div
          id="contactMe"
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-24"
        >
          <div>
            <FlipInXText
              as="p"
              className="mb-8 md:mb-16 text-2xl md:text-7xl font-normal  py-14"
            >
              {contact.description}
            </FlipInXText>
            <HoverTextButton
              as="a"
              href={`mailto:${contact.email}`}
              className="text-black dark:text-white text-xl md:text-7xl font-normal"
            >
              <FlipInXText as="span">{contact.email}</FlipInXText>
            </HoverTextButton>
          </div>
        </div>
      </AnimatedContent>
    </section>
  );
};
