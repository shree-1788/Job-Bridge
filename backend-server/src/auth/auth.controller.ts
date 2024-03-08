import { Request,Response } from "express"
import userModel from "../user/user.model";
import { hashPassword, comaprePassword } from "../utils/password";
import UnAuthenticatedError from "../errors/UnAuthenticatedError";
import {JWTUser, generateUserToken} from "../utils/jwt";
import { log } from "console";

export const register = async(req:Request,res:Response) => {

    // pasword hash
    
    const hashedPassword =  await hashPassword(req.body.password);
    req.body.password = hashedPassword;

    // create user
    const user = await userModel.create(req.body);
    res.status(201).json({user});

}

export const login = async(req:Request,res:Response) => {
    const user = await userModel.findOne({email : req.body.email});
    const isValidUser = user && (await comaprePassword(req.body.password, user.password));

    if(!isValidUser) throw new UnAuthenticatedError({code: 401, message: "Invalid credentials",logging: true});

    const token = generateUserToken({userId : user._id, email: user.email});   
    const oneDay : number = 1000 * 60 * 60 * 24;

    res.cookie("token",token,{
        httpOnly: true,
        expires: new Date(Date.now() + oneDay),
    });
    // console.log(token);
    

    res.json({token});

}


export const logout = async(req:Request,res:Response) => {
    res.cookie("token","logout",{
        httpOnly: true,
        expires: new Date(Date.now())
    })
    res.json({msg : "Successfully logged out"});

}