/*
  Warnings:

  - You are about to drop the `guide` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `tour` DROP FOREIGN KEY `Tour_guideId_fkey`;

-- DropIndex
DROP INDEX `Tour_guideId_fkey` ON `tour`;

-- DropTable
DROP TABLE `guide`;

-- AddForeignKey
ALTER TABLE `Tour` ADD CONSTRAINT `Tour_guideId_fkey` FOREIGN KEY (`guideId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
