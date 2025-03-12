import { hero } from '@/data/config';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="flex items-end relative mt-24 md:mt-0 h-screen">
      <div>
        <h1 className="hidden md:flex gap-4 mt-16 text-5xl sm:text-8xl md:text-[12rem] lg:text-[15rem] xl:text-[18.75rem] font-normal text-black dark:text-white text-left  cursor-pointer group">
          <span className="font-normal">L</span>
          <motion.span className="font-normal opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            emuel
          </motion.span>
          <div></div>
          <span className="font-normal">L</span>
          <motion.span className="font-normal opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            loren
          </motion.span>
        </h1>
        <h1 className="flex md:hidden gap-4 mt-16 text-5xl font-normal text-black dark:text-white text-left  cursor-pointer group">
          {hero.title}
        </h1>
      </div>
    </section>
  );
}
