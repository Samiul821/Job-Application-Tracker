import { motion } from "framer-motion";
import { Bell, ChevronDown, Menu, Search } from "lucide-react";

const DashboardNavbar = ({ onMenuClick }) => {
  const user = {
    displayName: "Guest User",
    photoURL: "",
  };

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
      <div className="flex h-[72px] items-center justify-between px-4 md:px-6 lg:px-8">
        {/* Left Side */}
        <div className="flex items-center gap-4 flex-1">
          {/* Mobile Menu */}
          <button
            aria-label="Open sidebar"
            onClick={onMenuClick}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white transition hover:bg-slate-100 lg:hidden"
          >
            <Menu size={20} />
          </button>

          {/* Search */}
          <div className="relative hidden w-full max-w-xl md:block">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search applications..."
              className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-16 text-sm outline-none transition focus:border-[#5B3DF5] focus:bg-white focus:ring-4 focus:ring-[#5B3DF5]/10"
            />

            <div className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md border border-slate-200 bg-white px-2 py-1 text-[11px] font-medium text-slate-500">
              ⌘ K
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {/* Notification */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ y: -1 }}
            aria-label="Notifications"
            className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white transition hover:bg-slate-100"
          >
            <Bell size={19} className="text-slate-700" />

            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
          </motion.button>

          {/* Profile */}
          <motion.button
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
            aria-label="User menu"
            className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-2 py-2 transition hover:bg-slate-50"
          >
            {user.photoURL ? (
              <img
                src={user.photoURL}
                alt={user.displayName}
                className="h-9 w-9 rounded-full object-cover"
              />
            ) : (
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#5B3DF5]/10 font-semibold text-[#5B3DF5]">
                {(user.displayName || "G").charAt(0).toUpperCase()}
              </div>
            )}

            <div className="hidden text-left sm:block">
              <p className="text-sm font-semibold text-slate-900">
                {user.displayName || "Guest User"}
              </p>

              <p className="text-xs text-slate-500">My Account</p>
            </div>

            <ChevronDown size={18} className="hidden text-slate-500 sm:block" />
          </motion.button>
        </div>
      </div>
    </header>
  );
};

export default DashboardNavbar;
