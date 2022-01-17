import React from 'react';
import HomeProjects from './HomeProjects/HomeProjects';
import ContactForm from './ContactForm/ContactForm';
import Hero from './Hero/Hero';

const HomeMain = () => {
    return (
        <div>
            <Hero />
            <HomeProjects />
            <ContactForm />
        </div>
    );
};

export default HomeMain;