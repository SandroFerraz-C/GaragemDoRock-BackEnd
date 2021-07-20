-- CreateTable
CREATE TABLE `Banda` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Nome` VARCHAR(191) NOT NULL,
    `NumeroDeDiscos` INTEGER NOT NULL,
    `LinkSpotify` VARCHAR(191) NOT NULL,
    `Website` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Banda.Nome_unique`(`Nome`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Image` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `bandaId` INTEGER NOT NULL,
    `url` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Image` ADD FOREIGN KEY (`bandaId`) REFERENCES `Banda`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
