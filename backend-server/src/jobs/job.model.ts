import mongoose,{Schema, Document} from "mongoose";
import { IUser } from "../user/user.model";
import { JobStatus, JOB_STATUS, JobType, JOB_TYPE } from "../utils/constant";

export interface IJob extends Document {
    company : string;
    position: string;
    location: string;
    jobStatus: string;
    jobType: string
    createdBy: mongoose.Schema.Types.ObjectId;

}

const JobSchema:Schema = new Schema({
    company: {type: String, required:true},
    position: {type: String, required:true},
    location: {type: String, required:true, default: "my city"},
    jobStatus: {type: String,default: JOB_STATUS.PENDING},
    jobType: {type: String,default: JOB_TYPE.FULL_TIME},
    createdBy : {type : mongoose.Types.ObjectId, ref: "User"}


    
},{
    timestamps: true
});

export default mongoose.model<IJob>("Job",JobSchema);