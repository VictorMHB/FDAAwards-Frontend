import { useEffect, useState } from "react";
import {
  MapPin,
  ArrowRight,
  Award
} from "lucide-react";
import { Link as RouterLink } from "react-router-dom";

import background from "../assets/images/backgrounds/bg_home.png";
import geo from "../assets/images/geo_fda.png"

export default function Home() {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const showDate = new Date("2025-12-13T20:00:00");
    const updateTimer = () => {
      const now = new Date();
      const diff = showDate - now;

      if (diff <= 0) {
        setTimeLeft("O show já começou!");
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      setTimeLeft(`${days} DIAS ATÉ O SHOW AO VIVO`);
    };

    const timer = setInterval(updateTimer, 1000);
    updateTimer();
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="bg-background text-white min-h-screen overflow-hidden">
      {/* ======= BANNER ======= */}
  <div className="mt-5 bg-gradient-to-r from-primary/65 via-primary/80 to-primary/65 py-4 border-b-2 border-silver">
    <div className="flex flex-col md:flex-row items-center justify-center text-center uppercase tracking-wider font-title space-y-3 md:space-y-0 md:space-x-10">

      {/* === SEÇÃO 1: VOTAÇÕES ABERTAS === */}
      <div>
        <p className="text-sm md:text-base text-white">
          • AS VOTAÇÕES JÁ ESTÃO ABERTAS •
        </p>
      </div>

      {/* === DIVISOR VISUAL (OPCIONAL) === */}
      <div className="hidden md:block w-[1px] h-12 bg-silver"></div>

      {/* === SEÇÃO 2: CONTAGEM REGRESSIVA PARA O SHOW === */}
      <div>
        <p className="text-sm md:text-base text-white">
          • CONTAGEM REGRESSIVA PARA O SHOW •
        </p>
        <p className="text-base md:text-lg font-bold mt-1 text-white">
          {timeLeft}
        </p>
      </div>
    </div>
  </div>

      {/* ======= LANDING SECTION ======= */}
      <section
        className="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>

        {/* TITLE */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:px-20 flex">
          <div className="text-left space-y-8 " style={{ paddingLeft: "48%" }}>
            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <h1 className="text-4xl lg:text-8xl font-title font-bold text-primary tracking-wider">
                  FDA <span className="text-white">AWARDS</span>
                </h1>
              </div>
            </div>

            <div className="text-6xl lg:text-6xl font-title font-bold text-white">
              13 de DEZEMBRO
            </div>

            <div className="text-xl lg:text-2xl text-white/90 font-bold uppercase tracking-wide">
              <MapPin className="inline w-6 h-6 mr-2" />
              AUDITÓRIO FREGUESIA DO Ó, BRASIL
            </div>
          </div>
        </div>
      </section>

      <div className="bg-gradient-to-r from-primary/65 via-primary/80 to-primary/65 py-8 border-t-2 border-b-2 border-silver">
        <div className="text-center uppercase font-title">
          <h3>
            • Os melhores prêmios do ano • Os melhores prêmios do ano • Os
            melhores prêmios do ano • Os melhores prêmios do ano • Os melhores •
            prêmios do ano Os melhores prêmios do ano •
          </h3>
        </div>
      </div>

      {/* ======= NEWS SECTION ======= */}
      <section className="py-20 px-8 bg-gradient-to-r from-dark-bg via-muted-background to-dark-bg">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-5xl font-title font-bold text-white uppercase tracking-wider">
              NOTÍCIAS
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 - Server o Filme */}
            <div className="group cursor-pointer">
              <div
                className="
                relative overflow-hidden rounded-lg 
                bg-dark-gray
                border border-silver/10
                
                group-hover:shadow-[0_0_0_3px_var(--color-silver)]
                group-hover:border-transparent
                group-hover:bg-background
                
                transition-all duration-300 ease-in-out
                card-hover metallic-shine
              ">
                <div className="aspect-video bg-gradient-to-br from-silver/20 via-dark-gray to-background flex items-center justify-center relative">
                  <iframe 
                    className="w-full h-full" 
                    src="https://www.youtube.com/embed/t-dZPm4i3_Y?si=QGG4Uzv3Hx0kEhvB" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen>
                  </iframe>
                </div>
                <div className="p-6 bg-black/30 border-t border-silver/10">
                  <h3 className="text-xl font-title font-bold text-white uppercase tracking-wide">
                    EXIBIÇÃO EXCLUSIVA DE "SERVER O FILME"
                  </h3>
                  <p className="text-sm text-silver mt-2">
                    Após anos de produção, Server o Filme terá sua primeira
                    exibição no FDA AWARDS 2025.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 - Recorde de Votantes */}
            <div className="group cursor-pointer">
              <div
                className="
                relative overflow-hidden rounded-lg 
                bg-dark-gray
                border border-silver/10
                
                group-hover:shadow-[0_0_0_3px_var(--color-silver)]
                group-hover:border-transparent
                group-hover:bg-background
                
                transition-all duration-300 ease-in-out
                card-hover metallic-shine
              ">
                <div className="aspect-video bg-gradient-to-t from-dark-primary via-muted-background to-background flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="text-center text-white">
                    <div className="text-5xl font-title font-bold text-primary mb-2">
                      210 MIL
                    </div>
                    <div className="text-2xl font-title uppercase tracking-wide">
                      VOTANTES
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-black/30 border-t border-silver/10">
                  <h3 className="text-xl font-title font-bold text-white uppercase tracking-wide">
                    FDA AWARDS BATE RECORDES DE VOTOS
                  </h3>
                  <p className="text-sm text-silver mt-2">
                    O maior número de votos da história do evento com 210 mil
                    votantes.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 - Maior Vencedor */}
            <div className="group cursor-pointer">
              <div
                className="
                relative overflow-hidden rounded-lg 
                bg-dark-gray
                border border-silver/10
                
                group-hover:shadow-[0_0_0_3px_var(--color-silver)]
                group-hover:border-transparent
                group-hover:bg-background
                
                transition-all duration-300 ease-in-out
                card-hover metallic-shine
              ">
                <div className="
                  relative aspect-video 
                  bg-cover bg-center bg-no-repeat 
                  overflow-hidden" 
                  style={{ backgroundImage: `url(${geo})` }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                </div>
                <div className="p-6 bg-black/30 border-t border-silver/10">
                  <h3 className="text-xl font-title font-bold text-white uppercase tracking-wide">
                    MAIOR VENCEDOR DO FDA AWARDS
                  </h3>
                  <p className="text-sm text-silver mt-2">
                    Ganhador de 16 prêmios, Geovane do Carmo Elias dá entrevista
                    inédita.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======= EXPLORE SECTION ======= */}
      <section className="py-20 px-8 bg-gradient-to-r from-dark-bg via-muted-background to-dark-bg">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-5xl font-title font-bold text-white uppercase tracking-wider">
              EXPLORAR
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Card Votação */}
            <div className="group">
              <div
                className="
                relative overflow-hidden rounded-lg 
                bg-dark-gray
                border border-silver/10 
                
                p-8 h-64 flex flex-col justify-center 
                
                group-hover:shadow-[0_0_0_3px_var(--color-silver)]
                group-hover:border-transparent
                group-hover:bg-dark-bg

                transition-all duration-300 ease-in-out
                card-hover metallic-shine
              ">
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg to-dark-gray transition-opacity duration-300 group-hover:opacity-0"></div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-title font-bold text-white uppercase tracking-wide mb-4">
                    VOTAÇÃO
                  </h3>
                  <p className="text-silver mb-6">
                    Participe da votação e escolha os vencedores de cada
                    categoria.
                  </p>

                  <button
                    className="
                      relative uppercase
                      cursor-pointer
                      overflow-hidden
                      px-6 py-3
                      font-title font-semibold tracking-wide 
                      rounded-lg border-2 
                      transition-all duration-300

                      text-primary border-primary
                      hover:text-white hover:border-silver

                      bg-gradient-to-r from-primary to-primary bg-no-repeat 
                      [background-size:0%_100%]
                      hover:[background-size:100%_100%]
                    ">
                    <span className="relative flex items-center gap-2">
                      VOTAR AGORA
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Card Patrocinadores */}
            <div className="group">
              <div
                className="
                relative overflow-hidden rounded-lg 
                bg-dark-gray
                border border-silver/10 
                
                p-8 h-64 flex flex-col justify-center 
                
                group-hover:shadow-[0_0_0_3px_var(--color-silver)]
                group-hover:border-transparent
                group-hover:bg-dark-bg

                transition-all duration-300 ease-in-out
                card-hover metallic-shine
              ">
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg to-dark-gray transition-opacity duration-300 group-hover:opacity-0"></div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-title font-bold text-white uppercase tracking-wide mb-4">
                    PATROCINADORES
                  </h3>
                  <p className="text-silver mb-6">
                    Conheça as empresas que tornam o FDA AWARDS possível todos os anos.
                  </p>

                  <RouterLink to="/sobre#patrocinadores">
                  <button
                    className="
                      relative uppercase
                      cursor-pointer
                      overflow-hidden
                      px-6 py-3
                      font-title font-semibold tracking-wide 
                      rounded-lg border-2 
                      transition-all duration-300

                      text-white border-silver

                      bg-gradient-to-r from-primary to-primary bg-no-repeat 
                      [background-size:0%_100%]
                      hover:[background-size:100%_100%]
                    ">
                    <span className="relative flex items-center gap-2">
                      CONHECER
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  </button>
                  </RouterLink>
                </div>
              </div>
            </div>

            {/* Card Categorias */}
            <div className="group">
              <div
                className="
                relative overflow-hidden rounded-lg 
                bg-dark-gray
                border border-silver/10 
                
                p-8 h-64 flex flex-col justify-center 
                
                group-hover:shadow-[0_0_0_3px_var(--color-silver)]
                group-hover:border-transparent
                group-hover:bg-dark-bg

                transition-all duration-300 ease-in-out
                card-hover metallic-shine
              ">
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg to-dark-gray transition-opacity duration-300 group-hover:opacity-0"></div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-title font-bold text-white uppercase tracking-wide mb-4">
                    CATEGORIAS
                  </h3>
                  <p className="text-silver mb-6">
                    Explore todas as categorias e veja os indicados ao FDA AWARDS.
                  </p>

                  <RouterLink to="/votacao#categorias">
                  <button
                    className="
                      relative uppercase
                      cursor-pointer
                      overflow-hidden
                      px-6 py-3
                      font-title font-semibold tracking-wide 
                      rounded-lg border-2 
                      transition-all duration-300

                      text-white border-silver

                      bg-gradient-to-r from-primary to-primary bg-no-repeat 
                      [background-size:0%_100%]
                      hover:[background-size:100%_100%]
                    ">
                    <span className="relative flex items-center gap-2">
                      EXPLORAR
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  </button>
                  </RouterLink>
                </div>
              </div>
            </div>

            {/* Card Informações */}
            <div className="group">
              <div
                className="
                relative overflow-hidden rounded-lg 
                bg-dark-gray
                border border-silver/10 
                
                p-8 h-64 flex flex-col justify-center 
                
                group-hover:shadow-[0_0_0_3px_var(--color-silver)]
                group-hover:border-transparent
                group-hover:bg-dark-bg

                transition-all duration-300 ease-in-out
                card-hover metallic-shine
              ">
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg to-dark-gray transition-opacity duration-300 group-hover:opacity-0"></div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-title font-bold text-white uppercase tracking-wide mb-4">
                    INFORMAÇÕES
                  </h3>
                  <p className="text-silver mb-6">
                    Saiba tudo sobre o evento, local, horários e como participar.
                  </p>

                  <RouterLink to="/informacoes">
                  <button
                    className="
                      relative uppercase
                      cursor-pointer
                      overflow-hidden
                      px-6 py-3
                      font-title font-semibold tracking-wide 
                      rounded-lg border-2 
                      transition-all duration-300

                      text-white border-silver

                      bg-gradient-to-r from-primary to-primary bg-no-repeat 
                      [background-size:0%_100%]
                      hover:[background-size:100%_100%]
                    ">
                    <span className="relative flex items-center gap-2">
                      SABER MAIS
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  </button>
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
