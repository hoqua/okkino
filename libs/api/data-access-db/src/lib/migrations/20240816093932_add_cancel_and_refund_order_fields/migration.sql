-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "canceled" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "refunded" BOOLEAN NOT NULL DEFAULT false;
