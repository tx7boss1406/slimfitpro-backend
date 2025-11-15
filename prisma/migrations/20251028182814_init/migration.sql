/*
  Warnings:

  - You are about to drop the column `goal` on the `User` table. All the data in the column will be lost.
  - The `level` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "goal",
ADD COLUMN     "unlocked" JSONB,
ADD COLUMN     "xp" INTEGER NOT NULL DEFAULT 0,
DROP COLUMN "level",
ADD COLUMN     "level" INTEGER NOT NULL DEFAULT 1;
