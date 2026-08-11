import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlertCircle,
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronDown,
  Eye,
  EyeOff,
  FileText,
  LockKeyhole,
  Mail,
  Sparkles,
  UserRound,
  X,
} from "lucide-react";

import useAuth from "../../../hooks/useAuth";
import useAxios from "../../../hooks/useAxios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const inputBase =
  "w-full rounded-xl border bg-white px-11 py-3.5 text-sm text-[#0F172A] outline-none transition-all duration-200 placeholder:text-[#94A3B8]";

const jobRoles = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "UI/UX Designer",
  "Product Designer",
  "Software Engineer",
  "Other",
];

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const { createUser, updateUserProfile, removeFirebaseUser, googleSignIn } =
    useAuth();

  // Axios custom hook
  const axiosInstance = useAxios();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (error) {
      setError("");
    }

    if (isSuccess) {
      setIsSuccess(false);
    }
  };

  const passwordRules = useMemo(() => {
    return {
      length: formData.password.length >= 8,
      uppercase: /[A-Z]/.test(formData.password),
      number: /\d/.test(formData.password),
    };
  }, [formData.password]);

  const passwordScore = Object.values(passwordRules).filter(Boolean).length;

  const passwordStrength =
    passwordScore === 0
      ? null
      : passwordScore === 1
        ? "Weak"
        : passwordScore === 2
          ? "Medium"
          : "Strong";

  const passwordStrengthWidth =
    passwordScore === 1
      ? "33%"
      : passwordScore === 2
        ? "66%"
        : passwordScore === 3
          ? "100%"
          : "0%";

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setIsSuccess(false);

    // Validation
    if (!formData.name) {
      return setError("Name is required");
    }

    if (!formData.email) {
      return setError("Email is required");
    }

    if (!formData.role) {
      return setError("Please select a job role");
    }

    if (formData.password !== formData.confirmPassword) {
      return setError("Passwords do not match");
    }

    if (!formData.terms) {
      return setError("Please accept Terms & Conditions");
    }

    let firebaseUser = null;

    try {
      setIsLoading(true);

      // 1. Create Firebase User

      const result = await createUser(formData.email, formData.password);

      firebaseUser = result.user;

      // 2. Update Firebase Profile

      await updateUserProfile({
        displayName: formData.name,
      });

      // 3. Prepare MongoDB Data

      const userInfo = {
        uid: firebaseUser.uid,
        name: formData.name,
        email: formData.email,
        jobRole: formData.role,
        photoURL: firebaseUser.photoURL || "",
      };

      // 4. Save MongoDB

      const { data } = await axiosInstance.post("/users", userInfo);

      if (!data.success) {
        throw new Error(data.message);
      }

      // Success

      setIsSuccess(true);

      toast.success("Registration Successful");

      setFormData({
        name: "",
        email: "",
        role: "",
        password: "",
        confirmPassword: "",
        terms: false,
      });

      // Home page redirect
      navigate("/");
    } catch (err) {
      // Rollback Firebase

      if (firebaseUser) {
        try {
          await removeFirebaseUser(firebaseUser);
        } catch (rollbackError) {
          console.log("Rollback Failed", rollbackError);
        }
      }

      console.log(err);

      setError(
        err?.response?.data?.message || err?.message || "Registration Failed",
      );

      toast.error(
        err?.response?.data?.message || err?.message || "Registration Failed",
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleRegister = () => {
    googleSignIn()
      .then(async (result) => {
        console.log("Google Register Successful:", result.user);

        // Google user backend integration will be added later.
      })
      .catch((error) => {
        console.error("Google Register Error:", error);

        setError("Google registration failed. Please try again.");
      });
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#F8FAFC] text-[#0F172A]">
      <div className="grid min-h-screen lg:grid-cols-[45%_55%]">
        {/* =====================================================
            LEFT VISUAL SECTION
        ====================================================== */}

        <section className="relative hidden overflow-hidden lg:flex">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#F8F7FF] via-white to-[#EEF9FF]" />

          {/* Ambient blobs */}
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

          {/* Visual Content */}
          <div className="relative z-10 flex min-h-screen w-full items-center justify-center p-10 xl:p-16">
            <div className="relative h-[610px] w-full max-w-[540px]">
              {/* Motivational text */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="absolute left-1/2 top-5 z-30 w-full -translate-x-1/2 text-center"
              >
                <div className="mb-2 flex items-center justify-center gap-2">
                  <Sparkles className="h-4 w-4 text-[#7C3AED]" />

                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#7C3AED]">
                    Start your journey
                  </span>
                </div>

                <h2 className="mx-auto max-w-[360px] text-xl font-semibold leading-8 tracking-tight text-[#334155]">
                  Your next opportunity starts with one application.
                </h2>
              </motion.div>

              {/* Main Journey Visual */}
              <div className="absolute left-1/2 top-[54%] h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2">
                {/* Curved connecting path */}
                <svg
                  viewBox="0 0 390 390"
                  className="absolute inset-0 h-full w-full"
                  fill="none"
                  aria-hidden="true"
                >
                  <motion.path
                    d="M78 275 C80 190, 125 105, 195 125 C260 145, 280 210, 315 115"
                    stroke="#C4B5FD"
                    strokeWidth="1.5"
                    strokeDasharray="5 7"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.7 }}
                    transition={{
                      duration: 1.6,
                      delay: 0.5,
                      ease: "easeInOut",
                    }}
                  />

                  <motion.circle
                    cx="78"
                    cy="275"
                    r="4"
                    fill="#5B3DF5"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.8 }}
                  />

                  <motion.circle
                    cx="195"
                    cy="125"
                    r="4"
                    fill="#00C2FF"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1 }}
                  />

                  <motion.circle
                    cx="315"
                    cy="115"
                    r="4"
                    fill="#7C3AED"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.2 }}
                  />
                </svg>

                {/* Center resume card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.25,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute left-1/2 top-1/2 z-10 w-[235px] -translate-x-1/2 -translate-y-1/2"
                >
                  <motion.div
                    animate={{
                      y: [0, -7, 0],
                      rotate: [0, 0.4, 0],
                    }}
                    transition={{
                      duration: 7,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="rounded-[22px] border border-white/90 bg-white/75 p-2 shadow-[0_28px_70px_rgba(91,61,245,0.14)] backdrop-blur-2xl"
                  >
                    <div className="rounded-[16px] bg-gradient-to-br from-[#F0EDFF] via-white to-[#EAF9FF] p-5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#5B3DF5]/10">
                          <FileText className="h-5 w-5 text-[#5B3DF5]" />
                        </div>

                        <div>
                          <div className="h-2 w-20 rounded-full bg-slate-300/70" />
                          <div className="mt-2 h-1.5 w-12 rounded-full bg-slate-200" />
                        </div>
                      </div>

                      <div className="mt-5 space-y-2.5">
                        <div className="h-1.5 w-full rounded-full bg-slate-200" />
                        <div className="h-1.5 w-[82%] rounded-full bg-slate-200" />
                        <div className="h-1.5 w-[65%] rounded-full bg-slate-200" />
                      </div>

                      <div className="mt-5 flex items-center justify-between">
                        <span className="text-[10px] font-medium text-slate-400">
                          Career profile
                        </span>

                        <div className="flex items-center gap-1.5">
                          <div className="h-1.5 w-1.5 rounded-full bg-[#5B3DF5]" />
                          <div className="h-1.5 w-1.5 rounded-full bg-[#C4B5FD]" />
                          <div className="h-1.5 w-1.5 rounded-full bg-slate-200" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Job application */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.7 }}
                  className="absolute left-0 top-[165px] z-20"
                >
                  <motion.div
                    animate={{
                      y: [0, -5, 0],
                      rotate: [-5, -3, -5],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="w-[142px] rounded-2xl border border-white/90 bg-white/75 p-3 shadow-[0_18px_45px_rgba(91,61,245,0.09)] backdrop-blur-xl"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#7C3AED]/10">
                        <BriefcaseBusiness className="h-4 w-4 text-[#7C3AED]" />
                      </div>

                      <div>
                        <div className="h-1.5 w-12 rounded-full bg-slate-300" />
                        <div className="mt-1.5 h-1 w-8 rounded-full bg-slate-200" />
                      </div>
                    </div>

                    <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-100">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "62%" }}
                        transition={{ delay: 1.1, duration: 1 }}
                        className="h-full rounded-full bg-[#7C3AED]/60"
                      />
                    </div>
                  </motion.div>
                </motion.div>

                {/* Interview */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1, duration: 0.7 }}
                  className="absolute right-0 top-[100px] z-20"
                >
                  <motion.div
                    animate={{
                      y: [0, 6, 0],
                      rotate: [5, 3, 5],
                    }}
                    transition={{
                      duration: 7,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="flex w-[150px] items-center gap-2.5 rounded-2xl border border-white/90 bg-white/75 p-3 shadow-[0_18px_45px_rgba(91,61,245,0.09)] backdrop-blur-xl"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#00C2FF]/10">
                      <CalendarDays className="h-4 w-4 text-[#00A9DE]" />
                    </div>

                    <div>
                      <div className="h-1.5 w-14 rounded-full bg-slate-300" />
                      <div className="mt-1.5 h-1 w-9 rounded-full bg-slate-200" />
                    </div>
                  </motion.div>
                </motion.div>

                {/* Success */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  className="absolute bottom-8 right-[65px] z-20"
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
                    className="flex items-center gap-2.5 rounded-full border border-white/90 bg-white/80 px-3 py-2 shadow-[0_15px_35px_rgba(91,61,245,0.09)] backdrop-blur-xl"
                  >
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-50">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                    </div>

                    <span className="text-[10px] font-semibold text-slate-500">
                      Moving forward
                    </span>
                  </motion.div>
                </motion.div>

                {/* Decorative sparkle */}
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                    opacity: [0.35, 0.8, 0.35],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute left-[48px] top-[70px] text-[#7C3AED]"
                >
                  <Sparkles className="h-5 w-5" />
                </motion.div>

                {/* Dots */}
                <span className="absolute bottom-[85px] left-[80px] h-1.5 w-1.5 rounded-full bg-[#00C2FF]/70" />

                <span className="absolute right-[75px] top-[50px] h-1 w-1 rounded-full bg-[#5B3DF5]/70" />
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            RIGHT REGISTRATION SECTION
        ====================================================== */}

        <section className="relative flex min-h-screen items-center justify-center px-5 py-8 sm:px-8 lg:px-12 xl:px-20">
          {/* Mobile ambient blobs */}
          <div
            className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-[#7C3AED]/[0.06] blur-3xl lg:hidden"
            aria-hidden="true"
          />

          <div
            className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-[#00C2FF]/[0.05] blur-3xl lg:hidden"
            aria-hidden="true"
          />

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative z-10 w-full max-w-[440px]"
          >
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="mb-7 flex items-center gap-2.5"
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
            <div className="mb-6">
              <h1 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-[32px]">
                Create your account
              </h1>

              <p className="mt-2 text-sm leading-6 text-[#64748B] sm:text-[15px]">
                Organize your job search and keep every application on track.
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
                  className="mb-4 overflow-hidden"
                >
                  <div className="flex items-start gap-2.5 rounded-xl border border-red-100 bg-red-50 px-3.5 py-3 text-sm text-red-600">
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />

                    <span>{error}</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Success */}
            <AnimatePresence mode="wait">
              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, height: 0, y: -8 }}
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -8 }}
                  className="mb-4 overflow-hidden"
                >
                  <div className="flex items-start gap-2.5 rounded-xl border border-emerald-100 bg-emerald-50 px-3.5 py-3 text-sm text-emerald-600">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />

                    <span>
                      Account created successfully. Welcome to JobTrack!
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5">
              {/* Full Name */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-sm font-medium text-[#334155]"
                >
                  Full name
                </label>

                <div className="relative">
                  <UserRound className="pointer-events-none absolute left-3.5 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-[#94A3B8]" />

                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`${inputBase} border-[#E2E8F0] focus:border-[#5B3DF5] focus:ring-4 focus:ring-[#5B3DF5]/10`}
                  />
                </div>
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
              >
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-medium text-[#334155]"
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
              </motion.div>

              {/* Job Role */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <label
                  htmlFor="role"
                  className="mb-1.5 block text-sm font-medium text-[#334155]"
                >
                  Preferred job role
                </label>

                <div className="relative">
                  <BriefcaseBusiness className="pointer-events-none absolute left-3.5 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-[#94A3B8]" />

                  <select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className={`${inputBase} cursor-pointer appearance-none border-[#E2E8F0] pr-10 text-[#0F172A] focus:border-[#5B3DF5] focus:ring-4 focus:ring-[#5B3DF5]/10 ${
                      !formData.role ? "text-[#94A3B8]" : ""
                    }`}
                  >
                    <option value="" disabled>
                      Select your preferred role
                    </option>

                    {jobRoles.map((role) => (
                      <option key={role} value={role}>
                        {role}
                      </option>
                    ))}
                  </select>

                  <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#94A3B8]" />
                </div>
              </motion.div>

              {/* Password */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
              >
                <label
                  htmlFor="password"
                  className="mb-1.5 block text-sm font-medium text-[#334155]"
                >
                  Password
                </label>

                <div className="relative">
                  <LockKeyhole className="pointer-events-none absolute left-3.5 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-[#94A3B8]" />

                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="new-password"
                    placeholder="Create a strong password"
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

                {/* Password Strength */}
                <AnimatePresence>
                  {formData.password && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-2.5">
                        <div className="mb-1.5 flex items-center justify-between">
                          <span className="text-[10px] font-medium text-[#94A3B8]">
                            Password strength
                          </span>

                          <motion.span
                            key={passwordStrength}
                            initial={{ opacity: 0, y: 4 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`text-[10px] font-semibold ${
                              passwordStrength === "Strong"
                                ? "text-emerald-500"
                                : passwordStrength === "Medium"
                                  ? "text-amber-500"
                                  : "text-red-500"
                            }`}
                          >
                            {passwordStrength}
                          </motion.span>
                        </div>

                        <div className="h-1 overflow-hidden rounded-full bg-slate-100">
                          <motion.div
                            animate={{ width: passwordStrengthWidth }}
                            transition={{
                              duration: 0.3,
                              ease: "easeOut",
                            }}
                            className={`h-full rounded-full ${
                              passwordStrength === "Strong"
                                ? "bg-emerald-500"
                                : passwordStrength === "Medium"
                                  ? "bg-amber-400"
                                  : "bg-red-400"
                            }`}
                          />
                        </div>

                        <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
                          <PasswordRule
                            valid={passwordRules.length}
                            text="8+ characters"
                          />

                          <PasswordRule
                            valid={passwordRules.uppercase}
                            text="1 uppercase"
                          />

                          <PasswordRule
                            valid={passwordRules.number}
                            text="1 number"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Confirm Password */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <label
                  htmlFor="confirmPassword"
                  className="mb-1.5 block text-sm font-medium text-[#334155]"
                >
                  Confirm password
                </label>

                <div className="relative">
                  <LockKeyhole className="pointer-events-none absolute left-3.5 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-[#94A3B8]" />

                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    autoComplete="new-password"
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className={`${inputBase} border-[#E2E8F0] pr-11 focus:border-[#5B3DF5] focus:ring-4 focus:ring-[#5B3DF5]/10 ${
                      formData.confirmPassword &&
                      formData.password !== formData.confirmPassword
                        ? "border-red-300 focus:border-red-400 focus:ring-red-100"
                        : ""
                    }`}
                  />

                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 rounded-md p-1 text-[#94A3B8] transition hover:text-[#475569] focus:outline-none focus:ring-2 focus:ring-[#5B3DF5]/20"
                    aria-label={
                      showConfirmPassword
                        ? "Hide confirm password"
                        : "Show confirm password"
                    }
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-[18px] w-[18px]" />
                    ) : (
                      <Eye className="h-[18px] w-[18px]" />
                    )}
                  </button>
                </div>

                {/* Password match */}
                <AnimatePresence>
                  {formData.confirmPassword && (
                    <motion.div
                      initial={{ opacity: 0, y: -3 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className={`mt-1.5 flex items-center gap-1 text-[10px] font-medium ${
                        formData.password === formData.confirmPassword
                          ? "text-emerald-500"
                          : "text-red-500"
                      }`}
                    >
                      {formData.password === formData.confirmPassword ? (
                        <>
                          <Check className="h-3 w-3" />
                          Passwords match
                        </>
                      ) : (
                        <>
                          <X className="h-3 w-3" />
                          Passwords do not match
                        </>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Terms */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="pt-0.5"
              >
                <label className="flex cursor-pointer items-start gap-2.5">
                  <input
                    type="checkbox"
                    name="terms"
                    checked={formData.terms}
                    onChange={handleChange}
                    className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded border-[#CBD5E1] accent-[#5B3DF5] focus:ring-[#5B3DF5]/20"
                  />

                  <span className="text-[11px] leading-5 text-[#64748B]">
                    I agree to the{" "}
                    <a
                      href="/terms"
                      className="font-medium text-[#5B3DF5] hover:text-[#4C2EF0]"
                    >
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a
                      href="/privacy"
                      className="font-medium text-[#5B3DF5] hover:text-[#4C2EF0]"
                    >
                      Privacy Policy
                    </a>
                    .
                  </span>
                </label>
              </motion.div>

              {/* Create Account */}
              <motion.button
                type="submit"
                disabled={isLoading}
                whileHover={{ scale: isLoading ? 1 : 1.01 }}
                whileTap={{ scale: isLoading ? 1 : 0.98 }}
                className="mt-1 flex w-full items-center justify-center gap-2 rounded-xl bg-[#5B3DF5] px-5 py-3.5 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(91,61,245,0.18)] transition-all duration-200 hover:bg-[#4C2EF0] hover:shadow-[0_12px_30px_rgba(91,61,245,0.24)] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isLoading ? (
                  <>
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white"
                    />
                    Creating account...
                  </>
                ) : isSuccess ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" />
                    Account Created
                  </>
                ) : (
                  <>
                    Create Account
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </motion.button>
            </form>

            {/* Divider */}
            <div className="my-5 flex items-center gap-4">
              <div className="h-px flex-1 bg-[#E2E8F0]" />

              <span className="text-[10px] font-medium uppercase tracking-wider text-[#94A3B8]">
                OR
              </span>

              <div className="h-px flex-1 bg-[#E2E8F0]" />
            </div>

            {/* Google */}
            <motion.button
              type="button"
              onClick={handleGoogleRegister}
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

            {/* Login */}
            <p className="mt-6 text-center text-sm text-[#64748B]">
              Already have an account?{" "}
              <a
                href="/login"
                className="font-semibold text-[#5B3DF5] transition hover:text-[#4C2EF0]"
              >
                Sign in
              </a>
            </p>
          </motion.div>
        </section>
      </div>
    </main>
  );
};

function PasswordRule({ valid, text }) {
  return (
    <motion.div
      animate={{
        opacity: valid ? 1 : 0.55,
      }}
      className={`flex items-center gap-1 text-[9px] ${
        valid ? "text-emerald-500" : "text-[#94A3B8]"
      }`}
    >
      <div
        className={`flex h-3.5 w-3.5 items-center justify-center rounded-full ${
          valid ? "bg-emerald-50" : "bg-slate-100"
        }`}
      >
        {valid ? (
          <Check className="h-2.5 w-2.5" />
        ) : (
          <span className="h-1 w-1 rounded-full bg-current" />
        )}
      </div>

      <span>{text}</span>
    </motion.div>
  );
}

export default Register;
