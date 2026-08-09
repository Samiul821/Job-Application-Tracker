import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-100 bg-white px-3.5 py-2 text-sm font-medium text-violet-600 shadow-sm"
          >
            Built for your next big move
          </motion.div>

          <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Your career,
            <br />
            <span className="text-[#5b3df5]">organized to win.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
            JobTrack Pro brings every application, deadline, and interview into
            one calm, intelligent workspace so you can focus on landing the
            right role.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="#dashboard"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#5b3df5] px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-200 transition hover:bg-[#4c2fe0]"
            >
              Start tracking free
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="#features"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-violet-200 hover:text-violet-600"
            >
              See how it works
            </motion.a>
          </div>
        </motion.div>

        {/* Right Illustration */}
        <motion.div
          id="dashboard"
          initial={{ opacity: 0, scale: 0.96, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.15 }}
          className="relative flex min-h-[360px] items-center justify-center sm:min-h-[470px] lg:min-h-[560px]"
          aria-label="Minimal floating career workspace illustration"
        >
          {/* Glow */}
          <motion.div
            animate={{
              opacity: [0.28, 0.42, 0.28],
              scale: [0.96, 1.04, 0.96],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute h-72 w-72 rounded-full bg-violet-300/20 blur-3xl sm:h-96 sm:w-96"
            aria-hidden="true"
          />

          <div className="relative h-[290px] w-[320px] sm:h-[390px] sm:w-[430px]">
            {/* Main Card */}
            <motion.div
              animate={{
                y: [0, -7, 0],
                rotate: [0, 0.5, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-1/2 top-1/2 z-10 h-52 w-64 -translate-x-1/2 -translate-y-1/2 rounded-[22px] border border-white/90 bg-white/75 p-2 shadow-[0_28px_70px_rgba(91,61,245,0.18)] backdrop-blur-xl sm:h-64 sm:w-80 sm:rounded-[26px] sm:p-2.5"
            >
              <div className="relative h-full overflow-hidden rounded-[15px] bg-gradient-to-br from-[#eeeaff] via-[#e8f7ff] to-white sm:rounded-[19px]">
                {/* Top Glow */}
                <div
                  className="absolute -right-10 -top-12 h-44 w-44 rounded-full bg-[#7c3aed]/20 blur-2xl"
                  aria-hidden="true"
                />

                {/* Bottom Glow */}
                <div
                  className="absolute -bottom-14 -left-10 h-40 w-40 rounded-full bg-[#00c2ff]/15 blur-2xl"
                  aria-hidden="true"
                />

                {/* Small Dot */}
                <span className="absolute left-4 top-4 h-1.5 w-1.5 rounded-full bg-[#5b3df5] shadow-[0_0_12px_rgba(91,61,245,0.7)] sm:left-6 sm:top-6" />

                {/* Check Card */}
                <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rotate-[-8deg] rounded-[12px] border-2 border-[#5b3df5]/70 bg-white/35 shadow-[0_12px_28px_rgba(91,61,245,0.15)] sm:h-20 sm:w-20">
                  <svg
                    viewBox="0 0 48 48"
                    className="absolute inset-0 m-auto h-9 w-9 text-[#5b3df5] sm:h-11 sm:w-11"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="m12 25 8 8 17-19"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* Bottom Lines */}
                <div className="absolute bottom-4 left-4 flex gap-1.5 sm:bottom-6 sm:left-6">
                  <span className="h-1 w-8 rounded-full bg-[#5b3df5]/35 sm:w-10" />
                  <span className="h-1 w-3 rounded-full bg-[#00c2ff]/45" />
                </div>
              </div>
            </motion.div>

            {/* Left Floating Card */}
            <motion.div
              animate={{
                x: [0, 5, 0],
                y: [0, -4, 0],
                rotate: [-10, -7, -10],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-0 top-10 h-28 w-20 -rotate-12 rounded-lg border border-white/90 bg-white/70 shadow-[0_16px_35px_rgba(91,61,245,0.1)] backdrop-blur sm:left-2 sm:top-16 sm:h-36 sm:w-24"
              aria-hidden="true"
            >
              <div className="mx-3 mt-5 h-1 w-8 rounded-full bg-[#5b3df5]/30 sm:mx-4 sm:mt-6 sm:w-10" />
              <div className="mx-3 mt-2 h-1 w-11 rounded-full bg-slate-200 sm:mx-4 sm:w-14" />
              <div className="mx-3 mt-2 h-1 w-7 rounded-full bg-slate-200 sm:mx-4 sm:w-9" />
            </motion.div>

            {/* Right Floating Card */}
            <motion.div
              animate={{
                x: [0, -4, 0],
                y: [0, 5, 0],
                rotate: [9, 6, 9],
              }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-5 right-1 h-24 w-16 rotate-12 rounded-lg border border-white/90 bg-white/65 shadow-[0_16px_35px_rgba(91,61,245,0.1)] backdrop-blur sm:bottom-10 sm:right-3 sm:h-32 sm:w-20"
              aria-hidden="true"
            >
              <div className="mx-3 mt-5 h-1 w-7 rounded-full bg-[#7c3aed]/35 sm:mx-4 sm:mt-6 sm:w-9" />
              <div className="mx-3 mt-2 h-1 w-9 rounded-full bg-slate-200 sm:mx-4 sm:w-11" />
              <div className="mx-3 mt-2 h-1 w-6 rounded-full bg-slate-200 sm:mx-4 sm:w-8" />
            </motion.div>

            {/* Sparkle */}
            <motion.span
              animate={{
                y: [0, -8, 0],
                opacity: [0.45, 0.9, 0.45],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-8 top-2 text-[#7c3aed] sm:right-14 sm:top-4"
              aria-hidden="true"
            >
              <Sparkles className="h-5 w-5 sm:h-6 sm:w-6" />
            </motion.span>

            {/* Decorative Dots */}
            <span
              className="absolute bottom-5 left-14 h-1.5 w-1.5 rounded-full bg-[#00c2ff]/70 sm:bottom-10 sm:left-20"
              aria-hidden="true"
            />

            <span
              className="absolute right-16 top-20 h-1 w-1 rounded-full bg-[#5b3df5]/60 sm:right-24 sm:top-28"
              aria-hidden="true"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
