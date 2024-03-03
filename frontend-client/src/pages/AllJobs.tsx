import React, { useState, useEffect } from "react";
import { customFetch } from "../utils/customFetch";
import axios, { AxiosResponse } from "axios";

type IJobSchema = {
  company?: string;
  position?: string;
  location?: string;
  jobStatus?: string;
  jobType?: string;
  createdBy?: string;
};

const AllJobs: React.FC = () => {
  const [data, setData] = useState<IJobSchema[]>([]);
  useEffect(() => {
    async function getdata() {
      try {
        const response = await customFetch.get<IJobSchema[]>("/job");
        console.log(response.data); // Log response data to inspect

        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    getdata();
  }, []);

  return (
    <div>
      <h1>Hello all jobs</h1>
      <div>
        <ul>
          {data.map((item) => (
            <li key={item.position}>{item.company}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AllJobs;
