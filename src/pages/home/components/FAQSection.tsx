import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: 'Onde fica a fábrica da Tendas Aluban?',
      answer: 'Nossa fábrica está localizada em São Paulo, com distribuição para todo o território nacional. Trabalhamos com logística especializada para garantir entregas rápidas e seguras em qualquer região do Brasil.'
    },
    {
      question: 'Qual o prazo de entrega?',
      answer: 'O prazo de entrega varia conforme a região e o modelo escolhido. Para produtos em estoque, o envio é imediato, com entrega entre 5 a 15 dias úteis dependendo da localidade. Para produtos personalizados, o prazo é de 15 a 30 dias úteis após aprovação do projeto.'
    },
    {
      question: 'As tendas vêm com garantia?',
      answer: 'Todas as nossas tendas possuem garantia de fábrica de 12 meses contra defeitos de fabricação. A estrutura metálica possui garantia estendida de 24 meses. Oferecemos suporte técnico completo durante todo o período de garantia.'
    },
    {
      question: 'É possível personalizar as tendas com logotipo?',
      answer: 'Sim! Oferecemos serviço completo de personalização com impressão de logotipos, textos e cores personalizadas. A personalização pode ser feita em silk-screen ou impressão digital de alta qualidade, dependendo do projeto.'
    },
    {
      question: 'Qual a diferença entre os modelos de tendas?',
      answer: 'A Tenda Sanfonada é ideal para montagem rápida em feiras e eventos, com estrutura dobrável. A Tenda Piramidal é indicada para eventos maiores com fixação no solo, oferecendo maior estabilidade. Já a Tenda Chapéu de Bruxa possui design premium e sofisticado, perfeita para eventos corporativos de alto padrão.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleWhatsAppClick = () => {
    // Dispara evento customizado para o GTM
    if (typeof window !== 'undefined') {
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push({
        'event': 'whatsapp_click',
        'button_location': 'faq_section',
        'button_text': 'Fale com Nossa Equipe'
      });
    }
    
    // Dispara evento de conversão do Google Ads
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-17759334803/fubNCLLS4cYbEJPjp5RC',
        'value': 1.0,
        'currency': 'BRL'
      });
    }
    
    // Abre o modal de orçamento
    const event = new CustomEvent('openQuoteModal');
    window.dispatchEvent(event);
  };

  return (
    <section id="faq" className="w-full bg-white py-12 sm:py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#1A4D2E] mb-3 sm:mb-4">
            Perguntas Frequentes
          </h3>
          <p className="text-base sm:text-lg text-gray-600 px-4">
            Tire suas dúvidas sobre nossas tendas e serviços
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4" itemScope itemType="https://schema.org/FAQPage">
          {faqs.map((faq, index) => (
            <article
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <h4 className="m-0">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left cursor-pointer hover:bg-gray-50 transition-colors"
                  aria-expanded={openIndex === index}
                >
                  <span className="font-semibold text-base sm:text-lg text-[#1A4D2E] pr-3 sm:pr-4" itemProp="name">
                    {faq.question}
                  </span>
                  <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                    <i
                      className={`ri-arrow-down-s-line text-xl sm:text-2xl text-[#FFC107] transition-transform duration-300 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    ></i>
                  </div>
                </button>
              </h4>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <div className="px-4 sm:px-6 pb-4 sm:pb-5">
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed" itemProp="text">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 sm:mt-10 lg:mt-12 text-center">
          <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">Ainda tem dúvidas?</p>
          <button
            onClick={handleWhatsAppClick}
            className="bg-[#1A4D2E] hover:bg-[#002244] text-white font-semibold text-sm sm:text-base px-6 sm:px-8 py-3 rounded-lg transition-all duration-300 inline-flex items-center gap-2 cursor-pointer whitespace-nowrap"
          >
            <div className="w-5 h-5 flex items-center justify-center">
              <i className="ri-customer-service-2-line text-lg sm:text-xl"></i>
            </div>
            <span>Fale com Nossa Equipe</span>
          </button>
        </div>
      </div>
    </section>
  );
}
