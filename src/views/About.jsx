import presidentPhoto from '../images/photo-president.jpeg';
import treasurerPhoto from '../images/photo-treasurer.jpeg';
import secretaryPhoto from '../images/photo-secretary.jpeg';
import eventCoordPhoto from '../images/photo-eventcoord.jpeg';
import socialCoordPhoto1 from '../images/photo-socialcoord-1.jpeg';
import socialCoordPhoto2 from '../images/photo-socialcoord-2.jpeg';
import advisorPhoto1 from '../images/photo-advisor-1.jpeg';
import advisorPhoto2 from '../images/photo-advisor-2.jpeg';
import vpPhoto from '../images/photo-vp.jpeg';

function About(){
    return (
        <div className="pt-24">
            <div className="max-h-screen p-24 bg-green-600">
                <h1 className="text-6xl font-serif font-bold mb-4 text-yellow-300 tracking-tight leading-snug text-center">Missão BRASA FGCU</h1>
                 <div className="max-h-screen flex flex-col justify-between px-16">
                    <p className="text-2xl text-white text-justify leading-relaxed px-16 indent-12">
                        A BRASA FGCU é a ponte que conecta estudantes brasileiros na Florida Gulf Coast University ao mundo. Como capítulo oficial da BRASA Global, 
                        nossa missão é fortalecer e apoiar a comunidade brasileira no exterior por meio de iniciativas educacionais, culturais e profissionais. 
                        Promovemos conexões valiosas, incentivamos o crescimento pessoal e coletivo e criamos um espaço inclusivo onde líderes podem se desenvolver e alcançar novas oportunidades.
                    </p>


                </div>
            </div>

            <div className="pt-16 bg-gray-100">
                <h1 className="text-4xl font-lato font-bold mb-4 text-black tracking-tight leading-snug text-center">BOARD BRASA FGCU 2025/26</h1>
                <div className="py-16 px-24 grid grid-cols-3 gap-8">
                    <div className="p-8 h-96 shadow-xl rounded-2x1 flex flex-col items-center bg-white">
                        <img
                            src = {presidentPhoto}
                            className="w-40 h-40 rounded-full"
                        />
                        <div className='pt-4'>
                            <h1 className='text-3xl font-bold text-black tracking-tight leading-snug'>Sara Teoro</h1>
                            <h2 className=' text-2xl font-serif mb-4 text-black text-center'>Presidente</h2>    
                         </div>
                    </div>
                    <div className="p-8 h-96 shadow-xl rounded-2x1 flex flex-col items-center bg-white">
                        <img
                            src = {vpPhoto}
                            className="w-40 h-40 rounded-full"
                        />
                        <div className='pt-4'>
                            <h1 className='text-3xl font-bold text-black tracking-tight leading-snug'>Eduardo Ferreira</h1>
                            <h2 className=' text-2xl font-serif mb-4 text-black text-center'>Vice-Presidente</h2>    
                         </div>
                    </div>
                    <div className="p-8 h-96 shadow-xl rounded-2x1 flex flex-col items-center bg-white">
                        <img
                            src = {treasurerPhoto}
                            className="w-40 h-40 rounded-full"
                        />
                        <div className='pt-4'>
                            <h1 className='text-3xl font-bold text-black tracking-tight leading-snug'>Dhaniel Coelho</h1>
                            <h2 className=' text-2xl font-serif mb-4 text-black text-center'>Tesoureiro</h2>    
                         </div>
                    </div>
                    <div className="p-8 h-96 shadow-xl rounded-2x1 flex flex-col items-center bg-white">
                        <img
                            src = {secretaryPhoto}
                            className="w-40 h-40 rounded-full"
                        />
                        <div className='pt-4'>
                            <h1 className='text-3xl font-bold text-black tracking-tight leading-snug'>Gabriel Correa</h1>
                            <h2 className=' text-2xl font-serif mb-4 text-black text-center'>Secretário</h2>    
                         </div>
                    </div>
                    <div className="p-8 h-96 shadow-xl rounded-2x1 flex flex-col items-center bg-white">
                        <img
                            src = {eventCoordPhoto}
                            className="w-40 h-40 rounded-full"
                        />
                        <div className='pt-4'>
                            <h1 className='text-3xl font-bold text-black tracking-tight leading-snug'>Rafaella Cardoso</h1>
                            <h2 className=' text-2xl font-serif mb-4 text-black text-center'>Coord. de Eventos</h2>    
                         </div>
                    </div>
                    <div className="p-8 h-96 shadow-xl rounded-2x1 flex flex-col items-center bg-white">
                        <img
                            src = {socialCoordPhoto1}
                            className="w-40 h-40 rounded-full"
                        />
                        <div className='pt-4'>
                            <h1 className='text-3xl font-bold text-black tracking-tight leading-snug'>João Tamez</h1>
                            <h2 className=' text-2xl font-serif mb-4 text-black text-center'>Social Media</h2>    
                         </div>
                    </div>
                    <div className="p-8 h-96 shadow-xl rounded-2x1 flex flex-col items-center bg-white">
                        <img
                            src = {socialCoordPhoto2}
                            className="w-40 h-40 rounded-full"
                        />
                        <div className='pt-4'>
                            <h1 className='text-3xl font-bold text-black tracking-tight leading-snug'>Renan Santos</h1>
                            <h2 className=' text-2xl font-serif mb-4 text-black text-center'>Social Media</h2>    
                         </div>
                    </div>
                    <div className="p-8 h-96 shadow-xl rounded-2x1 flex flex-col items-center bg-white">
                        <img
                            src = {advisorPhoto1}
                            className="w-40 h-40 rounded-full"
                        />
                        <div className='pt-4'>
                            <h1 className='text-3xl font-bold text-black tracking-tight leading-snug'>Clarisse Halpern</h1>
                            <h2 className=' text-2xl font-serif mb-4 text-black text-center'>Advisor</h2>    
                         </div>
                    </div>
                    <div className="p-8 h-96 shadow-xl rounded-2x1 flex flex-col items-center bg-white">
                        <img
                            src = {advisorPhoto2}
                            className="w-40 h-40 rounded-full"
                        />
                        <div className='pt-4'>
                            <h1 className='text-3xl font-bold text-black tracking-tight leading-snug'>Bruno Halpern</h1>
                            <h2 className=' text-2xl font-serif mb-4 text-black text-center'>Advisor</h2>    
                         </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About