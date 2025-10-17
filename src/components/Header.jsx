import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    return(
        <>
        <header className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b-4 border-background/30 flex justify-between items-center text-background py-6 px-8 md:px-20">
        <Link to="/" className="flex flex-col items-start group">
          <h1 className="text-3xl lg:text-4xl font-title font-bold tracking-widest text-primary group-hover:text-primary transition-colors duration-300">
            FDA{" "}
            <span className="text-white group-hover:text-primary transition-colors duration-300">
              AWARDS
            </span>
          </h1>
          <span className="mt-1 h-[3px] w-0 bg-primary transition-all duration-400 group-hover:w-full"></span>
        </Link>

        {/* Botão do menu mobile */}
        <button
          className="xl:hidden text-white text-3xl focus:outline-none"
          onClick={toggleMenu}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Navegação desktop */}
        <nav className="hidden xl:flex items-center gap-8 font-title">
          <Link
            to="/"
            className="relative text-white hover:text-primary transition-all uppercase tracking-wide text-sm font-semibold group"
          >
            HOME
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primary transition-all duration-400 group-hover:w-full"></span>
          </Link>

          <Link
            to="/votacao"
            className="relative text-white hover:text-primary transition-all uppercase tracking-wide text-sm font-semibold group"
          >
            VOTAÇÃO
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primary transition-all duration-400 group-hover:w-full"></span>
          </Link>

          <Link
            to="/informacoes"
            className="relative text-white hover:text-primary transition-all uppercase tracking-wide text-sm font-semibold group"
          >
            INFORMAÇÕES
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primary transition-all duration-400 group-hover:w-full"></span>
          </Link>

          <Link
            to="/sobre"
            className="relative text-white hover:text-primary transition-all uppercase tracking-wide text-sm font-semibold group"
          >
            SOBRE
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primary transition-all duration-400 group-hover:w-full"></span>
          </Link>
        </nav>
      </header>

      {/*Menu Mobile*/}      
      <div className={`xl:hidden fixed top-0 right-0 h-full w-2/3 bg-background/80 backdrop-blur-lg shadow-lg transform transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
        } z-40`}>
            <ul className="flex flex-col items-center justify-center h-full gap-8 font-title text-lg">
                {["Home", "Votação", "Informações", "Sobre"].map((item) => (
                    <li key={item} className="relative p-3 cursor-pointer text-white hover:text-primary transition-all" onClick={() => setMenuOpen(false)}>
                        {item}
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-whte transition-all duration-300 group-hover:w-full"></span>
                    </li>
                ))}
            </ul>
        </div>

        {menuOpen && (
            <div className="fixed inset-0 bg-black/40 backdrop-blur-xl lx:hidden z-30" onClick={() => setMenuOpen(false)}></div>
        )}
        </>
    )
}