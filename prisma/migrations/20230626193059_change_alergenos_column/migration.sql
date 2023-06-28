/*
  Warnings:

  - The `alergenos` column on the `Recetas` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Recetas" DROP COLUMN "alergenos",
ADD COLUMN     "alergenos" TEXT[];
