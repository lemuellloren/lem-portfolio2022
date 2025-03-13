import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import AnimatedContent from './animated/AnimatedContent';
import { defaultAnimationConfig } from '@/data/config';
import FlipInXText from './animated/FlipInXText';

export default function Navigation() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [dateTime, setDateTime] = useState(null);

  useEffect(() => {
    setMounted(true);
    if (!localStorage.getItem('theme')) {
      setTheme('dark');
    }
  }, [setTheme]);

  useEffect(() => {
    const updateTime = () => setDateTime(new Date());
    updateTime();
    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const year = dateTime ? dateTime.getFullYear() : '—';
  const month = dateTime
    ? dateTime.toLocaleString('default', { month: 'long' })
    : '—';
  const time = dateTime ? dateTime.toLocaleTimeString() : '—';

  const resolvedTheme = theme === 'system' ? systemTheme : theme;
  const isThemeLogo = theme === 'light' ? 'lem-dark-logo.svg' : 'lem-logo.svg';

  return (
    <nav
      id="mainNav"
      className="fixed top-0 left-0 w-full z-50 dark:bg-black bg-white shadow-sm"
    >
      <div className="p-6 md:p-8 m-auto w-full flex flex-wrap justify-between items-center">
        <Link href="/." className="cursor-pointer" passHref>
          <Image
            src={`/static/logos/${isThemeLogo}`}
            alt="Lemuel"
            width={30}
            height={30}
          />
        </Link>

        <div className="flex flex-wrap items-center space-x-6">
          <FlipInXText
            as="p"
            className="text-xs font-light dark:text-white text-black"
          >
            Based in <br /> Davao City
          </FlipInXText>
          <FlipInXText
            as="p"
            className="text-xs font-light dark:text-white text-black"
          >
            {month} {year} <br /> {time}
          </FlipInXText>

          {mounted && (
            <button
              className="cursor-pointer w-9 h-9 bg-black rounded-lg dark:bg-zinc-900 flex items-center justify-center"
              onClick={() =>
                setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
              }
            >
              {resolvedTheme === 'light' ? (
                <Moon size={20} />
              ) : (
                <Sun size={20} />
              )}
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
