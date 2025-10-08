import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    return(
        <>
        <header className="sticky top-0 left-0 w-full z-50 backdrop-blur-md border-b border-white/10 flex justify-between items-center text-background py-4 px-8 md:px-32 bg-primary/20">
        <a href="#" className="flex items-center gap-3">
          <div className="w-8 h-8 bg-background rounded-sm flex items-center justify-center">
            <div className="w-6 h-6 bg-primary rounded-sm"></div>
          </div>
          <h1 className="text-2xl text-white font-title hover:text-white/80 transition-all">FDA AWARDS</h1>
        </a>

        <button className="xl:hidden text-white text-3xl focus:outline-none" onClick={toggleMenu}>
            {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        <ul className="hidden xl:flex items-center gap-8 font-title text-lg">
            {["Home", "Votação", "Informações", "Sobre"].map((item) => (
                <li key={item} className="relative p-3 cursor-pointer group text-white hover:text-white/80 transition-all">{item}
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </li>
            ))}
        </ul>
      </header>

      <div className={`xl:hidden fixed top-0 right-0 h-full w-2/3 bg-primary/95 backdrop-blur-lg shadow-lg transform transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
        } z-40`}>
            <ul className="flex flex-col items-center justify-center h-full gap-8 font-title text-lg">
                {["Home", "Votação", "Informações", "Sobre"].map((item) => (
                    <li key={item} className="relative p-3 cursor-pointer text-white hover:text-white transition-all" onClick={() => setMenuOpen(false)}>
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