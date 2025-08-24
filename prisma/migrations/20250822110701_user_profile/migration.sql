-- CreateTable
CREATE TABLE "UserProfile" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "phoneNumber" TEXT,
    "address" TEXT,
    "gender" TEXT,
    "dateOfBirth" TIMESTAMP(3),
    "bio" TEXT,
    "profilePictureUrl" TEXT,
    "facebook" TEXT,
    "twitter" TEXT,
    "instagram" TEXT,
    "website" TEXT,
    "interests" TEXT[],

    CONSTRAINT "UserProfile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserProfile_userId_key" ON "UserProfile"("userId");

-- AddForeignKey
ALTER TABLE "UserProfile" ADD CONSTRAINT "UserProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
