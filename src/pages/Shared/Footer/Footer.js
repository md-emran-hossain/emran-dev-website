import React from 'react';

const Footer = () => {
    return (
        <div className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100"><path fill="#4b5563" fillOpacity="1" d="M0,32L60,37.3C120,43,240,53,360,58.7C480,64,600,64,720,58.7C840,53,960,43,1080,48C1200,53,1320,75,1380,85.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
            <div className="flex justify-center">
                <p className="absolute bg-transparent -mt-10 py-2 text-white">&copy; emran. All rights reserve</p>
            </div>
        </div>
    );
};

export default Footer;