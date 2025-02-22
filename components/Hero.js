import { useEffect, useRef, useState } from 'react';
import { defaultAnimationConfig, hero } from '@/data/config';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import AnimatedContent from './AnimatedContent';
import RotatingText from './RotatingText';
import Waves from './Waves';
import Iridescence from './Iridescence';
import VariableProximity from './VariableProximity';

export default function Hero() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    if (!localStorage.getItem('theme')) {
      setTheme('dark');
    }
  }, [setTheme]);

  const containerRef = useRef(null);
  const currentTheme = mounted
    ? theme === 'system'
      ? systemTheme
      : theme
    : null;
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
          {mounted && currentTheme && (
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
        <div
          className="mt-8"
          ref={containerRef}
          style={{ position: 'relative' }}
        >
          <VariableProximity
            label={'Lemuel Lloren'}
            className={
              'font-bold text-3xl md:text-8xl tracking-tight cursor-pointer'
            }
            fromFontVariationSettings="'wght' 400, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={containerRef}
            radius={100}
            falloff="linear"
          />
        </div>

        {mounted &&
          currentTheme &&
          (currentTheme === 'dark' ? (
            <div className="relative my-5 h-60 w-full">
              <Waves
                lineColor="#fff"
                backgroundColor="#000"
                waveSpeedX={0.02}
                waveSpeedY={0.01}
                waveAmpX={40}
                waveAmpY={20}
                friction={0.9}
                tension={0.01}
                maxCursorMove={120}
                xGap={12}
                yGap={36}
              />
            </div>
          ) : (
            <div className="relative my-5 h-60 w-full">
              <Iridescence
                color={[1, 1, 1]}
                mouseReact={true}
                amplitude={0.1}
                speed={1.0}
              />
            </div>
          ))}

        <div>
          <RotatingText
            positions={hero.position}
            interval={3000}
            spanClassName="block text-gray-700 dark:text-gray-200 mb-4 text-3xl font-bold"
          />
          <div className="text-xl">{hero.desc}</div>
        </div>

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
