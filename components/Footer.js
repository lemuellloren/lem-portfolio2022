import Image from 'next/image';
import React from 'react';

const Footer = () => (
  <footer className="mt-20">
    <div className="container mx-auto">
      <p className="text-xs flex items-center gap-1">
        &copy; {new Date().getFullYear()} Made with
        <Image
          src="/static/icons/heart.svg"
          width={16}
          height={16}
          alt="Heart icon"
        />
      </p>
    </div>
  </footer>
);

export default Footer;
