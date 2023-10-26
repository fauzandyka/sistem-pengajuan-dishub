/*
  Warnings:

  - Added the required column `idKerusakan` to the `detail` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `detail` ADD COLUMN `idKerusakan` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `jenisKerusakan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `detail` ADD CONSTRAINT `detail_idKerusakan_fkey` FOREIGN KEY (`idKerusakan`) REFERENCES `jenisKerusakan`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
