export function WhyBuySection() {
  const differentials = [
    {
      icon: 'ri-building-fill',
      emoji: '🏭',
      title: 'Origem Garantida',
      description: 'Expertise do polo industrial de São Paulo com logística otimizada para todo o Brasil. Fabricação própria com controle de qualidade rigoroso.'
    },
    {
      icon: 'ri-shield-check-fill',
      emoji: '🛡️',
      title: 'Qualidade do Material',
      description: 'Não usamos lona de baixa gramatura. Nossas tendas suportam sol intenso e chuvas fortes sem rasgar. Estruturas em aço galvanizado de alta resistência.'
    },
    {
      icon: 'ri-award-fill',
      emoji: '✅',
      title: 'Garantia Real',
      description: 'Garantia de 24 meses na estrutura metálica contra defeitos de solda. Assistência técnica especializada e suporte pós-venda.'
    },
    {
      icon: 'ri-truck-fill',
      emoji: '🚚',
      title: 'Entrega Nacional',
      description: 'Enviamos para todo o Brasil com logística eficiente. Prazos competitivos e rastreamento completo do seu pedido.'
    },
    {
      icon: 'ri-price-tag-3-fill',
      emoji: '💰',
      title: 'Compra ou Aluguel',
      description: 'Venda direta sem intermediários ou aluguel com condições flexíveis. Cobrimos qualquer oferta de atacado. Condições especiais para grandes volumes.'
    },
    {
      icon: 'ri-customer-service-2-fill',
      emoji: '👨‍🔧',
      title: 'Atendimento Técnico',
      description: 'Equipe especializada para orientar na escolha do modelo ideal. Suporte técnico para montagem e manutenção.'
    }
  ];

  const handleWhatsAppClick = () => {
    const message = `Olá! Gostaria de solicitar um orçamento para tendas. Pode me ajudar? 🎪`;
    const whatsappUrl = `https://wa.me/5512981815371?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="w-full bg-gradient-to-br from-gray-50 to-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#1A4D2E] mb-3 sm:mb-4">
            Por que escolher a <strong>Tendas Aluban</strong>?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Somos fabricantes com anos de experiência no mercado. Qualidade industrial, preço justo e opções flexíveis de compra ou aluguel.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {differentials.map((item, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl p-5 sm:p-6 transition-all duration-300 hover:shadow-xl hover:transform hover:scale-105"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center bg-[#FFC107] rounded-full mb-3 sm:mb-4 relative">
                <i className={`${item.icon} text-2xl sm:text-3xl text-white`}></i>
                <span className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 text-2xl sm:text-3xl">{item.emoji}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#1A4D2E] mb-2 sm:mb-3">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 sm:mt-12 lg:mt-16">
          <button
            onClick={handleWhatsAppClick}
            className="inline-flex items-center gap-3 bg-[#FFC107] hover:bg-[#E55A2B] text-white font-bold text-base sm:text-lg lg:text-xl py-4 sm:py-5 lg:py-6 px-8 sm:px-10 lg:px-12 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer whitespace-nowrap transform hover:scale-105"
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <i className="ri-whatsapp-fill text-2xl sm:text-3xl"></i>
            </div>
            <span>Quero Minha Tenda Agora</span>
          </button>
        </div>
      </div>
    </section>
  );
}