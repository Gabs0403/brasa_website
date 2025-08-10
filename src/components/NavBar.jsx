import { Link } from "react-router-dom";
import logoBrasa from "../brasa-logo.png";

export default function Navbar() {
  return (
    <div className="relative">
      <nav className="bg-yellow-100 fixed top-0 right-0 left-0 h-24 z-50 shadow-md">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            
            <div className="flex items-center space-x-4">
              <img src={logoBrasa} alt="Logo BRASA" className="h-24 w-auto" />
              <h1 className="flex flex-col leading-tight text-xl font-bold font-serif">
                BRASA
                <span className="text-lg font-normal">FGCU</span>
              </h1>
            </div>

            
            <div className="flex space-x-4">
              <Link
                to="/"
                className="px-4 py-2 text-black hover:bg-blue-300/50 rounded-lg transition font-serif"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="px-4 py-2 text-black hover:bg-blue-300/50 rounded-lg transition font-serif"
              >
                Quem Somos?
              </Link>
              <Link
                to="/freshman-guide"
                className="px-4 py-2 text-black hover:bg-blue-300/50 rounded-lg transition font-serif"
              >
                Guia do Freshman
              </Link>
              <Link
                to="/events"
                className="px-4 py-2 text-black hover:bg-blue-300/50 rounded-lg transition font-serif"
              >
                Eventos
              </Link>
              <Link
                to="https://getinvolved.fgcu.edu/organization/httpswwwgobrasaorg"
                className="px-4 py-2 rounded-lg bg-green-500 text-white hover:bg-blue-300/50 transition font-serif"
              >
                Seja Membro!
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
