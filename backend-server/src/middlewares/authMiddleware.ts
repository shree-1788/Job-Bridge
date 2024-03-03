import { Request, Response, NextFunction } from "express";
import NotFoundError from "../errors/NotFoundError";
import UnAuthenticatedError from "../errors/UnAuthenticatedError";
import JWTService, { JWTUser, CustomRequest } from "../utils/jwt";
import userModel from "../user/user.model";
import { IGetUserAuthInfoRequest } from "../utils/jwt";


export const authenticateUser = (req: Request,res : Response,next: NextFunction) => {
    const {token}= req.cookies;

    
    if(!token) throw new UnAuthenticatedError({message : "unauthentciated user"});
    try{
        const decoded = JWTService.decodeUserToken(token) as JWTUser;
        // (req as CustomRequest).token = decoded;

        
        (req as IGetUserAuthInfoRequest).user = decoded;



        
        

        
       
        
        

        next()
    

    }catch(error){
        throw new UnAuthenticatedError({message : "authentication invalid"})
    }
    

}