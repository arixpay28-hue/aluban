export function Footer() {
  return (
    <footer className="w-full bg-[#1A4D2E] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Coluna 1: Sobre */}
          <div>
            <h3 className="text-xl font-bold mb-4">Tendas Aluban</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Fabricante de tendas sanfonadas e piramidais com entrega para todo o Brasil. 
              Qualidade industrial, preço de fábrica e garantia real.
            </p>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#produtos" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm cursor-pointer">
                  Nossos Produtos
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm cursor-pointer">
                  Diferenciais
                </a>
              </li>
              <li>
                <a href="#cobertura" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm cursor-pointer">
                  Área de Cobertura
                </a>
              </li>
              <li>
                <a href="/blog" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm cursor-pointer">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Contato */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <div className="w-5 h-5 flex items-center justify-center mt-0.5">
                  <i className="ri-phone-fill text-[#FFC107]"></i>
                </div>
                <span className="text-gray-300 text-sm">(11) 91234-5678</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-5 h-5 flex items-center justify-center mt-0.5">
                  <i className="ri-mail-fill text-[#FFC107]"></i>
                </div>
                <span className="text-gray-300 text-sm">contato@tendasbrasil.com.br</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-5 h-5 flex items-center justify-center mt-0.5">
                  <i className="ri-map-pin-fill text-[#FFC107]"></i>
                </div>
                <span className="text-gray-300 text-sm">São Paulo - SP</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-gray-600 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Tendas Aluban. Todos os direitos reservados.
            </p>
            <a 
              href="https://readdy.ai/?origin=logo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white text-sm transition-colors duration-300 cursor-pointer"
            >
              Website Builder
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
