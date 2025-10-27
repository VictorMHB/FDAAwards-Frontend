import { Link, useLocation } from "react-router-dom";
import { FiX } from "react-icons/fi";
import { Home, Vote, Info, Users } from 'lucide-react';

export default function MenuMobile({ isOpen, onClose }) {
  const location = useLocation();

  const menuItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "Votação", path: "/votacao", icon: Vote },
    { name: "Informações", path: "/informacoes", icon: Info },
    { name: "Sobre", path: "/sobre", icon: Users },
  ];

  return (
    <>
      {/* Container do Menu Mobile */}
      <div
        className={`
          xl:hidden fixed top-0 right-0 h-full w-2/3 max-w-sm
          bg-background/90 backdrop-blur-lg shadow-lg
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
          z-40 flex flex-col
        `}
      >
        {/* Botão de Fechar */}
        <button
          className="absolute top-6 right-8 text-white text-3xl focus:outline-none hover:text-primary transition-colors"
          onClick={onClose}
        >
          <FiX />
        </button>

        {/* Lista de Itens do Menu */}
        <ul className="flex flex-col items-center justify-center flex-grow gap-6 font-title text-lg px-4">
          {menuItems.map((item, index) => {
            const isActive = location.pathname === item.path;
            const IconComponent = item.icon;
            return (
              <li
                key={item.name}
                className="w-full"
                onClick={onClose}
              >
                <Link
                  to={item.path}
                  className={`
                    relative flex items-center justify-center py-3 px-4 rounded-md w-full
                    transition-all duration-300 group
                  hover:text-primary
                    focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background/90
                    ${isActive ? "text-primary font-bold" : "text-white"}
                  `}
                >
                  <IconComponent className={`w-5 h-5 mr-3 flex-shrink-0 ${isActive ? 'text-primary' : 'text-white group-hover:text-primary transition-colors'}`} />
                  <span className="relative">
                    {item.name}
                    <span
                      className={`
                        absolute left-0 -bottom-1 w-full h-[2px] bg-primary
                        transition-transform duration-300 ease-in-out
                        ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}
                      `}
                    />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Overlay Escuro */}
      <div
        className={`
          fixed inset-0 bg-black/50 backdrop-blur-sm
          xl:hidden z-30
          transition-opacity duration-300 ease-in-out
          ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
        onClick={onClose}
      ></div>
    </>
  );
}