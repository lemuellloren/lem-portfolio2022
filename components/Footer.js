import { contact } from '@/data/config';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => (
  <footer className="mt-20">
    <div className="md:flex justify-between items-center gap-4">
      <div className="grid grid-cols-5 md:grid-cols-3 gap-4">
        <Link
          className="text-xs md:text-base font-light"
          href={`https://linkedin.com/in/${contact.linkedin}`}
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </Link>
        <Link
          className="text-xs md:text-base font-light"
          href=""
          target="_blank"
          rel="noreferrer"
        >
          Github
        </Link>
        <Link
          className="text-xs md:text-base font-light"
          href={`https://dribbble.com/${contact.dribbble}`}
          target="_blank"
          rel="noreferrer"
        >
          Dribbble
        </Link>
      </div>
      <div>
        <p className="mt-8 md:mt-0 text-xs md:text-base font-light text-left md:text-right">
          &copy; {new Date().getFullYear()} {''}
          Design & Development by Lemuel Lloren
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
