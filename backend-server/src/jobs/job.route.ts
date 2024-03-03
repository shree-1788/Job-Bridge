import { Router } from "express"
import { createJob, getAllJobs, getJob, deleteJob, updateJob } from "./job.controller";

export const jobRouter = Router();

jobRouter.route("/").get(getAllJobs).post(createJob);
jobRouter.route("/:id").get(getJob).patch(updateJob).delete(deleteJob);
