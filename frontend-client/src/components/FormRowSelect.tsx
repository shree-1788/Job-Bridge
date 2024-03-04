import React from "react";
import { JOB_STATUS, JOB_TYPE } from "../utils/interfaces";
import { Link, useOutletContext } from "react-router-dom";

interface IJobProps {
  name: string;
  defaultValue?: string;
  labelText?: string;
  list: JOB_STATUS[] | JOB_TYPE[];
}

const FormRowSelect: React.FC<IJobProps> = ({
  name,
  defaultValue = "",
  labelText,
  list,
}) => {
  const { user } = useOutletContext();
  return (
    <>
      <div className="form-row">
        <label htmlFor={name}>{labelText || name}</label>
        <select
          name={name}
          id={name}
          className="form-select"
          defaultValue={defaultValue}
        >
          {list.map((itemValue) => {
            return (
              <option key={itemValue} value={itemValue}>
                {itemValue}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
};

export default FormRowSelect;
