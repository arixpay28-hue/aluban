import { useState } from 'react';
import { Header } from '../home/components/Header';
import { Footer } from '../home/components/Footer';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_PUBLIC_SUPABASE_URL,
  import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY
);

export default function CadastroPedido() {
  const [formData, setFormData] = useState({
    nome: '',
    cpfCnpj: '',
    email: '',
    telefone: '',
    rua: '',
    bairro: '',
    cidadeUf: '',
    cep: '',
    tipoServico: 'comprar',
    modelo: '',
    tamanho: '',
    cor: '',
    serigrafia: 'nao'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Salvar no Supabase
      const { error } = await supabase
        .from('pedidos')
        .insert([
          {
            tipo_servico: formData.tipoServico,
            nome: formData.nome,
            cpf_cnpj: formData.cpfCnpj,
            email: formData.email,
            telefone: formData.telefone,
            rua: formData.rua,
            bairro: formData.bairro,
            cidade_uf: formData.cidadeUf,
            cep: formData.cep,
            modelo: formData.modelo,
            tamanho: formData.tamanho,
            cor: formData.cor,
            serigrafia: formData.serigrafia
          }
        ]);

      if (error) {
        console.error('Erro ao salvar no Supabase:', error);
        alert('Erro ao enviar o pedido. Por favor, tente novamente.');
        return;
      }

      setSubmitSuccess(true);
      setFormData({
        nome: '',
        cpfCnpj: '',
        email: '',
        telefone: '',
        rua: '',
        bairro: '',
        cidadeUf: '',
        cep: '',
        tipoServico: 'comprar',
        modelo: '',
        tamanho: '',
        cor: '',
        serigrafia: 'nao'
      });
      
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      alert('Erro ao enviar o pedido. Por favor, tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1 w-full py-8 sm:py-12 lg:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 lg:p-10">
            <div className="text-center mb-6 sm:mb-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1A4D2E] mb-3 sm:mb-4">
                Cadastro de Pedido
              </h1>
              <p className="text-sm sm:text-base text-gray-600">
                Preencha seus dados para finalizar o pedido de compra ou aluguel
              </p>
            </div>

            <form id="cadastro-pedido-form" data-readdy-form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {/* Tipo de Serviço */}
              <div>
                <label htmlFor="tipoServico" className="block text-sm font-semibold text-gray-700 mb-2">
                  Tipo de Serviço *
                </label>
                <select
                  id="tipoServico"
                  name="tipoServico"
                  value={formData.tipoServico}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFC107] focus:border-transparent text-sm sm:text-base cursor-pointer"
                >
                  <option value="comprar">Comprar</option>
                  <option value="alugar">Alugar</option>
                </select>
              </div>

              {/* Modelo da Tenda */}
              <div>
                <label htmlFor="modelo" className="block text-sm font-semibold text-gray-700 mb-2">
                  Modelo da Tenda *
                </label>
                <select
                  id="modelo"
                  name="modelo"
                  value={formData.modelo}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFC107] focus:border-transparent text-sm sm:text-base cursor-pointer"
                >
                  <option value="">Selecione o modelo</option>
                  <option value="Tenda Sanfonada Articulada">Tenda Sanfonada Articulada</option>
                  <option value="Tenda Piramidal Profissional">Tenda Piramidal Profissional</option>
                  <option value="Tenda Chapéu de Bruxa">Tenda Chapéu de Bruxa</option>
                </select>
              </div>

              {/* Tamanho */}
              <div>
                <label htmlFor="tamanho" className="block text-sm font-semibold text-gray-700 mb-2">
                  Tamanho *
                </label>
                <select
                  id="tamanho"
                  name="tamanho"
                  value={formData.tamanho}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFC107] focus:border-transparent text-sm sm:text-base cursor-pointer"
                >
                  <option value="">Selecione o tamanho</option>
                  <option value="2x2m">2x2m</option>
                  <option value="3x3m">3x3m</option>
                  <option value="4x4m">4x4m</option>
                  <option value="5x5m">5x5m</option>
                  <option value="6x3m">6x3m</option>
                  <option value="6x6m">6x6m</option>
                  <option value="8x8m">8x8m</option>
                  <option value="10x10m">10x10m</option>
                  <option value="Personalizado">Personalizado</option>
                </select>
              </div>

              {/* Cor */}
              <div>
                <label htmlFor="cor" className="block text-sm font-semibold text-gray-700 mb-2">
                  Cor da Lona *
                </label>
                <select
                  id="cor"
                  name="cor"
                  value={formData.cor}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFC107] focus:border-transparent text-sm sm:text-base cursor-pointer"
                >
                  <option value="">Selecione a cor</option>
                  <option value="Branco">Branco</option>
                  <option value="Preto">Preto</option>
                  <option value="Amarelo">Amarelo</option>
                  <option value="Vermelho">Vermelho</option>
                  <option value="Verde">Verde</option>
                  <option value="Azul">Azul</option>
                  <option value="Transparente">Transparente</option>
                  <option value="Personalizado">Personalizado</option>
                </select>
              </div>

              {/* Serigrafia */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Deseja aplicar logomarca (Serigrafia)? *
                </label>
                <div className="flex gap-6">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="serigrafia"
                      value="sim"
                      checked={formData.serigrafia === 'sim'}
                      onChange={handleChange}
                      className="w-5 h-5 text-[#FFC107] focus:ring-[#FFC107] cursor-pointer"
                    />
                    <span className="text-gray-700 group-hover:text-[#FFC107] transition-colors duration-300 text-sm sm:text-base">Sim</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="serigrafia"
                      value="nao"
                      checked={formData.serigrafia === 'nao'}
                      onChange={handleChange}
                      className="w-5 h-5 text-[#FFC107] focus:ring-[#FFC107] cursor-pointer"
                    />
                    <span className="text-gray-700 group-hover:text-[#FFC107] transition-colors duration-300 text-sm sm:text-base">Não</span>
                  </label>
                </div>
              </div>

              {/* Nome/Razão Social */}
              <div>
                <label htmlFor="nome" className="block text-sm font-semibold text-gray-700 mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFC107] focus:border-transparent text-sm sm:text-base"
                  placeholder="Digite seu nome completo"
                />
              </div>

              {/* CPF/CNPJ */}
              <div>
                <label htmlFor="cpfCnpj" className="block text-sm font-semibold text-gray-700 mb-2">
                  CPF ou CNPJ *
                </label>
                <input
                  type="text"
                  id="cpfCnpj"
                  name="cpfCnpj"
                  value={formData.cpfCnpj}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFC107] focus:border-transparent text-sm sm:text-base"
                  placeholder="000.000.000-00 ou 00.000.000/0000-00"
                />
              </div>

              {/* E-mail */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFC107] focus:border-transparent text-sm sm:text-base"
                  placeholder="seu@email.com"
                />
              </div>

              {/* Telefone */}
              <div>
                <label htmlFor="telefone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Telefone/WhatsApp *
                </label>
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFC107] focus:border-transparent text-sm sm:text-base"
                  placeholder="(61) 98263-0276"
                />
              </div>

              {/* Rua e Número */}
              <div>
                <label htmlFor="rua" className="block text-sm font-semibold text-gray-700 mb-2">
                  Rua e Número *
                </label>
                <input
                  type="text"
                  id="rua"
                  name="rua"
                  value={formData.rua}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFC107] focus:border-transparent text-sm sm:text-base"
                  placeholder="Rua Exemplo, 123"
                />
              </div>

              {/* Bairro */}
              <div>
                <label htmlFor="bairro" className="block text-sm font-semibold text-gray-700 mb-2">
                  Bairro *
                </label>
                <input
                  type="text"
                  id="bairro"
                  name="bairro"
                  value={formData.bairro}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFC107] focus:border-transparent text-sm sm:text-base"
                  placeholder="Centro"
                />
              </div>

              {/* Cidade/UF */}
              <div>
                <label htmlFor="cidadeUf" className="block text-sm font-semibold text-gray-700 mb-2">
                  Cidade/UF *
                </label>
                <input
                  type="text"
                  id="cidadeUf"
                  name="cidadeUf"
                  value={formData.cidadeUf}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFC107] focus:border-transparent text-sm sm:text-base"
                  placeholder="São Paulo/SP"
                />
              </div>

              {/* CEP */}
              <div>
                <label htmlFor="cep" className="block text-sm font-semibold text-gray-700 mb-2">
                  CEP *
                </label>
                <input
                  type="text"
                  id="cep"
                  name="cep"
                  value={formData.cep}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFC107] focus:border-transparent text-sm sm:text-base"
                  placeholder="12345-678"
                />
              </div>

              {/* Botão de Envio */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#FFC107] hover:bg-[#E55A2B] text-white font-bold py-3 sm:py-4 px-6 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base whitespace-nowrap cursor-pointer"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Pedido'}
              </button>

              {/* Mensagem de Sucesso */}
              {submitSuccess && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg text-center text-sm sm:text-base">
                  ✅ Pedido enviado com sucesso! Entraremos em contato em breve.
                </div>
              )}
            </form>

            {/* Informações de Contato */}
            <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-200">
              <p className="text-center text-sm text-gray-600 mb-4">
                Dúvidas? Entre em contato:
              </p>
              <div className="flex justify-center">
                <a
                  href="https://wa.me/5561982630276"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-all duration-300 text-sm sm:text-base cursor-pointer whitespace-nowrap"
                >
                  <div className="w-5 h-5 flex items-center justify-center">
                    <i className="ri-whatsapp-fill text-xl"></i>
                  </div>
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}