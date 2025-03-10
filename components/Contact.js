import { contact } from '@/data/config';
import React from 'react';
import ScrollVelocity from './animated/ScrollVelocity';

export const Contact = () => {
  return (
    <section className="mt-8 py-48">
      <div>
        <ScrollVelocity
          texts={contact.titleVelocity}
          velocity={100}
          className="lowercase text-2xl md:text-9xl font-normal p-2"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-24">
          <div>
            <p className="mb-16 text-2xl md:text-7xl font-normal">
              {contact.description}
            </p>
            <a
              href={`mailto:${contact.email}`}
              className="text-2xl md:text-7xl font-normal"
            >
              {contact.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
