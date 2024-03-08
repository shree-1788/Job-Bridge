import JWT,{JwtPayload} from "jsonwebtoken";
import { IUser } from "../user/user.model";
import {Express, Request } from "express";
import mongoose from "mongoose";

export interface JWTUser {
    email: string,
    userId : string;

}

const JWT_SECRET = "shree@14261";





// export interface CustomRequest extends Request {
//     token: string | JwtPayload | null;
//    }

        export interface Req {
          user?: JWTUser;
           // Replace `User` with your actual user object structure
        }




   
   export  function generateUserToken(user : JWTUser) {

        const payload : JWTUser = {

            email : user?.email,
            userId : user?.userId
        }
            const token = JWT.sign(payload,JWT_SECRET);
            return token;

    }

    export  function decodeUserToken(token : string)  {
        try {
            const decoded = JWT.verify(token,JWT_SECRET);
            return decoded;
            
        } catch(error) {
            return undefined;
        }
    }




