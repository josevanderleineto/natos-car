import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center md:text-left md:max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Encontre o Carro dos Seus Sonhos
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Na AutoElite, oferecemos os melhores veículos seminovos com qualidade e garantia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="/catalogo"
              className="inline-block bg-white text-blue-900 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Ver Catálogo
            </a>
            <a
              href="/contato"
              className="inline-block bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Fale Conosco
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
