// This file's purpose is to make a global variable for Prisma Client otherwise on every reload a new Prisma Client will be initiated which will make the development process much slower and buggy. It seems that global object is unaffected by hot reload so we set a globalForPrisma. This is only used in development. There will be no issues on production and we won't even need this file.

import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

const prisma =
  globalForPrisma.prisma || new PrismaClient();

export default prisma
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;