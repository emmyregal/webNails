import { PrismaClient } from '../../generated/prisma'
import { withAccelerate } from '@prisma/extension-accelerate'

const globalForPrisma = global as unknown as { 
    prisma: PrismaClient
}

const prisma = new PrismaClient({
  accelerateUrl: process.env.DATABASE_URL!,
});

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export default prisma