import cors from 'cors';
import express, { Express, NextFunction, Request, Response } from 'express';
import { databaseConnection } from './DBconnection';

import userRoutes from './routes/user';
import expensesRoutes from './routes/expenses';

const app: Express = express();
const port = 8800 as number;

app.use(express.json());
app.use(cors());

databaseConnection.connect((err) => {
  if (err) return console.log(err);

  return console.log('Database connected');
});

app.use('/users', userRoutes);
app.use('/expenses', expensesRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
