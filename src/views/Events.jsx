import Slider from '../components/Slider.jsx';
import logoBrasa from '../images/brasa-logo.png';
import brasaWelcome1 from '../images/eventBrasaWelcome/BrasaWelcome-1.jpeg';
import brasaWelcome2 from '../images/eventBrasaWelcome/BrasaWelcome-2.jpeg';
import brasaWelcome3 from '../images/eventBrasaWelcome/BrasaWelcome-3.jpeg';
import brasaWelcome4 from '../images/eventBrasaWelcome/BrasaWelcome-4.jpeg';
import brasaSunset1 from '../images/eventBrasaSunset/brasaSunset(1).jpeg';
import brasaSunset2 from '../images/eventBrasaSunset/brasaSunset(2).jpeg';
import brasaSunset3 from '../images/eventBrasaSunset/brasaSunset(3).jpeg';
import brasaSunset4 from '../images/eventBrasaSunset/brasaSunset(4).jpeg';
import brasaSunset5 from '../images/eventBrasaSunset/brasaSunset(5).jpeg';
import brasaSunset6 from '../images/eventBrasaSunset/brasaSunset(6).jpeg';
import brasaSunset7 from '../images/eventBrasaSunset/brasaSunset(7).jpeg';
import brasaSunset8 from '../images/eventBrasaSunset/brasaSunset(8).jpeg';
import brasaSunset9 from '../images/eventBrasaSunset/brasaSunset(9).jpeg';
import summitBrasa1 from '../images/eventSummitInovation/summitInovationBrasa (1).jpeg';
import summitBrasa2 from '../images/eventSummitInovation/summitInovationBrasa (2).jpeg';
import summitBrasa3 from '../images/eventSummitInovation/summitInovationBrasa (3).jpeg';
import summitBrasa4 from '../images/eventSummitInovation/summitInovationBrasa (4).jpeg';
import summitBrasa5 from '../images/eventSummitInovation/summitInovationBrasa (5).jpeg';
import summitBrasa6 from '../images/eventSummitInovation/summitInovationBrasa (6).jpeg';

const summitBrasaImages = [
  { src: summitBrasa1, alt: "Summit Innovation BRASA 1" },
  { src: summitBrasa2, alt: "Summit Innovation BRASA 2" },
  { src: summitBrasa3, alt: "Summit Innovation BRASA 3" },
  { src: summitBrasa5, alt: "Summit Innovation BRASA 5" },
  { src: summitBrasa6, alt: "Summit Innovation BRASA 6" },
];

const welcomeBrasaImages = [
  { src: brasaWelcome4, alt: "" },
  { src: brasaWelcome2, alt: "" },
  { src: brasaWelcome1, alt: "" },
  { src: brasaWelcome3, alt: "" }
];

const sunsetBrasaImages = [
  { src: brasaSunset5, alt: "Brasa Sunset 5" },
  { src: brasaSunset9, alt: "Brasa Sunset 9" },
  { src: brasaSunset2, alt: "Brasa Sunset 2" },
  { src: brasaSunset3, alt: "Brasa Sunset 3" },
  { src: brasaSunset4, alt: "Brasa Sunset 4" },
  { src: brasaSunset6, alt: "Brasa Sunset 6" },
  { src: brasaSunset7, alt: "Brasa Sunset 7" },
  { src: brasaSunset8, alt: "Brasa Sunset 8" }
];

function Events() {
  return (
    <div className="bg-white min-h-screen pt-24">
      <div className="p-6 sm:p-12 md:p-16 bg-blue-900 shadow-xl">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mb-8 text-white tracking-tight leading-snug text-center">
          PRÓXIMOS EVENTOS BRASA FGCU
        </h1>

        
        {/* <div className="p-4 sm:p-6 md:p-8 h-auto md:h-96 shadow-xl rounded-lg bg-white grid grid-cols-1 md:grid-cols-5 gap-4">
          <img src={logoBrasa} className="w-full h-48 md:h-full object-contain" />
          <div className="col-span-1 md:col-span-3 flex flex-col justify-center p-2 md:p-4">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-green-800">20th Annual RHA Casino Night</h1>
            <h2 className="text-sm sm:text-lg md:text-xl text-gray-500 mb-2 md:mb-4">22 de Agosto de 2025</h2>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-4 md:mb-6">
              Em parceria com o Resident Housing Association (RHA), A BRASA FGCU estará presente no Casino Night que será realizado no dia 22/08.
              O evento contará com comida e presentes grátis. Jogue nas mesas do cassino para adquirir tickets e concorrer a diversos prêmios no fim da noite.
            </p>
            <button className="px-4 py-2 md:px-6 md:py-3 bg-green-600 text-white text-sm md:text-lg rounded-lg hover:bg-green-700 transition-colors duration-300">
              Mais Informações
            </button>
          </div>
        </div> */}

        
        <div className="p-4 sm:p-6 md:p-8 h-auto md:h-96 shadow-xl rounded-lg bg-white grid grid-cols-1 md:grid-cols-5 gap-4 mt-4">
          <img src={logoBrasa} className="w-full h-48 md:h-full object-contain" />
          <div className="col-span-1 md:col-span-3 flex flex-col justify-center p-2 md:p-4">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-green-800">BRASA Summit Américas 2025</h1>
            <h2 className="text-sm sm:text-lg md:text-xl text-gray-500 mb-2 md:mb-4">11 e 12 de Outubro de 2025</h2>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-4 md:mb-6">
              Uma conferência que será realizada em Boston e reunirá diversas BRASAs de diferentes universidades da América do Norte.
              Durante o evento, você poderá assistir a palestras com líderes de diversas áreas, conhecer iniciativas de impacto e explorar oportunidades acadêmicas e profissionais.
            </p>
            <button className="px-4 py-2 md:px-6 md:py-3 bg-green-600 text-white text-sm md:text-lg rounded-lg hover:bg-green-700 transition-colors duration-300">
              Mais Informações
            </button>
          </div>
        </div>
      </div>

      
      <div className="pt-8">
        <h1 className="underline underline-offset-4 text-2xl sm:text-3xl md:text-5xl font-lato mb-8 md:mb-16 font-bold text-black text-center">
          Confira os últimos eventos da BRASA FGCU
        </h1>

        <div className="mb-12 md:mb-16 px-4 sm:px-12 md:px-72">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-center">Welcome to BRASA</h2>
          <p className="text-center text-gray-700 mb-4 md:mb-6">Spring 2025</p>
          <Slider images={welcomeBrasaImages} />
        </div>

        <hr className="border-t-2 border-gray-300 mx-12 md:mx-48 my-8 md:my-12" />

        <div className="mb-12 md:mb-16 px-4 sm:px-12 md:px-72">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-center">BRASA Sunset</h2>
          <p className="text-center text-gray-700 mb-4 md:mb-6">Spring 2025</p>
          <Slider images={sunsetBrasaImages} />
        </div>

        <hr className="border-t-2 border-gray-300 mx-12 md:mx-48 my-8 md:my-12" />

        <div className="mb-12 md:mb-16 px-4 sm:px-12 md:px-72">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-center">BRASA Summit Innovation</h2>
          <p className="text-center text-gray-700 mb-4 md:mb-6">Spring 2025</p>
          <Slider images={summitBrasaImages} />
        </div>
      </div>
    </div>
  );
}

export default Events;
