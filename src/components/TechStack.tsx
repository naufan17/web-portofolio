import React from 'react';

const techStack = [
    { name: 'PHP', icon: 'devicon-php-plain colored text-[60px] sm:text-[80px]' },
    { name: 'Laravel', icon: 'devicon-laravel-plain colored text-[48px] sm:text-[60px]' },
    { name: 'JavaScript', icon: 'devicon-javascript-plain colored text-[48px] sm:text-[60px]' },
    { name: 'TypeScript', icon: 'devicon-typescript-plain colored text-[48px] sm:text-[60px]' },
    { name: 'NodeJS', icon: 'devicon-nodejs-plain colored text-[48px] sm:text-[60px]' },
    { name: 'Express', icon: 'devicon-express-original colored text-[48px] sm:text-[60px]' },
    { name: 'NestJS', icon: 'devicon-nestjs-original colored text-[48px] sm:text-[60px]' },
    { name: 'React', icon: 'devicon-react-original colored text-[48px] sm:text-[60px]' },
    { name: 'NextJS', icon: 'devicon-nextjs-plain colored text-[48px] sm:text-[60px]' },
    { name: 'MySQL', icon: 'devicon-mysql-plain colored text-[48px] sm:text-[60px]' },
    { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored text-[48px] sm:text-[60px]' },
    { name: 'MongoDB', icon: 'devicon-mongodb-plain colored text-[48px] sm:text-[60px]' },
    { name: 'Github', icon: 'devicon-github-plain colored text-[48px] sm:text-[60px]' },
    { name: 'Docker', icon: 'devicon-docker-plain colored text-[48px] sm:text-[60px]' },
];

const TechStack: React.FC = () => {
    return (
        <div id="tech-stack" className="relative mt-8 sm:mt-12 py-6 mx-auto lg:py-12 overflow-hidden">
            <div className="flex flex-col justify-center items-center mb-8">
                <h2 className="text-2xl text-blue-800 font-ubuntu font-semibold leading-tight tracking-tight sm:text-3xl md:text-4xl">
                    Tech Stack
                </h2>
                <h6 className="text-blue-800 text-center mt-6 sm:mt-8 text-lg sm:text-xl font-ubuntu">
                    I have experience in several programming languages and frameworks.
                </h6>
            </div>
            
            <div className="flex w-fit animate-infinite-scroll hover:[animation-play-state:paused]">
                {[...techStack, ...techStack].map((tech, index) => (
                    <div key={index} className="flex flex-col justify-center items-center bg-blue-100 border border-blue-200 rounded-2xl p-2 sm:p-4 mx-2 sm:mx-3 min-w-[120px] sm:min-w-[150px]">
                        <div className="w-20 sm:w-24 h-20 sm:h-24 bg-blue-200 rounded-full p-1 sm:p-2">
                            <div className="inline-flex w-full h-full justify-center items-center">
                                <span className={tech.icon}></span>
                            </div>
                        </div>
                        <h4 className="mt-1 sm:mt-2 text-blue-800 font-semibold text-sm sm:text-base text-center font-ubuntu">
                            {tech.name}
                        </h4>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechStack;
