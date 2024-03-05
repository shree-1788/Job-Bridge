/* eslint-disable no-unused-vars */
import React, { useState } from "react";
// import { useDashboardContext } from "../pages/DashboardLayout";
import Wrapper from "../assets/wrappers/Logout";
import { FaCaretDown } from "react-icons/fa";
import { customFetch } from "../utils/customFetch";
import { useNavigate } from "react-router-dom";
const LogoutContainer: React.FC = () => {
  const [showLogout, setShowLogout] = useState(false);
  const navigate = useNavigate();

  //   const { user, logoutUser } = useDashboardContext();

  const logoutUser = async () => {
    navigate("/");
    await customFetch("/auth/logout");
    alert("Logged out successfully");
  };
  return (
    <Wrapper>
      <button
        type="button"
        className="btn logout-btn"
        onClick={() => setShowLogout((prev) => !prev)}
      >
        {/* {user.avatar ? (
          <img src={user.avatar} alt="avatar" className="img" />
        ) : (
          <FaUserCircle />
        )} */}

        {/* {user?.name} */}
        <FaCaretDown />
      </button>
      <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
        <button type="button" className="dropdown-btn" onClick={logoutUser}>
          logout
        </button>
      </div>
    </Wrapper>
  );
};

export default LogoutContainer;
