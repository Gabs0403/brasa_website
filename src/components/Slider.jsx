import { useState } from "react";

import homer from '../bart-simpson-oo.jpg'
import logo_brasa1 from '../logo-brasa.jpg';
import audi from '../2023-audi-r8-v10-gt-rwd.jpg'

const images = [
  { src: homer, title: "HOMER", caption: "This is our mhomer simpson" },
  { src: logo_brasa1, title: "BRASA", caption: "Alternative BRASA logo"},
  {src: audi, title: "AUDI",  caption: "This is audi"}
];

function Slider() {
        const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full h-auto mt-0 overflow-hidden ">
      <img
        src={images[current].src}
        alt=""
        className="w-full h-[600px] object-cover transition-all duration-500"
      />

    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/25 text-stone-300 px-10 py-6 rounded-lg shadow-lg text-center max-w-[90%]">
        <h1 className="text-5xl font-bold mb-2">{images[current].title}</h1>
        <p className="text-lg">{images[current].caption}</p>
    </div>


      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/50 p-2 rounded-full hover:bg-white"
      >
        ◀
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/50 p-2 rounded-full hover:bg-white"
      >
        ▶
      </button>
    </div>
    )
}

export default Slider;