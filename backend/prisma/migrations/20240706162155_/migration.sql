/*
  Warnings:

  - You are about to drop the column `status` on the `deliveries` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "deliveries" DROP COLUMN "status",
ADD COLUMN     "Status" TEXT;
