import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(result => setProjects(result))
    }, [])

    return (
        <div className="bg-yellow-50">
            <Header />
            <h1 className="text-5xl font-bold text-mother py-6">Projects</h1>
            <div className="grid grid-cols-1 w-9/12 mx-auto">
                {
                    projects.map(project => <div
                        className="lg:flex items-center my-4"
                        key={project.id}>
                        <div className="text-left">
                            <div className="flex items-center">
                                <h2 className="text-mother tracking-wider font-bold text-2xl">{project?.name}</h2>&nbsp;
                                <a target="_blank" rel="noreferrer" href={project?.liveLink}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 hover:text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            </div>
                            <p className="text-patrick-hand text-xl tracking-wider font-medium pr-8">{project?.description}</p>
                            <ul className="flex flex-wrap my-4">{
                                project?.usedTech.map((tech, i) => <li key={i}
                                    className="bg-yellow-200 text-patrick-hand tracking-wide rounded py-0.5 px-4 m-1"
                                >{tech}</li>)
                            }</ul>
                            {/* button */}
                            <Link to={`project/${project.id}`}><button className="bg-gray-500 text-white px-8 py-1 text-mother tracking-widest flex shadow-xl mb-4">Details
                                <svg xmlns="http://www.w3.org/2000/svg" className="moving h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button></Link>
                        </div>
                        <img className="w-10/12 lg:w-6/12 mx-auto lg:ml-auto rounded-2xl" src={project?.img1} alt="" />
                    </div>)
                }
            </div>
            <Footer />
        </div>
    );
};

export default Projects;