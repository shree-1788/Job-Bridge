import { Router } from "express"
import { createJob, getAllJobs, getJob, deleteJob, updateJob } from "./job.controller";
import { jobValidateData } from "../middlewares/validateInputMiddleware";
export const jobRouter = Router();

jobRouter.route("/").get(getAllJobs).post(createJob);
jobRouter.route("/:id").get(getJob).patch(updateJob).delete(deleteJob);
