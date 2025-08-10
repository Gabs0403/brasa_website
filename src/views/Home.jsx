import { useState } from "react";
import { Link } from "react-router-dom";
import Slider from '../components/Slider';
import audi from '../brasa-board.jpeg'


function Home() {
    return (
        <div className="bg-white min-h-screen pt-24">
            
            <div
                className="relative min-h-screen flex items-center justify-center bg-cover bg-center shadow-xl"
                style={{ backgroundImage: `url(${audi})` }}
            >
                
                <div className="absolute inset-0"></div>

                <div
                    className="bg-cover bg-center min-h-screen flex items-center justify-center"
                    
                >
                    <div className="bg-blue-800/90 p-12 rounded-xl shadow-xl max-w-5xl text-center">
                        <h1 className="text-4xl font-bold font-serif mb-2 text-yellow-500">
                        BRAZILIAN STUDENT ASSOCIATION
                        </h1>
                        <span className="block text-xl font-bold mb-6 text-white">
                        Florida Gulf Coast University
                        </span>
                        <p className="text-white mb-8 text-lg">
                        Uma organização dedicada a conectar estudantes brasileiros no exterior. 
                        Nosso objetivo é criar uma comunidade unida, onde possamos compartilhar experiências, valorizar nossa cultura e abrir portas para novas oportunidades, 
                        fortalecendo o vínculo entre o Brasil e o mundo.
                        </p>
                        <Link
                            to="/about"
                            className="inline-block px-8 py-4 bg-green-600 text-white text-lg font-semibold rounded-lg shadow hover:bg-green-700 transition-colors duration-300"
                        >
                            Conheça a BRASA-FGCU
                        </Link>
                    </div>
                </div>

            </div>

            <div className="flex justify-between pt-24 pb-24">
                <div className="px-24 bg-yellow-300">
                    <h1>O GUIA DO FRESHMAN</h1>
                    <p>Texto para o guia do freshman</p>
                    <Link>
                        Mais Informações
                    </Link>
                </div>

            </div>

        </div>
    )
}

export default Home;
