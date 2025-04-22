
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-4 text-center text-white bg-darkCard">
      <p>&copy; {currentYear} Fusentra</p>
    </footer>
  );
};

export default Footer;
