import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Entre em <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Contato</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Pronto para transformar seu negócio com automações inteligentes? Entre em contato conosco!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6 text-center">Informações de contato</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm md:text-base">E-mail</h4>
                    <p className="text-gray-600 text-sm md:text-base">contato@nuvrasolutions.com.br</p>
                  </div>
                </div>

                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm md:text-base">Telefone</h4>
                    <p className="text-gray-600 text-sm md:text-base">(75) 9 9977-9590</p>
                  </div>
                </div>

                <div className="flex flex-col items-center text-center space-y-4 sm:col-span-2 lg:col-span-1">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm md:text-base">Localização</h4>
                    <p className="text-gray-600 text-sm md:text-base">Feira de Santana, BA - Brasil</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-gradient-to-br from-gray-50 to-white p-4 md:p-6 rounded-xl border border-gray-200 max-w-md mx-auto">
              <h4 className="font-semibold text-gray-900 mb-4 text-center text-sm md:text-base">Horário de atendimento</h4>
              <div className="space-y-2 text-xs md:text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Segunda - Sexta</span>
                  <span>08:00 - 22:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábado</span>
                  <span>08:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingo</span>
                  <span>Fechado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;