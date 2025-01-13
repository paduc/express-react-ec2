import express from "express";
import { createExpressMiddleware } from '@trpc/server/adapters/express';
import { appRouter } from './api';
import cors from 'cors';

const app = express();
const port = Number(process.env.PORT) || 3000;

app.use('/api', createExpressMiddleware({ router: appRouter }));

if(process.env.NODE_ENV == 'production') {
  console.log('Production mode');
  app.use(express.static('../app/dist'));

  app.get('*', (req, res) => {
    res.sendFile('index.html', { root: '../app/dist' });
  });
} 
else{
  console.log('Development mode');
  app.use(cors());
} 

app.listen(port, () =>
  console.log(`Server is listening on port ${port}...`),
);