-- AlterTable
ALTER TABLE "deliveries" ADD COLUMN     "client_name" TEXT,
ADD COLUMN     "delivery_notes" TEXT,
ADD COLUMN     "endereco_coleta" TEXT,
ADD COLUMN     "endereco_entrega" TEXT,
ADD COLUMN     "price" DOUBLE PRECISION,
ADD COLUMN     "status" TEXT;
