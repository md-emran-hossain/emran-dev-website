import React, { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Header = () => {

    return (
        <div>
            <Popover className="relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex justify-end items-center py-6 md:justify-center md:space-x-10">
                        <div className="-mr-2 -my-2 md:hidden">
                            <Popover.Button className="bg-transparent rounded-md p-2 inline-flex items-center justify-center text-yellow-400 hover:text-yellow-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500">
                                <span className="sr-only">Open menu</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            </Popover.Button>
                        </div>
                        <Popover.Group as="nav" className="hidden md:flex space-x-10 items-center">
                            <Link to="/" className="text-xl font-bold tracking-wider text-yellow-400 hover:text-yellow-700 text-patrick-hand">
                                Home
                            </Link>
                            <Link to="/projects" className="text-xl font-bold tracking-wider text-yellow-400 hover:text-yellow-700 text-patrick-hand">
                                Projects
                            </Link>
                            <Link to="/blogs" className="text-xl font-bold tracking-wider text-yellow-400 hover:text-yellow-700 text-patrick-hand">
                                Blogs
                            </Link>
                            <Link to="/about" className="text-xl font-bold tracking-wider text-yellow-400 hover:text-yellow-700 text-patrick-hand">
                                About me
                            </Link>
                            <HashLink smooth to="/#contact" className="text-xl font-bold tracking-wider text-yellow-400 hover:text-yellow-700 text-patrick-hand">
                                Contact me
                            </HashLink>
                        </Popover.Group>
                    </div>
                </div>

                {/* mobile menu */}

                <Transition
                    as={Fragment}
                    enter="duration-200 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                            <div className="pt-5 pb-6 px-5">
                                <div className="flex items-center justify-end">
                                    {/* menu icon */}
                                    <div className="-mr-2">
                                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                            <span className="sr-only">Close menu</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </Popover.Button>
                                    </div>
                                </div>
                            </div>
                            <div className="py-6 px-5 space-y-6">
                                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                    <Link to="/projects" className="text-base font-medium text-gray-900 hover:text-gray-700 text-patrick-hand">
                                        Projects
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Popover.Panel>
                </Transition>
            </Popover>
        </div>
    );
};

export default Header;