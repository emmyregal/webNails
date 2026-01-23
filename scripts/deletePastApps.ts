import "dotenv/config";
import { PrismaClient } from '../generated/prisma/client'
import { withAccelerate } from "@prisma/extension-accelerate";

const prisma = new PrismaClient({
  accelerateUrl: process.env.DATABASE_URL!, // <-- your prisma+postgres URL
}).$extends(withAccelerate());

async function cleanupAppointments() {
  const now = new Date();

  const result = await prisma.appointment.deleteMany({
    where: { date: { lt: now } }, 
  });

  console.log(`Deleted ${result.count} past appointments`);
}

cleanupAppointments()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });
