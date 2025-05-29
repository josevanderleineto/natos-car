import { getAllCarros } from '@/lib/db';
import CarCard from '@/components/CarCard';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';

export default async function Home() {
  const { carros, error } = await getAllCarros();
  
  // Selecionar 3 carros em destaque (ou todos se houver menos de 3)
  const carrosDestaque = carros ? carros.slice(0, 3) : [];
  
  return (
    <div className="min-h-screen">
      <HeroSection />
      
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Veículos em Destaque
          </h2>
          
          {error ? (
            <div className="text-center text-red-500">
              <p>Erro ao carregar veículos: {error}</p>
            </div>
          ) : carrosDestaque.length === 0 ? (
            <div className="text-center text-gray-500">
              <p>Nenhum veículo disponível no momento.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {carrosDestaque.map((carro) => (
                <CarCard key={carro.id} carro={carro} />
              ))}
            </div>
          )}
          
          <div className="text-center mt-10">
            <a 
              href="/catalogo" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Ver Catálogo Completo
            </a>
          </div>
        </div>
      </section>
      
      <FeaturesSection />
    </div>
  );
}
