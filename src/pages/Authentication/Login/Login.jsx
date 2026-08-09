import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  Check,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  Sparkles,
  BriefcaseBusiness,
  Bell,
  Clock3,
  AlertCircle,
  Loader2,
  ShieldCheck,
} from "lucide-react";

const inputBase =
  "w-full rounded-xl border bg-white px-11 py-3.5 text-sm text-[#0F172A] outline-none transition-all duration-200 placeholder:text-[#94A3B8]";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (error) {
      setError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError("Please enter your email and password.");
      return;
    }

    if (!formData.email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setIsLoading(true);

    // Replace this with your actual authentication logic
    setTimeout(() => {
      setIsLoading(false);

      // Demo error state:
      // setError("Invalid email or password.");
    }, 1600);
  };

  const handleGoogleLogin = () => {
    setError("");

    // Add Firebase / Google OAuth logic here
    console.log("Continue with Google");
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#F8FAFC] text-[#0F172A]">
      <div className="grid min-h-screen lg:grid-cols-[45%_55%]">
        {/* =====================================================
            LEFT VISUAL SECTION
        ====================================================== */}
        <section className="relative hidden overflow-hidden lg:flex">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#F8F7FF] via-[#F7FAFF] to-[#EEF9FF]" />

          {/* Radial gradients */}
          <div
            className="absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-[#7C3AED]/10 blur-3xl"
            aria-hidden="true"
          />

          <div
            className="absolute -bottom-32 -right-32 h-[420px] w-[420px] rounded-full bg-[#00C2FF]/10 blur-3xl"
            aria-hidden="true"
          />

          <div
            className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5B3DF5]/[0.035] blur-3xl"
            aria-hidden="true"
          />

          {/* Main visual */}
          <div className="relative z-10 flex min-h-screen w-full items-center justify-center p-10 xl:p-16">
            <div className="relative h-[570px] w-full max-w-[540px]">
              {/* Small floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="absolute left-5 top-10 z-20 flex items-center gap-2 rounded-full border border-white/80 bg-white/75 px-3.5 py-2 text-xs font-medium text-[#64748B] shadow-[0_12px_35px_rgba(91,61,245,0.08)] backdrop-blur-xl"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#5B3DF5]/10 text-[#5B3DF5]">
                  <Sparkles className="h-3 w-3" />
                </span>

                Your career, organized.
              </motion.div>

              {/* Main abstract card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.94, y: 25 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute left-1/2 top-1/2 z-10 w-[300px] -translate-x-1/2 -translate-y-1/2 sm:w-[350px]"
              >
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                    rotate: [0, 0.35, 0],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="rounded-[24px] border border-white/90 bg-white/75 p-2 shadow-[0_30px_80px_rgba(91,61,245,0.14)] backdrop-blur-2xl"
                >
                  <div className="relative overflow-hidden rounded-[18px] bg-gradient-to-br from-[#F0EDFF] via-white to-[#EAF9FF] p-5">
                    {/* Glow */}
                    <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[#7C3AED]/10 blur-3xl" />

                    <div className="relative">
                      {/* Mini header */}
                      <div className="mb-6 flex items-center justify-between">
                        <div>
                          <div className="mb-1 h-2 w-20 rounded-full bg-slate-300/60" />
                          <div className="h-1.5 w-12 rounded-full bg-slate-200" />
                        </div>

                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white shadow-sm">
                          <BriefcaseBusiness className="h-4 w-4 text-[#5B3DF5]" />
                        </div>
                      </div>

                      {/* Application card */}
                      <div className="rounded-2xl border border-white/90 bg-white/80 p-4 shadow-sm">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#5B3DF5]/10">
                              <BriefcaseBusiness className="h-5 w-5 text-[#5B3DF5]" />
                            </div>

                            <div>
                              <div className="h-2 w-24 rounded-full bg-slate-300" />
                              <div className="mt-2 h-1.5 w-16 rounded-full bg-slate-200" />
                            </div>
                          </div>

                          <div className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold text-emerald-600">
                            Active
                          </div>
                        </div>

                        {/* Progress */}
                        <div className="mt-5">
                          <div className="mb-2 flex items-center justify-between">
                            <span className="text-[10px] font-medium text-slate-400">
                              Application progress
                            </span>

                            <span className="text-[10px] font-semibold text-[#5B3DF5]">
                              72%
                            </span>
                          </div>

                          <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: "72%" }}
                              transition={{
                                delay: 0.8,
                                duration: 1.2,
                                ease: "easeOut",
                              }}
                              className="h-full rounded-full bg-gradient-to-r from-[#5B3DF5] to-[#7C3AED]"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Bottom cards */}
                      <div className="mt-3 grid grid-cols-2 gap-3">
                        <div className="rounded-2xl border border-white/90 bg-white/70 p-3">
                          <div className="flex items-center gap-2">
                            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#00C2FF]/10">
                              <CalendarDays className="h-3.5 w-3.5 text-[#00A9DE]" />
                            </div>

                            <div>
                              <div className="h-1.5 w-12 rounded-full bg-slate-300" />
                              <div className="mt-1.5 h-1 w-8 rounded-full bg-slate-200" />
                            </div>
                          </div>
                        </div>

                        <div className="rounded-2xl border border-white/90 bg-white/70 p-3">
                          <div className="flex items-center gap-2">
                            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-50">
                              <Check className="h-3.5 w-3.5 text-emerald-500" />
                            </div>

                            <div>
                              <div className="h-1.5 w-12 rounded-full bg-slate-300" />
                              <div className="mt-1.5 h-1 w-8 rounded-full bg-slate-200" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Left floating application */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.7 }}
                className="absolute left-0 top-[180px] z-20 w-[145px]"
              >
                <motion.div
                  animate={{
                    y: [0, -6, 0],
                    rotate: [-5, -3, -5],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="rounded-2xl border border-white/90 bg-white/70 p-3 shadow-[0_18px_45px_rgba(91,61,245,0.09)] backdrop-blur-xl"
                >
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#5B3DF5]/10">
                      <Check className="h-4 w-4 text-[#5B3DF5]" />
                    </div>

                    <div>
                      <div className="h-1.5 w-12 rounded-full bg-slate-300" />
                      <div className="mt-1.5 h-1 w-8 rounded-full bg-slate-200" />
                    </div>
                  </div>

                  <div className="mt-3 h-1.5 w-full rounded-full bg-slate-100">
                    <div className="h-full w-[85%] rounded-full bg-[#5B3DF5]/60" />
                  </div>
                </motion.div>
              </motion.div>

              {/* Right notification */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.75, duration: 0.7 }}
                className="absolute bottom-[150px] right-0 z-20 w-[165px]"
              >
                <motion.div
                  animate={{
                    y: [0, 7, 0],
                    rotate: [4, 2, 4],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="flex items-center gap-3 rounded-2xl border border-white/90 bg-white/75 p-3 shadow-[0_18px_45px_rgba(91,61,245,0.09)] backdrop-blur-xl"
                >
                  <div className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#7C3AED]/10">
                    <Bell className="h-4 w-4 text-[#7C3AED]" />

                    <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-[#5B3DF5]" />
                  </div>

                  <div>
                    <div className="h-1.5 w-16 rounded-full bg-slate-300" />
                    <div className="mt-2 h-1 w-10 rounded-full bg-slate-200" />
                  </div>
                </motion.div>
              </motion.div>

              {/* Bottom mini card */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.7 }}
                className="absolute bottom-16 left-1/2 z-20 -translate-x-1/2"
              >
                <motion.div
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="flex items-center gap-2.5 rounded-full border border-white/90 bg-white/75 px-3 py-2 shadow-[0_15px_35px_rgba(91,61,245,0.08)] backdrop-blur-xl"
                >
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#00C2FF]/10">
                    <Clock3 className="h-3 w-3 text-[#00A9DE]" />
                  </div>

                  <span className="text-[10px] font-medium text-slate-500">
                    Interview scheduled
                  </span>
                </motion.div>
              </motion.div>

              {/* Decorative dots */}
              <motion.span
                animate={{
                  opacity: [0.3, 0.8, 0.3],
                  scale: [0.9, 1.1, 0.9],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="absolute right-20 top-24 h-2 w-2 rounded-full bg-[#5B3DF5]"
              />

              <span className="absolute bottom-28 left-20 h-1.5 w-1.5 rounded-full bg-[#00C2FF]" />

              <span className="absolute right-4 top-40 h-1 w-1 rounded-full bg-[#7C3AED]" />
            </div>
          </div>
        </section>

        {/* =====================================================
            RIGHT LOGIN SECTION
        ====================================================== */}
        <section className="relative flex min-h-screen items-center justify-center px-5 py-10 sm:px-8 lg:px-12 xl:px-20">
          {/* Mobile background blobs */}
          <div
            className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-[#7C3AED]/[0.06] blur-3xl lg:hidden"
            aria-hidden="true"
          />

          <div
            className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-[#00C2FF]/[0.05] blur-3xl lg:hidden"
            aria-hidden="true"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative z-10 w-full max-w-[420px]"
          >
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="mb-10 flex items-center gap-2.5"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#5B3DF5] shadow-[0_8px_25px_rgba(91,61,245,0.2)]">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-white"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M7 18.5V8.8c0-.7.4-1.3 1-1.6l3.2-1.6c.5-.3 1.1-.3 1.6 0L16 7.2c.6.3 1 .9 1 1.6v9.7"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 18.5h14M9.5 12h5M9.5 15h5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <span className="text-lg font-bold tracking-tight text-[#0F172A]">
                JobTrack
              </span>
            </motion.div>

            {/* Heading */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-[34px]">
                Welcome back
              </h1>

              <p className="mt-2.5 max-w-sm text-sm leading-6 text-[#64748B] sm:text-[15px]">
                Track your applications. Stay organized. Land your next
                opportunity.
              </p>
            </div>

            {/* Error */}
            <AnimatePresence mode="wait">
              {error && (
                <motion.div
                  initial={{ opacity: 0, height: 0, y: -8 }}
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="mb-5 overflow-hidden"
                >
                  <div className="flex items-start gap-2.5 rounded-xl border border-red-100 bg-red-50 px-3.5 py-3 text-sm text-red-600">
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                    <span>{error}</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-[#334155]"
                >
                  Email address
                </label>

                <div className="relative">
                  <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-[#94A3B8]" />

                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={`${inputBase} border-[#E2E8F0] focus:border-[#5B3DF5] focus:ring-4 focus:ring-[#5B3DF5]/10`}
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-[#334155]"
                  >
                    Password
                  </label>

                  <a
                    href="/forgot-password"
                    className="text-xs font-medium text-[#5B3DF5] transition hover:text-[#4C2EF0]"
                  >
                    Forgot password?
                  </a>
                </div>

                <div className="relative">
                  <LockKeyhole className="pointer-events-none absolute left-3.5 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-[#94A3B8]" />

                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    className={`${inputBase} border-[#E2E8F0] pr-11 focus:border-[#5B3DF5] focus:ring-4 focus:ring-[#5B3DF5]/10`}
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 rounded-md p-1 text-[#94A3B8] transition hover:text-[#475569] focus:outline-none focus:ring-2 focus:ring-[#5B3DF5]/20"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? (
                      <EyeOff className="h-[18px] w-[18px]" />
                    ) : (
                      <Eye className="h-[18px] w-[18px]" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember */}
              <div className="flex items-center justify-between">
                <label className="flex cursor-pointer items-center gap-2.5">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="h-4 w-4 cursor-pointer rounded border-[#CBD5E1] accent-[#5B3DF5] focus:ring-[#5B3DF5]/20"
                  />

                  <span className="text-sm text-[#64748B]">
                    Remember me
                  </span>
                </label>
              </div>

              {/* Sign In */}
              <motion.button
                type="submit"
                disabled={isLoading}
                whileHover={{ scale: isLoading ? 1 : 1.01 }}
                whileTap={{ scale: isLoading ? 1 : 0.98 }}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#5B3DF5] px-5 py-3.5 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(91,61,245,0.18)] transition-all duration-200 hover:bg-[#4C2EF0] hover:shadow-[0_12px_30px_rgba(91,61,245,0.24)] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Signing in...
                  </>
                ) : (
                  <>
                    Sign In
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </motion.button>
            </form>

            {/* Divider */}
            <div className="my-7 flex items-center gap-4">
              <div className="h-px flex-1 bg-[#E2E8F0]" />

              <span className="text-[11px] font-medium uppercase tracking-wider text-[#94A3B8]">
                OR
              </span>

              <div className="h-px flex-1 bg-[#E2E8F0]" />
            </div>

            {/* Google */}
            <motion.button
              type="button"
              onClick={handleGoogleLogin}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="flex w-full items-center justify-center gap-3 rounded-xl border border-[#E2E8F0] bg-white px-5 py-3.5 text-sm font-semibold text-[#334155] shadow-sm transition-all duration-200 hover:border-[#CBD5E1] hover:bg-[#F8FAFC]"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-[18px] w-[18px]"
                aria-hidden="true"
              >
                <path
                  fill="#4285F4"
                  d="M21.6 12.23c0-.7-.06-1.38-.18-2.03H12v3.84h5.38a4.6 4.6 0 0 1-1.99 3.02v2.51h3.22c1.88-1.73 2.99-4.28 2.99-7.34Z"
                />
                <path
                  fill="#34A853"
                  d="M12 22c2.7 0 4.97-.9 6.62-2.43l-3.22-2.51c-.9.6-2.05.96-3.4.96-2.61 0-4.83-1.76-5.62-4.13H3.05v2.59A10 10 0 0 0 12 22Z"
                />
                <path
                  fill="#FBBC05"
                  d="M6.38 13.89A6.02 6.02 0 0 1 6.07 12c0-.66.11-1.3.31-1.89V7.52H3.05A10 10 0 0 0 2 12c0 1.61.39 3.14 1.05 4.48l3.33-2.59Z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.98c1.47 0 2.79.5 3.83 1.48l2.87-2.87C16.97 2.98 14.7 2 12 2a10 10 0 0 0-8.95 5.52l3.33 2.59C7.17 7.74 9.39 5.98 12 5.98Z"
                />
              </svg>

              Continue with Google
            </motion.button>

            {/* Register */}
            <p className="mt-8 text-center text-sm text-[#64748B]">
              Don't have an account?{" "}
              <a
                href="/register"
                className="font-semibold text-[#5B3DF5] transition hover:text-[#4C2EF0]"
              >
                Create an account
              </a>
            </p>

            {/* Security note */}
            <div className="mt-8 flex items-center justify-center gap-2 text-[11px] text-[#94A3B8]">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>Your data is protected and secure</span>
            </div>
          </motion.div>
        </section>
      </div>
    </main>
  );
}