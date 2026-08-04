import React from "react";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
      <main className="min-h-screen">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
