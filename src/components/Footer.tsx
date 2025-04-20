
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050A1A] py-4 text-center text-white">
      <p>&copy; {currentYear} Fusentra</p>
    </footer>
  );
};

export default Footer;
