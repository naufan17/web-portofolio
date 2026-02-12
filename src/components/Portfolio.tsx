import React, { useState } from 'react';

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
        image: '/assets/images/sistem-informasi-akademik-mdnu.png',
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
        image: '/assets/images/connect-by-bca.png',
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
        image: '/assets/images/bincang-rakyat.png',
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
        longDesc: 'Final project JavaScript with API Program from Digital Talent Scholarship.',
        image: '/assets/images/crypto-market.png',
        tech: ['JavaScript', 'API'],
        links: []
    },
    {
        id: 'cekResi',
        title: 'Cek Resi',
        shortDesc: 'Website to track goods shipments from 24 forwarding service companies.',
        longDesc: 'Website to track goods shipments from 24 forwarding service companies.',
        image: '/assets/images/cek-resi.png',
        tech: ['JavaScript', 'API'],
        links: []
    },
    {
        id: 'bcr',
        title: 'Binar Car Rental',
        shortDesc: 'Synergy Academy bootcamp course project car rental simulation website.',
        longDesc: 'Synergy Academy bootcamp course project car rental simulation website.',
        image: '/assets/images/binar-car-rental.png',
        tech: ['JavaScript', 'React'],
        links: []
    },
    {
        id: 'boilerplateExpress',
        title: 'Boilerplate Express Rest Api',
        shortDesc: 'Express started to build REST API',
        longDesc: 'Express started to build REST API',
        image: '/assets/images/boilerplate-express-rest-api.png',
        tech: ['TypeScript', 'NodeJS', 'Express', 'PostgreSQL', 'MySQL', 'MongoDB', 'Docker'],
        links: [
            { label: 'Demo', url: 'https://github.com/naufan17/express-boilerplate' },
        ]
    },
    {
        id: 'boilerplateGoGin',
        title: 'Boilerplate Go Gin Rest Api',
        shortDesc: 'Go Gin started to build REST API',
        longDesc: 'Go Gin started to build REST API',
        image: '/assets/images/boilerplate-go-gin-rest-api.png',
        tech: ['Go', 'Gin', 'PostgreSQL', 'Docker'],
        links: [
            { label: 'Demo', url: 'https://github.com/naufan17/go-gin-boilerplate' },
        ]
    }
];

const Portfolio: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <div id="portfolio" className="relative mt-8 sm:mt-12 px-4 py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-12">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-3xl text-blue-800 font-ubuntu font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                    Portfolio
                </h1>
                <p className="text-blue-800 text-center mt-6 sm:mt-8 text-xl sm:text-2xl font-ubuntu">
                    Here are some of the projects I have worked on.
                </p>
            </div> 
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12">
                {projects.map((project) => (
                    <div key={project.id} className="bg-blue-100 bg-opacity-50 border border-blue-200 rounded-2xl duration-500">
                        <div className="flex justify-end p-4 sm:p-6">
                            <img className="rounded-lg w-full h-auto" src={project.image} alt={project.title} />
                        </div>
                        <div className="flex flex-col justify-left px-4 sm:px-6 space-y-4">
                            <h5 className="text-xl sm:text-2xl font-semibold tracking-tight text-blue-800 font-ubuntu">
                                {project.title}
                            </h5>
                            <p className="text-blue-800 text-base sm:text-lg font-ubuntu line-clamp-3">
                                {project.shortDesc}
                            </p>
                        </div>
                        <div className="flex flex-row justify-center py-4 sm:py-6 space-x-4">
                            <button 
                                onClick={() => setSelectedProject(project)} 
                                className="inline-flex items-center px-4 py-0.5 rounded-full text-blue-800 text-base font-semibold sm:text-lg hover:bg-blue-200 duration-100 ease-in font-ubuntu"
                            >
                                See more <span className="ml-2 fa-solid fa-chevron-right text-sm sm:text-base"></span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {selectedProject && (
                <div 
                    className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100] flex justify-center items-center overflow-auto p-4 duration-300 ease-in-out"
                    onClick={() => setSelectedProject(null)}
                >
                    <div 
                        className="w-full max-w-[720px] bg-blue-50 rounded-2xl max-h-full overflow-y-auto pt-2 sm:pt-4 pb-6 sm:pb-8 px-6 sm:px-8 custom-scroll"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-end">
                            <button 
                                onClick={() => setSelectedProject(null)} 
                                className="px-2 sm:px-3 -mr-4 text-[24px] sm:text-[28px] text-blue-800 rounded-lg hover:bg-blue-100 duration-100 ease-in"
                            >
                                <span className="fa-solid fa-times"></span>
                            </button>
                        </div>
                        <div className="flex justify-center mt-2">
                            <img className="rounded-lg w-full h-auto" src={selectedProject.image} alt={selectedProject.title} />
                        </div>
                        <div className="flex flex-col justify-left mt-4 sm:mt-6 space-y-4">
                            <h5 className="text-xl sm:text-2xl font-semibold tracking-tight text-blue-800 font-ubuntu">
                                {selectedProject.title}
                            </h5>
                            <p className="text-blue-800 text-base sm:text-lg font-ubuntu">
                                {selectedProject.longDesc}
                            </p>
                        </div>
                        <div className="flex flex-wrap justify-left mt-2 sm:mt-4">
                            {selectedProject.tech.map((t, i) => (
                                <div key={i} className="inline-flex justify-center items-center bg-blue-200 border border-blue-600 rounded-full px-2.5 py-0.5 mt-2 mr-2">
                                    <p className="text-blue-800 text-sm sm:text-base font-ubuntu">
                                        {t}
                                    </p>
                                </div>
                            ))}
                        </div>
                        {selectedProject.links.length > 0 && (
                            <div className="flex flex-row justify-center mt-4 sm:mt-6 space-x-4">
                                {selectedProject.links.map((link, i) => (
                                    <a 
                                        key={i} 
                                        href={link.url} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 font-semibold text-blue-800 text-base sm:text-lg rounded-xl border-2 border-blue-800 hover:bg-blue-200 hover:border-blue-200 duration-100 ease-in font-ubuntu"
                                    >
                                        {link.label} {link.icon && <span className={`${link.icon} ml-1`}></span>}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Portfolio;
