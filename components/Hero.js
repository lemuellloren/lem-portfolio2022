import { useEffect, useState } from 'react';
import { defaultAnimationConfig, hero } from '@/data/config';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import AnimatedContent from './AnimatedContent';
import BlurText from './BlurText ';
import RotatingText from './RotatingText';

export default function Hero() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (!localStorage.getItem('theme')) {
      setTheme('dark');
    }
  }, [setTheme]);

  const currentTheme = theme === 'system' ? systemTheme : theme;
  const isThemeIcon = currentTheme === 'light' ? 'moon.svg' : 'sun.svg';

  return (
    <AnimatedContent {...defaultAnimationConfig}>
      <header className="mb-20">
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
          {mounted && (
            <button
              className="cursor-pointer toggleTheme w-9 h-9 bg-gray-200 rounded-lg dark:bg-zinc-900 flex items-center justify-center"
              onClick={() =>
                setTheme(currentTheme === 'light' ? 'dark' : 'light')
              }
            >
              <Image
                src={`/static/icons/${isThemeIcon}`}
                width={20}
                height={20}
                alt="Toggle theme"
              />
            </button>
          )}
        </div>
        <BlurText
          text={hero.title}
          as="h1"
          delay={150}
          animateBy="words"
          direction="top"
          className="mt-5 mb-4 font-bold text-3xl md:text-8xl tracking-tight"
        />
        <RotatingText
          positions={hero.position}
          interval={3000}
          spanClassName="block text-gray-700 dark:text-gray-200 mb-4 text-2xl font-bold"
        />
        <div className="text-base">{hero.desc}</div>
        {hero.cv && hero.isActive && (
          <div className="mt-8 rounded-xl py-2 px-4 inline-flex items-center bg-gray-200 dark:bg-zinc-900">
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
                alt="Download CV"
              />
            </a>
          </div>
        )}
      </header>
    </AnimatedContent>
  );
}
