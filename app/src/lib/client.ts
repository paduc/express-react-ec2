import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from '../../../server/api';

export const client = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:3000/api',
    }),
  ],
});