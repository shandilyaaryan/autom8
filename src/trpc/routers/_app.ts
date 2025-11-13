import { inngest } from "@/inngest/client";
import { createTRPCRouter, protectedProcedure } from "../init";
import prisma from "@/lib/prisma";

export const appRouter = createTRPCRouter({
  testAI: protectedProcedure.mutation(async () => {
    await inngest.send({
      name: "execute/ai",
    });
    return { success: true, message: "Job Queued" };
  }),
  getWorkflows: protectedProcedure.query(({ ctx }) => {
    return prisma.user.findMany({
      where: {
        id: ctx.auth.user.id,
      },
    });
  }),
  createWorkflows: protectedProcedure.mutation(async () => {
    await inngest.send({
      name: "test/hello.world",
      data: {
        email: "aryan@aryan.com",
      },
    });
    return { success: true, message: "Job Queued" };
  }),
});
// export type definition of API
export type AppRouter = typeof appRouter;
