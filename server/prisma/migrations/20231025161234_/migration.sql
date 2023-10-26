/*
  Warnings:

  - Added the required column `namaPemegang` to the `kendaraan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `kendaraan` ADD COLUMN `namaPemegang` VARCHAR(191) NOT NULL;
