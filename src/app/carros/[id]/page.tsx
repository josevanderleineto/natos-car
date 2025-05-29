import { getCarroById } from '@/lib/db';
import Image from 'next/image';
import Link from 'next/link';

type Params = {
  id: string;
};

export async function generateMetadata({ params }: { params: Params }) {
  const id = parseInt(params.id); // Ensure params.id is accessed synchronously here
  const { carro } = await getCarroById(id);

  return {
    title: carro
      ? `${carro.marca} ${carro.modelo} | AutoElite`
      : 'Detalhes do Veículo | AutoElite',
    description: carro
      ? carro.descricao
      : 'Detalhes do veículo na AutoElite',
  };
}

export default async function CarroDetalhes({ params }: { params: Params }) {
  const { carro, error } = await getCarroById(parseInt(params.id));

  if (error) {
    return (
      <div className="py-12 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-red-600 mb-4">
              Erro ao carregar detalhes
            </h1>
            <p className="text-gray-700 mb-4">{error}</p>
            <Link
              href="/catalogo"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg"
            >
              Voltar ao Catálogo
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (!carro) {
    return (
      <div className="py-12 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              Veículo não encontrado
            </h1>
            <p className="text-gray-700 mb-4">
              O veículo que você está procurando não foi encontrado.
            </p>
            <Link
              href="/catalogo"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg"
            >
              Voltar ao Catálogo
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const caracteristicas = carro.caracteristicas
  ? typeof carro.caracteristicas === 'string' 
    ? carro.caracteristicas.split(',').map((item) => item.trim())
    : []
  : [];
  
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-6">
          <Link
            href="/catalogo"
            className="inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Voltar ao Catálogo
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <div className="relative h-64 md:h-full w-full">
                <Image
                  src={
                    carro.url_imagem ||
                    'https://via.placeholder.com/800x600?text=Imagem+Indisponível'
                  }
                  alt={`${carro.marca} ${carro.modelo}`}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>

            <div className="md:w-1/2 p-6 md:p-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                {carro.marca} {carro.modelo}
              </h1>

              <div className="flex items-center text-gray-600 mb-6">
                <span className="mr-4">Ano: {carro.ano}</span>
                <span>
                  {carro.quilometragem.toLocaleString('pt-BR')} km
                </span>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  Descrição
                </h2>
                <p className="text-gray-600">{carro.descricao}</p>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  Características
                </h2>
                {caracteristicas.length > 0 ? (
                  <ul className="grid grid-cols-2 gap-2">
                    {caracteristicas.map((carac: string, index: number) => (
                      <li
                        key={index}
                        className="flex items-center text-gray-600"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2 text-green-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {carac}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-600">
                    Nenhuma característica informada.
                  </p>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contato"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center font-semibold py-3 px-6 rounded-lg"
                >
                  Tenho Interesse
                </Link>
                <a
                  href={`https://wa.me/5511987654321?text=Olá,%20tenho%20interesse%20no%20${carro.marca}%20${carro.modelo}%20ano%20${carro.ano}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white text-center font-semibold py-3 px-6 rounded-lg"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}