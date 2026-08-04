import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <main className="min-h-screen">
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default MainLayout;
