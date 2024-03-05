import React, { useState } from "react";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import { FormRow } from "../components";
import { customFetch } from "../utils/customFetch";
import { toast } from "react-toastify";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";

interface ILoginFormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const [formData, setFormData] = useState<ILoginFormData>({
    email: "",
    password: "",
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
      await customFetch.post("/auth/login", formData);
      alert("Success login");
      return navigate("/dashboard");
    } catch (error) {
      alert("Login failed");
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
        <h4>Login</h4>
        <FormRow
          value={formData.email}
          name="email"
          type="email"
          onChange={handleChange}
        />
        <FormRow
          name="password"
          value={formData.password}
          type="password"
          onChange={handleChange}
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn btn-block "
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
      <p>
        Not a member yet?
        <Link to="/register" className="member-btn">
          Register
        </Link>
      </p>
    </Wrapper>
  );
};

export default Login;
