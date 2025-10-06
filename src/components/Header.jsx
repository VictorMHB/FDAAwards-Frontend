import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    return(
        <>
        <header className="sticky top-0 left-0 w-full z-50 backdrop-blur-lg border-b flex justify-between items-center text-background py-6 px-8 md:px-32 bg-primary">
        <a href="#">
          <h1 className="text-5xl text-background font-title hover:text-background/80 transition-all">FDA AWARDS</h1>
        </a>

        <button className="xl:hidden text-background text-3xl focus:outline-none" onClick={toggleMenu}>
            {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        <ul class="hidden xl:flex items-center gap-12 font-title text-2xl">
            {["Home", "Votação", "Informações", "Sobre"].map((item) => (
                <li key={item} className="relative p-3 cursor-pointer group text-background">{item}
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-background transition-all duration-300 group-hover:w-full"></span>
                </li>
            ))}
        </ul>
      </header>

      <div className={`xl:hidden fixed top-0 right-0 h-full w-2/3 bg-primary/95 backdrop-blur-lg shadow-lg transform transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
        } z-40`}>
            <ul className="flex flex-col items-center justify-center h-full gap-8 font-title text-lg">
                {["Home", "Votação", "Informações", "Sobre"].map((item) => (
                    <li key={item} className="relative p-3 cursor-pointer text-background hover:text-background transition-all" onClick={() => setMenuOpen(false)}>
                        {item}
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-background transition-all duration-300 group-hover:w-full"></span>
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