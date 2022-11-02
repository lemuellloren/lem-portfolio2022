import Image from 'next/image';
import { hero } from '@/data/config';
import { useTheme } from 'next-themes';

export default function Hero() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="mb-20">
      <div className="flex flex-row items-center justify-between w-full">
        <div className="w-20 h-20 rounded-full relative overflow-hidden">
          <Image
            className="grayscale"
            src="/static/profile.png"
            layout="fill"
            objectFit="contain"
            alt="LeBron"
          />
        </div>
        <Image
          src={
            theme === 'light'
              ? '/static/icons/moon.svg'
              : '/static/icons/sun.svg'
          }
          width={30}
          height={30}
          alt="Toggle theme"
          className="cursor-pointer toggleTheme"
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        />
      </div>
      <h1 className="mt-5 mb-4">{hero.title}</h1>
      <p className="text-lg">{hero.desc}</p>
      <div className=" mt-8 border border-lightText rounded-xl py-2 px-4 rounded inline-flex items-center">
        {hero.cv && (
          <a
            href={hero.cv}
            className="flex items-center"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/static/icons/download.svg"
              width={18}
              height={18}
              alt="Link icon"
            />
            <span className="ml-2  text-lightText  transition-colors duration-500">
              Download CV
            </span>
          </a>
        )}
      </div>
    </div>
  );
}
