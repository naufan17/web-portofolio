import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
    const socialLinks = [
        { icon: 'fa-solid fa-envelope', href: 'mailto:muhammadnaufan719@gmail.com', color: 'hover:text-red-500' },
        { icon: 'fa-brands fa-whatsapp', href: 'https://wa.me/6289630743492', color: 'hover:text-green-500' },
        { icon: 'fa-brands fa-linkedin', href: 'https://www.linkedin.com/in/muhammad-naufan/', color: 'hover:text-blue-600' },
        { icon: 'fa-brands fa-github', href: 'https://github.com/naufan17', color: 'hover:text-gray-900' },
    ];

    return (
        <div id="about" className="relative mt-4 sm:mt-20 px-4 py-8 sm:py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-lg md:px-24 lg:px-8">
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white/40 backdrop-blur-xl border border-white/30 rounded-[2.5rem] p-8 sm:p-16 lg:p-20 shadow-2xl relative overflow-hidden"
            >
                {/* Decorative background shape */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-400/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-rose-400/10 rounded-full blur-3xl"></div>

                <div className="flex flex-col justify-center items-center relative z-10">
                    <motion.h1 
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-3xl sm:text-4xl text-blue-900 font-ubuntu font-bold leading-tight tracking-tight mb-8"
                    >
                        About Me
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-blue-900/80 text-center max-w-2xl text-lg md:text-xl font-ubuntu leading-relaxed"
                    >  
                        I'm Naufan, a Full Stack Developer passionate about building innovative, user-friendly applications. 
                        I thrive on learning new technologies and staying up-to-date with the latest IT trends. 
                    </motion.p>
                </div>

                <div className="flex justify-center items-center mt-12 space-x-6 sm:space-x-8">
                    {socialLinks.map((link, index) => (
                        <motion.a 
                            key={index}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            whileHover={{ scale: 1.1, y: -5 }}
                            whileTap={{ scale: 0.9 }}
                            className={`text-3xl sm:text-4xl text-blue-800 transition-colors duration-300 ${link.color}`}
                        >
                            <span className={link.icon}></span>  
                        </motion.a>
                    ))}
                </div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="flex justify-center items-center mt-12"
                >
                    <motion.a 
                        whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(29, 78, 216, 0.4)" }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block px-10 py-3 font-semibold text-white bg-blue-600 text-lg rounded-2xl shadow-lg hover:bg-blue-700 transition-all font-ubuntu" 
                        href="https://www.canva.com/design/DAF9sAxu3Ew/B2HgZlbOpLM5xXjv0ZEMJQ/view?utm_content=DAF9sAxu3Ew&utm_campaign=designshare&utm_medium=link&utm_source=editor"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Download CV
                    </motion.a>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default About;
