import express from 'express';
import { databaseConnection } from '../DBconnection';


const router = express.Router();

// all books 
router.get("/all", (req, res) => {
    const query = "SELECT * FROM expenses"
    databaseConnection.query(query, (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
  })
  
// specific books 
router.get("/get/:id", (req, res) => {
    const query = "SELECT * FROM books WHERE id = ?"
    const id = req.params.id
    databaseConnection.query(query, id, (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
  })
  
  
router.post("/create", (req, res) => {
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
  
// router.delete("/books/:id", (req, res) => {
//     const query = "DELETE FROM books WHERE id = ?"
//     const id = req.params.id
  
//     databaseConnection.query(query, id, (err, data) => {
//         if(err) return res.json(err)
//         return res.json('succesfully deleted')
//     })
//   })
  
  
//   router.put(`/books/update/:id`, (req, res) => {
//     const query = "UPDATE books SET `title` = ?, `desc` = ?, `cover` = ?, `price` = ? WHERE id = ?"
//     const id = req.params.id
//     const values = [
//         req.body.title,
//         req.body.desc,
//         req.body.cover,
//         req.body.price
//     ]
  
//     databaseConnection.query(query, [...values, id] , (err, data) => {
//         if(err) return res.json(err)
//         return res.json({
//         ...data,
//         message: "succesfully updated"
//         })
//     })
//   })
  

  export default router;