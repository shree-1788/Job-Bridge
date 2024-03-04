import React from "react";
import Wrapper from "../assets/wrappers/BigSideBar";
import Logo from "./Logo";

const BigSidebar: React.FC = () => {
  return (
    <Wrapper>
      {" "}
      <div
      // className={
      //   showSidebar ? "sidebar-container" : "sidebar-container show-sidebar"
      // }
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          {/* <NavLinks isBigSidebar /> */}
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSidebar;
