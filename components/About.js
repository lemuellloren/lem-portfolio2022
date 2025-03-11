import { about } from '@/data/config';

export const About = () => {
  return (
    <section id="about-section" className="t-8 md:py-48">
      <h2 className="mb-8 md:mb-40 lowercase text-2xl md:text-9xl	font-normal">
        {about.title}
      </h2>
      <div className="flex items-center">
        <div className="flex flex-col md:flex-row w-full">
          <div className="md:w-1/4"></div>
          <div className="md:w-3/4">
            <p className="text-2xl md:text-7xl font-normal leading-[1.2] w-full max-w-[ch-unit]">
              {about.description}
            </p>

            <div className="mt-8 md:mt-52 grid grid-cols-1 md:grid-cols-4 gap-4 row-span-1">
              {about.technologies.map((tech, index) => (
                <div key={index}>
                  <h2 className="md:text-4xl font-normal">{tech.header}</h2>
                  <p className="mt-8 font-sm font-light">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
