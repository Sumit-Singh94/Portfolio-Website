import React from 'react'
import {Link, NavLink} from 'react-router-dom'

export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-black border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="#" className="flex items-center  w-60">
                        <img
                            src='./logo1.jpg'
                            className="mr-3 h-14 w-20 rounded-md"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">


                        <Link
                            to="#"
                            className="text-gray-800 hover:bg-white text-white hover:text-black font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-orange-700 hover:bg-white hover:text-black font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>


                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                to="/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-white" : "text-gray-700"} border-b  rounded-sm lg:border-0 hover:text-orange-700 lg:p-0 hover:bg-slate-300`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/about"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-white" : "text-gray-700"} border-b  rounded-sm lg:border-0 hover:text-orange-700 lg:p-0 hover:bg-slate-300`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/contact"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-white" : "text-gray-700"} border-b  rounded-sm lg:border-0 hover:text-orange-700 lg:p-0 hover:bg-slate-300`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="https://github.com/Sumit-Singh94"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-white" : "text-gray-700"} border-b  rounded-sm lg:border-0 hover:text-orange-700 lg:p-0 hover:bg-slate-300`
                                    }
                                >
                                    Github
                                </NavLink>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}