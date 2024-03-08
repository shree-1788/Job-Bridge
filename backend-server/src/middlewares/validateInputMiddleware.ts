import { Request, Response,NextFunction } from "express";
import {z, ZodError} from "zod";
import { StatusCodes } from "http-status-codes";
import { ObjectId } from "mongodb";


function validateData(schema: z.ZodObject<any, any>) {
    return (req: Request, res: Response, next: NextFunction) => {
      try {
        schema.parse(req.body);
        next();
      } catch (error) {
        if (error instanceof ZodError) {
        const errorMessages = error.errors.map((issue: any) => ({
              message: `${issue.path.join('.')} is ${issue.message}`,
          }))
          res.status(StatusCodes.BAD_REQUEST).json({ error: 'Invalid data', details: errorMessages });
        } else {
          res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Internal Server Error' });
        }
      }
    };
  }


export const registerValidateData = validateData(z.object({
    firstName: z.string({
        required_error : "First name is required",
        invalid_type_error : "First Name should be string"
    }).min(1).max(18),
    lastName: z.string().min(1).max(18).optional(),
    email: z.string({
        required_error: "Email is required",
        invalid_type_error: "Email should be string"
    }).email(),
    password: z.string({
        required_error: "Password is required",
    }).min(6,{message: "Password should be of min 6 characters"}),
    imageUrl: z.string().optional()
}));

export const loginValidateData = validateData(z.object({
    email: z.string({required_error: "Email is required", invalid_type_error: "Email is of type string"},).email(),
    password: z.string({required_error: "Password is required"}).min(6,{message: "Password is of min 6 characters"})
}));


export const jobValidateData = validateData(z.object({
    company : z.string({required_error: "Company is required", invalid_type_error: "Company is of type string"}),
    position : z.string({required_error: "Position is required", invalid_type_error: "Position is of type string"}),
    location : z.string({required_error: "Location is required", invalid_type_error: "Location is of type string"}),
    jobStatus: z.string(),
    jobType: z.string(),
    // createdBy : z.instanceof(ObjectId)
    
}));






