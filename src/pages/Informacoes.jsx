import background from "../assets/images/backgrounds/bg_info.png";

import { Calendar, Clock, MapPin, Film, Award, Mic, Tv, Youtube, Twitch, HelpCircle, ChevronDown, DoorOpen, Video } from 'lucide-react';
import { useState } from 'react';

export default function Informacoes() {
  const cronograma = [
    { hora: "19:30", evento: "Abertura dos Portões", icone: <DoorOpen className="w-5 h-5 text-primary" /> },
    { hora: "20:00", evento: "Cerimônia de Abertura", icone: <Mic className="w-5 h-5 text-silver" /> },
    { hora: "20:30", evento: "Apresentação dos Primeiros Vencedores", icone: <Award className="w-5 h-5 text-primary" /> },
    { hora: "21:30", evento: "Anúncios Especiais e Trailers", icone: <Video className="w-5 h-5 text-silver" /> },
    { hora: "22:00", evento: "Apresentação dos Vencedores Principais", icone: <Award className="w-5 h-5 text-primary" /> },
    { hora: "22:45", evento: "Encerramento da Cerimônia", icone: <Mic className="w-5 h-5 text-silver" /> },
    { hora: "23:00", evento: "Exibição Exclusiva: Server o Filme", icone: <Film className="w-5 h-5 text-primary" /> },
  ];

  const faqItems = [
    {
      pergunta: "Como posso assistir à cerimônia?",
      resposta: "A cerimônia do FDA Awards será transmitida ao vivo pelos canais oficiais do evento no YouTube e na Twitch, com início às 20h (BRT). Haverá também cobertura completa no site, incluindo entrevistas e os melhores momentos da noite."
    },
    {
      pergunta: "Como são escolhidos os vencedores?",
      resposta: "Os vencedores são escolhidos através de uma combinação de voto popular (disponível para o público em nosso site) e um júri especializado composto por profissionais e convidados."
    },
    {
      pergunta: "Onde posso encontrar a lista completa de nominados?",
      resposta: "A lista completa de indicados e categorias está disponível em nosso site oficial, na seção “Votação”. Sendo possível conferir todos os participantes e suas respectivas categorias, além de informações adicionais sobre cada um."
    },
    {
      pergunta: "Qual o código de vestimenta para o evento presencial?",
      resposta: "Para os convidados que comparecerão ao Auditório Freguesia do Ó, recomendamos traje de gala. Sugerimos que os convidados optem por trajes elegantes e formais, adequados a uma noite de celebração e premiação."
    },
  ];

  const [openFAQ, setOpenFAQ] = useState(null);

  return (
    <main className="bg-dark-bg text-white min-h-screen">
      {/* ======= SEÇÃO 1: INFORMAÇÕES GERAIS ======= */}
      <section 
        className="relative py-48 px-8 bg-cover bg-center bg-no-repeat border-b-2 border-silver"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-6xl lg:text-8xl font-title font-bold text-white uppercase tracking-wider mb-10">
            Informações do Evento
          </h1>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {/* Cards de Data, Horário, Local */}
            <div className="bg-black/50 p-6 rounded-lg border border-silver/20 flex items-center gap-4">
              <Calendar className="w-10 h-10 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-title font-bold uppercase tracking-wide">Data</h3>
                <p className="text-silver">13 de Dezembro, 2025</p>
              </div>
            </div>
            <div className="bg-black/50 p-6 rounded-lg border border-silver/20 flex items-center gap-4">
              <Clock className="w-10 h-10 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-title font-bold uppercase tracking-wide">Horário</h3>
                <p className="text-silver">A partir das 19:30 (BRT)</p>
              </div>
            </div>
            <div className="bg-black/50 p-6 rounded-lg border border-silver/20 flex items-center gap-4">
              <MapPin className="w-10 h-10 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-title font-bold uppercase tracking-wide">Local</h3>
                <p className="text-silver">Auditório Freguesia do Ó, Brasil</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======= SEÇÃO 2: CRONOGRAMA DO EVENTO ======= */}
      <section className="py-20 px-8 bg-gradient-to-r from-dark-bg via-background to-dark-bg border-b-2 border-silver">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-title font-bold text-white uppercase tracking-wider mb-20 text-center">
            Cronograma
          </h2>

          {/* Timeline Vertical*/}
          <div className="relative border-l-4 border-primary ml-10 pl-16 space-y-12">

            {cronograma.map((item, index) => (
              <div key={index} className="relative group">
                {/* Ícone na timeline */}
                <div className="
                  absolute -left-[90px] top-0 
                  w-12 h-12 bg-dark-bg rounded-full 
                  flex items-center justify-center 
                  border-4 border-primary 
                  z-10 
                ">
                  {item.icone && <span className="transform scale-90">{item.icone}</span>} 
                </div>
                
                {/* Conteúdo do item */}
                <div>
                  <span className="block text-2xl font-title font-bold text-primary mb-1">{item.hora}</span> 
                  <h3 className="text-xl md:text-2xl font-title font-semibold text-white uppercase tracking-wide">{item.evento}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======= SEÇÃO 3: TRANSMISSÃO ======= */}
      <section className="py-20 px-8 bg-dark-bg border-t-2 border-silver/10">
        <div className="max-w-4xl mx-auto text-center">
          <Tv className="w-16 h-16 text-primary mx-auto mb-8"/>
          <h2 className="text-5xl font-title font-bold text-white uppercase tracking-wider mb-8">
            Transmissão Ao Vivo
          </h2>
          <p className="text-silver text-lg mb-10 max-w-2xl mx-auto">
            Acompanhe a cerimônia completa do FDA Awards 2025 ao vivo em nossas plataformas digitais. A gravação ficará disponível após o termino do evento.
          </p>
          <div className="flex justify-center items-center gap-8">
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-silver flex flex-col items-center gap-2">
              <Youtube className="w-10 h-10 transition-transform duration-300 group-hover:scale-110" />
              <span className="text-sm font-title uppercase tracking-wide">YouTube</span>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-silver flex flex-col items-center gap-2">
              <Twitch className="w-10 h-10 transition-transform duration-300 group-hover:scale-110" />
              <span className="text-sm font-title uppercase tracking-wide">Twitch</span>
            </a>
          </div>
        </div>
      </section>

      {/* ======= SEÇÃO 4: FAQ (Perguntas Frequentes) ======= */}
      <section className="py-20 px-8 bg-dark-bg border-t-2 border-silver/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-title font-bold text-white uppercase tracking-wider mb-16 text-center">
            Perguntas Frequentes
          </h2>
          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <div 
                key={index} 
                className="
                  group
                  border border-silver/20 rounded-lg overflow-hidden
                  transition-all duration-300 ease-in-out
                  bg-background

                  hover:shadow-[0_0_0_3px_var(--color-silver)]
                  hover:border-transparent
                  hover:bg-background/50
                "
              >
                <button 
                  className="cursor-pointer w-full flex justify-between items-center text-left p-6 transition-colors duration-300"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  <h3 className="text-xl font-title font-semibold text-white uppercase tracking-wide flex items-center gap-3">
                    <HelpCircle className="w-6 h-6 text-primary flex-shrink-0"/>
                    {item.pergunta}
                  </h3>
                  <ChevronDown 
                    className={`w-6 h-6 text-silver transition-transform duration-300 ${openFAQ === index ? 'rotate-180' : ''}`} 
                  />
                </button>
                {/* Conteúdo da resposta */}
                <div 
                  className={`px-6 transition-all duration-300 ease-in-out ${openFAQ === index ? 'max-h-96 py-6 opacity-100' : 'max-h-0 py-0 opacity-0'}`}
                  style={{ overflow: 'hidden' }}
                >
                  <p className="text-secondary leading-relaxed">{item.resposta}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}