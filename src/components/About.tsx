import React from 'react';

const About: React.FC = () => {
    return (
        <div id="about" className="relative mt-8 sm:mt-12 px-4 py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-lg md:px-24 lg:px-8 lg:py-12">
            <div className="bg-blue-100 border border-blue-200 rounded-2xl p-8 sm:p-10">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-3xl text-blue-800 font-ubuntu font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                        About
                    </h1>
                    <p className="text-blue-800 text-center mt-6 sm:mt-8 text-xl md:text-2xl font-ubuntu">  
                        I'm Naufan, a Full Stack Developer passionate about building innovative, user-friendly applications. 
                        I thrive on learning new technologies and staying up-to-date with the latest IT trends. 
                        Skilled in a wide range of tools and technologies essential for Full Stack Development                    
                    </p>
                </div>
                <div className="flex justify-center items-center mt-6 sm:mt-8 space-x-3 sm:space-x-4">
                    <a href="mailto:muhammadnaufan719@gmail.com" className="px-2 sm:px-3 text-[28px] sm:text-[32px] text-blue-800 rounded-xl hover:bg-blue-200 duration-100 ease-in">
                        <span className="fa-solid fa-envelope"></span>  
                    </a>
                    <a href="https://wa.me/6289630743492" className="px-2 sm:px-3 text-[28px] sm:text-[32px] text-blue-800 rounded-xl hover:bg-blue-200 duration-100 ease-in">
                        <span className="fa-brands fa-whatsapp"></span>
                    </a>
                    <a href="https://www.linkedin.com/in/muhammad-naufan/" className="px-2 sm:px-3 text-[28px] sm:text-[32px] text-blue-800 rounded-xl hover:bg-blue-200 duration-100 ease-in">
                        <span className="fa-brands fa-linkedin"></span>
                    </a>
                    <a href="https://github.com/naufan17" className="px-2 sm:px-3 text-[28px] sm:text-[32px] text-blue-800 rounded-xl hover:bg-blue-200 duration-100 ease-in">
                        <span className="fa-brands fa-github"></span>
                    </a>
                </div>
                <div className="flex justify-center items-center mt-6 sm:mt-8">
                    <a 
                        className="inline-block px-6 sm:px-8 py-2 sm:py-2.5 font-semibold text-blue-800 text-base sm:text-lg rounded-xl border-2 border-blue-800 hover:bg-blue-200 hover:border-blue-200 duration-100 ease-in font-ubuntu" 
                        href="https://www.canva.com/design/DAF9sAxu3Ew/B2HgZlbOpLM5xXjv0ZEMJQ/view?utm_content=DAF9sAxu3Ew&utm_campaign=designshare&utm_medium=link&utm_source=editor"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        CV
                    </a>
                </div>
            </div>
        </div>
    );
};

export default About;
