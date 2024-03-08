import React from "react";
import Wrapper from "../assets/wrappers/SmallSideBar";
import Logo from "./Logo";
import { useDashboardContext } from "../pages/DashboardLayout";
import { FaTimes } from "react-icons/fa";
import NavLinks from "./Navlink";

const SmallSidebar: React.FC = () => {
  const { showSidebar, toggleSidebar } = useDashboardContext();
  return (
    <Wrapper>
      {" "}
      <div
        className={
          showSidebar ? "side-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <button type="button" className="close-btn" onClick={toggleSidebar}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <NavLinks isBigSidebar />
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar;
