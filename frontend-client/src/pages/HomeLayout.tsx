import React from "react";
import { Outlet } from "react-router-dom";
const HomeLayout: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl text-indigo-400">HomeLayout</h1>
      <Outlet />
    </div>
  );
};

export default HomeLayout;
