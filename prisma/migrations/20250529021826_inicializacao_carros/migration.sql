-- CreateTable
CREATE TABLE "Carro" (
    "id" SERIAL NOT NULL,
    "marca" TEXT NOT NULL,
    "modelo" TEXT NOT NULL,
    "ano" INTEGER NOT NULL,
    "quilometragem" INTEGER NOT NULL,
    "descricao" TEXT NOT NULL,
    "url_imagem" TEXT NOT NULL

    CONSTRAINT "Carro_pkey" PRIMARY KEY ("id")
);
