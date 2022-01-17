import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import studyTable from '../../../images/study on table.png';
import questionMark from '../../../images/questionMark.png';
import Footer from '../../Shared/Footer/Footer';

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_eq76deb', 'template_b8i5lvs', form.current, 'user_lxEjjW11n32RkrVDUBUB7')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };

    return (
        <div id="contact" className="bg-gray-400">
            <svg className="transform rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#fbbf24" fillOpacity="1" d="M0,288L48,277.3C96,267,192,245,288,202.7C384,160,480,96,576,69.3C672,43,768,53,864,85.3C960,117,1056,171,1152,202.7C1248,235,1344,245,1392,250.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
            <div className="flex relative justify-center">
                <h1 className="text-4xl md:text-5xl -mt-24 md:-mt-40 lg:-mt-56 absolute font-bold text-gray-500 text-patrick-hand">Contact me</h1>
            </div>
            <div className="md:flex md:justify-between w-9/12 mx-auto">
                <form className="grid grid-cols-1 w-11/12 md:w-8/12 lg:w-6/12 mx-auto" ref={form} onSubmit={sendEmail}>
                    <label className="text-left text-lg mb-4 xl:mb-1">Name*</label>
                    <input className="rounded-md -mt-4 mb-4" type="text" name="user_name" required />
                    <label className="text-left text-lg mb-4 xl:mb-1">Email*</label>
                    <input className="rounded-md -mt-4 mb-4" type="email" name="user_email" required />
                    <label className="text-left text-lg mb-4 xl:mb-1">Message*</label>
                    <textarea className="rounded-md -mt-4 mb-4 h-32" name="message" />
                    <input className="rounded-md font-bold text-gray-500 bg-yellow-400" type="submit" value="Send" />
                </form>
                <div className="relative">
                    <img className="absolute head w-28 lg:w-40 md:left-28 xl:left-36" src={questionMark} alt="" />
                    <img src={studyTable} alt="" />
                </div>
            </div>
            <div className="-mt-18">
                <Footer />
            </div>
        </div>
    );
};

export default ContactForm;