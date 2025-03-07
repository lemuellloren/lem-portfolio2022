import React from 'react';
import Double from './animated/Double';
import { projects } from '@/data/config';
import ScrollVelocity from './animated/ScrollVelocity';

export const Projects = () => {
  return (
    <section>
      <ScrollVelocity texts={projects.scrollVelocityTexts} velocity={100} />
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
      </div>
    </section>
  );
};
