-- AlterTable
ALTER TABLE `refreshtoken` MODIFY `updateAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `user` MODIFY `updateAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
