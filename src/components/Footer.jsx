import React from "react";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import logoBrasa from '../images/brasa-logo.png'
import { Link } from "react-router-dom";


function Footer(){
    return (
        <footer className="bg-sky-900 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        
        <div>
          <div className="flex items-center space-x-4 mb-4">
            <img src={logoBrasa} alt="Logo BRASA" className="h-14 w-auto" />
            <h2 className="font-serif text-lg font-bold leading-tight">
              BRASA 
              <span className="text-yellow-400"> FGCU</span>
            </h2>
          </div>
          <p className="text-gray-300 text-sm">
            Conectando estudantes brasileiros e fortalecendo nossa comunidade acadêmica na Florida Gulf Coast University.
          </p>
        </div>

        
        <div>
          <h3 className="text-yellow-400 font-semibold mb-4">Links Rápidos</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="hover:underline">Home</Link></li>
            <li><Link to="/about" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="hover:underline">Quem Somos</Link></li>
            {/* <li><Link to="/guia-freshman" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="hover:underline">Guia do Freshman</Link></li> */}
            <li><Link to="/events" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="hover:underline">Eventos</Link></li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-yellow-400 font-semibold mb-4">Siga-nos</h3>
          <div className="flex space-x-4 text-xl">
            <a href="https://www.instagram.com/brasafgcu/" target="_blank" rel="noreferrer" className="hover:text-yellow-400">
              <FaInstagram />
            </a>
            
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-yellow-400">
              <FaLinkedin />
            </a>
          </div>
        </div>

      </div>

      
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} BRASA-FGCU. Todos os direitos reservados.
      </div>
    </footer>
    );
}

export default Footer;