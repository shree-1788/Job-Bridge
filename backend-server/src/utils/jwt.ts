import JWT,{JwtPayload} from "jsonwebtoken";
import { IUSer } from "../user/user.model";
import { Request } from "express";

export interface JWTUser {
    email: string,
    userId: string
}

const JWT_SECRET = "shree@14261";


export interface IGetUserAuthInfoRequest extends Request {
  user: JWTUser// or any other type
}


export interface CustomRequest extends Request {
    token: string | JwtPayload | null;
   }

class JWTService {
    public static generateUserToken(user : IUSer) {

        const payload : JWTUser = {
            userId : user?.id,
            email : user?.email
        }
            const token = JWT.sign(payload,JWT_SECRET);
            return token;

    }

    public static decodeUserToken(token : string)  {
        try {
            const decoded = JWT.verify(token,JWT_SECRET);
            return decoded;
            
        } catch(error) {
            return null;
        }
    }


}

export default JWTService;