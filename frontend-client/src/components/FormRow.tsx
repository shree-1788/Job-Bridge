import React from "react";
type FormRowProps = {
  name: string;
  labelText?: string;
  defaultValue?: string | "";
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

const FormRow: React.FC<FormRowProps> = ({
  name,
  type,
  labelText,
  defaultValue,
  value,
  onChange,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };

  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        required
        defaultValue={defaultValue}
        value={value}
        onChange={handleChange}
        className="form-input"
      />
    </div>
  );
};

export default FormRow;
