
import { ReactNode } from 'react';
import { Header } from '../../home/components/Header';
import { Footer } from '../../home/components/Footer';
import { WhatsAppButton } from '../../home/components/WhatsAppButton';
import { Link } from 'react-router-dom';

interface BlogArticleProps {
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  children: ReactNode;
}

export function BlogArticle({ title, category, date, readTime, image, children }: BlogArticleProps) {
  const handleCTAClick = () => {
    const message = encodeURIComponent('Olá! Gostaria de solicitar um orçamento para tendas. Pode me ajudar? 🎪');
    window.open(`https://wa.me/5561982630276?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white font-sans" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Header />
      
      <main>
        {/* Breadcrumb */}
        <div className="w-full bg-gray-50 py-4">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-sm text-gray-600">
              <Link to="/" className="hover:text-[#FFC107] transition-colors">Home</Link>
              <span>/</span>
              <Link to="/blog" className="hover:text-[#FFC107] transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-[#1A4D2E] font-semibold">{category}</span>
            </nav>
          </div>
        </div>

        {/* Article Header */}
        <article className="w-full py-12 lg:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6">
              <span className="bg-[#FFC107] text-white text-sm font-bold px-4 py-2 rounded-full">
                {category}
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A4D2E] mb-6">
              {title}
            </h1>
            
            <div className="flex items-center gap-6 text-gray-600 mb-8 pb-8 border-b border-gray-200">
              <span className="flex items-center gap-2">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-calendar-line"></i>
                </div>
                {date}
              </span>
              <span className="flex items-center gap-2">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-time-line"></i>
                </div>
                {readTime} de leitura
              </span>
            </div>

            {/* Featured Image */}
            <div className="aspect-video overflow-hidden rounded-xl mb-12">
              <img
                src={image}
                alt={title}
                title={title}
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              {children}
            </div>

            {/* CTA Box */}
            <div className="mt-12 bg-gradient-to-br from-[#1A4D2E] to-[#004488] rounded-xl p-8 text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Pronto para Escolher sua Tenda Ideal?
              </h3>
              <p className="text-white/90 text-lg mb-6">
                Solicite um orçamento personalizado e tire todas as suas dúvidas com nossa equipe técnica
              </p>
              <button
                onClick={handleCTAClick}
                className="bg-[#FFC107] hover:bg-[#E55A2B] text-white font-bold px-10 py-4 rounded-lg transition-all duration-300 cursor-pointer whitespace-nowrap inline-flex items-center gap-3"
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-whatsapp-fill text-xl"></i>
                </div>
                <span>Solicitar Orçamento Agora</span>
              </button>
            </div>

            {/* Back to Blog */}
            <div className="mt-12 text-center">
              <Link 
                to="/blog"
                className="inline-flex items-center gap-2 text-[#1A4D2E] hover:text-[#FFC107] font-semibold transition-colors"
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-arrow-left-line"></i>
                </div>
                <span>Voltar para o Blog</span>
              </Link>
            </div>
          </div>
        </article>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
