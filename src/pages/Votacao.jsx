import categoriasData from '../data/categorias.json';
import CategoryCard from '../components/CategoryCard';
import AnimatedLinesBackground from '../components/AnimatedLinesBackground';
import background from '../assets/images/backgrounds/bg_votacao.png';

export default function Votacao() {
  
  const googleFormUrl = "URL_DO_SEU_GOOGLE_FORM_AQUI";

  const premiosEspeciais = categoriasData.filter(cat => cat.especial === true);
  const categoriasRegulares = categoriasData.filter(cat => !cat.especial);

  return (
    <main className="bg-dark-bg text-white min-h-screen">
        
      {/* --- Seção de Título e Votação --- */}
      <section 
        className="relative py-48 px-8 bg-cover bg-center bg-no-repeat border-b-2 border-silver"
        style={{ backgroundImage: `url(${background})` }}
      >
        
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="max-w-5xl mx-auto z-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="md:pr-8 z-10">
            <h1 className="text-5xl md:text-6xl font-title font-bold text-white uppercase tracking-wider mb-6">
              Categorias <span className="text-primary">& Votação</span>
            </h1>
            <p className="text-silver text-lg leading-relaxed font-text">
              Confira abaixo a lista completa de todas as categorias do FDA AWARDS 2025.
            </p>
          </div>
          <div
            className="
              flex flex-col p-8
              bg-background/50
              border border-silver/20 rounded-lg
              items-center justify-center 
              transition-all duration-300
              z-10"
          >
            <h2 className="mb-4 text-2xl font-title font-semibold text-white text-center uppercase">
              Acesse a Votação
            </h2>
            <a
              href={googleFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-block
                w-full
                px-8 py-4
                text-center font-title font-semibold tracking-wide text-primary
                bg-gradient-to-r from-primary to-primary bg-no-repeat
                rounded-lg border-2 border-primary
                transition-all
                uppercase duration-300 hover:text-white hover:border-silver [background-size:0%_100%] hover:[background-size:100%_100%]"
            >
              Votar Agora
            </a>
          </div>
        </div>
      </section>

      {/* --- Seção: Prêmios da Noite --- */}
      <section 
        className="px-4 md:px-8 pt-16 pb-20 border-b border-silver/50 bg-gradient-to-r from-dark-bg via-background to-dark-bg relative overflow-hidden"
        id="categorias">

        <div className="max-w-6xl mx-auto z-10">
          <h2 className="text-4xl font-title font-bold text-white uppercase tracking-wider mb-12 text-center">
            <span className="text-tier-gold">Prêmios da Noite</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {premiosEspeciais.map((categoria) => (
              <CategoryCard
                key={categoria.id}
                categoria={categoria}
                isSpecial={true}
              />
            ))}
          </div>
        </div>
      </section>

      <div className=""></div>

      {/* --- Seção: Categorias Regulares --- */}
      <section className="px-4 md:px-8 py-20 bg-gradient-to-r from-dark-bg via-background to-dark-bg relative overflow-hidden">

        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-title font-bold text-white uppercase tracking-wider mb-12 text-center">
            Categorias
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {categoriasRegulares.map((categoria) => (
              <CategoryCard
                key={categoria.id}
                categoria={categoria}
                isSpecial={false}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}