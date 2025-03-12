import { contact } from '@/data/config';
import React from 'react';
import ScrollVelocity from './animated/ScrollVelocity';
import HoverTextButton from './animated/HoverTextButton';

export const Contact = () => {
  return (
    <section className="mt-8 md:py-48">
      <div>
        <ScrollVelocity
          texts={contact.titleVelocity}
          velocity={100}
          className="lowercase text-2xl md:text-9xl font-normal p-2"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-24">
          <div>
            <p className="mb-8 md:mb-16 text-2xl md:text-7xl font-normal  py-14">
              {contact.description}
            </p>
            <HoverTextButton
              as="a"
              href={`mailto:${contact.email}`}
              className="text-black dark:text-white text-xl md:text-7xl font-normal"
            >
              {contact.email}
            </HoverTextButton>
          </div>
        </div>
      </div>
    </section>
  );
};
