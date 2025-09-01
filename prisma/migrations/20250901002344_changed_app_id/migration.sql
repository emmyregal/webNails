/*
  Warnings:

  - The primary key for the `Appointment` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "public"."Appointment" DROP CONSTRAINT "Appointment_pkey",
ALTER COLUMN "appointment_id" DROP DEFAULT,
ALTER COLUMN "appointment_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Appointment_pkey" PRIMARY KEY ("appointment_id");
DROP SEQUENCE "Appointment_appointment_id_seq";
