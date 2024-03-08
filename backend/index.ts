import mysql from 'mysql';
import express, {Express, Request, Response} from 'express';

import cors from 'cors';

const app: Express = express();
const port = 8080 as number;

type DatabaseConnection = {
  host: string;
  user: string;
  password: string;
  database: string;
};

// const databaseConnection: DatabaseConnection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'studio-corsair',
// });

app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Hello dsad dsa' });
  res.send('dsad');

});

app.get('/yes', (req: Request, res: Response) => {
  res.send("dsad");

});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});