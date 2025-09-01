/*
  Warnings:

  - The primary key for the `Appointment` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `appointment_id` on the `Appointment` table. All the data in the column will be lost.
  - The required column `id` was added to the `Appointment` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "public"."Appointment" DROP CONSTRAINT "Appointment_pkey",
DROP COLUMN "appointment_id",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "Appointment_pkey" PRIMARY KEY ("id");
