import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const Blogs = () => {
    return (
        <div className="bg-yellow-50 h-screen">
            <div className="h-full flex flex-col justify-between">
                <Header />
                <h1 className="text-5xl font-bold text-mother">Coming soon !</h1>
                <Footer />
            </div>
        </div>
    );
};

export default Blogs;