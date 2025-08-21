import { Link } from "react-router-dom";
import audi from '../images/brasa-board.jpeg';
import freshman_image from '../images/brasa-sunset.jpeg'
import EventsCarousel from "../components/EventsCarousel";


function Home() {
    return (
        <div className="bg-white min-h-screen pt-24">
            
            
            <div
                className="relative min-h-screen flex items-center justify-center bg-cover bg-center shadow-xl"
                style={{ backgroundImage: `url(${audi})` }}
            >
                <div className="absolute inset-0"></div>

                <div className="bg-cover bg-center min-h-screen flex items-center justify-center">
                    <div className="bg-blue-800/90 p-6 sm:p-12 rounded-xl shadow-xl max-w-5xl text-center mx-4">
                        <h1 className="text-2xl sm:text-4xl font-bold font-serif mb-2 text-yellow-500">
                            BRAZILIAN STUDENT ASSOCIATION
                        </h1>
                        <span className="block text-lg sm:text-xl font-bold mb-6 text-white">
                            Florida Gulf Coast University
                        </span>
                        <p className="text-white mb-8 text-base sm:text-lg leading-relaxed">
                            Somos uma organização dedicada a conectar estudantes brasileiros no exterior. 
                            Nosso objetivo é criar uma comunidade unida, onde possamos compartilhar experiências, 
                            valorizar nossa cultura e abrir portas para novas oportunidades, 
                            fortalecendo o vínculo entre o Brasil e o mundo.
                        </p>
                        <Link
                            to="/about"
                            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-green-600 text-white text-base sm:text-lg font-semibold rounded-lg 
                                       hover:bg-green-500 hover:scale-105 transform 
                                       transition-all duration-300 ease-in-out shadow-lg"
                        >
                            Conheça a BRASA FGCU
                        </Link>
                    </div>
                </div>
            </div>

            
            <div className="flex justify-between pt-2 shadow-xl">
                <div className="w-full px-4 sm:px-8 md:px-16 py-12 bg-gradient-to-r from-yellow-200 to-yellow-100">
                    <div className="p-4 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                        
                        
                        <div className="flex-1 py-6 sm:py-16 text-center md:text-left">
                            <h1 className="text-3xl sm:text-5xl font-serif font-bold mb-4 text-green-900 tracking-tight leading-snug">
                                GUIA DO FRESHMAN
                            </h1>
                            <p className="mb-8 text-base sm:text-lg font-light text-gray-900 leading-relaxed italic">
                                O <span className="font-semibold text-green-700">Guia do Freshman</span> é um recurso criado para ajudar novos estudantes 
                                a se adaptarem à vida universitária, trazendo dicas práticas sobre estudos, moradia, cultura e oportunidades 
                                para aproveitar ao máximo essa nova fase.
                            </p>
                            <Link
                                to="/guia"
                                className="inline-block px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-green-700 text-white text-base sm:text-lg font-medium uppercase tracking-wider 
                                           hover:bg-green-800 hover:scale-105 transition-all duration-300 shadow-lg"
                            >
                                Mais Informações
                            </Link>
                        </div>

                        
                        <div className="flex-1 flex items-center justify-center">
                            <img
                                src={freshman_image}
                                alt="Freshman Guide"
                                className="rounded-xl shadow-2xl w-full max-w-md h-auto object-cover border-4 border-white"
                            />
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="pt-2 px-4 sm:px-8">
                <EventsCarousel />
            </div>

        </div>
    )
}

export default Home;
