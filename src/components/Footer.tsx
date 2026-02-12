import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
    return (
        <footer className="relative my-4 sm:my-10 px-4">
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-7xl mx-auto"
            >
                <div className="bg-white/40 backdrop-blur-xl border border-white/30 rounded-[2.5rem] p-8 sm:p-12 shadow-2xl relative overflow-hidden">
                    {/* Decorative Blobs */}
                    <div className="absolute -top-12 -left-12 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl"></div>
                    <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-rose-400/10 rounded-full blur-2xl"></div>

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
