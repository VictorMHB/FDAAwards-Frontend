import { Award, Trophy, Users } from 'lucide-react';
export default function CategoryCard({ categoria, isSpecial = false }) {
  
  const Icon = isSpecial ? Trophy : Award;
  const specialColor = 'tier-gold';

  return (
    <div className={`
      flex flex-col h-full
      
      bg-background
      
      border border-silver/20 rounded-lg
      p-8
      transition-all duration-300
      
      hover:bg-dark-bg
      hover:border-transparent

      z-10
      
      ${isSpecial 
        ? `w-full max-w-[520px] shadow-${specialColor}/20 hover:shadow-[0_0_0_3px_var(--color-tier-gold)]`
        : 'hover:shadow-[0_0_0_3px_var(--color-silver)]'
      }
    `}>
      {/* Cabeçalho do Card */}
      <div className="flex items-center gap-3 mb-4">
        <Icon className={`w-6 h-6 flex-shrink-0 ${isSpecial ? `text-${specialColor}` : 'text-primary'}`} />
        <h3 className="text-xl font-title font-semibold text-white uppercase tracking-wide">
          {categoria.nome}
        </h3>
      </div>

      {/* Descrição */}
      <p className="text-silver font-text text-sm leading-relaxed mb-5 flex-grow">
        {categoria.descricao}
      </p>

      {/* Lista de Indicados */}
      <div>
        <h4
          className={`font-title font-semibold uppercase tracking-wide mb-3 text-xs flex items-center gap-2
            ${isSpecial ? `text-${specialColor}` : 'text-primary'}`}
        >
          <Users
            className={`w-4 h-4 ${
              isSpecial ? `text-${specialColor}` : 'text-primary'
            }`}
          />
          Indicados
        </h4>
        <ul className="list-disc list-outside ml-5 space-y-1 text-secondary font-text text-sm">
          {categoria.indicados.map((indicado, idx) => (
            <li key={idx} className="break-words">{indicado}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}