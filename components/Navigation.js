import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (!localStorage.getItem('theme')) {
      setTheme('dark');
    }
  }, [setTheme]);

  const resolvedTheme = theme === 'system' ? systemTheme : theme;
  const isThemeLogo = theme === 'light' ? 'lem-dark-logo.svg' : 'lem-logo.svg';

  return (
    <nav className="fixed top-0 left-0 w-full z-50 dark:bg-black bg-white shadow-sm">
      <div className="p-6 lg:px-20 m-auto w-full flex justify-between items-center">
        <Image
          src={`/static/logos/${isThemeLogo}`}
          alt="Lemuel"
          width={30}
          height={30}
        />

        <div className="hidden md:flex space-x-6">
          <a href="#about" className="text-md dark:text-white text-black">
            about
          </a>
          <a href="#about" className="text-md dark:text-white text-black">
            project
          </a>
          <a href="#services" className="text-md dark:text-white text-black">
            experience
          </a>
          <a href="#services" className="text-md dark:text-white text-black">
            tech stack
          </a>
          <a href="#contact" className="text-md dark:text-white text-black">
            contact
          </a>
        </div>

        <div className="flex items-center space-x-4">
          {mounted && (
            <button
              className="cursor-pointer w-9 h-9 bg-gray-200 rounded-lg dark:bg-zinc-900 flex items-center justify-center"
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
          <button
            className="md:hidden p-2 dark:text-white text-black"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden flex flex-col space-y-4 bg-white shadow-md p-4 dark:bg-black"
        >
          <a href="#home" className="block dark:text-white text-black">
            Home
          </a>
          <a href="#about" className="block dark:text-white text-black">
            About
          </a>
          <a href="#services" className="block dark:text-white text-black">
            Services
          </a>
          <a href="#contact" className="block dark:text-white text-black">
            Contact
          </a>
        </motion.div>
      )}
    </nav>
  );
}
