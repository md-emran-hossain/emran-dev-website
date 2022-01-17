import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const ProjectDetails = () => {
    const { id } = useParams();
    const [projects, setProjects] = useState([]);
    const [filterProject, setFilterProject] = useState({});

    useEffect(() => {
        fetch('/projects.json')
            .then(res => res.json())
            .then(result => setProjects(result))
    }, [])

    useEffect(() => {
        const foundProject = projects.find(project => project.id === parseInt(id));
        setFilterProject(foundProject)
    }, [id, projects])

    return (
        <div className="bg-yellow-50">
            <Header />
            <div className="w-9/12 xl:w-7/12 mx-auto">
                <h2 className="text-2xl text-mother tracking-widest font-bold my-4">{filterProject?.title}</h2>
                <img className="rounded-lg" src={filterProject?.img1} alt="" />
                <h2 className="tracking-wider text-mother font-bold text-2xl text-left my-4">Features</h2>
                <ul className="text-patrick-hand text-xl tracking-wider my-4">{
                    filterProject?.description2?.map((des, i) => <li key={i}
                        className="text-left my-4" >
                        {des}
                    </li>)
                }</ul>
                <img src={filterProject?.img2} alt="" />
                <h2 className="tracking-wider text-mother font-bold text-2xl text-left my-4">Details</h2>
                <p className="text-left text-patrick-hand text-xl tracking-wider my-4">{filterProject?.description}</p>
                <img src={filterProject?.img3} alt="" />
                <h2 className="tracking-wider text-mother font-bold text-2xl text-left my-4">In this Project's we use</h2>
                <ul className="text-patrick-hand text-xl tracking-wider my-4">{
                    filterProject?.description3?.map((des, i) => <li key={i}
                        className="text-left my-4" >
                        {des}
                    </li>)
                }</ul>
                <img src={filterProject?.img4} alt="" />
            </div>
            <Footer />
        </div>
    );
};

export default ProjectDetails;