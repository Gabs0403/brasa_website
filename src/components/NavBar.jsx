import React from "react";
import logoBrasa from '../brasa-logo.png';

function NavBar({ setPage }){
     


    return (
        <div className="relative">
            <nav className="bg-slate-200 fixed top-0 right-0 left-0 border-b border-black h-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
                    <div className="flex justify-start h-24">   
                        <div className="flex items-center space-x-8">
                            <img src={logoBrasa} alt="Logo BRASA" className="h-24 w-auto pr-4" />
                            <a href="#home" className="relative group font-serif text-black-600 hover:text-green-600 transition-colors text-lg">
                                Home
                                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-black scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-300 bg-green-600 "></span>
                            </a>
                            <a href="#home" className="relative group font-serif text-black-600 hover:text-gray-900 transition-colors text-lg">
                                Quem Somos?
                                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-black scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-300"></span>
                            </a>
                            <a href="#home" className="relative group font-serif text-black-600 hover:text-gray-900 transition-colors text-lg">
                                Guia do Freshman
                                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-black scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-300"></span>
                            </a>
                            <a href="#home" className="relative group font-serif text-black-600 hover:text-gray-900 transition-colors text-lg">
                                Eventos
                                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-black scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-300"></span>
                            </a>   
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;