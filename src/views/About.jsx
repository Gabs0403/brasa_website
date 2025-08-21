import presidentPhoto from '../images/photo-president.jpeg';
import treasurerPhoto from '../images/photo-treasurer.jpeg';
import secretaryPhoto from '../images/photo-secretary.jpeg';
import eventCoordPhoto from '../images/photo-eventcoord.jpeg';
import socialCoordPhoto1 from '../images/photo-socialcoord-1.jpeg';
import socialCoordPhoto2 from '../images/photo-socialcoord-2.jpeg';
import advisorPhoto1 from '../images/photo-advisor-1.jpeg';
import advisorPhoto2 from '../images/photo-advisor-2.jpeg';
import vpPhoto from '../images/photo-vp.jpeg';

function About() {
  return (
    <div className="pt-24">
      

      {/*
        Still need to adapt this part, maybe add a longer text, area muito pequena
        
      */}
      <div className="p-12 sm:p-16 bg-green-600">
        <h1 className="text-4xl sm:text-6xl font-serif font-bold mb-4 text-yellow-300 text-center tracking-tight leading-snug">
          Missão BRASA FGCU
        </h1>
        <p className="text-lg sm:text-2xl text-white text-justify leading-relaxed px-4 sm:px-16 indent-6 sm:indent-12">
          A BRASA FGCU é a ponte que conecta estudantes brasileiros na Florida Gulf Coast University ao mundo. Como capítulo oficial da BRASA Global, 
          nossa missão é fortalecer e apoiar a comunidade brasileira no exterior por meio de iniciativas educacionais, culturais e profissionais. 
          Promovemos conexões valiosas, incentivamos o crescimento pessoal e coletivo e criamos um espaço inclusivo onde líderes podem se desenvolver e alcançar novas oportunidades.
        </p>
      </div>

      
      <div className="pt-16 bg-gray-100">
        <h1 className="text-3xl sm:text-4xl font-lato font-bold mb-8 text-black text-center tracking-tight leading-snug">
          BOARD BRASA FGCU 2025/26
        </h1>
        <div className="py-8 sm:py-16 px-4 sm:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: "Sara Teoro", role: "Presidente", photo: presidentPhoto },
            { name: "Eduardo Ferreira", role: "Vice-Presidente", photo: vpPhoto },
            { name: "Dhaniel Coelho", role: "Tesoureiro", photo: treasurerPhoto },
            { name: "Gabriel Correa", role: "Secretário", photo: secretaryPhoto },
            { name: "Rafaella Cardoso", role: "Coord. de Eventos", photo: eventCoordPhoto },
            { name: "João Tamez", role: "Social Media", photo: socialCoordPhoto1 },
            { name: "Renan Santos", role: "Social Media", photo: socialCoordPhoto2 },
            { name: "Clarisse Halpern", role: "Advisor", photo: advisorPhoto1 },
            { name: "Bruno Halpern", role: "Advisor", photo: advisorPhoto2 }
          ].map((member, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 bg-white rounded-2xl shadow-xl flex flex-col items-center h-auto"
            >
              <img src={member.photo} alt={member.name} className="w-32 sm:w-40 h-32 sm:h-40 rounded-full object-cover" />
              <div className="pt-4 text-center">
                <h1 className="text-xl sm:text-3xl font-bold text-black tracking-tight leading-snug">{member.name}</h1>
                <h2 className="text-lg sm:text-2xl font-serif mt-1 text-black">{member.role}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
