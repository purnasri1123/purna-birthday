"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import TimeTheme, { useTimeMode } from "./components/TimeTheme";

export default function Home() {
  const mode = useTimeMode();

  if (!mode) {
    return null;
  }

  // "morning" mode here represents the complete DAY theme.
  // "night" mode represents the NIGHT theme.
  const isDay = mode === "morning";

  return (
    <TimeTheme>
      <div className="flex min-h-screen items-center justify-center px-6">
        <div className="w-full max-w-4xl text-center">

          {/* Small heading */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-7 text-xs uppercase tracking-[0.35em] text-white/75 md:text-sm"
          >
            A little birthday surprise
          </motion.p>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: "easeOut",
            }}
            className="font-serif text-5xl font-light leading-tight tracking-tight text-white md:text-2xl lg:text-7xl"
          >
            {isDay ? (
              <>
                A bright & beautiful day
                <br />
                <span>for someone special... ☀️</span>
              </>
            ) : (
              <>
                Under the quiet
                <br />
                <span>night sky... ✨</span>
              </>
            )}
          </motion.h1>

          {/* Date */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: 0.55,
            }}
            className="mt-6 text-sm tracking-[0.45em] text-white/75 md:text-base"
          >
            23 SEPTEMBER 2006
          </motion.p>

          {/* Message */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.75,
            }}
            className="mt-8 text-base leading-relaxed text-white/85 md:text-lg"
          >
            {isDay ? (
              <>
                Welcome to your day.
              </>
            ) : (
              <>
                A quiet space made just for you.
              </>
            )}
          </motion.p>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 1,
            }}
          >
            <Link
              href="/day"
              className="group mt-11 inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/5 px-8 py-4 text-sm text-white backdrop-blur-sm transition-all hover:scale-[1.04] hover:bg-white/15 md:text-base"
            >
              Begin the Journey

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>

          {/* Bottom */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: 1.4,
            }}
            className="mt-8 text-[10px] tracking-[0.3em] text-white/40"
          >
            MADE WITH A LITTLE EXTRA CARE ✦
          </motion.p>

        </div>
      </div>
    </TimeTheme>
  );
}