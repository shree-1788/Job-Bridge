import React from "react";
import { useRouteError, Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/Error";
import img from "../assets/images/not-found.svg";
const ErrorPage: React.FC = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <Wrapper>
        <img src={img} alt="not found" />
        <h3>ohh? page not found</h3>
        <p>We cannot seem to find page you are looking for.</p>
        <Link to="/dashboard">Go Back</Link>
      </Wrapper>
    );
  }

  return (
    <>
      <Wrapper>
        <h2>Error</h2>
        <Link to="/" className="a">
          Go Back
        </Link>
      </Wrapper>
    </>
  );
};

export default ErrorPage;
