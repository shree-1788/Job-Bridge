import React from "react";
import { Link } from "react-router-dom";
import { FormRow } from "../components";
const Login: React.FC = () => {
  return (
    <div>
      <form action="submit">
        <FormRow name="email" type="email" defaultValue="john@gmail.com" />
        <FormRow name="password" type="password" defaultValue="123@45" />
        <button type="submit">Login</button>
        <Link to="/register">Register Page</Link>
      </form>
    </div>
  );
};

export default Login;
