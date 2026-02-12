import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

const Hero: React.FC = () => {
  return (
    <div id="home" className="relative px-4 py-6 h-screen mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
      <div className="flex flex-col justify-center items-center h-full">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col justify-center items-center space-y-3 sm:space-y-4"
        >
          <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-rose-700 text-center text-2xl font-ubuntu font-semibold leading-tight tracking-tight sm:text-4xl md:text-6xl min-h-[3rem] sm:min-h-[4rem]">
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString("Hi, I'm Naufan, a")
                  .start();
              }}
              options={{
                autoStart: true,
                delay: 75,
                cursor: "|"
              }}
            />
          </h1>
          <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-rose-700 to-blue-700 text-center text-2xl font-ubuntu font-semibold leading-tight tracking-tight sm:text-4xl md:text-6xl min-h-[3rem] sm:min-h-[4rem]">
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
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.5 }}
          className="flex justify-center items-center mt-12 sm:mt-16"
        >
          <motion.a 
            href="#tech-stack" 
            whileHover={{ scale: 1.1, backgroundColor: '#dbeafe' }}
            whileTap={{ scale: 0.9 }}
            className="flex justify-center items-center rounded-full border-2 border-blue-800 w-12 h-12 hover:border-blue-300 transition-colors shadow-lg"
          >
            <motion.span 
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="fa-solid fa-arrow-down text-blue-800 text-xl sm:text-2xl"
            ></motion.span>
          </motion.a>    
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
