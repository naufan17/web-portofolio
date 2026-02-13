import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
    id: string;
    title: string;
    shortDesc: string;
    longDesc: string;
    image: string;
    tech: string[];
    links: { label: string; url: string; icon?: string }[];
}

const projects: Project[] = [
    {
        id: 'sia',
        title: 'Sistem Informasi Akademik MDNU',
        shortDesc: 'The college practical work project creates an academic information system at the Nurul Ummah Islamic Boarding School Kotagede.',
        longDesc: 'The college practical work project creates an Academic Information System at the Nurul Ummah Islamic Boarding School Kotagede. The system was created for students and teachers at Islamic boarding schools to facilitate administrative activities in the form of attendance, assessments and semester reports. The website was created using the Laravel framework and Tailwind.',
        image: 'assets/images/sistem-informasi-akademik-mdnu.webp',
        tech: ['PHP', 'Laravel', 'Tailwind', 'MySQL'],
        links: [
            { label: 'User', url: 'https://github.com/naufan17/sistem-informasi-akademik', icon: 'fa-brands fa-github' },
            { label: 'Admin', url: 'https://github.com/naufan17/sistem-informasi-akademik-admin', icon: 'fa-brands fa-github' },
            { label: 'Demo', url: 'https://siakad-mdnu.herokuapp.com' },
        ]
    },
    {
        id: 'connectBCA',
        title: 'Connect by BCA',
        shortDesc: 'Final project Fullstack Engineer Program from Binar Academy.',
        longDesc: 'Final project Fullstack Engineer Program from Binar Academy. BCA bank clone application in the form of Android and Internet banking that is friendly to users with disabilities. Rest API is created using Express library.',
        image: 'assets/images/connect-by-bca.webp',
        tech: ['TypeScript', 'Express', 'React', 'PostgreSQL'],
        links: [
            { label: 'Frontend', url: 'https://github.com/SYNRGY7-Kelompok-6/connect-bca-frontend', icon: 'fa-brands fa-github' },
            { label: 'Backend', url: 'https://github.com/SYNRGY7-Kelompok-6/connect-bca-backend-js', icon: 'fa-brands fa-github' },
            { label: 'Demo', url: 'https://connect-bca.netlify.app' },
        ]
    },
    {
        id: 'bincangRakyat',
        title: 'Bincang Rakyat',
        shortDesc: 'Final capstone project of the Fullstack Engineer Generation Gigih 3.0 Program with the theme SDGs 11: Sustainable Cities and Communities.',
        longDesc: 'Final capstone project of the Fullstack Engineer Generation Gigih 3.0 Program with the theme SDGs 11: Sustainable Cities and Communities. Website social media for posting complaints related to government public facilities. The Rest API was created using Express library.',
        image: 'assets/images/bincang-rakyat.webp',
        tech: ['JavaScript', 'Express', 'React', 'MongoDB'],
        links: [
            { label: 'Frontend', url: 'https://github.com/CPI-FS-SDG-11-D/LPM-frontend', icon: 'fa-brands fa-github' },
            { label: 'Backend', url: 'https://github.com/CPI-FS-SDG-11-D/LPM-api', icon: 'fa-brands fa-github' },
            { label: 'Demo', url: 'https://bincang-rakyat.vercel.app' },
        ]
    },
    {
        id: 'cryptoMarket',
        title: 'Crypto Market',
        shortDesc: 'Final project JavaScript with API Program from Digital Talent Scholarship.',
        longDesc: 'Final project JavaScript with API Program from Digital Talent Scholarship. Website to monitor the rise and fall of more than 200 crypto prices in real time. The website was created using React by taking API data from Indodax.',
        image: 'assets/images/crypto-market.webp',
        tech: ['TypeScript', 'React', 'Indodax API'],
        links: [
            { label: 'Frontend', url: 'https://github.com/naufan17/crypto-market', icon: 'fa-brands fa-github' },
            { label: 'Demo', url: 'https://crypto-market-idr.netlify.app' },
        ]
    },
    {
        id: 'cekResi',
        title: 'Cek Resi',
        shortDesc: 'Website to track goods shipments from 24 forwarding service companies.',
        longDesc: 'Website to track goods shipments from 24 forwarding service companies. The website is created using Next by retrieving API data from binderbyte.',
        image: 'assets/images/cek-resi.webp',
        tech: ['TypeScript', 'NextJS', 'Binderbyte API'],
        links: [
            { label: 'Frontend', url: 'https://github.com/naufan17/cek-resi', icon: 'fa-brands fa-github' },
            { label: 'Demo', url: 'https://cek-resi-naufan17s-projects.vercel.app' },
        ]
    },
    {
        id: 'bcr',
        title: 'Binar Car Rental',
        shortDesc: 'Synergy Academy bootcamp course project car rental simulation website.',
        longDesc: 'Synergy Academy bootcamp course project car rental simulation website. The website is made using the Express library and React.',
        image: 'assets/images/binar-car-rental.webp',
        tech: ['TypeScript', 'Express', 'React', 'PostgreSQL'],
        links: [
            { label: 'Frontend', url: 'https://github.com/naufan17/24001143-synrgy7-nau_bcr-ch7', icon: 'fa-brands fa-github' },
            { label: 'Backend', url: 'https://github.com/naufan17/24001143-synrgy7-nau_bcr-ch6', icon: 'fa-brands fa-github' },
            { label: 'Demo', url: 'https://nau-binar-car-rental.netlify.app' },
        ]
    },
    {
        id: 'boilerplateExpress',
        title: 'Boilerplate Express Rest Api',
        shortDesc: 'Express started to build REST API',
        longDesc: 'Express started to build REST API',
        image: 'assets/images/boilerplate-express-rest-api.webp',
        tech: ['TypeScript', 'NodeJS', 'Express', 'PostgreSQL', 'MySQL', 'MongoDB', 'Docker'],
        links: [
            { label: 'Demo', url: 'https://github.com/naufan17/express-boilerplate', icon: 'fa-brands fa-github' },
        ]
    },
    {
        id: 'boilerplateGoGin',
        title: 'Boilerplate Go Gin Rest Api',
        shortDesc: 'Go Gin started to build REST API',
        longDesc: 'Go Gin started to build REST API',
        image: 'assets/images/boilerplate-go-gin-rest-api.webp',
        tech: ['Go', 'Gin', 'PostgreSQL', 'Docker'],
        links: [
            { label: 'Demo', url: 'https://github.com/naufan17/go-gin-boilerplate', icon: 'fa-brands fa-github' },
        ]
    }
];

