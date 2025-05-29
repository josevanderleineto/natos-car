import { PrismaClient } from '@prisma/client';

// Instância do PrismaClient para conexão com o banco de dados
const prisma = new PrismaClient();

// Função para buscar todos os carros do catálogo
export async function getAllCarros() {
  try {
    const carros = await prisma.carro.findMany();
    return { carros };
  } catch (error) {
    console.error('Erro ao buscar carros:', error);
    return { error: 'Falha ao carregar o catálogo de carros' };
  }
}

// Função para buscar um carro específico pelo ID
export async function getCarroById(id: number) {
  try {
    const carro = await prisma.carro.findUnique({
      where: { id },
    });
    
    if (!carro) {
      return { error: 'Carro não encontrado' };
    }
    
    return { carro };
  } catch (error) {
    console.error(`Erro ao buscar carro com ID ${id}:`, error);
    return { error: 'Falha ao carregar detalhes do carro' };
  }
}

// Função para buscar carros por marca
export async function getCarrosByMarca(marca: string) {
  try {
    const carros = await prisma.carro.findMany({
      where: {
        marca: {
          contains: marca,
          mode: 'insensitive'
        }
      }
    });
    
    return { carros };
  } catch (error) {
    console.error(`Erro ao buscar carros da marca ${marca}:`, error);
    return { error: 'Falha ao filtrar carros por marca' };
  }
}
