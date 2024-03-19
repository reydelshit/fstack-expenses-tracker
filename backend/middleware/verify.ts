import jwt from 'jsonwebtoken';
import express, { Express, NextFunction, Request, Response } from 'express';

// interface UserInterface {
//     user_id: number;
//     username: string;
//     iat: string;  
// }

interface CustomRequest extends Request {
    user?: any
  }


export const verifyToken = (req: CustomRequest, res: Response, next: NextFunction) => {
        const authHeader = req.headers.authorization
        if(authHeader){
            const token = authHeader.split(' ')[1]
            jwt.verify(token, 'secret', (err, user) => {
                if(err) return res.json({message: "Invalid token"});
                
                req.user = user

                next()
            })
        }
    }
