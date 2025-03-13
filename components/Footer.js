'use client';

import { contact, footer } from '@/data/config';
import { useState } from 'react';
import { motion } from 'framer-motion';
import HoverTextButton from './animated/HoverTextButton';

const Footer = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <footer className="mt-20 relative">
      <div className="md:flex justify-between items-center gap-4">
        {footer.social && (
          <div className="grid grid-cols-5 md:grid-cols-3 gap-4">
            {footer.social.map((platform, index) => {
              const lowerCasePlatform = platform.toLowerCase();
              const link = `https://${lowerCasePlatform}.com/${contact[lowerCasePlatform]}`;

              return (
                <HoverTextButton
                  key={index}
                  as="a"
                  className="text-xs md:text-base font-light"
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {platform}
                </HoverTextButton>
              );
            })}
          </div>
        )}

        <div className="relative flex flex-col items-center">
          <p
            className="mt-8 md:mt-0 text-xs md:text-base font-light text-left md:text-right cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            &copy; {new Date().getFullYear()} {footer.title}
          </p>

          {isHovered && (
            <motion.div
              className="hidden md:block absolute bottom-full mb-2 p-3 bg-black dark:bg-white  shadow-lg rounded-md text-sm"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
            >
              <p className="text-xs md:text-sm text-white dark:text-black">
                {footer.builtWith}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
