"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Gift,
  Heart,
  Sparkles,
  ArrowRight,
  PartyPopper,
} from "lucide-react";
import { useMemo, useState } from "react";
import TimeTheme from "../components/TimeTheme";

type Confetti = {
  id: number;
  x: number;
  y: number;
  rotate: number;
  delay: number;
  size: number;
};

export default function SurprisePage() {
  const [opened, setOpened] = useState(false);
  const [shake, setShake] = useState(false);

  const confetti = useMemo<Confetti[]>(() => {
    return Array.from({ length: 75 }, (_, i) => ({
      id: i,
      x: Math.random() * 100 - 50,
      y: Math.random() * 100 + 20,
      rotate: Math.random() * 720 - 360,
      delay: Math.random() * 0.5,
      size: Math.random() * 8 + 4,
    }));
  }, []);

  const handleGiftClick = () => {
    if (opened) return;

    // Small anticipation shake
    setShake(true);

    setTimeout(() => {
      setOpened(true);
    }, 650);
  };

  return (
    <TimeTheme>
      <main className="relative min-h-screen overflow-hidden text-white">

        {/* =====================================================
            INITIAL SCREEN
        ====================================================== */}

        <AnimatePresence mode="wait">
          {!opened && (
            <motion.section
              key="intro"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 1.08 }}
              transition={{ duration: 0.8 }}
              className="relative z-20 flex min-h-screen flex-col items-center justify-center px-6 text-center"
            >

              {/* Small chapter label */}

              <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-xs tracking-[0.5em] text-white/45"
              >
                ONE LAST SURPRISE
              </motion.p>

              {/* Main heading */}

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="mt-7 max-w-3xl font-serif text-4xl italic leading-tight md:text-6xl"
              >
                Wait...
                <br />
                you thought that was everything?
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="mt-5 font-serif text-xl italic text-white/55 md:text-2xl"
              >
                Not quite yet.
              </motion.p>

              {/* =================================================
                  GIFT
              ================================================== */}

              <motion.div
                className="relative mt-16 cursor-pointer"
                onClick={handleGiftClick}
                animate={
                  shake
                    ? {
                        x: [0, -8, 8, -6, 6, 0],
                        rotate: [0, -2, 2, -2, 2, 0],
                      }
                    : {
                        y: [0, -10, 0],
                      }
                }
                transition={
                  shake
                    ? {
                        duration: 0.65,
                      }
                    : {
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }
                }
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.94,
                }}
              >

                {/* Glow underneath */}

                <motion.div
                  className="absolute left-1/2 top-1/2 -z-10 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-400/20 blur-[80px]"
                  animate={{
                    opacity: [0.35, 0.7, 0.35],
                    scale: [0.8, 1.1, 0.8],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                  }}
                />

                {/* Gift shadow */}

                <div className="absolute -bottom-5 left-1/2 h-8 w-48 -translate-x-1/2 rounded-full bg-black/40 blur-xl" />

                {/* =================================================
                    GIFT BOX
                ================================================== */}

                <div className="relative h-48 w-52 md:h-56 md:w-60">

                  {/* BOX BODY */}

                  <div className="absolute bottom-0 left-1/2 h-32 w-52 -translate-x-1/2 rounded-b-2xl rounded-t-md border border-white/20 bg-gradient-to-br from-pink-300 via-pink-500 to-purple-600 shadow-[0_25px_70px_rgba(236,72,153,0.35)] md:h-36 md:w-60">

                    {/* Vertical ribbon */}

                    <div className="absolute left-1/2 top-0 h-full w-8 -translate-x-1/2 bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-200 shadow-lg" />

                    {/* Horizontal ribbon */}

                    <div className="absolute left-0 top-10 h-8 w-full bg-gradient-to-b from-yellow-200 via-yellow-400 to-yellow-200 shadow-lg" />

                    {/* Heart patterns */}

                    <Heart
                      className="absolute bottom-5 left-5 text-white/30"
                      size={22}
                    />

                    <Heart
                      className="absolute bottom-7 right-5 text-white/30"
                      size={18}
                    />

                    <Sparkles
                      className="absolute bottom-5 right-16 text-white/50"
                      size={17}
                    />
                  </div>

                  {/* =================================================
                      GIFT LID
                  ================================================== */}

                  <motion.div
                    className="absolute left-1/2 top-8 z-20 h-14 w-56 -translate-x-1/2 rounded-xl border border-white/30 bg-gradient-to-r from-pink-300 via-pink-500 to-purple-500 shadow-xl md:w-64"
                    animate={
                      shake
                        ? {
                            rotate: [-3, 3, -2, 2, 0],
                          }
                        : {}
                    }
                  >

                    {/* Lid ribbon */}

                    <div className="absolute left-1/2 top-0 h-full w-8 -translate-x-1/2 bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-200" />

                  </motion.div>

                  {/* =================================================
                      RIBBON BOW
                  ================================================== */}

                  <div className="absolute left-1/2 top-0 z-30 -translate-x-1/2">

                    <motion.div
                      animate={{
                        rotate: [-5, 5, -5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                      className="relative"
                    >
                      {/* Left bow */}

                      <div className="absolute -left-14 top-0 h-10 w-20 rotate-[25deg] rounded-full border-2 border-yellow-200 bg-gradient-to-br from-yellow-200 to-yellow-500 shadow-lg" />

                      {/* Right bow */}

                      <div className="absolute left-[-6px] top-0 h-10 w-20 rotate-[-25deg] rounded-full border-2 border-yellow-200 bg-gradient-to-br from-yellow-200 to-yellow-500 shadow-lg" />

                      {/* Center */}

                      <div className="absolute left-[-3px] top-3 h-7 w-7 rounded-full border-2 border-yellow-100 bg-yellow-400 shadow-xl" />
                    </motion.div>
                  </div>
                </div>

              </motion.div>

              {/* Instruction */}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: [0.45, 1, 0.45],
                  y: 0,
                }}
                transition={{
                  opacity: {
                    duration: 2.5,
                    repeat: Infinity,
                  },
                  y: {
                    duration: 1,
                    delay: 1.2,
                  },
                }}
                className="mt-12"
              >
                <p className="text-sm tracking-wide text-white/60">
                  Tap the gift box
                </p>

                <p className="mt-2 text-xs tracking-[0.3em] text-white/30">
                  TO UNLOCK WHAT'S INSIDE
                </p>
              </motion.div>

            </motion.section>
          )}

          {/* =====================================================
              EXPLOSION
          ====================================================== */}

          {opened && (
            <motion.section
              key="opened"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="relative z-20 min-h-screen overflow-hidden"
            >

              {/* =================================================
                  MASSIVE LIGHT BLAST
              ================================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0,
                }}
                animate={{
                  opacity: [0, 1, 0.8, 0],
                  scale: [0.1, 1, 1.8, 2.5],
                }}
                transition={{
                  duration: 1.8,
                  ease: "easeOut",
                }}
                className="pointer-events-none absolute left-1/2 top-1/2 z-30 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white blur-[40px]"
              />

              {/* Golden rays */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.1,
                  rotate: 0,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0.2, 2.5, 4],
                  rotate: 180,
                }}
                transition={{
                  duration: 2,
                  ease: "easeOut",
                }}
                className="pointer-events-none absolute left-1/2 top-1/2 z-20 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border-[60px] border-yellow-200/60 blur-2xl"
              />

              {/* =================================================
                  RIBBON / CONFETTI BLAST
              ================================================== */}

              <div className="pointer-events-none absolute inset-0 z-40">

                {confetti.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{
                      opacity: 0,
                      left: "50%",
                      top: "50%",
                      scale: 0,
                    }}
                    animate={{
                      opacity: [0, 1, 1, 0],
                      left: `${50 + item.x}%`,
                      top: `${50 + item.y}%`,
                      rotate: item.rotate,
                      scale: [0, 1.2, 1],
                    }}
                    transition={{
                      duration: 2.2,
                      delay: item.delay,
                      ease: "easeOut",
                    }}
                    className="absolute"
                    style={{
                      width: item.size * 2,
                      height: item.size,
                      borderRadius: 999,
                      background:
                        item.id % 3 === 0
                          ? "#f9a8d4"
                          : item.id % 3 === 1
                          ? "#fde68a"
                          : "#c4b5fd",
                    }}
                  />
                ))}

              </div>

              {/* =================================================
                  HEART EXPLOSION
              ================================================== */}

              <div className="pointer-events-none absolute inset-0 z-40">

                {Array.from({ length: 25 }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{
                      opacity: 0,
                      left: "50%",
                      top: "50%",
                      scale: 0,
                    }}
                    animate={{
                      opacity: [0, 1, 1, 0],
                      left: `${20 + Math.random() * 60}%`,
                      top: `${15 + Math.random() * 65}%`,
                      scale: [0, 1, 1.3, 0.6],
                      rotate: Math.random() * 180 - 90,
                    }}
                    transition={{
                      duration: 2.5,
                      delay: Math.random() * 0.7,
                    }}
                    className="absolute"
                  >
                    <Heart
                      size={Math.random() * 18 + 10}
                      fill="currentColor"
                      className="text-pink-300/80"
                    />
                  </motion.div>
                ))}

              </div>

              {/* =================================================
                  FINAL REVEAL
              ================================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 80,
                  scale: 0.8,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                transition={{
                  delay: 1.5,
                  duration: 1.2,
                  ease: "easeOut",
                }}
                className="relative z-50 flex min-h-screen flex-col items-center justify-center px-6 text-center"
              >

                <motion.div
                  animate={{
                    rotate: [0, -2, 2, 0],
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                  className="relative mb-12"
                >

                  {/* Envelope glow */}

                  <div className="absolute inset-0 scale-125 rounded-3xl bg-yellow-300/20 blur-3xl" />

                  {/* Envelope */}

                  <div className="relative flex h-48 w-72 items-center justify-center rounded-2xl border border-yellow-200/40 bg-gradient-to-br from-yellow-100 via-amber-200 to-yellow-300 shadow-[0_0_80px_rgba(250,204,21,0.25)] md:h-56 md:w-80">

                    <div className="absolute inset-x-0 top-0 h-24 overflow-hidden rounded-t-2xl">
                      <div className="absolute left-1/2 top-[-55px] h-40 w-40 -translate-x-1/2 rotate-45 border border-yellow-500/20 bg-yellow-100/80" />
                    </div>

                    {/* Seal */}

                    <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-pink-400 shadow-lg">
                      <Heart
                        size={25}
                        fill="white"
                        className="text-white"
                      />
                    </div>

                    <Sparkles
                      size={24}
                      className="absolute right-5 top-5 text-yellow-700/50"
                    />

                  </div>
                </motion.div>

                {/* Text */}

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2 }}
                  className="text-xs tracking-[0.5em] text-white/45"
                >
                  SOMETHING SPECIAL
                </motion.p>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.2 }}
                  className="mt-6 max-w-2xl font-serif text-4xl italic leading-tight md:text-6xl"
                >
                  A final page
                  <br />
                  reserved only for you...
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.8 }}
                  className="mt-6 max-w-lg font-serif text-lg italic text-white/60 md:text-xl"
                >
                  When you're ready,
                  <br />
                  take a deep breath and open it.
                </motion.p>

                {/* FINAL BUTTON */}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 3.2 }}
                  className="mt-10"
                >
                  <Link
                    href="/final"
                    className="group flex items-center gap-3 rounded-full border border-yellow-200/40 bg-white/10 px-8 py-4 text-sm tracking-wide backdrop-blur-xl transition-all duration-500 hover:scale-105 hover:bg-white/20 hover:shadow-[0_0_40px_rgba(250,204,21,0.2)]"
                  >
                    <PartyPopper size={18} />

                    OPEN THE FINAL WISH

                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-2"
                    />

                  </Link>
                </motion.div>

              </motion.div>

            </motion.section>
          )}
        </AnimatePresence>
      </main>
    </TimeTheme>
  );
}