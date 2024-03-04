import React from "react";
import Wrapper from "../assets/wrappers/Navbar";
import Logo from "./Logo";
import { FaAlignLeft } from "react-icons/fa";

const Navbar: React.FC = () => {
  const toggleSidebar = () => {};

  return (
    <Wrapper>
      <div className="nav-center">
        <button type="button" className="toggle-btn" onClick={toggleSidebar}>
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h4 className="logo-text">dashboard</h4>
        </div>

        <div className="btn-container">
          {/* <ThemeToggle /> */}
          {/* <LogoutContainer /> */}
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
