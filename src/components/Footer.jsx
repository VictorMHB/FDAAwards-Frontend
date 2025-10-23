import solomon from "../assets/images/sponsors/solomon.png";
import cativa from "../assets/images/sponsors/cativa.png";
import logika from "../assets/images/sponsors/logika.png";

export default function Footer() {
  return (
    <footer>
      {/* 1. BORDA COM GRADIENTE */}
      {/* Este div serve apenas como a linha decorativa superior. */}
      <div className="h-[3px] bg-gradient-to-r from-gray via-white to-gray" />

      {/* 2. CONTEÚDO DO FOOTER */}
      <div className="bg-gradient-to-t from-dark-bg to-background text-zinc-400 py-20 px-8 md:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          {/* Coluna da Esquerda: Logo, Links e Copyright */}
          <div className="flex flex-col items-center md:items-start gap-8">
            {/* Logo */}
            <h1 className="text-4xl font-title font-bold text-primary tracking-widest">
              FDA <span className="text-white">AWARDS</span>
            </h1>

            {/* Copyright */}
            <p className="text-xs text-secondary">
              © 2025, FDA Awards. Todos os direitos reservados.
            </p>
          </div>

          {/* Coluna da Direita: Redes Sociais (estilo da referência) */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <h3 className="font-title uppercase tracking-widest text-white text-sm">
              PRINCIPAIS PARCEIROS
            </h3>
            <div className="flex gap-6 items-center">
              <a href="https://www.salomon.inf.br/home" target="_blank" rel="noopener noreferrer" title="Visitar Salomon Studios">
              <img src={solomon} alt="Logo Solomon Studios" className="w-36 h-20 object-contain filter brightness-400 contrast-100 grayscale-100 hover:opacity-60 transition-all duration-300"/>
              </a>
              
              <a href="https://www.instagram.com/cativeirobar/" target="_blank" rel="noopener noreferrer" title="Visitar Cativeiro Bar">
              <img src={cativa} alt="Logo Cativeiro Bar" className="w-32 h-20 object-contain hover:opacity-60 transition-all duration-300"/>
              </a>
              
              <a href="https://logikacontabilidade.com.br/" target="_blank" rel="noopener noreferrer" title="Visitar Lógika Contabilidade">
              <img src={logika} alt="Logo Logika Contabilidade" className="w-40 h-20 object-contain filter brightness-200 contrast-100 grayscale-100 hover:opacity-60 transition-all duration-300"/>
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
