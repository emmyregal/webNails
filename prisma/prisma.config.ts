import dotenv from "dotenv";
dotenv.config({ path: "../.env" });

import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "schema.prisma",
  migrations: { path: "migrations" },
  datasource: {
    url: process.env.DATABASE_URL!,
  },
});
