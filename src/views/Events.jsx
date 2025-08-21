import Slider from '../components/Slider.jsx';
import logoBrasa from '../images/brasa-logo.png'
import homer from '../images/brasa-board.jpeg';
import logo_brasa1 from '../images/brasa-logo.png';
import audi from '../images/brasa-sunset.jpeg';

const welcomeBrasaImages = [
  { src: homer, alt: "BRASA Board Meeting"},
  { src: logo_brasa1, alt: "BRASA Logo" },
  { src: audi, alt: "BRASA Sunset Event"}
];

const sunsetBrasaImages = [
    {src:"", alt: "Hello"},
    {src: "", alt: ""},
    {src: "", alt: ""}
];


function Events(){
    return (
        <div className="bg-white min-h-screen pt-24">
            <div className="p-16 bg-blue-900 shadow-xl ">
                <h1 className="text-4xl font-serif font-bold mb-8 text-white tracking-tight leading-snug text-center">PRÓXIMOS EVENTOS BRASA FGCU</h1>
                <div>
                    
                    

                    {/* Adicionar mapeamento para tirar codigo repetitivo */}
                    <div className="p-8 h-96 shadow-xl rounded-lg flex flex-col bg-white grid grid-cols-5 gap-4">
                        <img
                            src = {logoBrasa}
                            className="w-full h-full "
                        />
                        <div className="col-span-3 flex flex-col justify-center p-4">
                            <h1 className="text-3xl font-bold text-green-800 tracking-tight leading-snug">
                                20th Annual RHA Casino Night
                            </h1>
                            <h2 className="text-xl text-gray-500 mb-4">
                                22 de Agosto de 2025
                            </h2>
                            <p className="text-gray-700 text-lg mb-6">
                                Em parceria com o Resident Housing Association (RHA), A BRASA FGCU estará presente no Casino Night que será realizado no dia 22/08. 
                                O evento contará com comida
                                e presentes grátis. Jogue nas mesas do cassino para adquirir tickets e concorrer a diversos prêmios no fim da noite.
                            </p>
                            <button className="px-6 py-3 bg-green-600 text-white text-lg rounded-lg hover:bg-green-700 transition-colors duration-300">
                                Mais Informações
                            </button>
                        </div>
                    </div>
                    <div className="p-8 h-96 shadow-xl rounded-lg flex flex-col bg-white grid grid-cols-5 gap-4 mt-4">
                            <img
                                src = {logoBrasa}
                                className="w-full h-full"
                            />
                            <div className="col-span-3 flex flex-col justify-center p-4">
                                <h1 className="text-3xl font-bold text-green-800 tracking-tight leading-snug">
                                    BRASA Summit Américas 2025
                                </h1>
                                <h2 className="text-xl text-gray-500 mb-4">
                                    11 e 12 de Outubro de 2025
                                </h2>
                                <p className="text-gray-700 text-lg mb-6">
                                    Uma conferência que será realizada em Boston e reunirá diversas BRASAs de diferentes universidades da América do Norte.
                                    Durante o evento, você poderá assistir a palestras com líderes de diversas áreas, 
                                    conhecer iniciativas de impacto e explorar oportunidades acadêmicas e profissionais.
                                    
                                </p>
                                <button className="px-6 py-3 bg-green-600 text-white text-lg rounded-lg hover:bg-green-700 transition-colors duration-300">
                                    Mais Informações
                                </button>
                            </div>
                    </div>
                    

                </div>
            </div>
            <div className="pt-8">
                <h1 className="underline underline-offset-4 text-5xl font-lato mb-16 font-bold text-black tracking-tight leading-snug text-center">
                    Confira os últimos eventos da BRASA FGCU
                </h1>

                
                <div className="mb-16 px-72">
                    <h2 className="text-4xl font-bold mb-2 text-center">Welcome to BRASA</h2>
                    <p className="text-center text-gray-700 mb-6">Spring 2025</p>
                    <Slider images={welcomeBrasaImages} />
                </div>

                <hr className="border-t-2 border-gray-300 mx-48 my-12" />
                
                
                <div className="mb-16 px-72">
                    <h2 className="text-4xl font-bold mb-2 text-center">BRASA Sunset</h2>
                    <p className="text-center text-gray-700 mb-6">Spring 2025</p>
                    <Slider images={welcomeBrasaImages} />
                </div>

                <hr className="border-t-2 border-gray-300 mx-48 my-12" />

                
                <div className="mb-16 px-72">
                    <h2 className="text-4xl font-bold mb-2 text-center">BRASA Summit Innovation</h2>
                    <p className="text-center text-gray-700 mb-6">Spring 2025</p>
                    <Slider images={welcomeBrasaImages} />
                </div>


            </div>
        </div>
    )
}

export default Events;