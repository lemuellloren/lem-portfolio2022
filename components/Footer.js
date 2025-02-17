import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20">
      <div className="container mx-auto">
        <p className="text-xs">&copy; {currentYear} Lemuel Lloren</p>
      </div>
    </footer>
  );
};

export default Footer;
