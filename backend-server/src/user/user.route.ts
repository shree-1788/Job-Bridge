import { Router } from "express";
import { getCurrentUser } from "./user.controller";

export const userRouter = Router();

userRouter.post("/get-current-user",getCurrentUser);


