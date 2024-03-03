import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar, BigSidebar, SmallSidebar } from "../components";

const DashboardLayout: React.FC = () => {
  return (
    <div>
      <main>
        <SmallSidebar />
        <BigSidebar />
        <div>
          <Navbar />
          <div>
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
