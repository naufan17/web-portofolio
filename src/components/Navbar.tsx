import React from 'react';
import { motion } from 'framer-motion';

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleTheme }) => {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  const links = [
    { name: 'Home', href: '#' },
    { name: 'Tech Stack', href: '#tech-stack' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
  ];

  return (
    <motion.header
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-6 sm:top-0 sm:bottom-auto left-0 right-0 z-50 pointer-events-none"
    >
      {/* Mobile: toggle button floats top-right */}
      <button
        onClick={toggleTheme}
        className="sm:hidden fixed top-4 right-4 flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-slate-900/40 backdrop-blur-sm border border-white/40 dark:border-slate-700/50 shadow-xl pointer-events-auto text-blue-900 dark:text-yellow-400 transition-colors duration-300 hover:bg-blue-500/15 dark:hover:bg-slate-700/50 z-50"
        aria-label="Toggle Dark Mode"
      >
        {isDarkMode ? (
          <span className="fa-solid fa-sun text-lg"></span>
        ) : (
          <span className="fa-solid fa-moon text-lg"></span>
        )}
      </button>

      {/* Desktop: toggle sits next to nav pill */}
      <nav className="flex justify-center items-center py-0 sm:py-6 space-x-2 sm:space-x-4 pointer-events-none">
        <div 
          className="flex flex-row items-center space-x-1 sm:space-x-4 py-1.5 sm:py-2 px-2 sm:px-4 bg-white/30 dark:bg-slate-900/40 backdrop-blur-sm rounded-full border border-white/40 dark:border-slate-700/50 shadow-xl pointer-events-auto transition-colors duration-300"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {links.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              onMouseEnter={() => setHoveredIndex(index)}
              className="relative px-4 py-1 font-semibold text-blue-900 dark:text-slate-200 text-sm sm:text-base font-ubuntu transition-colors duration-300"
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

        <button
          onClick={toggleTheme}
          className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-white/30 dark:bg-slate-900/40 backdrop-blur-sm border border-white/40 dark:border-slate-700/50 shadow-xl pointer-events-auto text-blue-900 dark:text-yellow-400 transition-colors duration-300 hover:bg-blue-500/15 dark:hover:bg-slate-700/50"
          aria-label="Toggle Dark Mode"
        >
          {isDarkMode ? (
            <span className="fa-solid fa-sun text-xl"></span>
          ) : (
            <span className="fa-solid fa-moon text-xl"></span>
          )}
        </button>
      </nav>
    </motion.header>
  );
};

export default Navbar;
