import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar/Navbar";
import Footer from "../components/shared/Footer/Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar />

      <main className="min-h-[calc(100vh-140px)]">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default MainLayout;