const Portfolio: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <div id="portfolio" className="relative px-4 py-16 mx-auto md:px-24 lg:px-8 sm:py-24 sm:max-w-xl md:max-w-full lg:max-w-7xl">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col justify-center items-center px-4"
            >
                <h1 className="text-3xl text-blue-800 font-ubuntu font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Portfolio
                </h1>
                <h6 className="text-blue-800/70 text-center mt-6 text-lg sm:text-xl font-ubuntu max-w-2xl">
                    Here are some of the projects I have worked on.
                </h6>
            </motion.div> 

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12">
                {projects.map((project) => (
                    <motion.div 
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        whileHover={{ y: -5 }}
                        className="bg-blue-100/50 backdrop-blur-sm border border-blue-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                    >
                        <div className="p-4 sm:p-6 pb-0">
                            <img 
                                className="rounded-2xl w-full h-auto shadow-md" 
                                src={project.image} 
                                alt={project.title} 
                                loading="lazy"
                                decoding="async"
                            />
                        </div>
                        <div className="flex flex-col p-6 space-y-4">
                            <h5 className="text-lg sm:text-xl font-semibold tracking-tight text-blue-900 font-ubuntu">
                                {project.title}
                            </h5>
                            <p className="text-blue-800/80 text-base font-ubuntu line-clamp-2">
                                {project.shortDesc}
                            </p>
                            <div className="flex justify-center pt-4">
                                <motion.button 
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setSelectedProject(project)} 
                                    className="inline-flex items-center px-6 py-2 rounded-full bg-blue-600 text-white text-base font-semibold hover:bg-blue-700 transition-colors font-ubuntu"
                                >
                                    See more <span className="ml-2 fa-solid fa-chevron-right text-sm"></span>
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/60 backdrop-blur-md z-100 flex justify-center items-center overflow-auto p-4"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div 
                            initial={{ scale: 0.9, opacity: 0, y: 50 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 50 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="w-full max-w-3xl bg-blue-50 rounded-3xl max-h-full overflow-y-auto p-6 pt-10 sm:p-10 relative custom-scroll shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button 
                                onClick={() => setSelectedProject(null)} 
                                className="absolute top-4 right-6 py-1 px-2.5 text-blue-900 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors z-10"
                            >
                                <span className="fa-solid fa-times text-xl mt-1"></span>
                            </button>
                            
                            <div className="mt-6">
                                <motion.img 
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="rounded-2xl w-full h-auto shadow-lg mb-8" 
                                    src={selectedProject.image} 
                                    alt={selectedProject.title} 
                                    decoding="async"
                                />
                                <div className="space-y-6">
                                    <h5 className="text-xl sm:text-2xl font-bold text-blue-900 font-ubuntu">
                                        {selectedProject.title}
                                    </h5>
                                    <p className="text-blue-800 text-base sm:text-lg leading-relaxed font-ubuntu">
                                        {selectedProject.longDesc}
                                    </p>
                                    
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.tech.map((t, i) => (
                                            <span key={i} className="px-4 py-1.5 bg-blue-100 text-blue-800 border border-blue-200 rounded-full text-sm font-semibold font-ubuntu">
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    {selectedProject.links.length > 0 && (
                                        <div className="flex flex-wrap gap-4 pt-6 border-t border-blue-200">
                                            {selectedProject.links.map((link, i) => (
                                                <motion.a 
                                                    key={i} 
                                                    href={link.url} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    className="inline-flex items-center px-6 py-2.5 font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-colors font-ubuntu shadow-md"
                                                >
                                                    {link.label} {link.icon && <span className={`${link.icon} ml-2`}></span>}
                                                </motion.a>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Portfolio;
