import { Link } from 'react-router-dom';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  slug: string;
}

export function BlogPreviewSection() {
  const featuredPosts: BlogPost[] = [
    {
      id: '1',
      title: 'Tenda Sanfonada ou Chapéu de Bruxa? O Guia Definitivo para Escolher a Cobertura Perfeita',
      excerpt: 'Descubra qual modelo atende melhor suas necessidades: velocidade de montagem ou elegância e robustez.',
      category: 'Guia de Compra',
      readTime: '8 min',
      date: '15 Jan 2025',
      image: 'https://readdy.ai/api/search-image?query=professional%20event%20tent%20setup%20comparison%20between%20pop-up%20canopy%20and%20elegant%20peaked%20tent%20structure%20in%20outdoor%20setting%20with%20clean%20white%20background%20showcasing%20industrial%20quality%20and%20professional%20installation&width=800&height=600&seq=blog1&orientation=landscape',
      slug: 'tenda-sanfonada-ou-chapeu-de-bruxa'
    },
    {
      id: '2',
      title: 'Tendência Cristal: Por Que as Tendas Transparentes Estão Dominando os Casamentos de Luxo em 2025',
      excerpt: 'Entenda o fenômeno das tendas transparentes no mercado de eventos premium e como usar essa tendência com segurança técnica.',
      category: 'Tendências',
      readTime: '7 min',
      date: '12 Jan 2025',
      image: 'https://readdy.ai/api/search-image?query=elegant%20transparent%20crystal%20clear%20wedding%20tent%20with%20fairy%20lights%20at%20sunset%20outdoor%20luxury%20event%20setup%20with%20romantic%20atmosphere%20and%20natural%20integration%20simple%20clean%20background&width=800&height=600&seq=blog2&orientation=landscape',
      slug: 'tendencia-cristal-tendas-transparentes-casamentos-luxo'
    },
    {
      id: '3',
      title: 'Pare de Jogar Dinheiro Fora: A Matemática de Quando Comprar Vale Mais a Pena que Alugar',
      excerpt: 'Análise financeira completa do ponto de equilíbrio entre compra e aluguel. Descubra quando investir em tenda própria gera ROI positivo.',
      category: 'Negócios',
      readTime: '10 min',
      date: '10 Jan 2025',
      image: 'https://readdy.ai/api/search-image?query=business%20financial%20analysis%20concept%20with%20professional%20event%20tents%20investment%20and%20ROI%20calculation%20charts%20graphs%20showing%20cost%20comparison%20clean%20modern%20business%20background&width=800&height=600&seq=blog3&orientation=landscape',
      slug: 'matematica-comprar-ou-alugar-tendas'
    }
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-block bg-[#FFC107]/10 px-6 py-2 rounded-full mb-4">
            <span className="text-[#FFC107] font-bold text-sm uppercase tracking-wider">
              📚 Conteúdo Especializado
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A4D2E] mb-4">
            Aprenda Mais Sobre <strong>Tendas Industriais</strong>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Guias técnicos, tendências do mercado e dicas especializadas para você fazer a melhor escolha
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredPosts.map((post) => (
            <article 
              key={post.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:transform hover:-translate-y-2 group"
            >
              <Link to={`/blog/${post.slug}`} className="block">
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    title={post.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#FFC107] text-white text-sm font-bold px-4 py-2 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <div className="w-4 h-4 flex items-center justify-center">
                        <i className="ri-calendar-line"></i>
                      </div>
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <div className="w-4 h-4 flex items-center justify-center">
                        <i className="ri-time-line"></i>
                      </div>
                      {post.readTime}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#1A4D2E] mb-3 line-clamp-2 group-hover:text-[#FFC107] transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-2 text-[#1A4D2E] font-semibold group-hover:text-[#FFC107] transition-colors">
                    <span>Ler artigo completo</span>
                    <div className="w-5 h-5 flex items-center justify-center transform group-hover:translate-x-2 transition-transform">
                      <i className="ri-arrow-right-line"></i>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-3 bg-[#1A4D2E] hover:bg-[#004488] text-white font-bold px-10 py-4 rounded-lg transition-all duration-300 cursor-pointer whitespace-nowrap shadow-lg hover:shadow-xl"
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <i className="ri-book-open-line text-xl"></i>
            </div>
            <span>Ver Todos os Artigos do Blog</span>
            <div className="w-5 h-5 flex items-center justify-center">
              <i className="ri-arrow-right-line"></i>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
