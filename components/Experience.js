import Image from 'next/image';
import { experience } from '@/data/config';

export default function Experience() {
  return (
    <div className="">
      <div className="overflow-x-hidden w-full">
        <h2 className="landingSectionTitle max-w-max mx-0 text-left relative mb-4 md:w-max ">
          {experience.title}
        </h2>
      </div>
      <p className="text-lg">{experience.desc}</p>
      <div className="mt-8 p-6 border border-lightText rounded-xl mb-4">
        {experience.experiences.map((item, index) => {
          return (
            <div key={index} className="mb-5 border-lightText border-b">
              <div className="flex items-center flex-wrap">
                  <div className="company-name">
                     <h3>{item.company}</h3>
                  </div>
                  <div className="company-url">
                      {item.link && (
                      <a
                        href={item.link}
                        className="flex items-center  py-1 px-3"
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
                  </div>
              </div>
              <div className="flex flex-col md:flex-row md:gap-2 my-2">
                <small className="font-bold">{item.position}</small>
                <small>{item.year}</small>
              </div>
              <p className="mb-5">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
