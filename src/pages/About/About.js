import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const About = () => {
    return (
        <div className="bg-yellow-50 h-screen">
            <div className="flex flex-col justify-between h-full">
                <Header />
                <div className="lg:flex justify-between w-11/12 lg:w-9/12 mx-auto">
                    <div>
                        <h1 className="font-bold text-5xl text-mother my-6">About Myself</h1>
                        <p className="text-patrick-hand text-xl tracking-wider">A self-motivated and enthusiastic web developer with a deep interest in JavaScript. Handle difficulties and errors in a smart way. I'm a tech lover. Try to keep myself updated with new technologies and learn that. I enjoy every step of the developing process from discussion and collaboration.</p>
                        <h1 className="font-bold text-5xl text-mother my-6">Skills</h1>
                        <ul className="flex flex-wrap text-patrick-hand tracking-widest text-xl">
                            <li className="bg-yellow-200 px-2 py-0.5 rounded-md m-2">HTML 5</li>
                            <li className="bg-yellow-200 px-2 py-0.5 rounded-md m-2">CSS 3</li>
                            <li className="bg-yellow-200 px-2 py-0.5 rounded-md m-2">Bootstrap</li>
                            <li className="bg-yellow-200 px-2 py-0.5 rounded-md m-2">Tailwind CSS</li>
                            <li className="bg-yellow-200 px-2 py-0.5 rounded-md m-2">Material UI</li>
                            <li className="bg-yellow-200 px-2 py-0.5 rounded-md m-2">JavaScript</li>
                            <li className="bg-yellow-200 px-2 py-0.5 rounded-md m-2">ES6</li>
                            <li className="bg-yellow-200 px-2 py-0.5 rounded-md m-2">Heroku</li>
                            <li className="bg-yellow-200 px-2 py-0.5 rounded-md m-2">Firebase</li>
                            <li className="bg-yellow-200 px-2 py-0.5 rounded-md m-2">Node JS</li>
                            <li className="bg-yellow-200 px-2 py-0.5 rounded-md m-2">Express js</li>
                            <li className="bg-yellow-200 px-2 py-0.5 rounded-md m-2">Cors</li>
                            <li className="bg-yellow-200 px-2 py-0.5 rounded-md m-2">React js</li>
                            <li className="bg-yellow-200 px-2 py-0.5 rounded-md m-2">JWT token</li>
                        </ul>
                        <div className="flex flex-wrap justify-center md:justify-start text-patrick-hand space-x-4 items-center tracking-wider py-6">
                            <h4 className="font-bold text-2xl">Email</h4>
                            <h4 className="text-2xl">emranhossain4005@gmail.com</h4>
                        </div>
                    </div>
                    <div>
                        <img className="w-11/12 rounded-full ml-auto" src="https://i.ibb.co/3S8xHgR/sittng-in-front-of-desk.gif" alt="" />
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default About;