import React from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const links = [
    { name: 'Home', href: '/' },
    { name: 'Tech Stack', href: '#tech-stack' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 pointer-events-none"
    >
      <nav className="flex justify-center py-6">
        <div className="flex flex-row space-x-8 sm:space-x-16 py-2 px-8 bg-white/20 backdrop-blur-md rounded-full border border-white/30 shadow-lg pointer-events-auto">
          {links.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              whileHover={{ scale: 1.05, color: '#1d4ed8' }}
              whileTap={{ scale: 0.95 }}
              className="font-semibold text-blue-900 text-sm sm:text-base font-ubuntu transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
        </div>
      </nav>
    </motion.header>
  );
};

export default Navbar;
