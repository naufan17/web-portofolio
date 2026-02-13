import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
    return (
        <footer className="relative px-4 py-8 sm:py-12 md:px-24 lg:px-8 overflow-hidden">
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-7xl mx-auto"
            >
                <div className="bg-white/40 backdrop-blur-xl border border-white/30 rounded-[2.5rem] p-6 sm:p-10 shadow-2xl relative overflow-hidden">
                    {/* Decorative Blobs */}
                    <div className="relative z-10 flex flex-col items-center">                        {/* Copyright */}
                        <div className="flex flex-col sm:flex-row items-center justify-between w-full text-blue-800/60 font-ubuntu space-y-4 sm:space-y-0 text-center sm:text-left text-sm md:text-base">
                            <p>
                                &#169; {new Date().getFullYear()} All rights reserved.
                            </p>
                            <p className="flex items-center">
                                Built with <span className="text-rose-500 mx-1 animate-pulse">❤</span> by Naufan
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </footer>
    );
};

export default Footer;
