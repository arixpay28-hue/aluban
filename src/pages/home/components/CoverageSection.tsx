
export function CoverageSection() {
  const coverageAreas = [
    {
      id: 1,
      icon: 'ri-building-2-line',
      emoji: '🏗️',
      title: 'Canteiros de obras',
      description: 'Proteção para materiais, ferramentas e áreas de trabalho em construções',
      color: '#1A4D2E'
    },
    {
      id: 2,
      icon: 'ri-cake-3-line',
      emoji: '🎉',
      title: 'Festas, eventos e convenções',
      description: 'Cobertura elegante para casamentos, feiras, shows e eventos corporativos',
      color: '#FFC107'
    },
    {
      id: 3,
      icon: 'ri-plant-line',
      emoji: '🌾',
      title: 'Agricultura e pecuária',
      description: 'Proteção para colheitas, equipamentos agrícolas e áreas de criação',
      color: '#1A4D2E'
    },
    {
      id: 4,
      icon: 'ri-hammer-line',
      emoji: '👷',
      title: 'Construção civil',
      description: 'Tendas robustas para obras de grande porte e projetos de infraestrutura',
      color: '#FFC107'
    }
  ];

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Olá! Gostaria de solicitar um orçamento para tendas. Pode me ajudar? 🎪');
    window.open(`https://wa.me/5561982630276?text=${message}`, '_blank');
  };

  return (
    <section id="areas-cobertura" className="w-full bg-gradient-to-b from-white to-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A4D2E] mb-4">
            Áreas de <strong>Cobertura e Aplicação</strong>
          </h2>
          <p className="text-lg text-gray-600">
            Nossas tendas atendem diversos segmentos com qualidade profissional
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {coverageAreas.map((area) => (
            <article 
              key={area.id}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer group relative overflow-hidden transform hover:-translate-y-2"
            >
              {/* Gradiente de fundo animado */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                style={{ background: `linear-gradient(135deg, ${area.color} 0%, transparent 100%)` }}
              ></div>

              {/* Conteúdo */}
              <div className="relative z-10">
                {/* Ícone com emoji */}
                <div className="relative mb-4">
                  <div 
                    className="w-16 h-16 flex items-center justify-center rounded-full mx-auto transition-all duration-500 group-hover:scale-110 group-hover:rotate-12"
                    style={{ backgroundColor: `${area.color}15` }}
                  >
                    <i 
                      className={`${area.icon} text-4xl transition-colors duration-500`}
                      style={{ color: area.color }}
                    ></i>
                  </div>
                  {/* Emoji flutuante */}
                  <div className="absolute -top-1 -right-1 text-2xl transform group-hover:scale-125 transition-transform duration-500">
                    {area.emoji}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#1A4D2E] mb-3 text-center group-hover:text-[#FFC107] transition-colors duration-300">
                  {area.title}
                </h3>
                
                <p className="text-gray-600 text-center mb-4 text-sm">
                  {area.description}
                </p>

                {/* Botão com seta */}
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-gradient-to-r from-[#1A4D2E] to-[#004488] hover:from-[#FFC107] hover:to-[#E55A2B] text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap group/btn"
                >
                  <span className="text-sm">Solicitar Orçamento</span>
                  <div className="w-5 h-5 flex items-center justify-center">
                    <i className="ri-arrow-right-line text-lg group-hover/btn:translate-x-1 transition-transform duration-300"></i>
                  </div>
                </button>
              </div>

              {/* Borda animada */}
              <div className="absolute inset-0 rounded-2xl border-2 border-[#FFC107] opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
            </article>
          ))}
        </div>

        {/* Botão WhatsApp adicional */}
        <div className="text-center">
          <button
            onClick={handleWhatsAppClick}
            className="bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 cursor-pointer whitespace-nowrap inline-flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <i className="ri-whatsapp-fill text-2xl"></i>
            </div>
            <span>Falar com Especialista</span>
          </button>
        </div>
      </div>
    </section>
  );
}
