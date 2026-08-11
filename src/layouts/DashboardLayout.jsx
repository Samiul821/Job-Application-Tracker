import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";
import MobileSidebar from "../components/dashboard/MobileSidebar";
import DashboardNavbar from "../components/dashboard/DashboardNavbar";

const DashboardLayout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  // Load sidebar state
  useEffect(() => {
    const saved = localStorage.getItem("dashboard-sidebar");

    if (saved !== null) {
      setCollapsed(JSON.parse(saved));
    }
  }, []);

  // Save sidebar state
  useEffect(() => {
    localStorage.setItem("dashboard-sidebar", JSON.stringify(collapsed));
  }, [collapsed]);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Desktop Sidebar */}
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

      {/* Mobile Sidebar */}
      <MobileSidebar open={mobileOpen} setOpen={setMobileOpen} />

      {/* Main Content */}
      <div
        className={`transition-all duration-300 ${
          collapsed ? "lg:ml-20" : "lg:ml-[260px]"
        }`}
      >
        {/* Navbar */}
        <DashboardNavbar onMenuClick={() => setMobileOpen(true)} />

        {/* Page Content */}
        <main className="min-h-[calc(100vh-72px)] p-4 md:p-6 lg:p-8">
          <div className="mx-auto w-full max-w-7xl">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
