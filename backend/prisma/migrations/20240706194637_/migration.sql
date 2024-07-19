/*
  Warnings:

  - You are about to drop the column `Status` on the `deliveries` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "deliveries" DROP COLUMN "Status",
ADD COLUMN     "Status_delivery" TEXT;
