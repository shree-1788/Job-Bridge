import { Request, Response } from "express"
import userModel from "./user.model"
import { StatusCodes } from "http-status-codes";

export async  function getCurrentUser(req: Request, res: Response) {

    const user = await userModel.findOne({_id : req.body.user.userId});

    
    
    res.status(StatusCodes.OK).json({ user });

}