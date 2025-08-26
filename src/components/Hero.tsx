import React from 'react';
import { ArrowRight, Bot, MessageSquare } from 'lucide-react';

const Hero: React.FC = () => {
  const phoneNumber = '557599779590';
  const message = 'Olá, gostaria de saber mais sobre as soluções da Nuvra!';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section id="home" className="pt-16 min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 lg:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Automações{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Inteligentes
                </span>{' '}
                para sua Empresa
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Especialistas em chatbots personalizados e automações que aumentam a produtividade 
                e otimizam o atendimento ao cliente. Transforme sua empresa com soluções inovadoras.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-medium flex items-center justify-center space-x-2 shadow-lg text-sm md:text-base"
              >
                <span>Começar Agora</span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <button 
                onClick={() => {
                  // @ts-ignore
                  if (window.openNuvraChat) {
                    // @ts-ignore
                    window.openNuvraChat();
                  }
                }}
                className="border-2 border-blue-600 text-blue-600 px-6 md:px-8 py-3 md:py-4 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200 font-medium flex items-center justify-center space-x-2 text-sm md:text-base"
              >
                <MessageSquare className="w-4 h-4 md:w-5 md:h-5" />
                <span>Chat ao Vivo</span>
              </button>
            </div>
          </div>

          {/* Visual */}
          <div className="relative order-first lg:order-last">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 md:p-8 shadow-2xl">
              <div className="bg-white rounded-lg p-4 md:p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <Bot className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm md:text-base">Chatbot Nuvra</div>
                    <div className="text-xs md:text-sm text-gray-500">Online agora</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <p className="text-xs md:text-sm text-gray-700">Olá! Como posso ajudar você hoje?</p>
                  </div>
                  <div className="bg-blue-600 text-white p-3 rounded-lg ml-4 md:ml-8">
                    <p className="text-xs md:text-sm">Gostaria de saber mais sobre automações</p>
                  </div>
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <p className="text-xs md:text-sm text-gray-700">Perfeito! Posso te explicar como nossas soluções podem transformar seu negócio...</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-2 md:-top-4 -right-2 md:-right-4 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 md:-bottom-6 -left-4 md:-left-6 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-20 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;