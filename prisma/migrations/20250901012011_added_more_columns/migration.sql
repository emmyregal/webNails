/*
  Warnings:

  - Added the required column `comments` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone_number` to the `Appointment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Appointment" ADD COLUMN     "comments" TEXT NOT NULL,
ADD COLUMN     "name" TEXT,
ADD COLUMN     "phone_number" TEXT NOT NULL;
