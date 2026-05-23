import express, { type NextFunction, type Request, type Response } from "express"
import jwt, { type JwtPayload } from "jsonwebtoken";
import config from "../config/config";
import { pool } from "../db/database";


const auth = async (req: Request, res: Response, next: NextFunction) => {
  console.log("auth middleware")
  console.log(req.headers.authorization)
  const token = req.headers.authorization
    if(!token) {
        return res.status(401).json({
            success: false, 
            message: "Unauthorized" 
        })
    }

    const decode = jwt.verify(token as string, config.jwtSecretKey as string) as JwtPayload ;

    console.log(decode)

    const userData = await pool.query(`
        SELECT * FROM test_table WHERE id = $1
    `, [decode.email])

    
    const user = userData.rows[0]

    if (!userData.rows.length) {
        return res.status(401).json({
            success: false,
            message: "Unauthorized"
        })
    }
    
    next();
};

export default auth; 