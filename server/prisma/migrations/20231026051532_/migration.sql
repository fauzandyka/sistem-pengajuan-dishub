/*
  Warnings:

  - You are about to drop the column `idJenis` on the `detail` table. All the data in the column will be lost.
  - You are about to drop the column `idMerk` on the `detail` table. All the data in the column will be lost.
  - You are about to drop the column `idType` on the `detail` table. All the data in the column will be lost.
  - Added the required column `idJenis` to the `kendaraan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idMerk` to the `kendaraan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idType` to the `kendaraan` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `detail` DROP FOREIGN KEY `detail_idJenis_fkey`;

-- DropForeignKey
ALTER TABLE `detail` DROP FOREIGN KEY `detail_idMerk_fkey`;

-- DropForeignKey
ALTER TABLE `detail` DROP FOREIGN KEY `detail_idType_fkey`;

-- AlterTable
ALTER TABLE `detail` DROP COLUMN `idJenis`,
    DROP COLUMN `idMerk`,
    DROP COLUMN `idType`;

-- AlterTable
ALTER TABLE `kendaraan` ADD COLUMN `idJenis` INTEGER NOT NULL,
    ADD COLUMN `idMerk` INTEGER NOT NULL,
    ADD COLUMN `idType` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `kendaraan` ADD CONSTRAINT `kendaraan_idJenis_fkey` FOREIGN KEY (`idJenis`) REFERENCES `jenis`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `kendaraan` ADD CONSTRAINT `kendaraan_idMerk_fkey` FOREIGN KEY (`idMerk`) REFERENCES `merk`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `kendaraan` ADD CONSTRAINT `kendaraan_idType_fkey` FOREIGN KEY (`idType`) REFERENCES `type`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
