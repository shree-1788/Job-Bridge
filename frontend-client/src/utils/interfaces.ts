 export interface JOB_STATUS_TYPE  {
    PENDING: string,
    INTERVIEW: string,
    DECLINED: string,
  }
  
   export interface JOB_TYPE_TYPE  {
    FULL_TIME: string,
    PART_TIME: string,
    INTERNSHIP: string,
  }
  
  export interface JOB_SORT_BY_Type {
    NEWEST_FIRST: "newest",
    OLDEST_FIRST: "oldest",
    ASCENDING: "a-z",
    DESCENDING: "z-a",
  }
  


  export const JOB_STATUS:JOB_STATUS_TYPE = {
    PENDING: "pending",
    INTERVIEW: "interview",
    DECLINED: "declined",
  };
  
  export const JOB_TYPE:JOB_TYPE_TYPE = {
    FULL_TIME: "full-time",
    PART_TIME: "part-time",
    INTERNSHIP: "internship",
  };
  
  export const JOB_SORT_BY = {
    NEWEST_FIRST: "newest",
    OLDEST_FIRST: "oldest",
    ASCENDING: "a-z",
    DESCENDING: "z-a",
  };
  