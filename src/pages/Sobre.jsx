import background from "../assets/images/background_sobre.png";

import solomon from "../assets/images/sponsors/solomon.png";
import cativa from "../assets/images/sponsors/cativa.png";
import logika from "../assets/images/sponsors/logika.png";
import romane from "../assets/images/sponsors/romane.png";
import ryp from "../assets/images/sponsors/ryp.png";
import olive from "../assets/images/sponsors/olive.png";

import fda2024 from "../assets/images/fda_2024.png";
import fda2023 from "../assets/images/fda_2023.png";
import fda2022 from "../assets/images/fda_2022.png";
import fda2021 from "../assets/images/fda_2021.png";

export default function Sobre() {

  const sponsors = [
    // Diamante
    { name: "Cativeiro's Bar", tier: 'Diamante', logo: cativa, url: 'https://www.instagram.com/cativeirobar/' },
    { name: "Logika Contabilidade", tier: 'Diamante', logo: logika, url: 'https://logikacontabilidade.com.br/' },
    { name: "Solomon Studios", tier: 'Diamante', logo: solomon, url: 'https://www.salomon.inf.br/home', filterStyle: 'brightness-400' },
    // Platina
    { name: "Armarinhos Romane", tier: 'Platina', logo: romane, url: 'https://www.instagram.com/armarinhosromanecambe/', filterStyle: 'brightness-200' },
    { name: "Olive Studios", tier: 'Platina', logo: olive, url: 'https://sites.google.com/edu.unifil.br/olive-studios/p%C3%A1gina-inicial?authuser=0' },
    { name: "RYP", tier: 'Platina', logo: ryp, url: '#'},
    // Ouro
    { name: "Cismus LTDA", tier: 'Ouro', logo: null, url: '#' },
    { name: "Hillebrande Enterprise", tier: 'Ouro', logo: null, url: '#' },
    { name: "Origin House Academia NF", tier: 'Ouro', logo: null, url: '#' },
    // Prata
    { name: "Batalha do RU", tier: 'Prata', logo: null, url: '#' },
    { name: "CSGOnet", tier: 'Prata', logo: null, url: '#' },
    { name: "Seguro's Berna", tier: 'Prata', logo: null, url: '#' },
    { name: "UniFil", tier: 'Prata', logo: null, url: '#' },
    // Bronze
    { name: "Bar do PIG", tier: 'Bronze', logo: null, url: '#' },
    { name: "BR Car", tier: 'Bronze', logo: null, url: '#' },
    { name: "INSACast", tier: 'Bronze', logo: null, url: '#' },
    { name: "Panificadora Tupãssi", tier: 'Bronze', logo: null, url: '#' },
    { name: "Silva's Barbearia", tier: 'Bronze', logo: null, url: '#' },
  ];

  const renderSponsor = (sponsor, sizeClass) => (
    <a key={sponsor.name} href={sponsor.url} target="_blank" rel="noopener noreferrer" title={`Visitar ${sponsor.name}`}>
      {sponsor.logo ? (
        // Se tiver logo, mostra a imagem
        <img 
          src={sponsor.logo} 
          alt={`Logo ${sponsor.name}`} 
          className={`${sizeClass} 
          w-60 h-32 object-contain 
          filter brightness-100 contrast-100 grayscale-100 
          hover:opacity-60 
          transition-all duration-300
          ${sponsor.filterStyle || ''}
          `} />
      ) : (
        // Se NÃO tiver logo, mostra apenas o nome com a fonte de título
        <p className="font-title text-xl text-white hover:text-secondary/60 transition-colors">
          {sponsor.name}
        </p>
      )}
    </a>
  );

  return (
    <main className="bg-dark-bg text-white min-h-screen overflow-hidden">
      {/* ======= SEÇÃO 1: SOBRE O FDA AWARDS ======= */}
      <section
        className="relative h-[75vh] flex items-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${background})` }}
      >
       <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-7xl mx-48 px-0 w-full">
          {/* Bloco de texto inspirado na sua referência */}
          <div className="backdrop-blur-md p-10 rounded-lg max-w-2xl">
            <h1 className="text-6xl font-title font-bold text-white uppercase tracking-wider mb-4">
              SOBRE O <span className="text-primary">FDA</span> AWARDS
            </h1>
            <h2 className="text-xl font-title text-primary uppercase tracking-wide mb-8">
              Reconhecendo acontecimentos, feitos e histórias do ano.
            </h2>
            <p className="text-secondary text-base leading-relaxed mb-4">
              O FDA AWARDS foi criado em 2021 com o objetivo de coroar os maiores feitos do ano.  
              Desde o seu início, a premiação rapidamente se consolidou como uma das mais prestigiadas do mundo.
            </p>
            <p className="text-secondary text-base leading-relaxed">
              Nossa missão é reconhecer e enaltecer os maiores e melhores momentos do ano.
            </p>
          </div>
        </div>
      </section>

      {/* ======= SEÇÃO 2: EDIÇÕES ANTERIORES ======= */}
      <section className="py-20 px-8 bg-gradient-to-r from-dark-bg via-muted-background to-dark-bg">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-title font-bold text-white uppercase tracking-wider mb-16 text-center">
            HISTÓRICO DE EDIÇÕES
          </h2>

          {/* Container para a lista de edições */}
          <div className="flex flex-col gap-16">
            
            {/* --- EDIÇÃO 2024 --- */}
            <div className="group grid md:grid-cols-3 gap-8 items-center">
              {/* Imagem da Edição */}
              <div className="md:col-span-1 overflow-hidden rounded-sm">
                <div 
                  className="aspect-video bg-cover bg-center" 
                  style={{ backgroundImage: `url(${fda2024})` }}
                >
                </div>
              </div>
              {/* Informações da Edição */}
              <div className="md:col-span-2 text-left">
                <h3 className="text-4xl font-title font-bold text-primary mb-2">2024</h3>
                <p className="text-lg font-title font-regular text-silver uppercase tracking-wide mb-4">
                  Maior Vencedor da Noite: Fariaz MC
                </p>
                <p className="text-secondary leading-relaxed">
                  O FDA Awards de 2024 foi a edição com o maior número de votantes, totalizando 210 mil, um aumento de 60 mil em relação à edição anterior. 
                  Outro grande marco dessa edição foi a utilização do Auditório Freguesia do Ó pela primeira vez para a realização da cerimônia do prêmio. 
                  A noite ainda contou com uma apresentação exclusiva da "Stultus Orchestra".
                </p>
              </div>
            </div>

            {/* --- EDIÇÃO 2023 --- */}
            <div className="group grid md:grid-cols-3 gap-8 items-center">
              {/* Imagem da Edição */}
              <div className="md:col-span-1 overflow-hidden rounded-sm">
                <div 
                  className="aspect-video bg-cover bg-center" 
                  style={{ backgroundImage: `url(${fda2023})` }}
                >
                </div>
              </div>
              {/* Informações da Edição */}
              <div className="md:col-span-2 text-left">
                <h3 className="text-4xl font-title font-bold text-primary mb-2">2023</h3>
                <p className="text-lg font-title font-regular text-silver uppercase tracking-wide mb-4">
                  Maior Vencedor da Noite: Gianluca “Senhor” de Andrade
                </p>
                <p className="text-secondary leading-relaxed">
                  Em 2023, após alguns imprevistos, não foi possível realizar ou transmitir o FDA Awards. 
                  Essa edição ficou marcada pela paridade nos prêmios, em que o maior vencedor da noite foi Gianluca “Senhor” de Andrade, com dois troféus.
                </p>
              </div>
            </div>

            {/* --- EDIÇÃO 2022 --- */}
            <div className="group grid md:grid-cols-3 gap-8 items-center">
              {/* Imagem da Edição */}
              <div className="md:col-span-1 overflow-hidden rounded-sm">
                <div 
                  className="aspect-video bg-cover bg-center" 
                  style={{ backgroundImage: `url(${fda2022})` }}
                >
                </div>
              </div>
              {/* Informações da Edição */}
              <div className="md:col-span-2 text-left">
                <h3 className="text-4xl font-title font-bold text-primary mb-2">2022</h3>
                <p className="text-lg font-title font-regular text-silver uppercase tracking-wide mb-4">
                  Maior Vencedor da Noite: Geovane do Carmo Elias
                </p>
                <p className="text-secondary leading-relaxed"> 
                  A edição de 2022 marcou a primeira transmissão online do prêmio para o público. 
                  A competição foi muito acirrada, porém Geovane do Carmo Elias terminou a noite com mais troféus, continuando sua dominância do ano passado. 
                  Além disso, foi nesse ano que os “Vagabundos Supremos” se consagraram vencedores na categoria “Grupo do Ano”, antes de sua dissolução.
                </p>
              </div>
            </div>

            {/* --- EDIÇÃO 2021 --- */}
            <div className="group grid md:grid-cols-3 gap-8 items-center">
              {/* Imagem da Edição */}
              <div className="md:col-span-1 overflow-hidden rounded-sm">
                <div 
                  className="aspect-video bg-cover bg-center" 
                  style={{ backgroundImage: `url(${fda2021})` }}
                >
                </div>
              </div>
              {/* Informações da Edição */}
              <div className="md:col-span-2 text-left">
                <h3 className="text-4xl font-title font-bold text-primary mb-2">2021</h3>
                <p className="text-lg font-title font-regular text-silver uppercase tracking-wide mb-4">
                  Maior Vencedor da Noite: Geovane do Carmo Elias
                </p>
                <p className="text-secondary leading-relaxed">
                  A primeira edição do FDA Awards foi realizada em 2021 como um pequeno resumo das categorias que marcaram o ano. 
                  O maior vencedor dessa edição foi Geovane do Carmo Elias, que conquistou um total de cinco troféus durante a noite.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
      
      {/* ======= SEÇÃO 3: PATROCINADORES ======= */}
      <section id="patrocinadores" className="py-20 px-8 bg-dark-bg border-t-2 border-silver/10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-title font-bold text-white uppercase tracking-wider mb-16">
            PATROCINADORES
          </h2>

          {/* --- SEÇÃO DE DESTAQUE: DIAMANTE E PLATINA --- */}
          <div className="flex flex-col gap-12 mb-20">
            {/* Categoria Diamante */}
            <div>
              <h3 className="text-3xl font-title font-bold text-tier-diamond uppercase tracking-widest mb-10 border-b-2 border-tier-diamond pb-4">
                DIAMANTE
              </h3>
              <div className="flex flex-wrap justify-center items-center gap-x-20 gap-y-10">
                {sponsors.filter(s => s.tier === 'Diamante').map(sponsor => renderSponsor(sponsor, 'h-24'))}
              </div>
            </div>
            
            {/* Categoria Platina */}
            <div>
              <h3 className="text-2xl font-title font-bold text-tier-platinum uppercase tracking-widest mb-10 border-b border-tier-platinum pb-4">
                PLATINA
              </h3>
              <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-10">
                {sponsors.filter(s => s.tier === 'Platina').map(sponsor => renderSponsor(sponsor, 'h-20'))}
              </div>
            </div>
          </div>

          {/* --- SEÇÃO DE APOIADORES: OURO, PRATA E BRONZE --- */}
          <h2 className="text-4xl font-title font-bold text-white uppercase tracking-wider mb-16">
            APOIADORES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {/* Coluna Ouro */}
            <div className="flex flex-col items-center gap-8">
              <h3 className="text-xl font-title font-bold text-tier-gold uppercase tracking-widest w-full border-b border-tier-gold pb-3">
                OURO
              </h3>
              {sponsors.filter(s => s.tier === 'Ouro').map(sponsor => renderSponsor(sponsor, 'h-16'))}
            </div>

            {/* Coluna Prata */}
            <div className="flex flex-col items-center gap-8">
              <h3 className="text-xl font-title font-bold text-silver uppercase tracking-widest w-full border-b border-silver pb-3">
                PRATA
              </h3>
              {sponsors.filter(s => s.tier === 'Prata').map(sponsor => renderSponsor(sponsor, 'h-14'))}
            </div>

            {/* Coluna Bronze */}
            <div className="flex flex-col items-center gap-8">
              <h3 className="text-xl font-title font-bold text-tier-bronze uppercase tracking-widest w-full border-b border-tier-bronze pb-3">
                BRONZE
              </h3>
              {sponsors.filter(s => s.tier === 'Bronze').map(sponsor => renderSponsor(sponsor, 'h-12'))}
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}