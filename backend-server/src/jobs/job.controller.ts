import { Request, Response } from "express"
import {Req} from "../utils/jwt";
import jobModel from "./job.model"
import BadRequestError from "../errors/BadRequestError";
import NotFoundError from "../errors/NotFoundError";


// create job
export const createJob = async(req: Request,res:Response) => {
        
        
        req.body.formData.createdBy = req.body.user.userId;
        console.log(req.body);
        
        const {company, position} = req.body.formData;
        const job = await jobModel.findOne({company,position});

        if(job) throw new BadRequestError({code: 400,message: "Already job exist",logging: true});
        const newJob = await jobModel.create(req.body.formData);
       
        res.status(201).json({newJob});
}

// get all jobs job
export const getAllJobs = async(req:Request, res: Response) => {

        
        const jobs = await jobModel.find({});
        if(!jobs) throw new NotFoundError({code : 404,message: "No jobs to display",logging:true});
        res.status(200).json({jobs})
}

// get a single job
export const getJob = async(req:Request,res:Response) => {
        const {id} = req.params;
        const job = await jobModel.findById(id);

        if(!job) throw new NotFoundError({code : 404,message: `No job with such ${id}`,logging:true});
        res.status(200).json({job});
}

// delete a job
export const deleteJob = async(req:Request,res:Response) => {
        const {id} = req.params;
        const removedJob = await jobModel.findByIdAndDelete(id);

        if(!removedJob) throw new NotFoundError({code : 404,message: `No job with such ${id}`,logging:true});
        res.status(200).json({job : removedJob});
}

// update a job
export const updateJob = async(req:Request,res:Response) => {
        const {id} = req.params;
        

        const updatedJob = await jobModel.findByIdAndUpdate(id,req.body,{new : true} );
        if(!updatedJob) throw new NotFoundError({code : 404,message: `No job with such ${id} to be updated.`,logging:true});

        res.status(200).json({job : updatedJob});
}
