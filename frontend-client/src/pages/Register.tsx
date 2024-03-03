import React, { useEffect, useState } from "react";
import { Link, useNavigate, redirect } from "react-router-dom";
import { FormRow } from "../components";
import { customFetch } from "../utils/customFetch";
import { toast } from "react-toastify";

interface IFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<IFormData>({
    firstName: "",
    password: "",
    lastName: "",
    email: "",
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
      await customFetch.post("/auth/register", formData);
      toast.success("Register successful");
      return redirect("/dashboard");
    } catch (error) {
      toast.error("not able to register");
      return error;
    }
  };

  return (
    <div>
      <form action="submit" method="post" onSubmit={handleSubmit}>
        <FormRow
          name="firstName"
          type="text"
          value={formData.firstName}
          onChange={handleChange}
        />
        <FormRow
          name="lastName"
          type="text"
          value={formData.lastName}
          labelText="last name"
          onChange={handleChange}
        />
        <FormRow
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
        <FormRow
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-block">
          Register
        </button>
      </form>
      <Link to="/login">Login Page</Link>
    </div>
  );
};

export default Register;
