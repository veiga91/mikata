-- CreateTable
CREATE TABLE "Vaccine" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" VARCHAR(30) NOT NULL,
    "code" TEXT NOT NULL,

    CONSTRAINT "Vaccine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pet" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Pet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_PetToVaccine" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Vaccine_id_key" ON "Vaccine"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Vaccine_code_key" ON "Vaccine"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Pet_id_key" ON "Pet"("id");

-- CreateIndex
CREATE UNIQUE INDEX "_PetToVaccine_AB_unique" ON "_PetToVaccine"("A", "B");

-- CreateIndex
CREATE INDEX "_PetToVaccine_B_index" ON "_PetToVaccine"("B");

-- AddForeignKey
ALTER TABLE "_PetToVaccine" ADD CONSTRAINT "_PetToVaccine_A_fkey" FOREIGN KEY ("A") REFERENCES "Pet"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PetToVaccine" ADD CONSTRAINT "_PetToVaccine_B_fkey" FOREIGN KEY ("B") REFERENCES "Vaccine"("id") ON DELETE CASCADE ON UPDATE CASCADE;
