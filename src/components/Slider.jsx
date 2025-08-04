import { useState } from "react";
import logoBrasa from '../brasa-logo.png';
import logo_brasa1 from '../logo-brasa.jpg';

const images = [
  logoBrasa,
  logo_brasa1

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
    <div className="relative w-full max-w-4xl mx-auto mt-8 overflow-hidden rounded-2xl shadow-lg">
      <img
        src={images[current]}
        alt="Club"
        className="w-full h-80 object-cover transition-all duration-500"
      />

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