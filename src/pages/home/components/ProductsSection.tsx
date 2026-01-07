import { useState, useEffect, useRef } from 'react';

interface Product {
  id: number;
  name: string;
  subtitle: string;
  description: string;
  price: string;
  images: string[];
  features: string[];
  technicalSpecs: string[];
}

export function ProductsSection() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: number]: number }>({});
  const [touchStart, setTouchStart] = useState<{ [key: number]: number }>({});
  const [touchEnd, setTouchEnd] = useState<{ [key: number]: number }>({});
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomedImage, setZoomedImage] = useState<string>('');

  const products: Product[] = [
    {
      id: 1,
      name: 'Tenda Sanfonada Articulada',
      subtitle: 'Foco: Praticidade e Montagem Rápida',
      price: 'R$ 299,90',
      description: 'Ideal para feirantes e eventos rápidos. Montagem em 60 segundos. Disponível para compra ou aluguel. Lona com proteção UV e Impermeável.',
      images: [
        'https://static.readdy.ai/image/ca6cf53a86f87279e2de7045808c4d0c/a855225663022c73bfae1640367f5049.png',
        'https://static.readdy.ai/image/ca6cf53a86f87279e2de7045808c4d0c/13267ef49862ef9ca04cb7a59dd4c262.png',
        'https://static.readdy.ai/image/ca6cf53a86f87279e2de7045808c4d0c/801d3ac580e10d99fb14bf60bc3386a8.png',
        'https://static.readdy.ai/image/ca6cf53a86f87279e2de7045808c4d0c/ed64b37114f8bb70fdab144696d8a5d8.png',
        'https://static.readdy.ai/image/ca6cf53a86f87279e2de7045808c4d0c/09072b4d81b44ed2bbd0c68bd6e64b2d.png',
        'https://static.readdy.ai/image/ca6cf53a86f87279e2de7045808c4d0c/814213ba2bdc161de7fd1897b610ba35.png',
        'https://static.readdy.ai/image/ca6cf53a86f87279e2de7045808c4d0c/7890ac764f5824654dce97c3ce3842ca.png',
        'https://static.readdy.ai/image/ca6cf53a86f87279e2de7045808c4d0c/5cd36507c54468af826e7e018fabda17.png',
        'https://static.readdy.ai/image/ca6cf53a86f87279e2de7045808c4d0c/65c2b6cac0be71eefd94a703fba4f6c3.png'
      ],
      features: [
        'Montagem em 60 segundos sem ferramentas',
        'Estrutura em Alumínio Anodizado ou Aço Carbono',
        'Lona PVC 500g/m² com proteção UV',
        'Sistema de trava automática reforçada',
        'Tamanhos: 2x2m, 3x3m, 4x4m, 6x3m'
      ],
      technicalSpecs: [
        'Estrutura: Alumínio 40x40mm ou Aço Carbono',
        'Lona: PVC 500g/m² impermeável',
        'Resistência ao vento: até 30km/h',
        'Peso: 18kg a 45kg conforme tamanho',
        'Garantia: 24 meses na estrutura metálica'
      ]
    },
    {
      id: 2,
      name: 'Tenda Piramidal Profissional',
      subtitle: 'Foco: Durabilidade para Obras e Grandes Eventos',
      price: 'R$ 1.099,90',
      description: 'A escolha da engenharia e grandes eventos. Estrutura robusta disponível para compra ou aluguel. Sistema de calhas para acoplamento de múltiplas tendas (Galpões Infinitos).',
      images: [
        'https://static.readdy.ai/image/ca6cf53a86f87279e2de7045808c4d0c/b53e404b127599a63a0607fa98bdcb95.png',
        'https://static.readdy.ai/image/ca6cf53a86f87279e2de7045808c4d0c/4496a49615ef7884fc5b076f2fa4893e.png',
        'https://static.readdy.ai/image/ca6cf53a86f87279e2de7045808c4d0c/cb058031cff02d859e5c67c2981af4e8.png',
        'https://static.readdy.ai/image/ca6cf53a86f87279e2de7045808c4d0c/b1954d7fcde1ac6f8c270ce64f81b53e.png',
        'https://static.readdy.ai/image/ca6cf53a86f87279e2de7045808c4d0c/8805e3a2da97eb5bd1c6c8754758cb09.png',
        'https://static.readdy.ai/image/ca6cf53a86f87279e2de7045808c4d0c/b2967a997ab62144f439648042fd215b.png',
        'https://static.readdy.ai/image/ca6cf53a86f87279e2de7045808c4d0c/e3592529aa4326689087213ce47798fa.png',
        'https://static.readdy.ai/image/ca6cf53a86f87279e2de7045808c4d0c/7214c761e1e045dd2e4375a87158bfb4.png'
      ],
      features: [
        'Estrutura em Aço Galvanizado Bitola 13, 14 ou 16',
        'Sistema modular de acoplamento (Galpões Infinitos)',
        'Tratamento antiferrugem e pintura eletrostática',
        'Lona PVC 650g/m² alta resistência',
        'Tamanhos: 5x5m, 6x6m, 8x8m, 10x10m'
      ],
      technicalSpecs: [
        'Estrutura: Aço Galvanizado Bitola 13/14/16',
        'Lona: PVC 650g/m² com tratamento anti-chama',
        'Resistência ao vento: até 80km/h (fixada)',
        'Sistema de calhas para união de módulos',
        'Garantia: 24 meses contra defeitos de solda'
      ]
    },
    {
      id: 3,
      name: 'Tenda Chapéu de Bruxa',
      subtitle: 'Foco: Design Premium e Estética High-End',
      price: 'R$ 1.299,90',
      description: 'Pé direito alto e design pontiagudo para casamentos e áreas VIP. Disponível para compra ou aluguel. Lona PVC vinílico com tratamento anti-chama e anti-mofo.',
      images: [
        'https://static.readdy.ai/image/ca6cf53a86f87279e2de7045808c4d0c/f829b559b6664fbbcef2ba39e3395c98.png',
        'https://static.readdy.ai/image/ca6cf53a86f87279e2de7045808c4d0c/7a36e4ad7180a6bb30234488c3e22cc6.png',
        'https://static.readdy.ai/image/ca6cf53a86f87279e2de7045808c4d0c/ce9f4ffb50c3ad30b954c44cca94cb05.png',
        'https://static.readdy.ai/image/ca6cf53a86f87279e2de7045808c4d0c/c7982f2d1d3cde61380c1feae4ae425c.png',
        'https://static.readdy.ai/image/ca6cf53a86f87279e2de7045808c4d0c/cb988d63afc87d735e650d5208ef0252.png',
        'https://static.readdy.ai/image/ca6cf53a86f87279e2de7045808c4d0c/928f3d20395817622a157915ac2e0741.png',
        'https://static.readdy.ai/image/ca6cf53a86f87279e2de7045808c4d0c/e6691cc4914ed6fd8eb65c5efaaa8c05.png',
        'https://static.readdy.ai/image/ca6cf53a86f87279e2de7045808c4d0c/f36ca66ccfca9520530b6d590e00bbc9.png'
      ],
      features: [
        'Design cônico exclusivo com pé direito alto',
        'Estrutura em Aço Galvanizado reforçado',
        'Lona PVC Vinílico 600g/m² premium',
        'Tratamento anti-chama e anti-mofo',
        'Diversos tamanhos disponíveis'
      ],
      technicalSpecs: [
        'Estrutura: Aço Galvanizado com pintura especial',
        'Lona: PVC Vinílico 600g/m² anti-chama',
        'Pé direito: 3,5m a 4,5m conforme modelo',
        'Acabamento premium com costuras reforçadas',
        'Garantia: 24 meses na estrutura'
      ]
    },
    {
      id: 4,
      name: 'Tenda Sanfonada Camping',
      subtitle: 'Foco: Aventura e Acampamento',
      price: 'R$ 449,90',
      description: 'Perfeita para camping e aventuras ao ar livre. Sistema sanfonado de montagem rápida com proteção total contra chuva e vento. Ideal para famílias e grupos.',
      images: [
        'https://static.readdy.ai/image/ca6cf53a86f87279e2de7045808c4d0c/66097a6d15690e28aa1463ba3433e0bf.png',
        'https://static.readdy.ai/image/ca6cf53a86f87279e2de7045808c4d0c/0ddf38b8b7d7dd30c7fe1c761373b6e2.png',
        'https://static.readdy.ai/image/ca6cf53a86f87279e2de7045808c4d0c/87a687d88b844c58a4ea3cc0b114cce3.png',
        'https://static.readdy.ai/image/ca6cf53a86f87279e2de7045808c4d0c/5fac68e4b16e0b41875bf16b7144cc18.png',
        'https://static.readdy.ai/image/ca6cf53a86f87279e2de7045808c4d0c/528231450d2ccbeb1582280a3c4b90fa.png',
        'https://static.readdy.ai/image/ca6cf53a86f87279e2de7045808c4d0c/fe10f3fe9dc0fd403a5c2d4cf4e17f74.png'
      ],
      features: [
        'Montagem rápida tipo sanfonada',
        'Estrutura em alumínio leve e resistente',
        'Tecido impermeável com costuras seladas',
        'Ventilação com telas anti-insetos',
        'Capacidade: 4 a 8 pessoas'
      ],
      technicalSpecs: [
        'Estrutura: Alumínio aeronáutico leve',
        'Tecido: Poliéster 190T impermeável 3000mm',
        'Piso: Lona PVC reforçada',
        'Peso: 8kg a 15kg conforme modelo',
        'Garantia: 12 meses contra defeitos'
      ]
    },
    {
      id: 5,
      name: 'Tenda Calha',
      subtitle: 'Foco: Cobertura Linear e Modular',
      price: 'R$ 1.499,90',
      description: 'Sistema de calhas integrado para escoamento de água. Ideal para corredores, áreas de circulação e eventos que necessitam união de múltiplos módulos. Estrutura modular expansível.',
      images: [
        'https://static.readdy.ai/image/ca6cf53a86f87279e2de7045808c4d0c/d8eb5da7a74d0faf242e723161b41037.png',
        'https://static.readdy.ai/image/ca6cf53a86f87279e2de7045808c4d0c/b49645261cb3cf734c05d4ce3256e5d3.png',
        'https://static.readdy.ai/image/ca6cf53a86f87279e2de7045808c4d0c/5decbbdb6b27f8ca4b249204d437f191.png',
        'https://static.readdy.ai/image/ca6cf53a86f87279e2de7045808c4d0c/564a8b4544bcbd772d5937b6eac0e847.png',
        'https://static.readdy.ai/image/ca6cf53a86f87279e2de7045808c4d0c/dadb4ede620787128a0965ed60069c61.png',
        'https://static.readdy.ai/image/ca6cf53a86f87279e2de7045808c4d0c/77a95d67f72bad741b78c9fbbdbde45b.png'
      ],
      features: [
        'Sistema de calhas para escoamento de água',
        'Estrutura modular expansível',
        'Conexão perfeita entre módulos',
        'Alumínio ou aço galvanizado',
        'Tamanhos: 3x3m, 4x4m, 5x5m, 6x6m'
      ],
      technicalSpecs: [
        'Estrutura: Alumínio ou Aço Galvanizado',
        'Lona: PVC 550g/m² impermeável',
        'Sistema de calhas integrado',
        'Resistência ao vento: até 50km/h',
        'Garantia: 24 meses na estrutura'
      ]
    }
  ];

  // Autoplay para os carrosséis dos cards
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => {
        const newIndex = { ...prev };
        products.forEach(product => {
          if (product.images.length > 1) {
            const current = prev[product.id] || 0;
            newIndex[product.id] = (current + 1) % product.images.length;
          }
        });
        return newIndex;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Autoplay para o carrossel do modal
  useEffect(() => {
    if (!selectedProduct || selectedProduct.images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex(prev => ({
        ...prev,
        [selectedProduct.id]: ((prev[selectedProduct.id] || 0) + 1) % selectedProduct.images.length
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, [selectedProduct]);

  const handleWhatsAppClick = (productName: string) => {
    const message = `Olá! Tenho interesse no produto: ${productName}. Gostaria de mais informações! 🎪`;
    const whatsappUrl = `https://wa.me/5512981815371?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const nextImage = (productId: number, totalImages: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex(prev => ({
      ...prev,
      [productId]: ((prev[productId] || 0) + 1) % totalImages
    }));
  };

  const prevImage = (productId: number, totalImages: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex(prev => ({
      ...prev,
      [productId]: ((prev[productId] || 0) - 1 + totalImages) % totalImages
    }));
  };

  const goToImage = (productId: number, index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex(prev => ({
      ...prev,
      [productId]: index
    }));
  };

  // Funções de swipe para mobile
  const handleTouchStart = (productId: number, e: React.TouchEvent) => {
    setTouchStart(prev => ({
      ...prev,
      [productId]: e.targetTouches[0].clientX
    }));
  };

  const handleTouchMove = (productId: number, e: React.TouchEvent) => {
    setTouchEnd(prev => ({
      ...prev,
      [productId]: e.targetTouches[0].clientX
    }));
  };

  const handleTouchEnd = (productId: number, totalImages: number) => {
    if (!touchStart[productId] || !touchEnd[productId]) return;
    
    const distance = touchStart[productId] - touchEnd[productId];
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      setCurrentImageIndex(prev => ({
        ...prev,
        [productId]: ((prev[productId] || 0) + 1) % totalImages
      }));
    }

    if (isRightSwipe) {
      setCurrentImageIndex(prev => ({
        ...prev,
        [productId]: ((prev[productId] || 0) - 1 + totalImages) % totalImages
      }));
    }
  };

  // Função de zoom
  const handleImageClick = (imageUrl: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setZoomedImage(imageUrl);
    setIsZoomed(true);
  };

  const closeZoom = () => {
    setIsZoomed(false);
    setZoomedImage('');
  };

  return (
    <>
      <section id="produtos" className="w-full bg-gray-50 py-16 lg:py-24" data-product-shop>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A4D2E] mb-4">
              Linha Completa de <strong>Tendas Industriais</strong>
            </h2>
            <p className="text-lg text-gray-600">
              Fabricação própria com materiais de alta qualidade. Disponível para compra ou aluguel com condições especiais.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, productIndex) => {
              const currentIndex = currentImageIndex[product.id] || 0;
              const hasMultipleImages = product.images.length > 1;
              const isFirstProduct = productIndex === 0;

              return (
                <article key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:transform hover:scale-105 cursor-pointer">
                  <div 
                    className="aspect-square overflow-hidden relative group"
                    onTouchStart={(e) => handleTouchStart(product.id, e)}
                    onTouchMove={(e) => handleTouchMove(product.id, e)}
                    onTouchEnd={() => handleTouchEnd(product.id, product.images.length)}
                  >
                    <img
                      src={product.images[currentIndex]}
                      alt={`${product.name} - Fabricante Tendas Aluban`}
                      title={`${product.name} - Fábrica de Tendas com Estrutura em Aço`}
                      className="w-full h-full object-cover object-top transition-opacity duration-300"
                      loading={isFirstProduct ? "eager" : "lazy"}
                      onClick={(e) => handleImageClick(product.images[currentIndex], e)}
                    />
                    
                    {hasMultipleImages && (
                      <>
                        {/* Setas maiores e mais touch-friendly */}
                        <button
                          onClick={(e) => prevImage(product.id, product.images.length, e)}
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer z-10 touch-manipulation"
                          aria-label="Imagem anterior"
                        >
                          <i className="ri-arrow-left-s-line text-3xl"></i>
                        </button>
                        
                        <button
                          onClick={(e) => nextImage(product.id, product.images.length, e)}
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer z-10 touch-manipulation"
                          aria-label="Próxima imagem"
                        >
                          <i className="ri-arrow-right-s-line text-3xl"></i>
                        </button>

                        {/* Indicadores maiores para mobile */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                          {product.images.map((_, index) => (
                            <button
                              key={index}
                              onClick={(e) => goToImage(product.id, index, e)}
                              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer touch-manipulation ${
                                index === currentIndex
                                  ? 'bg-white w-8'
                                  : 'bg-white/50 hover:bg-white/75 w-2.5'
                              }`}
                              aria-label={`Ir para imagem ${index + 1}`}
                            />
                          ))}
                        </div>

                        {/* Indicador de swipe para mobile */}
                        <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1.5 rounded-full text-xs sm:hidden">
                          <i className="ri-drag-move-line mr-1"></i>
                          Deslize
                        </div>
                      </>
                    )}
                  </div>
                
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-[#1A4D2E] mb-2">
                      <a href="#produtos">{product.name}</a>
                    </h3>
                    <p className="text-sm font-semibold text-[#FFC107] mb-3">{product.subtitle}</p>
                    
                    {/* Preço em destaque */}
                    <div className="bg-gradient-to-r from-[#FFC107]/10 to-[#FFC107]/5 border-2 border-[#FFC107] rounded-lg p-4 mb-4">
                      <p className="text-xs text-gray-600 mb-1 font-medium">A partir de</p>
                      <p className="text-3xl font-bold text-[#FFC107]">{product.price}</p>
                    </div>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3 text-base leading-relaxed">{product.description}</p>
                    
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="w-full bg-[#1A4D2E] hover:bg-[#002244] text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 whitespace-nowrap cursor-pointer touch-manipulation text-base"
                    >
                      Ver Especificações Técnicas
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Modal de Detalhes */}
        {selectedProduct && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setSelectedProduct(null)}>
            <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <div className="p-6 sm:p-8">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#1A4D2E] mb-2">{selectedProduct.name}</h3>
                    <p className="text-base sm:text-lg font-semibold text-[#FFC107] mb-3">{selectedProduct.subtitle}</p>
                    
                    {/* Preço no modal */}
                    <div className="inline-block bg-gradient-to-r from-[#FFC107]/10 to-[#FFC107]/5 border-2 border-[#FFC107] rounded-lg px-6 py-3">
                      <p className="text-xs text-gray-600 font-medium">A partir de</p>
                      <p className="text-2xl sm:text-3xl font-bold text-[#FFC107]">{selectedProduct.price}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-gray-700 cursor-pointer touch-manipulation ml-4"
                  >
                    <i className="ri-close-line text-3xl"></i>
                  </button>
                </div>
                
                {/* Carrossel no Modal com swipe */}
                <div 
                  className="relative mb-6 group"
                  onTouchStart={(e) => handleTouchStart(selectedProduct.id, e)}
                  onTouchMove={(e) => handleTouchMove(selectedProduct.id, e)}
                  onTouchEnd={() => handleTouchEnd(selectedProduct.id, selectedProduct.images.length)}
                >
                  <img
                    src={selectedProduct.images[currentImageIndex[selectedProduct.id] || 0]}
                    alt={selectedProduct.name}
                    className="w-full h-64 sm:h-80 object-cover rounded-lg cursor-pointer"
                    onClick={(e) => handleImageClick(selectedProduct.images[currentImageIndex[selectedProduct.id] || 0], e)}
                    loading="lazy"
                  />
                  
                  {selectedProduct.images.length > 1 && (
                    <>
                      <button
                        onClick={(e) => prevImage(selectedProduct.id, selectedProduct.images.length, e)}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer touch-manipulation"
                      >
                        <i className="ri-arrow-left-s-line text-3xl"></i>
                      </button>
                      
                      <button
                        onClick={(e) => nextImage(selectedProduct.id, selectedProduct.images.length, e)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer touch-manipulation"
                      >
                        <i className="ri-arrow-right-s-line text-3xl"></i>
                      </button>

                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {selectedProduct.images.map((_, index) => (
                          <button
                            key={index}
                            onClick={(e) => goToImage(selectedProduct.id, index, e)}
                            className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer touch-manipulation ${
                              index === (currentImageIndex[selectedProduct.id] || 0)
                                ? 'bg-white w-8'
                                : 'bg-white/50 hover:bg-white/75 w-2.5'
                            }`}
                          />
                        ))}
                      </div>

                      {/* Indicador de zoom */}
                      <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1.5 rounded-full text-xs">
                        <i className="ri-zoom-in-line mr-1"></i>
                        Toque para ampliar
                      </div>
                    </>
                  )}
                </div>
                
                <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">{selectedProduct.description}</p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-[#1A4D2E] mb-3 flex items-center gap-2">
                      <div className="w-6 h-6 flex items-center justify-center">
                        <i className="ri-checkbox-circle-fill text-[#FFC107]"></i>
                      </div>
                      Características:
                    </h4>
                    <ul className="space-y-2">
                      {selectedProduct.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-700 text-sm sm:text-base">
                          <div className="w-5 h-5 flex items-center justify-center mt-1">
                            <i className="ri-arrow-right-s-fill text-[#1A4D2E]"></i>
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-[#1A4D2E] mb-3 flex items-center gap-2">
                      <div className="w-6 h-6 flex items-center justify-center">
                        <i className="ri-tools-fill text-[#FFC107]"></i>
                      </div>
                      Especificações Técnicas:
                    </h4>
                    <ul className="space-y-2">
                      {selectedProduct.technicalSpecs.map((spec, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-700 text-sm">
                          <div className="w-5 h-5 flex items-center justify-center mt-1">
                            <i className="ri-arrow-right-s-fill text-[#1A4D2E]"></i>
                          </div>
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <button
                  onClick={() => handleWhatsAppClick(selectedProduct.name)}
                  className="w-full bg-[#FFC107] hover:bg-[#E55A2B] text-white font-bold py-4 sm:py-5 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap touch-manipulation text-base sm:text-lg"
                >
                  <div className="w-6 h-6 flex items-center justify-center">
                    <i className="ri-whatsapp-fill text-2xl"></i>
                  </div>
                  <span>Solicitar Orçamento de Fábrica</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Modal de Zoom */}
        {isZoomed && (
          <div 
            className="fixed inset-0 bg-black/95 z-[60] flex items-center justify-center p-4"
            onClick={closeZoom}
          >
            <button
              onClick={closeZoom}
              className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center text-white hover:bg-white/10 rounded-full transition-all duration-300 cursor-pointer touch-manipulation z-10"
            >
              <i className="ri-close-line text-3xl"></i>
            </button>
            <img
              src={zoomedImage}
              alt="Imagem ampliada"
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </section>
    </>
  );
}