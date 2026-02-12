import React from 'react';

const Navbar: React.FC = () => {
  return (
    <header>
      <nav className="absolute top-0 left-0 right-0 z-50">
        <div className="hidden sm:flex flex-wrap items-center justify-center px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24">
          <div className="flex flex-row space-x-24 py-6">
            <a href="/" className="py-0.5 px-4 font-semibold text-blue-800 text-base rounded-full hover:bg-blue-200 hover:bg-opacity-50 duration-100 ease-in font-ubuntu">
              Home
            </a>
            <a href="#tech-stack" className="py-0.5 px-4 font-semibold text-blue-800 text-base rounded-full hover:bg-blue-200 hover:bg-opacity-50 duration-100 ease-in font-ubuntu">
              Tech Stack
            </a>
            <a href="#about" className="py-0.5 px-4 font-semibold text-blue-800 text-base rounded-full hover:bg-blue-200 hover:bg-opacity-50 duration-100 ease-in font-ubuntu">
              About
            </a>
            <a href="#portfolio" className="py-0.5 px-4 font-semibold text-blue-800 text-base rounded-full hover:bg-blue-200 hover:bg-opacity-50 duration-100 ease-in font-ubuntu">
              Portfolio
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
