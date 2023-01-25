import Image from 'next/image';
import { experience } from '@/data/config';

export default function Experience() {
  return (
    <div className="">
      <div className="overflow-x-hidden w-full">
        <h2 className="landingSectionTitle max-w-max mx-0 text-left relative mb-4 md:w-max text-2xl md:text-4xl">
          {experience.title}
        </h2>
      </div>
      <p className="text-lg">{experience.desc}</p>
      <div className="grid md:grid-cols-2 gap-4 mt-8">
        {experience.experiences.map((item, index) => {
          return (
            <div key={index} className="mx-auto bg-gradient-to-r p-1 from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] rounded-xl w-full">
              <div  className="h-full dark:bg-dark bg-white p-5 rounded-xl">
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
                <div className="mb-2">
                  <div className="font-bold text-sm">{item.position}</div>
                  <div className="text-sm">{item.year}</div>
                </div>
                <p className="text-sm mb-5">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
