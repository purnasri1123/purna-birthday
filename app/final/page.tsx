"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import TimeTheme from "../components/TimeTheme";

const butterflies = [
  { left: "8%", top: "18%", delay: 0, duration: 7, size: 22 },
  { left: "84%", top: "22%", delay: 1.5, duration: 8, size: 18 },
  { left: "15%", top: "62%", delay: 2, duration: 9, size: 20 },
  { left: "88%", top: "65%", delay: 0.8, duration: 7.5, size: 24 },
  { left: "25%", top: "35%", delay: 3, duration: 8.5, size: 16 },
  { left: "74%", top: "42%", delay: 2.5, duration: 9, size: 19 },
];

export default function FinalWish() {
  const [opened, setOpened] = useState(false);
  const [revealed, setRevealed] = useState(false);

  const openSpace = () => {
    setOpened(true);
  };

  const openFinalWish = () => {
    setRevealed(true);
  };

  return (
    <TimeTheme>
      <main className="relative min-h-screen overflow-hidden px-5 text-white">

        {/* =====================================================
            BUTTERFLIES
        ====================================================== */}

        <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
          {butterflies.map((butterfly, index) => (
            <motion.div
              key={index}
              className="absolute"
              style={{
                left: butterfly.left,
                top: butterfly.top,
                fontSize: butterfly.size,
              }}
              animate={{
                x: [0, 25, -15, 0],
                y: [0, -25, 15, 0],
                rotate: [-8, 8, -5, 0],
                opacity: [0.25, 0.8, 0.45, 0.25],
              }}
              transition={{
                duration: butterfly.duration,
                delay: butterfly.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span className="drop-shadow-[0_0_12px_rgba(255,180,220,0.8)]">
                🦋
              </span>
            </motion.div>
          ))}
        </div>

        {/* =====================================================
            INITIAL SCREEN
        ====================================================== */}

        <AnimatePresence mode="wait">

          {!opened && (
            <motion.section
              key="opening"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{
                opacity: 0,
                scale: 1.08,
                filter: "blur(8px)",
              }}
              transition={{ duration: 1 }}
              className="relative z-20 flex min-h-screen flex-col items-center justify-center text-center"
            >

              {/* Tiny butterflies around title */}

              <motion.div
                animate={{
                  y: [0, -8, 0],
                  rotate: [-5, 5, -5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="mb-8 text-3xl"
              >
                🦋
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-[10px] tracking-[0.5em] text-white/40"
              >
                ONE LAST SURPRISE
              </motion.p>

              <motion.h1
                initial={{
                  opacity: 0,
                  y: 30,
                  scale: 0.95,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                transition={{
                  duration: 1.2,
                  delay: 0.2,
                }}
                className="mt-7 font-serif text-5xl font-light italic md:text-7xl"
              >
                Rey Potti...
                <span className="ml-3 not-italic">🩷💙</span>
              </motion.h1>

              


              {/* ENTER */}

              <motion.button
                type="button"
                onClick={openSpace}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 1.5,
                }}
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className="mt-12 rounded-full border border-white/20 bg-white/5 px-8 py-3 text-xs tracking-[0.25em] text-white/75 backdrop-blur-md transition-all hover:bg-white/10"
              >
                TAP HERE 🦋
              </motion.button>

            </motion.section>
          )}

          {/* =====================================================
              ENVELOPE
          ====================================================== */}

          {opened && !revealed && (
            <motion.section
              key="envelope"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{
                opacity: 0,
                scale: 1.08,
                filter: "blur(10px)",
              }}
              transition={{ duration: 0.8 }}
              className="relative z-20 flex min-h-screen flex-col items-center justify-center text-center"
            >

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-[10px] tracking-[0.45em] text-white/40"
              >
                A LITTLE SOMETHING
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.2,
                }}
                className="mt-5 font-serif text-3xl italic text-white/85 md:text-5xl"
              >
                Just for you...
              </motion.h2>

              {/* ENVELOPE */}

              <motion.button
                type="button"
                onClick={openFinalWish}
                initial={{
                  opacity: 0,
                  scale: 0.7,
                  y: 40,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, -8, 0],
                }}
                transition={{
                  opacity: {
                    duration: 0.8,
                    delay: 0.5,
                  },
                  scale: {
                    duration: 0.8,
                    delay: 0.5,
                  },
                  y: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                whileHover={{
                  scale: 1.06,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="group relative mt-14"
              >

                {/* Glow */}

                <motion.div
                  className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-300/10 blur-[80px]"
                  animate={{
                    scale: [1, 1.25, 1],
                    opacity: [0.25, 0.5, 0.25],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                />

                {/* Envelope */}

                <div className="relative h-40 w-64 overflow-hidden rounded-2xl border border-white/25 bg-white/10 shadow-2xl backdrop-blur-xl md:h-48 md:w-80">

                  {/* Top flap */}

                  <motion.div
                    className="absolute left-0 top-0 z-20 h-1/2 w-full origin-top border-b border-white/15 bg-white/10"
                    animate={{
                      rotateX: [0, 2, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                    }}
                    style={{
                      clipPath:
                        "polygon(0 0, 100% 0, 50% 100%)",
                    }}
                  />

                  {/* Envelope lines */}

                  <div className="absolute bottom-0 left-0 h-full w-full">
                    <div
                      className="absolute bottom-0 left-0 h-[70%] w-1/2 border-r border-t border-white/15"
                      style={{
                        clipPath:
                          "polygon(0 100%, 100% 0, 100% 100%)",
                      }}
                    />

                    <div
                      className="absolute bottom-0 right-0 h-[70%] w-1/2 border-l border-t border-white/15"
                      style={{
                        clipPath:
                          "polygon(0 0, 100% 100%, 0 100%)",
                      }}
                    />
                  </div>

                  {/* Heart seal */}

                  <motion.div
                    animate={{
                      scale: [1, 1.12, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 text-3xl drop-shadow-[0_0_12px_rgba(255,180,220,0.8)]"
                  >
                    🩷
                  </motion.div>

                </div>

              </motion.button>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: 1.2,
                }}
                className="mt-8 text-[9px] tracking-[0.35em] text-white/35"
              >
                OPEN THE LITTLE SECRET
              </motion.p>

            </motion.section>
          )}

          {/* =====================================================
              FINAL WISH
          ====================================================== */}

          {revealed && (
            <motion.section
              key="final"
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative z-20 flex min-h-screen items-center justify-center py-20"
            >

              {/* =================================================
                  BUTTERFLY BURST
              ================================================== */}

              <div className="pointer-events-none absolute inset-0 overflow-hidden">

                {Array.from({ length: 18 }).map((_, index) => (
                  <motion.div
                    key={index}
                    className="absolute left-1/2 top-1/2 text-xl md:text-2xl"
                    initial={{
                      x: 0,
                      y: 0,
                      opacity: 0,
                      scale: 0.3,
                    }}
                    animate={{
                      x:
                        Math.cos(index * 1.7) *
                        (180 + (index % 4) * 55),
                      y:
                        Math.sin(index * 1.7) *
                        (180 + (index % 5) * 45),
                      opacity: [0, 1, 0.7, 0],
                      scale: [0.3, 1, 0.8],
                      rotate: [
                        0,
                        index % 2 === 0 ? 15 : -15,
                        0,
                      ],
                    }}
                    transition={{
                      duration: 3.5,
                      delay: index * 0.05,
                      ease: "easeOut",
                    }}
                  >
                    🦋
                  </motion.div>
                ))}

                {/* Hearts */}

                {Array.from({ length: 12 }).map((_, index) => (
                  <motion.div
                    key={`heart-${index}`}
                    className="absolute left-1/2 top-1/2 text-sm"
                    initial={{
                      x: 0,
                      y: 0,
                      opacity: 0,
                    }}
                    animate={{
                      x:
                        Math.cos(index * 2.4) *
                        (120 + index * 22),
                      y:
                        Math.sin(index * 2.4) *
                        (120 + index * 18),
                      opacity: [0, 0.8, 0],
                    }}
                    transition={{
                      duration: 3,
                      delay: 0.15 + index * 0.06,
                    }}
                  >
                    {index % 2 === 0 ? "🩷" : "💙"}
                  </motion.div>
                ))}

              </div>

              {/* =================================================
                  CARD
              ================================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 40,
                  scale: 0.92,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                transition={{
                  duration: 1,
                  delay: 0.4,
                }}
                className="relative w-full max-w-2xl overflow-hidden rounded-[36px] border border-white/20 bg-white/[0.07] px-7 py-14 text-center shadow-2xl backdrop-blur-xl md:px-14 md:py-20"
              >

                {/* Inner glow */}

                <motion.div
                  className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-300/10 blur-[100px]"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.25, 0.5, 0.25],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                  }}
                />

                <div className="relative z-10">

                  {/* Butterfly */}

                  <motion.div
                    animate={{
                      y: [0, -7, 0],
                      rotate: [-5, 5, -5],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                    className="text-3xl"
                  >
                    🦋
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="mt-7 text-[10px] tracking-[0.45em] text-white/40"
                  >
                    YOUR SPECIAL WISH
                  </motion.p>

                  {/* Main title */}

                  <motion.h1
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.9,
                      duration: 0.8,
                    }}
                    className="mt-6 font-serif text-4xl font-light italic md:text-6xl"
                  >
                    Happy Birthday,
                    <br />
                    <span className="mt-2 inline-block">
                      Bangaram! 🩷
                    </span>
                  </motion.h1>

                  <motion.div
                    initial={{
                      width: 0,
                    }}
                    animate={{
                      width: 65,
                    }}
                    transition={{
                      delay: 1.2,
                      duration: 0.6,
                    }}
                    className="mx-auto mt-8 h-px bg-white/30"
                  />

                  {/* Wish */}

                  <motion.p
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 1.45,
                      duration: 0.8,
                    }}
                    className="mt-9 font-serif text-lg leading-relaxed text-white/85 md:text-2xl"
                  >
                    Wishing you many, many, many more
                    <br className="hidden md:block" />
                    happy returns of the day raa Potti.
                  </motion.p>

                  {/* Blessings */}

                  <motion.div
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                    }}
                    transition={{
                      delay: 1.9,
                      duration: 1,
                    }}
                    className="mx-auto mt-10 max-w-lg space-y-4 text-sm leading-relaxed text-white/60 md:text-base"
                  >
                    <p>
                      ✦ May every silent prayer in your heart
                      find its way to something beautiful.
                    </p>

                    <p>
                      ✦ May your days be filled with genuine
                      smiles, peaceful moments and memories
                      worth keeping.
                    </p>

                    <p>
                      ✦ And may life always give you reasons
                      to smile the way you deserve.
                    </p>
                  </motion.div>

                  {/* Closing */}

                  <motion.p
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 2.5,
                    }}
                    className="mt-12 font-serif text-xl italic text-white/80 md:text-2xl"
                  >
                    Always wishing the absolute best
                    <br />
                    for you. 🤍
                  </motion.p>

                  {/* Final butterfly */}

                  <motion.div
                    animate={{
                      x: [-5, 5, -5],
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                    className="mt-10 text-2xl"
                  >
                    🦋 ✦ 🦋
                  </motion.div>

                  {/* =================================================
    START AGAIN
================================================= */}

<motion.div
  initial={{
    opacity: 0,
    y: 15,
  }}
  animate={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    delay: 3,
    duration: 0.8,
  }}
  className="mt-12"
>
  <Link
    href="/"
    className="group inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/[0.05] px-7 py-3 text-xs tracking-[0.2em] text-white/65 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:text-white"
  >
    <span className="transition-transform duration-300 group-hover:-translate-x-1">
      ←
    </span>

    START THE JOURNEY AGAIN

    <span className="text-white/40">✦</span>
  </Link>
</motion.div>

                </div>

              </motion.div>

            </motion.section>
          )}

        </AnimatePresence>

      </main>
    </TimeTheme>
  );
}
