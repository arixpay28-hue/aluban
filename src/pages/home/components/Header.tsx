import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    // Se não estiver na página inicial, navega primeiro para home
    if (location.pathname !== '/') {
      navigate('/');
      // Aguarda um momento para a página carregar antes de rolar
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      // Se já estiver na home, apenas rola
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    // Se não estiver na página inicial, navega primeiro para home
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={scrollToTop}>
            <img
              src="/logo.png"
              alt="Tendas Aluban - Fábrica de Tendas"
              className="h-12 sm:h-16 w-auto object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <button
              onClick={scrollToTop}
              className="text-[#1A4D2E] hover:text-[#FFC107] font-semibold transition-colors duration-300 cursor-pointer whitespace-nowrap text-sm lg:text-base"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('produtos')}
              className="text-[#1A4D2E] hover:text-[#FFC107] font-semibold transition-colors duration-300 cursor-pointer whitespace-nowrap text-sm lg:text-base"
            >
              Produtos
            </button>
            <button
              onClick={() => scrollToSection('areas-cobertura')}
              className="text-[#1A4D2E] hover:text-[#FFC107] font-semibold transition-colors duration-300 cursor-pointer whitespace-nowrap text-sm lg:text-base"
            >
              Áreas de Atuação
            </button>
            <a
              href="/blog"
              className="text-[#1A4D2E] hover:text-[#FFC107] font-semibold transition-colors duration-300 cursor-pointer whitespace-nowrap text-sm lg:text-base"
            >
              Blog
            </a>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-[#1A4D2E] hover:text-[#FFC107] font-semibold transition-colors duration-300 cursor-pointer whitespace-nowrap text-sm lg:text-base"
            >
              FAQ
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-[#1A4D2E] cursor-pointer"
          >
            <i className={`${isMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-2xl`}></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-3">
              <button
                onClick={scrollToTop}
                className="text-[#1A4D2E] hover:text-[#FFC107] font-semibold transition-colors duration-300 cursor-pointer text-left whitespace-nowrap py-2"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection('produtos')}
                className="text-[#1A4D2E] hover:text-[#FFC107] font-semibold transition-colors duration-300 cursor-pointer text-left whitespace-nowrap py-2"
              >
                Produtos
              </button>
              <button
                onClick={() => scrollToSection('areas-cobertura')}
                className="text-[#1A4D2E] hover:text-[#FFC107] font-semibold transition-colors duration-300 cursor-pointer text-left whitespace-nowrap py-2"
              >
                Áreas de Atuação
              </button>
              <a
                href="/blog"
                className="text-[#1A4D2E] hover:text-[#FFC107] font-semibold transition-colors duration-300 cursor-pointer text-left whitespace-nowrap py-2"
              >
                Blog
              </a>
              <button
                onClick={() => scrollToSection('faq')}
                className="text-[#1A4D2E] hover:text-[#FFC107] font-semibold transition-colors duration-300 cursor-pointer text-left whitespace-nowrap py-2"
              >
                FAQ
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}