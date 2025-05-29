import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-900 to-blue-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold">AutoElite</span>
            </Link>
          </div>
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-800 transition-colors">
                  Início
                </Link>
                <Link href="/catalogo" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-800 transition-colors">
                  Catálogo
                </Link>
                <Link href="/sobre" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-800 transition-colors">
                  Sobre Nós
                </Link>
                <Link href="/contato" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-800 transition-colors">
                  Contato
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-center md:hidden">
            <button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-800 focus:outline-none">
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Menu mobile - implementação básica */}
      <div className="hidden md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-800">
            Início
          </Link>
          <Link href="/catalogo" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-800">
            Catálogo
          </Link>
          <Link href="/sobre" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-800">
            Sobre Nós
          </Link>
          <Link href="/contato" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-800">
            Contato
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
