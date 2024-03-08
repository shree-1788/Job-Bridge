import { Request, Response, NextFunction } from "express";
import NotFoundError from "../errors/NotFoundError";
import UnAuthenticatedError from "../errors/UnAuthenticatedError";
import  { JWTUser, decodeUserToken } from "../utils/jwt";
import userModel from "../user/user.model";
import { Req}  from "../utils/jwt";


export const authenticateUser = (req: Request,res : Response,next: NextFunction) => {
const token = req.body.token;



    if(!token) throw new UnAuthenticatedError({message : "unauthentciated user"});
    try{
        const decoded = decodeUserToken(token);
        // (req as CustomRequest).token = decoded;

       req.body.user = decoded


        next();

    

    }catch(error){
        throw new UnAuthenticatedError({message : "authentication invalid"})
    }
    

}