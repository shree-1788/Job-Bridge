export const JOB_STATUS = {
    PENDING : "Pending",
    INTERVIEW : "Interview",
    DECLINED : "Declined",
} as const;

export const JOB_TYPE = {
    FULL_TIME : 'full-time',
    INTERNSHIP : 'internship',
    PART_TIME : 'part-time'

} as const




export type JobStatus = keyof typeof JOB_STATUS; 
export type JobType = keyof typeof JOB_TYPE; 