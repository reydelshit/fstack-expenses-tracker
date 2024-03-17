import mysql from 'mysql';
import express, {Express, Request, Response} from 'express';

import cors from 'cors';

const app: Express = express();
const port = 8800 as number;



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
app.get("/users", (req, res) => {
  // console.log(req.query)
  const query = "SELECT * FROM users WHERE username = ? AND password = ?";
  const username = req.query.username; 
  const password = req.query.password;
  const values = [username, password];

  databaseConnection.query(query, values, (err, data) => {
      if (err) return res.json(err);
      return res.json(data); 
  });
});

//register
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


