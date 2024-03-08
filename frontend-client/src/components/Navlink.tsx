/* eslint-disable no-unused-vars */
import React from "react";
import { useDashboardContext } from "../pages/DashboardLayout";
import { NavLink } from "react-router-dom";
import links from "../utils/links";

interface NavLinkProps {
  isBigSidebar: boolean;
}

const NavLinks: React.FC<NavLinkProps> = ({ isBigSidebar }) => {
  const { user, toggleSidebar } = useDashboardContext();

  const handleClick = () => {
    return isBigSidebar ? null : toggleSidebar;
  };

  return (
    <div className="nav-links">
      {links.map((link) => {
        const { text, icon, path } = link;

        return (
          <NavLink
            to={path}
            key={text}
            className="nav-link"
            onClick={handleClick}
            end
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;
