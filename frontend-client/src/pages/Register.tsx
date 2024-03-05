import React, { useState } from "react";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import { FormRow } from "../components";
import { customFetch } from "../utils/customFetch";
import { toast } from "react-toastify";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";

interface IFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const Register: React.FC = () => {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
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
      alert("Register successful");
      return navigate("/login");
    } catch (error) {
      alert("not able to register");
      return error;
    }
  };

  return (
    <Wrapper>
      <div>
        <form
          action="submit"
          method="post"
          className="form"
          onSubmit={handleSubmit}
        >
          <h4>Register</h4>
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
          <button
            type="submit"
            className="btn btn-block"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submittig..." : "Submit"}
          </button>
          <p>
            Already a member?
            <Link to="/login" className="member-btn">
              Login
            </Link>
          </p>
        </form>
      </div>
    </Wrapper>
  );
};

export default Register;
