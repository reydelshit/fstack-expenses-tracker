import mysql from 'mysql';
import express, {Express, Request, Response} from 'express';
import jwt from 'jsonwebtoken';
import cors from 'cors';

import { User } from './types';
const app: Express = express();
const port = 8800 as number;


interface UserDetails {

}

const databaseConnection: mysql.Connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'fstack-expenses',
});

app.use(express.json());
app.use(cors());

databaseConnection.connect((err) => {
 if(err) return console.log(err);

 return console.log('Database connected');
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



// check user
app.post("/users", (req, res) => {
  const query = "SELECT * FROM users WHERE username = ? AND password = ?";
  
  const username = req.body.username as string; 
  const password = req.body.password as string;
  
  const values = [username, password] ;


  databaseConnection.query(query, values, (err, data: User[]) => {
      if (err) return res.json(err);
      if (data.length === 0) return res.json({message: "Invalid username or password"});
      const findId = data.find((user: User) => user.user_id === data[0].user_id )
      const token = jwt.sign({username, user_id: findId?.user_id}, 'secret')
      return (
        res.json({
          data, token
        })
      ); 
  });
});

//registerr
app.post("/users", (req, res) => {
  const query = "INSERT INTO users (`fullname`, `username`, `password`, `created_at`) VALUES (?)"
  const created_at = new Date()

  const values = [
      req.body.first_name + " " + req.body.last_name,
      req.body.username,
      req.body.password,
      created_at
  ]

  databaseConnection.query(query, [values], (err, data) => {
      if(err) return res.json(err)
      return res.json({
      ...data,
      message: "succesfully added"
      })
  })
})



// all books 
app.get("/expenses", (req, res) => {
  const query = "SELECT * FROM expenses"
  databaseConnection.query(query, (err, data) => {
      if(err) return res.json(err)
      return res.json(data)
  })
})

// specific books 
app.get("/expenses/:id", (req, res) => {
  const query = "SELECT * FROM books WHERE id = ?"
  const id = req.params.id
  databaseConnection.query(query, id, (err, data) => {
      if(err) return res.json(err)
      return res.json(data)
  })
})



app.post("/expenses", (req, res) => {
  const query = "INSERT INTO expenses (`expense_name`, `price`, `date`) VALUES (?)"
  const values = [
      req.body.expense_name,
      req.body.price,
  ]

  databaseConnection.query(query, [values] , (err, data) => {
      if(err) return res.json(err)
      return res.json({
      ...data,
      date: new Date(),
      message: "succesfully added"
      })
  })
})

app.delete("/books/:id", (req, res) => {
  const query = "DELETE FROM books WHERE id = ?"
  const id = req.params.id

  databaseConnection.query(query, id, (err, data) => {
      if(err) return res.json(err)
      return res.json('succesfully deleted')
  })
})


app.put(`/books/update/:id`, (req, res) => {
  const query = "UPDATE books SET `title` = ?, `desc` = ?, `cover` = ?, `price` = ? WHERE id = ?"
  const id = req.params.id
  const values = [
      req.body.title,
      req.body.desc,
      req.body.cover,
      req.body.price
  ]

  databaseConnection.query(query, [...values, id] , (err, data) => {
      if(err) return res.json(err)
      return res.json({
      ...data,
      message: "succesfully updated"
      })
  })
})


