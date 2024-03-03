import React from "react";
import { useRouteError, Link } from "react-router-dom";
const ErrorPage: React.FC = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <>
      <h1>Error occur</h1>
      <Link to="/dashboard">Back to Home</Link>
    </>
  );
};

export default ErrorPage;
