import React from 'react';
import Typewriter from 'typewriter-effect';

const Hero: React.FC = () => {
  return (
    <div id="home" className="relative px-4 py-6 h-screen mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
      <div className="flex flex-col justify-center items-center h-full">
        <div className="flex flex-col justify-center items-center space-y-3 sm:space-y-4">
          <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-rose-700 text-center text-4xl font-ubuntu font-semibold leading-tight tracking-tight sm:text-5xl md:text-[64px]">
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString("Hi, I'm Naufan, a")
                  .start();
              }}
              options={{
                autoStart: true,
                delay: 75,
                cursor: ""
              }}
            />
          </h1>
          <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-rose-700 to-blue-700 text-center text-4xl font-ubuntu font-semibold leading-tight tracking-tight sm:text-5xl md:text-[64px]">
            <Typewriter
              onInit={(typewriter) => {
                typewriter.pauseFor(1500)
                  .typeString('Full Stack Developer')
                  .start();
              }}
              options={{
                autoStart: true,
                delay: 75,
              }}
            />
          </h1>
        </div>
        <div className="flex justify-center items-center mt-12 sm:mt-16">
          <a href="#tech-stack" className="flex justify-center items-center rounded-full border-2 border-blue-800 w-10 sm:w-12 h-10 sm:h-12 animate-bounce hover:bg-blue-200 hover:border-blue-200 duration-100 ease-in">
            <span className="fa-solid fa-arrow-down text-blue-800 text-xl sm:text-2xl"></span>
          </a>    
        </div>
      </div>
    </div>
  );
};

export default Hero;
