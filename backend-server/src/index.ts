import 'express-async-errors';
import "dotenv/config";

import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";
import { dbConnect } from "./db/db";
import { jobRouter } from "./jobs/job.route";
import { errorHandler } from './middlewares/errorHandlerMiddleware';
import { authRouter } from './auth/auth.route';
import { userRouter } from './user/user.route';
import cookieParser from 'cookie-parser';
import { authenticateUser } from './middlewares/authMiddleware';
import cors from "cors";

const app:Express = express();
const port = process.env.PORT || 8000;

const allowedOrigins: Array<string> = ["http://localhost:5173"];
 const options : cors.CorsOptions = {
    origin: allowedOrigins,
    credentials: true
 }

app.use(cors(options));
app.use(express.json());
app.use(cookieParser());
app.use(errorHandler);

app.use("/api/job",authenticateUser,jobRouter);
app.use("/api/auth",authRouter);
app.use("/api/user",authenticateUser,userRouter);

app.get("/", (req: Request, res:Response)=> {
    res.send("Hello from home");
})



app.listen(port,() => {
    dbConnect();
    console.log("Server started");
    
})
