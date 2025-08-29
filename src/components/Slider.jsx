import { useState } from "react";

function Slider({ images }) {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(prev => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent(prev => (prev === 0 ? images.length - 1 : prev - 1));
  };

  if (!images || images.length === 0) return null; // handle empty props

  return (
    <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl shadow-lg">
      <img
        src={images[current].src}
        alt={images[current].alt || ""}
        className={"w-full h-full object-cover transition-all duration-500 object-center"}
      />

      {/* Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/60 p-2 rounded-full hover:bg-white shadow"
      >
        ◀
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/60 p-2 rounded-full hover:bg-white shadow"
      >
        ▶
      </button>
    </div>
  );
}

export default Slider;
