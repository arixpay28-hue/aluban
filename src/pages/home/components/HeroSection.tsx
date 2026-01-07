import { useState } from 'react';

export function HeroSection() {
  const handleWhatsAppClick = () => {
    const message = `Olá! Gostaria de solicitar um orçamento para tendas. Pode me ajudar? 🎪`;
    const whatsappUrl = `https://wa.me/5512981815371?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://static.readdy.ai/image/ca6cf53a86f87279e2de7045808c4d0c/ae74d03b53c37031df24649e9e081d94.png"
          alt="Fábrica de Tendas Aluban - Fabricante de Tendas Sanfonadas e Piramidais"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 sm:py-24 lg:py-32">
        <div className="max-w-2xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1A4D2E] leading-tight mb-3 sm:mb-4 lg:mb-6">
            Tendas Aluban: <strong>Fábrica de Tendas Sanfonadas e Piramidais</strong>. Venda e Aluguel com Entrega Nacional.
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 mb-4 sm:mb-6 lg:mb-8 leading-relaxed">
            Direto do polo industrial. <strong>Estruturas em Aço Galvanizado</strong> e <strong>Lonas de Alta Resistência</strong>. Compre ou alugue com as melhores condições.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mt-8 sm:mt-10 lg:mt-12">
            <button
              onClick={handleWhatsAppClick}
              className="w-full sm:w-auto bg-[#FFC107] hover:bg-[#E55A2B] text-white font-bold text-base sm:text-lg lg:text-xl py-4 sm:py-5 lg:py-6 px-8 sm:px-10 lg:px-12 rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer whitespace-nowrap transform hover:scale-105"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-whatsapp-fill text-2xl sm:text-3xl"></i>
              </div>
              <span>Solicitar Orçamento Grátis</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}