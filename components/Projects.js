import React from 'react';
import Double from './animated/Double';
import { projects } from '@/data/config';
import ScrollVelocity from './animated/ScrollVelocity';

export const Projects = () => {
  return (
    <section>
      <ScrollVelocity
        texts={projects.scrollVelocityTexts}
        velocity={100}
        className="lowercase text-2xl md:text-9xl font-normal p-2"
      />

      <div>
        {projects.projects.map((_, index, arr) => {
          if (index % 2 === 0 && arr[index + 1]) {
            return (
              <Double
                key={index}
                projects={[arr[index], arr[index + 1]]}
                reversed={index % 4 !== 0}
              />
            );
          }
          return null;
        })}
      </div>
    </section>
  );
};
