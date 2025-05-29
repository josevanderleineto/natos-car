# Documentação do Site da Loja de Carros

## Visão Geral

Este projeto é um site profissional para uma loja de carros desenvolvido com Next.js e integrado com banco de dados PostgreSQL. O site apresenta um catálogo dinâmico de veículos, com páginas de listagem e detalhes, além de uma interface moderna e responsiva.

## Estrutura do Projeto

```
loja-carros/
├── prisma/                  # Configuração do Prisma ORM
│   └── schema.prisma        # Modelo de dados
├── src/
│   ├── app/                 # Páginas da aplicação (Next.js App Router)
│   │   ├── page.tsx         # Página inicial
│   │   ├── layout.tsx       # Layout principal
│   │   ├── catalogo/        # Página de catálogo
│   │   └── carros/[id]/     # Página de detalhes do carro
│   ├── components/          # Componentes reutilizáveis
│   │   ├── Navbar.tsx       # Barra de navegação
│   │   ├── Footer.tsx       # Rodapé
│   │   ├── CarCard.tsx      # Card de exibição do carro
│   │   ├── HeroSection.tsx  # Seção de destaque da página inicial
│   │   └── FeaturesSection.tsx # Seção de recursos
│   └── lib/                 # Bibliotecas e utilitários
│       └── db.ts            # Funções de acesso ao banco de dados
├── .env                     # Variáveis de ambiente (conexão com banco)
├── package.json             # Dependências e scripts
└── tailwind.config.js       # Configuração do Tailwind CSS
```

## Tecnologias Utilizadas

- **Next.js**: Framework React para renderização do lado do servidor
- **TypeScript**: Tipagem estática para JavaScript
- **Tailwind CSS**: Framework CSS utilitário para estilização
- **Prisma**: ORM para acesso ao banco de dados
- **PostgreSQL**: Banco de dados relacional

## Funcionalidades Implementadas

1. **Página Inicial**:
   - Seção de destaque (Hero)
   - Exibição de carros em destaque
   - Seção de recursos da loja

2. **Catálogo de Carros**:
   - Listagem de todos os veículos
   - Interface para filtros (marca, modelo)
   - Cards com informações resumidas

3. **Página de Detalhes**:
   - Informações completas do veículo
   - Imagem em destaque
   - Botões de contato e interesse

4. **Componentes de Navegação**:
   - Menu de navegação responsivo
   - Rodapé com informações de contato

## Modelo de Dados

O modelo `Carro` representa os veículos disponíveis na loja:

```prisma
model Carro {
  id           Int     @id @default(autoincrement())
  marca        String
  modelo       String
  ano          Int
  quilometragem Int
  descricao    String
  url_imagem   String

  @@map("carros")
}
```

## Instruções de Uso

### Requisitos

- Node.js 18.0 ou superior
- NPM ou Yarn
- Acesso ao banco de dados PostgreSQL

### Instalação

1. Clone o repositório
2. Instale as dependências:
   ```
   npm install
   ```
3. Configure o arquivo `.env` com a string de conexão do PostgreSQL:
   ```
   DATABASE_URL="postgresql://usuario:senha@host:porta/banco"
   ```
4. Gere o cliente Prisma:
   ```
   npx prisma generate
   ```

### Execução em Desenvolvimento

```
npm run dev
```

### Build para Produção

```
npm run build
npm start
```

## Expansão e Melhorias Futuras

- Implementação de autenticação para área administrativa
- Sistema de busca avançada
- Formulário de contato funcional
- Integração com sistemas de pagamento
- Área administrativa para gerenciamento do catálogo

## Suporte

Para suporte ou dúvidas sobre o projeto, entre em contato através do email: contato@autoelite.com.br
