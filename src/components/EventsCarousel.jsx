import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
import brasaSummitFlyer from '../images/eventBrasaSummitAmericas2025/brasaSummit2025flyer.jpg';
import brasaKickOffFlyer from '../images/eventBrasaKickOff/flyer brasa kickoff.jpeg';

const events = [
  {
    id: 1,
    title: "BRASA KICK-OFF",
    date: "26 Setembro 2025",
    desc: "Vem aí o primeiro evento do semestre da BRASA FGCU! Participe do nosso Kick Off e comece o semestre com muita energia, conexões e integração. Não fique de fora!",
    image: brasaKickOffFlyer
  },
  {
    id: 2,
    title: "BRASA Summit Américas 2025",
    date: "11-12 Outubro 2025",
    desc: "A maior conferência voltada para estudantes brasileiros na América do Norte, " +
      "reunindo anualmente estudantese líderes que estão construindo uma carreira de impacto no Brasil e no mundo.",
      image: brasaSummitFlyer
  }
];

function EventsCarousel() {
  return (
    <div className="w-full py-16 bg-gradient-to-r from-yellow-50 to-yellow-100 px-4 sm:px-12">
      <h2 className="text-3xl font-bold font-serif text-center mb-12 text-blue-600">
        Próximos Eventos
      </h2>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {events.map((event) => (
          <SwiperSlide key={event.id}>
            <div className="h-80 flex flex-col bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 overflow-hidden">
              
              
              <div className="h-28 bg-gradient-to-r from-green-600 via-yellow-400 to-blue-600" />

              
              <div className="flex flex-col flex-grow justify-between p-6">
                <div>
                  
                  <h3 className="text-xl font-semibold text-green-800 mb-2">
                    {event.title}
                  </h3>

                  
                  <p className="text-sm text-gray-500 font-medium mb-4">
                    {event.date}
                  </p>

                  
                  <p className="text-gray-700 mb-6">
                    {event.desc}
                  </p>
                </div>

                
                <Link
                  className="inline-block px-5 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors text-center"
                  to="/events"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                  Saiba Mais
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>


  );
}

export default EventsCarousel;
