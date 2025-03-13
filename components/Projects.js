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
        <Double projects={[projects.projects[0], projects.projects[1]]} />
        <Double
          projects={[projects.projects[2], projects.projects[3]]}
          reversed={true}
        />
        <Double projects={[projects.projects[4], projects.projects[5]]} />
        <Double
          projects={[projects.projects[6], projects.projects[7]]}
          reversed={true}
        />
        <Double projects={[projects.projects[8], projects.projects[9]]} />
        <Double
          projects={[projects.projects[10], projects.projects[11]]}
          reversed={true}
        />
        <Double projects={[projects.projects[12], projects.projects[13]]} />
        <Double
          projects={[projects.projects[14], projects.projects[15]]}
          reversed={true}
        />
      </div>
    </section>
  );
};
