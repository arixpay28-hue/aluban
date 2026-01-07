import { useState, useEffect } from 'react';

export function ProofSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      image: 'https://readdy.ai/api/search-image?query=Trade%20show%20booth%20with%20white%20pop-up%20canopy%20tent%2C%20vendors%20selling%20products%20at%20outdoor%20market%2C%20people%20shopping%2C%20professional%20event%20photography%2C%20realistic%20commercial%20scene%2C%20bright%20daylight&width=800&height=600&seq=client-1&orientation=landscape',
      caption: 'Feira de Produtos Artesanais - São Paulo'
    },
    {
      id: 2,
      image: 'https://readdy.ai/api/search-image?query=Construction%20site%20with%20white%20tent%20shelter%2C%20workers%20using%20industrial%20tent%20for%20equipment%20protection%2C%20professional%20construction%20photography%2C%20realistic%20work%20environment%2C%20outdoor%20setting&width=800&height=600&seq=client-2&orientation=landscape',
      caption: 'Obra de Construção Civil - Rio de Janeiro'
    },
    {
      id: 3,
      image: 'https://readdy.ai/api/search-image?query=Corporate%20outdoor%20event%20with%20elegant%20white%20pyramid%20tent%2C%20business%20gathering%2C%20professional%20event%20setup%2C%20people%20networking%2C%20high-quality%20event%20photography%2C%20sophisticated%20atmosphere&width=800&height=600&seq=client-3&orientation=landscape',
      caption: 'Evento Corporativo - Belo Horizonte'
    },
    {
      id: 4,
      image: 'https://readdy.ai/api/search-image?query=Street%20market%20with%20multiple%20white%20canopy%20tents%2C%20vendors%20selling%20fresh%20produce%20and%20goods%2C%20busy%20marketplace%20scene%2C%20realistic%20commercial%20photography%2C%20vibrant%20outdoor%20market&width=800&height=600&seq=client-4&orientation=landscape',
      caption: 'Feira Livre - Curitiba'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const benefits = [
    {
      icon: 'ri-shield-check-line',
      title: 'Garantia de Fábrica',
      description: '12 meses de garantia total'
    },
    {
      icon: 'ri-truck-line',
      title: 'Envio Imediato',
      description: 'Entrega rápida para todo Brasil'
    },
    {
      icon: 'ri-water-flash-line',
      title: 'Lona Impermeável',
      description: '100% resistente à água'
    }
  ];

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Benefits */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-14 lg:mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center text-center p-5 sm:p-6 bg-gray-50 rounded-xl">
              <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center bg-[#1A4D2E] text-white rounded-full mb-3 sm:mb-4">
                <i className={`${benefit.icon} text-2xl sm:text-3xl`}></i>
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-[#1A4D2E] mb-1 sm:mb-2">
                <a href="#beneficios">{benefit.title}</a>
              </h4>
              <p className="text-sm sm:text-base text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Testimonials Carousel */}
        <div className="text-center mb-6 sm:mb-8">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1A4D2E] mb-3 sm:mb-4">
            Clientes Satisfeitos em Todo o Brasil
          </h3>
          <p className="text-base sm:text-lg text-gray-600 px-4">
            Veja nossas tendas em ação nos mais diversos segmentos
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-xl shadow-2xl">
            <div className="relative aspect-[4/3]">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.caption}
                    title={testimonial.caption}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 sm:p-6">
                    <p className="text-white text-sm sm:text-base lg:text-lg font-semibold">{testimonial.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-4 sm:mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 cursor-pointer ${
                  index === currentSlide ? 'bg-[#FFC107] w-6 sm:w-8' : 'bg-gray-300'
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
