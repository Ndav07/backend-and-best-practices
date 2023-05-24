/*
  Warnings:

  - You are about to drop the column `address` on the `places` table. All the data in the column will be lost.
  - The `images` column on the `places` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `open_hour` column on the `places` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `close_hour` column on the `places` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `menu` column on the `places` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "places" DROP COLUMN "address",
ADD COLUMN     "phone" TEXT,
DROP COLUMN "images",
ADD COLUMN     "images" TEXT[],
DROP COLUMN "open_hour",
ADD COLUMN     "open_hour" TIME,
DROP COLUMN "close_hour",
ADD COLUMN     "close_hour" TIME,
DROP COLUMN "menu",
ADD COLUMN     "menu" TEXT[];
