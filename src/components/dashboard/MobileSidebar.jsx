import { useMemo } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  Sparkles,
  LayoutDashboard,
  BriefcaseBusiness,
  CalendarDays,
  Bookmark,
  BarChart3,
  Settings,
  LifeBuoy,
  MoreHorizontal,
} from "lucide-react";

const MobileSidebar = ({ open, setOpen }) => {
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
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            onClick={() => setOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
          />

          {/* Drawer */}
          <motion.aside
            initial={{ x: -320 }}
            animate={{ x: 0 }}
            exit={{ x: -320 }}
            transition={{ duration: 0.25 }}
            className="fixed left-0 top-0 z-50 flex h-screen w-[280px] flex-col border-r border-slate-200 bg-white shadow-2xl lg:hidden"
          >
            {/* Header */}
            <div className="flex h-20 items-center justify-between border-b border-slate-100 px-5">
              <NavLink
                to="/dashboard"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#5B3DF5]/10">
                  <Sparkles size={20} className="text-[#5B3DF5]" />
                </div>

                <div>
                  <h2 className="text-lg font-bold text-slate-900">JobTrack</h2>

                  <p className="text-xs text-slate-500">
                    Job Application Tracker
                  </p>
                </div>
              </NavLink>

              <button
                aria-label="Close sidebar"
                onClick={() => setOpen(false)}
                className="rounded-lg p-2 transition hover:bg-slate-100"
              >
                <X size={20} className="text-slate-600" />
              </button>
            </div>

            {/* Navigation */}
            <div className="flex flex-1 flex-col justify-between overflow-y-auto px-3 py-5">
              <div>
                <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Main
                </p>

                <nav className="space-y-1">
                  {navigation.map((item) => {
                    const Icon = item.icon;

                    return (
                      <NavLink
                        key={item.path}
                        to={item.path}
                        onClick={() => setOpen(false)}
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
                              className={
                                isActive ? "text-[#5B3DF5]" : "text-slate-500"
                              }
                            />

                            <span className="ml-3 font-medium">
                              {item.title}
                            </span>
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
                  <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                    General
                  </p>

                  <nav className="space-y-1">
                    {bottomNavigation.map((item) => {
                      const Icon = item.icon;

                      return (
                        <NavLink
                          key={item.path}
                          to={item.path}
                          onClick={() => setOpen(false)}
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
                                className={
                                  isActive ? "text-[#5B3DF5]" : "text-slate-500"
                                }
                              />

                              <span className="ml-3 font-medium">
                                {item.title}
                              </span>
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
                    aria-label="User Profile"
                    className="flex w-full items-center rounded-2xl border border-slate-200 bg-white p-3 shadow-sm transition hover:border-slate-300 hover:shadow-md"
                  >
                    {user.photoURL ? (
                      <img
                        src={user.photoURL}
                        alt={user.displayName}
                        className="h-11 w-11 rounded-full object-cover"
                      />
                    ) : (
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#5B3DF5]/10 font-semibold text-[#5B3DF5]">
                        {(user.displayName || "G").charAt(0).toUpperCase()}
                      </div>
                    )}

                    <div className="ml-3 flex-1 text-left">
                      <h3 className="truncate text-sm font-semibold text-slate-900">
                        {user.displayName || "Guest User"}
                      </h3>

                      <p className="truncate text-xs text-slate-500">
                        {user.role || "Frontend Developer"}
                      </p>
                    </div>

                    <MoreHorizontal size={18} className="text-slate-500" />
                  </button>
                </div>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileSidebar;
