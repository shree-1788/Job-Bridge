import React, { useState } from "react";
import { FormRow, FormRowSelect } from "../components";
import { useNavigation } from "react-router-dom";
import Wrapper from "../assets/wrappers/AddJob";
import { customFetch } from "../utils/customFetch";
import {
  JOB_STATUS,
  JOB_TYPE,
  JOB_STATUS_TYPE,
  JOB_TYPE_TYPE,
} from "../utils/interfaces";
import { toast } from "react-toastify";

interface IFormDataJob {
  company: string;
  position: string;
  location: string;
  jobStatus: string;
  jobType: string;
}

const AddJob: React.FC = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const [formData, setFormData] = useState<IFormDataJob>({
    company: "",
    position: "",
    location: "",
    jobStatus: JOB_STATUS.PENDING,
    jobType: JOB_TYPE.FULL_TIME,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await customFetch.post("/job", formData);
      toast.success("Success Notification !");
    } catch (error) {
      toast.error("error occured adding job");
      return error;
    }
  };

  return (
    <Wrapper>
      <form
        action="submit"
        method="post"
        className="form"
        onSubmit={handleSubmit}
      >
        <h4 className="form-title">add job</h4>
        <div className="form-center">
          <FormRow
            type="text"
            name="position"
            value={formData.position}
            onChange={handleChange}
          />
          <FormRow
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
          />
          <FormRow
            type="text"
            name="location"
            labelText="job location"
            value={formData.location}
            onChange={handleChange}
          />
          <FormRowSelect
            labelText="job status"
            name="jobStatus"
            defaultValue={JOB_STATUS.PENDING}
            list={Object.values(JOB_STATUS)}
            value={formData.jobStatus}
            onChange={handleChange}
          />
          <FormRowSelect
            labelText="job type"
            name="jobType"
            defaultValue={JOB_TYPE.FULL_TIME}
            list={Object.values(JOB_TYPE)}
            value={formData.jobType}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="btn btn-block form-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default AddJob;
