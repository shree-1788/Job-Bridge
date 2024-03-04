import React from "react";
// import { JOB_STATUS_TYPE, JOB_TYPE_TYPE } from "../utils/interfaces";
// import { Link, useOutletContext } from "react-router-dom";

interface IJobProps {
  name: string;
  defaultValue?: string;
  labelText?: string;
  list: string[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const FormRowSelect: React.FC<IJobProps> = ({
  name,
  defaultValue = "",
  labelText,
  list,
  onChange,
}) => {
  // const { user } = useOutletContext();
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e);
  };

  return (
    <>
      <div className="form-row">
        <label htmlFor={name}>{labelText || name}</label>
        <select
          name={name}
          id={name}
          className="form-select"
          defaultValue={defaultValue}
          onChange={handleChange}
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
