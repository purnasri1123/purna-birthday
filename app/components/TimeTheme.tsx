"use client";

import { Moon, Sparkles, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { ReactNode, useEffect, useMemo, useState } from "react";

export type TimeMode = "morning" | "night";

export function useTimeMode() {
  const [mode, setMode] = useState<TimeMode | null>(null);

  useEffect(() => {
    const hour = 24//new Date().getHours();

    if (hour >= 5 && hour < 18) {
      setMode("morning");
    } else {
      setMode("night");
    }
  }, []);

  return mode;
}

interface TimeThemeProps {
  children: ReactNode;
}

export default function TimeTheme({ children }: TimeThemeProps) {
  const mode = useTimeMode();

  const stars = useMemo(() => {
    return Array.from({ length: 45 }, (_, index) => ({
      id: index,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() > 0.85 ? 5 : Math.random() > 0.5 ? 3 : 2,
      duration: 2 + Math.random() * 4,
      delay: Math.random() * 3,
    }));
  }, []);

  if (!mode) {
    return (
      <main className="min-h-screen bg-[#10172f] flex items-center justify-center">
        <div className="h-8 w-8 rounded-full border-2 border-white/20 border-t-white animate-spin" />
      </main>
    );
  }

  const isMorning = mode === "morning";

  return (
    <main
      className={`relative min-h-screen overflow-hidden ${
        isMorning
          ? "bg-gradient-to-br from-[#f4b9d4] via-[#cfc4e8] to-[#91b9e8]"
          : "bg-gradient-to-br from-[#050817] via-[#111a3d] to-[#182c5c]"
      }`}
    >
      {/* LEFT GLOW */}
      <motion.div
        className={`absolute -left-40 -top-40 h-[550px] w-[550px] rounded-full blur-[120px] ${
          isMorning ? "bg-pink-200/40" : "bg-blue-400/10"
        }`}
        animate={{
          x: [0, 80, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* RIGHT GLOW */}
      <motion.div
        className={`absolute -bottom-60 -right-40 h-[600px] w-[600px] rounded-full blur-[130px] ${
          isMorning ? "bg-blue-200/30" : "bg-indigo-500/10"
        }`}
        animate={{
          x: [0, -60, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* FLOATING PARTICLES */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
          }}
          animate={{
            opacity: [0.15, 0.8, 0.15],
            scale: [0.8, 1.3, 0.8],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* SUN / MOON */}
      <motion.div
        className="absolute right-10 top-10 z-10 md:right-14 md:top-12"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        {isMorning ? (
          <motion.div
            animate={{
              rotate: [0, 8, 0, -8, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Sun
              size={42}
              strokeWidth={1.2}
              className="text-white/80"
            />
          </motion.div>
        ) : (
          <Moon
            size={38}
            strokeWidth={1.2}
            className="text-blue-100/80"
          />
        )}
      </motion.div>

      {/* CENTER SPARKLE */}
      <motion.div
        className="absolute left-1/2 top-[24%] z-10 -translate-x-1/2"
        animate={{
          opacity: [0.3, 1, 0.3],
          scale: [0.9, 1.15, 0.9],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Sparkles
          size={34}
          strokeWidth={1.2}
          className="text-white/90"
        />
      </motion.div>

      {/* PAGE CONTENT */}
      <div className="relative z-20 min-h-screen">
        {children}
      </div>
    </main>
  );
}