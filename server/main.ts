import express from "express";
import { createExpressMiddleware } from '@trpc/server/adapters/express';
import { appRouter } from './api';
import cors from 'cors';

const app = express();

app.use(cors({
  // origin: ['http://localhost:5173', 'https://yourdomain.com'],
  // credentials: true,
}));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use('/api', createExpressMiddleware({ router: appRouter }));

app.listen(Number(process.env.PORT) || 3000, () =>
  console.log("Server is listening on port 3000..."),
);