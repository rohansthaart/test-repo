/*
  Warnings:

  - You are about to drop the column `userId` on the `tour` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `tour` DROP FOREIGN KEY `Tour_userId_fkey`;

-- DropIndex
DROP INDEX `Tour_userId_fkey` ON `tour`;

-- AlterTable
ALTER TABLE `tour` DROP COLUMN `userId`;

-- CreateTable
CREATE TABLE `UserTour` (
    `userId` VARCHAR(191) NOT NULL,
    `tourId` VARCHAR(191) NOT NULL,
    `joinedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`userId`, `tourId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `UserTour` ADD CONSTRAINT `UserTour_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserTour` ADD CONSTRAINT `UserTour_tourId_fkey` FOREIGN KEY (`tourId`) REFERENCES `Tour`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
