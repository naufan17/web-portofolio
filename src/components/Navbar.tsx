import React from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  const links = [
    { name: 'Home', href: '#' },
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
      <nav className="flex justify-center py-4 sm:py-6">
        <div 
          className="flex flex-row space-x-1 sm:space-x-4 py-1.5 sm:py-2 px-2 sm:px-4 bg-white/30 backdrop-blur-xl rounded-full border border-white/40 shadow-xl pointer-events-auto"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {links.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              onMouseEnter={() => setHoveredIndex(index)}
              className="relative px-4 py-1 font-semibold text-blue-900 text-sm sm:text-base font-ubuntu transition-colors duration-300"
            >
              {hoveredIndex === index && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-blue-500/15 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.2)]"
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 30,
                    mass: 1,
                  }}
                />
              )}
              <span className="relative z-10">{link.name}</span>
            </motion.a>
          ))}
        </div>
      </nav>
    </motion.header>
  );
};

export default Navbar;
