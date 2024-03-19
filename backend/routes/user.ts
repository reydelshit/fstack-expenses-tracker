import express from 'express';
import jwt from 'jsonwebtoken';
import { databaseConnection } from '../DBconnection';
import { User } from '../types';


const router = express.Router();


// check user
router.post("/login", (req, res) => {
    const query = "SELECT * FROM users WHERE username = ? AND password = ?";
    
    const username = req.body.username as string; 
    const password = req.body.password as string;
    
    const values = [username, password];
  
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
router.post("/register", (req, res) => {
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
  

export default router;
