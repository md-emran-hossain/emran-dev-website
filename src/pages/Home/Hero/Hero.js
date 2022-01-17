import React from 'react';
import '../../../App.css'
import './HeadAnimation/HeadAnimation.css'
import head from '../../../images/head.png';
import Header from '../../Shared/Header/Header';

const Hero = () => {
    return (
        <div>
            <div className="hero bg-yellow-50 pb-8 h-screen 2xl:h-full">
                <Header />
                <h1 className="tracking-wider text-yellow-400 font-bold text-patrick-hand text-5xl shadow-custom">MD EMRAN HOSSAIN</h1>
                <h3 className="text-mother text-2xl">Full Stack web Developer</h3>
                <img className="w-8/12 md:w-9/12 lg:w-10/12 xl:w-4/12 mx-auto head" src={head} alt="" />
                <p className="text-mother text-lg mb-4">I'm ready to design your website and build it with JS.</p>
                <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1kuHDDzFTzgIZkdO6D-jP5B2uwb4a6M4F/view">
                    <button className="bg-yellow-400 text-mother tracking-widest shadow-lg font-bold flex px-10 text-xl mx-auto">RESUME
                        <svg xmlns="http://www.w3.org/2000/svg" className="moving h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </a>
            </div>
            <svg className="-mt-72" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#fbbf24" fillOpacity="1" d="M0,96L21.8,96C43.6,96,87,96,131,122.7C174.5,149,218,203,262,213.3C305.5,224,349,192,393,197.3C436.4,203,480,245,524,261.3C567.3,277,611,267,655,261.3C698.2,256,742,256,785,256C829.1,256,873,256,916,229.3C960,203,1004,149,1047,138.7C1090.9,128,1135,160,1178,192C1221.8,224,1265,256,1309,250.7C1352.7,245,1396,203,1418,181.3L1440,160L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"></path>
            </svg>
        </div>
    );
};

export default Hero;