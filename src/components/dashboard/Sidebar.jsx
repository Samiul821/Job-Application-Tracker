import { useMemo } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  BriefcaseBusiness,
  CalendarDays,
  Bookmark,
  BarChart3,
  Settings,
  LifeBuoy,
  PanelLeftClose,
  PanelLeftOpen,
  Sparkles,
  MoreHorizontal,
} from "lucide-react";

const Sidebar = ({ collapsed, setCollapsed }) => {
  const navigation = useMemo(
    () => [
      {
        title: "Dashboard",
        icon: LayoutDashboard,
        path: "/dashboard",
      },
      {
        title: "Applications",
        icon: BriefcaseBusiness,
        path: "/dashboard/applications",
      },
      {
        title: "Interviews",
        icon: CalendarDays,
        path: "/dashboard/interviews",
      },
      {
        title: "Saved Jobs",
        icon: Bookmark,
        path: "/dashboard/saved-jobs",
      },
      {
        title: "Analytics",
        icon: BarChart3,
        path: "/dashboard/analytics",
      },
    ],
    [],
  );

  const bottomNavigation = useMemo(
    () => [
      {
        title: "Settings",
        icon: Settings,
        path: "/dashboard/settings",
      },
      {
        title: "Help & Support",
        icon: LifeBuoy,
        path: "/dashboard/help",
      },
    ],
    [],
  );

  const user = {
    displayName: "Guest User",
    role: "Frontend Developer",
    photoURL: "",
  };

  return (
    <motion.aside
      animate={{
        width: collapsed ? 80 : 260,
      }}
      transition={{
        duration: 0.25,
      }}
      className="fixed left-0 top-0 z-40 hidden h-screen border-r border-slate-200 bg-white lg:flex lg:flex-col"
    >
      {/* Logo */}
      <div className="flex h-20 items-center justify-between border-b border-slate-100 px-5">
        <NavLink to="/dashboard" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#5B3DF5]/10">
            <Sparkles size={20} className="text-[#5B3DF5]" />
          </div>

          {!collapsed && (
            <div>
              <h2 className="text-lg font-bold tracking-tight text-slate-900">
                JobTrack
              </h2>

              <p className="text-xs text-slate-500">Job Application Tracker</p>
            </div>
          )}
        </NavLink>

        <button
          aria-label="Toggle Sidebar"
          onClick={() => setCollapsed(!collapsed)}
          className="rounded-lg p-2 transition hover:bg-slate-100"
        >
          {collapsed ? (
            <PanelLeftOpen size={18} className="text-slate-600" />
          ) : (
            <PanelLeftClose size={18} className="text-slate-600" />
          )}
        </button>
      </div>

      {/* Navigation */}
      <div className="flex flex-1 flex-col justify-between overflow-y-auto px-3 py-5">
        <div>
          <p
            className={`mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400 ${
              collapsed && "hidden"
            }`}
          >
            Main
          </p>

          <nav className="space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  title={collapsed ? item.title : ""}
                  className={({ isActive }) =>
                    `
                    group flex items-center rounded-xl px-3 py-3 transition-all duration-200
                    ${
                      isActive
                        ? "bg-[#5B3DF5]/10 text-[#5B3DF5]"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                    }
                  `
                  }
                >
                  {({ isActive }) => (
                    <>
                      <Icon
                        size={20}
                        className={`flex-shrink-0 ${
                          isActive
                            ? "text-[#5B3DF5]"
                            : "text-slate-500 group-hover:text-slate-700"
                        }`}
                      />

                      {!collapsed && (
                        <span className="ml-3 font-medium">{item.title}</span>
                      )}
                    </>
                  )}
                </NavLink>
              );
            })}
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="space-y-6">
          {/* Bottom Navigation */}
          <div>
            {!collapsed && (
              <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                General
              </p>
            )}

            <nav className="space-y-1">
              {bottomNavigation.map((item) => {
                const Icon = item.icon;

                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    title={collapsed ? item.title : ""}
                    className={({ isActive }) =>
                      `group flex items-center rounded-xl px-3 py-3 transition-all duration-200 ${
                        isActive
                          ? "bg-[#5B3DF5]/10 text-[#5B3DF5]"
                          : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <Icon
                          size={20}
                          className={`flex-shrink-0 ${
                            isActive
                              ? "text-[#5B3DF5]"
                              : "text-slate-500 group-hover:text-slate-700"
                          }`}
                        />

                        {!collapsed && (
                          <span className="ml-3 font-medium">{item.title}</span>
                        )}
                      </>
                    )}
                  </NavLink>
                );
              })}
            </nav>
          </div>

          {/* User Profile */}
          <div className="border-t border-slate-200 pt-5">
            <button
              aria-label="User profile"
              className="flex w-full items-center rounded-2xl border border-slate-200 bg-white p-3 shadow-sm transition hover:border-slate-300 hover:shadow-md"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#5B3DF5]/10 font-semibold text-[#5B3DF5]">
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt={user.displayName}
                    className="h-full w-full rounded-full object-cover"
                  />
                ) : (
                  user.displayName.charAt(0).toUpperCase()
                )}
              </div>

              {!collapsed && (
                <>
                  <div className="ml-3 flex-1 text-left">
                    <h3 className="truncate text-sm font-semibold text-slate-900">
                      {user.displayName || "Guest User"}
                    </h3>

                    <p className="truncate text-xs text-slate-500">
                      {user.role || "User"}
                    </p>
                  </div>

                  <MoreHorizontal size={18} className="text-slate-500" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </motion.aside>
  );
};

export default Sidebar;
