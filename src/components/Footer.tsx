import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="relative bg-blue-100 border-t border-blue-200 bg-opacity-50 mt-8 sm:mt-12 p-4 sm:p-6">
            <p className="text-center text-blue-800 text-base sm:text-lg font-ubuntu">
                &#169; {new Date().getFullYear()} Made by Naufan
            </p>
        </footer>
    );
};

export default Footer;
