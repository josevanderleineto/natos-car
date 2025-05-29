import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">AutoElite</h3>
            <p className="text-gray-300">
              Sua concessionária de confiança para encontrar o carro dos seus sonhos.
              Qualidade, confiança e as melhores ofertas do mercado.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">Início</Link></li>
              <li><Link href="/catalogo" className="text-gray-300 hover:text-white transition-colors">Catálogo</Link></li>
              <li><Link href="/sobre" className="text-gray-300 hover:text-white transition-colors">Sobre Nós</Link></li>
              <li><Link href="/contato" className="text-gray-300 hover:text-white transition-colors">Contato</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Av. Brasil, 1500 - Centro</li>
              <li>São Paulo - SP</li>
              <li>contato@autoelite.com.br</li>
              <li>(11) 3456-7890</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} AutoElite. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
