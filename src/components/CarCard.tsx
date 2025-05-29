'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CarCard = ({ carro }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48 w-full">
        <Image 
          src={carro.url_imagem || 'https://via.placeholder.com/400x300?text=Imagem+Indisponível'} 
          alt={`${carro.marca} ${carro.modelo}`}
          fill
          sizes="100vw"
          style={{ objectFit: 'cover' }}
          className="transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          {carro.marca} {carro.modelo}
        </h3>
        <div className="flex justify-between text-gray-600 mb-3">
          <span>Ano: {carro.ano}</span>
          <span>
            {carro.quilometragem 
              ? Number(carro.quilometragem).toLocaleString('pt-BR') + ' km'
              : 'N/A'}
          </span>
        </div>
        <p className="text-gray-600 mb-4 line-clamp-2">
          {carro.descricao || 'Sem descrição disponível.'}
        </p>
        <Link 
          href={`/carros/${carro.id}`}
          className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
        >
          Ver Detalhes
        </Link>
      </div>
    </div>
  );
};

export default CarCard;
