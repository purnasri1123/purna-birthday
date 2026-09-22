"use client";

import { motion } from "framer-motion";
import { ArrowRight, Cake, Sparkles } from "lucide-react";
import Link from "next/link";
import TimeTheme from "../components/TimeTheme";

export default function HerDay() {
  return (
    <TimeTheme>
      <div className="flex min-h-screen items-center justify-center px-6">
        <div className="w-full max-w-3xl text-center">

          {/* Sparkle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: [0.4, 1, 0.4],
              scale: [0.9, 1.15, 0.9],
              rotate: [0, 8, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mb-8 flex justify-center"
          >
            <Sparkles
              size={34}
              strokeWidth={1.2}
              className="text-white"
            />
          </motion.div>

          {/* Small heading */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-xs uppercase tracking-[0.4em] text-white/70 md:text-sm"
          >
            A day worth celebrating
          </motion.p>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.2,
            }}
            className="mt-7 font-serif text-6xl font-light text-white md:text-8xl"
          >
            Her Day
          </motion.h1>

          {/* Date */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: 0.5,
            }}
            className="mt-6 flex items-center justify-center gap-3 text-white/80"
          >
            <span className="h-px w-10 bg-white/30" />

            <span className="text-sm tracking-[0.35em] md:text-base">
              23 SEPTEMBER
            </span>

            <span className="h-px w-10 bg-white/30" />
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.8,
            }}
            className="mt-10"
          >
            <p className="text-lg leading-relaxed text-white/90 md:text-xl">
              Not because it&apos;s just another birthday...
            </p>

            <p className="mt-3 text-base italic text-white/65 md:text-lg">
              but because today belongs to someone special.
            </p>
          </motion.div>

          {/* Purna */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              delay: 1.15,
            }}
            className="mt-9 flex items-center justify-center gap-3"
          >
            <Cake
              size={22}
              strokeWidth={1.2}
              className="text-white/80"
            />

            <span className="font-serif text-2xl text-white md:text-3xl">
              The Great Mutyala Purna Srivalli
            </span>

            <Cake
              size={22}
              strokeWidth={1.2}
              className="text-white/80"
            />
          </motion.div>

          {/* Continue */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 1.5,
            }}
          >
            <Link
              href="/little-things"
              className="group mt-12 inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/5 px-8 py-4 text-sm text-white backdrop-blur-sm transition-all hover:scale-[1.03] hover:bg-white/15 md:text-base"
            >
              Continue

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
              delay: 1.8,
            }}
            className="mt-8 text-[10px] tracking-[0.3em] text-white/40"
          >
          </motion.p>

        </div>
      </div>
    </TimeTheme>
  );
}