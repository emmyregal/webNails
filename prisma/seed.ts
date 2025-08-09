import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
  {
    email: "alice@prisma.io",
    first_name: "Alice",
    last_name: "Smith",
    Appointments: {
      create: [
        {
          date: new Date("2025-08-10T10:00:00Z"),
          type: "Manicure",
        },
        {
          date: new Date("2025-08-12T14:00:00Z"),
          type: "Pedicure",
        },
      ],
    },
  },
  {
    email: "bob@prisma.io",
    first_name: "Bob",
    last_name: "Johnson",
    Appointments: {
      create: [
        {
          date: new Date("2025-08-11T09:00:00Z"),
          type: "Gel Nails",
        },
      ],
    },
  },
];

export async function main() {
  for (const u of userData) {
    await prisma.user.create({ data: u });
  }
}

main()
  .then(() => console.log("Seed data created"))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
