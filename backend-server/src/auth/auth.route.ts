import { Router } from "express";
import { login, register,logout } from "./auth.controller";
import { registerValidateData, loginValidateData } from "../middlewares/validateInputMiddleware";
export const authRouter = Router();



authRouter.post("/login",loginValidateData,login);
authRouter.post("/register",registerValidateData,register);
authRouter.get("/logout",logout);
