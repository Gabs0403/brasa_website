import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';

const events = [
  {
    id: 1,
    title: "20th Annual RHA Casino Night",
    date: "22 Agosto 2025",
    desc: "Prepare-se para ir com tudo na 20ª Noite Anual do Cassino, organizada pela RHA!",
  },
  {
    id: 2,
    title: "BRASA Summit Américas 2025",
    date: "11/12 Outubro 2025",
    desc: "A maior conferência voltada para estudantes brasileiros na América do Norte, " +
      "reunindo anualmente estudantes da América do Norte e líderes que estão construindo uma carreira de impacto no Brasil e no mundo.",
  }
];

function EventsCarousel() {
  return (
    <div className="w-full py-16 bg-yellow-50 px-4 sm:px-12">
      <h2 className="text-3xl font-bold font-serif text-center mb-8 text-blue-500">
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
            <div className="bg-white h-72 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{event.date}</p>
                <p className="text-gray-700 mb-8">{event.desc}</p>
                <Link
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                  to="/events"
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
