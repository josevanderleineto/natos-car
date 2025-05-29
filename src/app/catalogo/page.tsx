import { getAllCarros } from '@/lib/db';
import CarCard from '@/components/CarCard';

export const metadata = {
  title: 'Catálogo de Carros | AutoElite',
  description: 'Confira nosso catálogo completo de veículos seminovos',
};

export default async function Catalogo() {
  const { carros, error } = await getAllCarros();
  
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Catálogo de Veículos
        </h1>
        
        <div className="mb-8 bg-white p-4 rounded-lg shadow-sm">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow">
              <input
                type="text"
                placeholder="Buscar veículos..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </div>
            <div>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none">
                <option value="">Todas as marcas</option>
                <option value="Toyota">Toyota</option>
                <option value="Honda">Honda</option>
                <option value="Volkswagen">Volkswagen</option>
                <option value="Chevrolet">Chevrolet</option>
                <option value="Ford">Ford</option>
              </select>
            </div>
            <div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors">
                Filtrar
              </button>
            </div>
          </div>
        </div>
        
        {error ? (
          <div className="text-center text-red-500 p-8 bg-white rounded-lg shadow">
            <p>Erro ao carregar veículos: {error}</p>
          </div>
        ) : !carros || carros.length === 0 ? (
          <div className="text-center text-gray-500 p-8 bg-white rounded-lg shadow">
            <p>Nenhum veículo disponível no momento.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {carros.map((carro) => (
              <CarCard key={carro.id} carro={carro} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
