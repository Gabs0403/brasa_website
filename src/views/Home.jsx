import { Link } from "react-router-dom";
import coverPageImg from '../images/home-page-cover.jpeg';
import freshman_image from '../images/brasa-sunset.jpeg'
import EventsCarousel from "../components/EventsCarousel";
import Slider from "../components/Slider";


import eagleX2 from "../images/eventEagleX/eagleX2.jpeg"
import eagleX3 from "../images/eventEagleX/eagleX3.jpeg"

const eagleXimages = [
{ src: eagleX3, alt: "Eagle X BRASA 3" },
  { src: eagleX2, alt: "Eagle X BRASA 2" },
  
  
];

function Home() {
    return (
        <div className="bg-white min-h-screen pt-24">
            
            
            <div
                className="relative min-h-screen flex items-center justify-center bg-cover bg-center shadow-xl"
                style={{ backgroundImage: `url(${coverPageImg})` }}
            >
                <div className="absolute inset-0"></div>

                <div className="bg-cover bg-center min-h-screen flex items-center justify-center">
                    <div className="bg-blue-800/90 p-6 sm:p-12 rounded-xl shadow-xl max-w-5xl text-center mx-4">
                        <h1 className="text-2xl sm:text-4xl font-bold font-serif mb-2 text-yellow-500">
                            BRAZILIAN STUDENT ASSOCIATION
                        </h1>
                        <span className="block text-lg sm:text-xl font-bold mb-6 text-white">
                            at Florida Gulf Coast University
                        </span>
                        <p className="text-white mb-8 text-base sm:text-lg leading-relaxed">
                            Somos uma organização dedicada a conectar estudantes brasileiros no exterior. 
                            Nosso objetivo é criar uma comunidade unida, onde possamos compartilhar experiências, 
                            valorizar nossa cultura e abrir portas para novas oportunidades, 
                            fortalecendo o vínculo entre o Brasil e o mundo.
                        </p>
                        <Link
                            to="/about"
                            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
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
                                // to="/guia"
                                // onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                                className="inline-block px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-green-700 text-white text-base sm:text-lg font-medium uppercase tracking-wider 
                                           hover:bg-green-800 hover:scale-105 transition-all duration-300 shadow-lg"
                            >
                                Em Breve...
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

            
            
            <div className="flex justify-center pt-16 pb-16 bg-gradient-to-r from-yellow-100 via-green-100 to-green-200">
                <div className="w-full px-4 sm:px-8 md:px-16 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    
                    
                    <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl border-l-8 border-green-700">
                        <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-6 text-green-700 tracking-tight leading-snug">
                        DESTAQUE BRASA
                        </h1>
                        <p className="mb-6 text-lg sm:text-xl font-light text-gray-800 leading-relaxed italic">
                        A BRASA FGCU foi reconhecida no 
                        <span className="text-green-700 font-semibold"> Eagle X</span>, 
                        um dos eventos mais prestigiados da Florida Gulf Coast University, 
                        recebendo dois prêmios de grande relevância: 
                        o <span className="text-green-700 font-semibold"> Best Independent Service-Learning Project Award </span> 
                        e o <span className="text-green-700 font-semibold"> “Service to the Nest” Award</span>. 
                        Essas conquistas refletem o impacto positivo da associação na comunidade, 
                        promovendo a cultura brasileira, apoiando estudantes e fortalecendo laços por meio da educação e do engajamento comunitário.
                        </p>
                        <p className="text-gray-600 italic text-sm">
                        Estamos muito orgulhosos de representar a nossa comunidade!
                        </p>
                    </div>

                    
                    <div className="bg-white/90 backdrop-blur-md p-4 sm:p-6 rounded-2xl shadow-2xl flex justify-center items-center">
                        <div className="w-full max-w-sm sm:max-w-md md:max-w-xl">
                        <Slider images={eagleXimages} />
                        </div>
                    </div>

                    </div>
                </div>
            </div>


            
            <div className="flex justify-center pt-16 pb-16 bg-gradient-to-r from-yellow-50 to-yellow-100">
                <div className="w-full px-4 sm:px-8 md:px-16 max-w-5xl text-center">
                    <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-8 text-green-900">
                    Conheça a FGCU
                    </h2>
                    <div className="flex justify-center">
                        <div className="w-full max-w-3xl shadow-2xl rounded-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                            <div className="aspect-video">
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/3nE-sKCLvI4?si=ORX4TVFuDy4q_6-x"
                                title="FGCU video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                            </div>
                        </div>
                    </div>
                    <p className="mt-4 mb-4 text-gray-700 italic text-lg">
                    Descubra a experiência única de estudar na Florida Gulf Coast University!
                    </p>
                    <a
                        href="https://www.fgcu.edu/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-green-700 text-white text-base sm:text-lg font-medium uppercase tracking-wider 
                                hover:bg-green-800 hover:scale-105 transition-all duration-300 shadow-lg"
                    >
                        Site Oficial FGCU
                    </a>
                </div>
            </div>


    

            
            <div className="">
                <EventsCarousel />
            </div>

        </div>
    )
}

export default Home;
