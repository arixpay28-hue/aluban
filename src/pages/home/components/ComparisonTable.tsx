export function ComparisonTable() {
  const tableData = [
    {
      model: 'Tenda Sanfonada',
      assembly: 'Rápida (1 min)',
      windResistance: 'Moderada (30km/h)',
      idealUse: 'Comércio, Feiras, Eventos Rápidos',
      structure: 'Alumínio ou Aço Carbono',
      canvas: 'PVC 500g/m²'
    },
    {
      model: 'Tenda Piramidal',
      assembly: 'Técnica (Equipe)',
      windResistance: 'Alta (80km/h fixada)',
      idealUse: 'Armazenagem, Shows, Obras',
      structure: 'Aço Galvanizado Bitola 13/14/16',
      canvas: 'PVC 650g/m²'
    },
    {
      model: 'Chapéu de Bruxa',
      assembly: 'Técnica (Equipe)',
      windResistance: 'Moderada/Alta (fixada)',
      idealUse: 'Casamentos, Eventos VIP, Áreas Premium',
      structure: 'Aço Galvanizado Reforçado',
      canvas: 'PVC Vinílico 600g/m²'
    }
  ];

  const handleWhatsAppClick = () => {
    // Abre o modal de orçamento
    const event = new CustomEvent('openQuoteModal');
    window.dispatchEvent(event);
  };

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#1A4D2E] mb-3 sm:mb-4">
            Compare e Escolha: <strong>Compra ou Aluguel</strong>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Entenda as diferenças entre nossos modelos e escolha a melhor opção para seu negócio
          </p>
        </div>

        {/* Tabela Desktop */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
            <thead className="bg-[#1A4D2E] text-white">
              <tr>
                <th className="px-6 py-4 text-left font-bold">Modelo</th>
                <th className="px-6 py-4 text-left font-bold">Montagem</th>
                <th className="px-6 py-4 text-left font-bold">Resistência ao Vento</th>
                <th className="px-6 py-4 text-left font-bold">Uso Ideal</th>
                <th className="px-6 py-4 text-left font-bold">Estrutura</th>
                <th className="px-6 py-4 text-left font-bold">Lona</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr 
                  key={index}
                  className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-blue-50 transition-colors`}
                >
                  <td className="px-6 py-4 font-bold text-[#1A4D2E]">{row.model}</td>
                  <td className="px-6 py-4 text-gray-700">{row.assembly}</td>
                  <td className="px-6 py-4 text-gray-700">{row.windResistance}</td>
                  <td className="px-6 py-4 text-gray-700">{row.idealUse}</td>
                  <td className="px-6 py-4 text-gray-700 text-sm">{row.structure}</td>
                  <td className="px-6 py-4 text-gray-700 text-sm">{row.canvas}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Cards Mobile */}
        <div className="lg:hidden space-y-4 sm:space-y-6">
          {tableData.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-5 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-bold text-[#1A4D2E] mb-3 sm:mb-4 pb-2 sm:pb-3 border-b-2 border-[#FFC107]">
                {item.model}
              </h3>
              
              <div className="space-y-2.5 sm:space-y-3">
                <div className="flex items-start gap-2.5 sm:gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i className="ri-time-fill text-[#FFC107] text-lg sm:text-xl"></i>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm sm:text-base">Montagem:</p>
                    <p className="text-gray-700 text-sm sm:text-base">{item.assembly}</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 sm:gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i className="ri-windy-fill text-[#FFC107] text-lg sm:text-xl"></i>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm sm:text-base">Resistência ao Vento:</p>
                    <p className="text-gray-700 text-sm sm:text-base">{item.windResistance}</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 sm:gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i className="ri-checkbox-circle-fill text-[#FFC107] text-lg sm:text-xl"></i>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm sm:text-base">Uso Ideal:</p>
                    <p className="text-gray-700 text-sm sm:text-base">{item.idealUse}</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 sm:gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i className="ri-tools-fill text-[#FFC107] text-lg sm:text-xl"></i>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm sm:text-base">Estrutura:</p>
                    <p className="text-gray-700 text-sm sm:text-base">{item.structure}</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 sm:gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i className="ri-shield-check-fill text-[#FFC107] text-lg sm:text-xl"></i>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm sm:text-base">Lona:</p>
                    <p className="text-gray-700 text-sm sm:text-base">{item.canvas}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-10 lg:mt-12 bg-white rounded-xl shadow-lg p-5 sm:p-6 lg:p-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
            <div className="text-center sm:text-left">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#1A4D2E] mb-2">
                Ainda tem dúvidas sobre qual modelo escolher?
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                Nossa equipe técnica pode ajudar você a escolher a tenda ideal para sua necessidade
              </p>
            </div>
            <button
              onClick={handleWhatsAppClick}
              className="bg-[#FFC107] hover:bg-[#E55A2B] text-white font-bold text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300 cursor-pointer whitespace-nowrap flex items-center gap-2 sm:gap-3 flex-shrink-0"
            >
              <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
                <i className="ri-customer-service-2-fill text-lg sm:text-xl"></i>
              </div>
              <span>Falar com Especialista</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
