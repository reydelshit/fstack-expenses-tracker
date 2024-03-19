import cors from 'cors';
import express, { Express, NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { databaseConnection } from './DBconnection';


import userRoutes from './routes/user';

const app: Express = express();
const port = 8800 as number;


interface CustomRequest extends Request {
  payload?: any;
}

app.use(express.json());
app.use(cors());

databaseConnection.connect((err) => {
  if(err) return console.log(err);
 
  return console.log('Database connected');
 })


app.use('/users', userRoutes);
app.use('/expenses', userRoutes);


const verify = (req: CustomRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization
  if(authHeader){
    const token = authHeader.split(' ')[1]
    jwt.verify(token, 'secret', (err, payload) => {
      if(err) return res.json({message: "Invalid token"});
      
      req.payload = payload
      next()
    })
  }
}


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
