import express, { type NextFunction, type Request, type Response } from "express"

const auth =((req:Request, res:Response, next:NextFunction) => {
  console.log("auth middleware")
  console.log(req.headers.authorization)
  const token = req.headers.authorization
    if(!token) {
        return res.status(401).json({ message: "Unauthorized" })
    }

    console.log(token)
  next();
});

export default auth;