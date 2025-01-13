import { initTRPC } from '@trpc/server';
 
/**
 * Initialization of tRPC backend
 * Should be done only once per backend!
 */
const t = initTRPC.create();
 
/**
 * Export reusable router and procedure helpers
 * that can be used throughout the router
 */
export const router = t.router;
export const publicProcedure = t.procedure;

let counter = 0;

export const appRouter = router({
  getCounter: publicProcedure
    .query(() => {
      return ({ count: counter })
    } ),
    
  incrementCounter: publicProcedure
    .mutation(() => {
      counter += 1;
      return { count: counter };
    })
});
 
// Export only the type of a router!
// This prevents us from importing server code on the client.
export type AppRouter = typeof appRouter;