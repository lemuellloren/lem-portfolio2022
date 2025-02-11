import Image from 'next/image';
import { hero } from '@/data/config';
import { useTheme } from 'next-themes';

export default function Hero() {
  const { theme, setTheme } = useTheme();
  const moonIcon = 'moon.svg';
  const sunIcon = 'sun.svg';
  const isThemeIcon = theme === 'light' ? moonIcon : sunIcon;
  return (
    <div className="mb-20">
      <div className="flex flex-row items-center justify-between w-full">
        <div className="w-20 h-20 rounded-full relative overflow-hidden">
          <Image
            className="rounded-full"
            src="/static/profile.png"
            layout="fill"
            objectFit="contain"
            alt="Lemuel Lloren"
          />
        </div>
        <button
          className="cursor-pointer toggleTheme w-9 h-9 bg-gray-200 rounded-lg dark:bg-zinc-900 flex items-center justify-center"
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
          <Image
            src={`/static/icons/${isThemeIcon}`}
            width={20}
            height={20}
            alt="Toggle theme"
          />
        </button>
      </div>
      <h1 className="mt-5 mb-4 font-bold text-3xl md:text-5xl tracking-tight">
        {hero.title}
      </h1>
      <h2 className="text-gray-700 dark:text-gray-200 mb-4">{hero.position}</h2>
      <div className="text-base">{hero.desc}</div>
      {hero.cv && hero.isActive && (
        <div className="mt-8 rounded-xl py-2 px-4 rounded inline-flex items-center bg-gray-200 rounded-lg dark:bg-zinc-900 flex items-center justify-center">
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
            <span className="ml-2 font-bold text-lightText transition-colors duration-500 hidden">
              Download CV
            </span>
          </a>
        </div>
      )}
    </div>
  );
}
