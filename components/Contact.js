import { contact, defaultAnimationConfig } from '@/data/config';
import React, { useEffect, useState } from 'react';
import ScrollVelocity from './animated/ScrollVelocity';
import HoverTextButton from './animated/HoverTextButton';
import AnimatedContent from './animated/AnimatedContent';
import FlipInXText from './animated/FlipInXText';
import { useTheme } from 'next-themes';
import Link from 'next/link';

export const Contact = () => {
  const { theme, systemTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (!localStorage.getItem('theme')) {
      setTheme('dark');
    }
  }, [setTheme]);

  if (!mounted) return null;

  const resolvedTheme = theme === 'system' ? systemTheme : theme;
  const isThemeLogo =
    resolvedTheme === 'light' ? contact.logos[1] : contact.logos[0];

  return (
    <section className="mt-8 h-screen md:h-[90vh] flex items-center justify-center">
      <AnimatedContent {...defaultAnimationConfig}>
        <div id="contactMe" className="mt-32">
          <div>
            <div className="w-36 h-36 m-auto cursor-pointer transition-all">
              <Link href="/." passHref>
                <img
                  src={isThemeLogo}
                  alt={contact.title}
                  className="w-full transition-all"
                />
              </Link>
            </div>
            <div>
              <ScrollVelocity
                texts={contact.titleVelocity}
                velocity={100}
                className="text-2xl md:text-7xl font-bold p-2"
              />
            </div>
            <div className="m-28 text-center">
              <HoverTextButton
                as="a"
                href={`mailto:${contact.email}`}
                className="text-black dark:text-white md:text-4xl font-normal"
              >
                <FlipInXText as="span">{contact.email}</FlipInXText>
              </HoverTextButton>
            </div>
          </div>
        </div>
      </AnimatedContent>
    </section>
  );
};
