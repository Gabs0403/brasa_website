import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logoBrasa from "../images/brasa-logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <nav className="bg-white fixed top-0 right-0 left-0 h-24 z-50 shadow-md">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            <div className="flex items-center space-x-4">
              <img src={logoBrasa} alt="Logo BRASA" className="h-20 w-auto" />
              <h1 className="hidden md:flex flex-col leading-tight text-xl font-bold font-serif">
                BRASA
                <span className="text-lg font-normal">FGCU</span>
              </h1>
            </div>

           
            <div className="hidden md:flex space-x-4">
              <Link
                to="/"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="px-4 py-2 text-black hover:bg-blue-300/50 rounded-lg transition font-serif"
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="px-4 py-2 text-black hover:bg-blue-300/50 rounded-lg transition font-serif"
              >
                Quem Somos?
              </Link>
              {/* <Link
                to="/freshman-guide"
                className="px-4 py-2 text-black hover:bg-blue-300/50 rounded-lg transition font-serif"
              >
                Guia do Freshman
              </Link> */}
              <Link
                to="/events"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="px-4 py-2 text-black hover:bg-blue-300/50 rounded-lg transition font-serif"
              >
                Eventos
              </Link>
              <Link
                to="https://getinvolved.fgcu.edu/organization/httpswwwgobrasaorg"
                
                className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition font-serif shadow-lg"
              >
                Seja Membro!
              </Link>
            </div>

            
            <button
              className="md:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-40 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end p-4">
            <button onClick={() => setIsOpen(false)}>
              <X size={28} />
            </button>
          </div>
          <div className="flex flex-col space-y-4 px-6">
            <Link to="/" onClick={() => {setIsOpen(false);
                                          window.scrollTo({ top: 0, behavior: "smooth" });
                                        }} 
                className="text-lg font-serif hover:text-green-700">Home
            </Link>
            <Link to="/about" onClick={() => {setIsOpen(false);
                                          window.scrollTo({ top: 0, behavior: "smooth" });
                                        }} 
                    className="text-lg font-serif hover:text-green-700">Quem Somos?
            </Link>
            {/* <Link to="/freshman-guide" onClick={() => setIsOpen(false)} className="text-lg font-serif hover:text-green-700">Guia do Freshman</Link> */}
            <Link to="/events" onClick={() => {setIsOpen(false);
                                          window.scrollTo({ top: 0, behavior: "smooth" });
                                        }} 
                   className="text-lg font-serif hover:text-green-700">Eventos
            </Link>
            <Link
              to="https://getinvolved.fgcu.edu/organization/httpswwwgobrasaorg"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 text-center rounded-lg bg-green-600 text-white hover:bg-green-700 transition font-serif shadow-lg"
              target="_blank"
            >
              Seja Membro!
            </Link>
          </div>
        </div>

        
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/40 z-30"
            onClick={() => setIsOpen(false)}
          ></div>
        )}
      </nav>
    </div>
  );
}
