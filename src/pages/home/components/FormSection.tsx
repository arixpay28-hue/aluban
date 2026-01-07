import { useState, FormEvent } from 'react';

export function FormSection() {
  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
    tipo_tenda: '',
    tamanho: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validação dos campos obrigatórios
    if (!formData.nome || !formData.whatsapp || !formData.tipo_tenda || !formData.tamanho) {
      alert('Por favor, preencha todos os campos obrigatórios: Nome, WhatsApp, Tipo de Tenda e Tamanho');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formBody = new URLSearchParams();
      formBody.append('nome', formData.nome);
      formBody.append('whatsapp', formData.whatsapp);
      formBody.append('tipo_tenda', formData.tipo_tenda);
      formBody.append('tamanho', formData.tamanho);

      const response = await fetch('https://readdy.ai/api/form/d4it9bsucjmktht5847g', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody.toString()
      });

      if (response.ok) {
        setSubmitStatus('success');
        
        // Redireciona para o WhatsApp com os dados preenchidos
        const mensagem = `Olá! Gostaria de um orçamento. 👋\n\n👤 *Nome:* ${formData.nome}\n📱 *WhatsApp:* ${formData.whatsapp}\n🎪 *Tipo de Tenda:* ${formData.tipo_tenda}\n📏 *Tamanho:* ${formData.tamanho}\n\nAguardo retorno! 🚀`;
        const mensagemEncoded = encodeURIComponent(mensagem);
        window.open(`https://wa.me/5512981815371?text=${mensagemEncoded}`, '_blank');
        
        setFormData({
          nome: '',
          whatsapp: '',
          tipo_tenda: '',
          tamanho: ''
        });
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full bg-gradient-to-br from-[#1A4D2E] to-[#004488] py-12 sm:py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-5 px-4 leading-tight">
            Precisa de uma Tenda Personalizada ou Atacado?
          </h3>
          <p className="text-base sm:text-lg lg:text-xl text-white/90 px-4 leading-relaxed">
            Preencha abaixo para receber nossa <strong>tabela de preços exclusiva</strong>
          </p>
        </div>

        <form 
          id="orcamento-form"
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-10 xl:p-12"
          data-readdy-form
        >
          {/* Espaçamento aumentado entre campos para mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-7 lg:gap-8 mb-6 sm:mb-7 lg:mb-8">
            <div>
              <label htmlFor="nome" className="block text-base font-semibold text-gray-700 mb-3">
                Nome Completo <span className="text-[#FFC107]">*</span>
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                required
                className="w-full px-4 sm:px-5 py-4 sm:py-4 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A4D2E] focus:border-[#1A4D2E] outline-none transition-all text-base sm:text-base touch-manipulation"
                placeholder="Seu nome"
              />
            </div>

            <div>
              <label htmlFor="whatsapp" className="block text-base font-semibold text-gray-700 mb-3">
                WhatsApp <span className="text-[#FFC107]">*</span>
              </label>
              <input
                type="tel"
                id="whatsapp"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                required
                className="w-full px-4 sm:px-5 py-4 sm:py-4 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A4D2E] focus:border-[#1A4D2E] outline-none transition-all text-base sm:text-base touch-manipulation"
                placeholder="(11) 99999-9999"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-7 lg:gap-8 mb-8 sm:mb-9 lg:mb-10">
            <div>
              <label htmlFor="tipo_tenda" className="block text-base font-semibold text-gray-700 mb-3">
                Tipo de Tenda <span className="text-[#FFC107]">*</span>
              </label>
              <select
                id="tipo_tenda"
                name="tipo_tenda"
                value={formData.tipo_tenda}
                onChange={(e) => setFormData({ ...formData, tipo_tenda: e.target.value })}
                required
                className="w-full px-4 sm:px-5 py-4 sm:py-4 pr-10 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A4D2E] focus:border-[#1A4D2E] outline-none transition-all text-base sm:text-base cursor-pointer touch-manipulation appearance-none bg-white"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23003366'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 1rem center',
                  backgroundSize: '1.5em 1.5em'
                }}
              >
                <option value="">Selecione o tipo</option>
                <option value="Tenda Sanfonada">Tenda Sanfonada</option>
                <option value="Tenda Piramidal">Tenda Piramidal</option>
                <option value="Tenda Chapéu de Bruxa">Tenda Chapéu de Bruxa</option>
                <option value="Não sei ainda">Não sei ainda</option>
              </select>
            </div>

            <div>
              <label htmlFor="tamanho" className="block text-base font-semibold text-gray-700 mb-3">
                Tamanho Desejado <span className="text-[#FFC107]">*</span>
              </label>
              <select
                id="tamanho"
                name="tamanho"
                value={formData.tamanho}
                onChange={(e) => setFormData({ ...formData, tamanho: e.target.value })}
                required
                className="w-full px-4 sm:px-5 py-4 sm:py-4 pr-10 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A4D2E] focus:border-[#1A4D2E] outline-none transition-all text-base sm:text-base cursor-pointer touch-manipulation appearance-none bg-white"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23003366'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 1rem center',
                  backgroundSize: '1.5em 1.5em'
                }}
              >
                <option value="">Selecione o tamanho</option>
                <option value="2x2m">2x2m</option>
                <option value="3x3m">3x3m</option>
                <option value="4x4m">4x4m</option>
                <option value="5x5m">5x5m</option>
                <option value="6x6m ou maior">6x6m ou maior</option>
                <option value="Não sei ainda">Não sei ainda</option>
              </select>
            </div>
          </div>

          {/* Botão com alto contraste e largura total no mobile */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#FFC107] hover:bg-[#E55A2B] active:bg-[#D54A1B] text-white font-bold text-lg sm:text-xl py-5 sm:py-6 px-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer whitespace-nowrap touch-manipulation transform hover:scale-[1.02] active:scale-[0.98]"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-3">
                <i className="ri-loader-4-line animate-spin text-2xl"></i>
                Enviando...
              </span>
            ) : (
              <span className="flex items-center justify-center gap-3">
                <i className="ri-send-plane-fill text-2xl"></i>
                Receber Orçamento VIP
              </span>
            )}
          </button>

          {submitStatus === 'success' && (
            <div className="mt-6 p-4 sm:p-5 bg-green-50 border-2 border-green-200 rounded-lg">
              <p className="text-green-700 text-center font-semibold text-base sm:text-lg flex items-center justify-center gap-2">
                <i className="ri-checkbox-circle-fill text-2xl"></i>
                Formulário enviado com sucesso! Redirecionando para o WhatsApp...
              </p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mt-6 p-4 sm:p-5 bg-red-50 border-2 border-red-200 rounded-lg">
              <p className="text-red-700 text-center font-semibold text-base sm:text-lg flex items-center justify-center gap-2">
                <i className="ri-close-circle-fill text-2xl"></i>
                Erro ao enviar. Por favor, tente novamente.
              </p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}