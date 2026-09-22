"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Sparkles, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import TimeTheme from "../components/TimeTheme";

type Favourite = {
  id: string;
  title: string;
  message: string;
  emoji?: string;
  image?: string;
};

const favourites: Favourite[] = [
  {
    id: "chicken",
    emoji: "🍗",
    title: "Chicken",
    message:
      "The kind of favourite that needs absolutely no explanation. 😂",
  },
  {
    id: "kitkat",
    emoji: "🍫",
    title: "KitKat",
    message:
      "Sometimes a little break really does make everything better.",
  },
  {
    id: "icecream",
    emoji: "🍦",
    title: "Ice Cream",
    message:
      "Any flavour. No complicated rules. Just ice cream. 🤍",
  },
  {
    id: "lays",
    emoji: "🥔",
    title: "Lays",
    message:
      "Just one more handful... and somehow the packet is gone. 😂",
  },
  {
  id: "shinchan",
  image: "/shinchan.png",
  title: "Shinchan",
  message:
    "Because a little bit of childhood never really goes away.",
},
  {
    id: "beaches",
    emoji: "🌊",
    title: "Beaches",
    message:
      "Some places have a way of making everything feel a little lighter.",
  },
  {
  id: "rama",
  image: "/rama.png",
  title: "Lord Rama",
  message:
    "A little faith, a little peace, and something that simply feels close to her.",
},
];

type Position = {
  x: number;
  y: number;
  rotate: number;
};

export default function LittleThings() {
  const [positions, setPositions] = useState<Position[]>([]);
  const [found, setFound] = useState<string[]>([]);
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    const basePositions: Position[] = [
      { x: 8, y: 8, rotate: -6 },
      { x: 67, y: 5, rotate: 5 },
      { x: 37, y: 28, rotate: -3 },
      { x: 4, y: 56, rotate: 4 },
      { x: 72, y: 52, rotate: -5 },
      { x: 27, y: 70, rotate: 6 },
      { x: 53, y: 77, rotate: -4 },
    ];

    setPositions(
      [...basePositions].sort(() => Math.random() - 0.5)
    );
  }, []);

  const openCard = (id: string) => {
    setSelected(id);

    if (!found.includes(id)) {
      setFound((previous) => [...previous, id]);
    };
  };

  const closeCard = () => {
    setSelected(null);
  };

  const selectedItem = favourites.find(
    (item) => item.id === selected
  );

  const allFound = found.length === favourites.length;

  return (
    <TimeTheme>
      <div className="min-h-screen px-5 py-12 md:px-10 md:py-16">

        <div className="mx-auto max-w-6xl">

          {/* HEADER */}
          <div className="relative z-10 text-center">

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: [0.35, 1, 0.35],
                scale: [0.9, 1.1, 0.9],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex justify-center"
            >
              <Sparkles
                size={30}
                strokeWidth={1.2}
                className="text-white"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mt-5 text-xs uppercase tracking-[0.4em] text-white/60"
            >
              
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.15,
              }}
              className="mt-4 font-serif text-5xl font-light text-white md:text-7xl"
            >
              The Little Things
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1,
                delay: 0.5,
              }}
              className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-white/70 md:text-base"
            >
              Seven little things are hidden here.
              <br />
              Find them all. 👀
            </motion.p>

            {/* COUNTER */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-6"
            >
              <span className="rounded-full border border-white/20 bg-white/5 px-5 py-2 text-xs tracking-[0.2em] text-white/70 backdrop-blur-md">
                FOUND {found.length} / 7
              </span>
            </motion.div>

          </div>

          {/* GAME AREA */}
          <div className="relative mx-auto mt-10 h-[570px] max-w-5xl overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.025]">

            {/* GAME INSTRUCTION */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute left-1/2 top-5 z-20 -translate-x-1/2 whitespace-nowrap text-[9px] tracking-[0.3em] text-white/30"
            >
              FIND THE HIDDEN CARDS
            </motion.p>

            {/* HIDDEN CARDS */}
            {positions.length === 7 &&
              favourites.map((item, index) => {

                const isFound = found.includes(item.id);

                return (
                  <motion.button
                    key={item.id}
                    type="button"
                    onClick={() => openCard(item.id)}
                    className={`absolute h-[155px] w-[115px] md:h-[180px] md:w-[135px] ${
                      isFound ? "opacity-30" : ""
                    }`}
                    style={{
                      left: `${positions[index].x}%`,
                      top: `${positions[index].y}%`,
                    }}
                    initial={{
                      opacity: 0,
                      scale: 0.5,
                      rotate: positions[index].rotate,
                    }}
                    animate={{
                      opacity: isFound ? 0.3 : 1,
                      scale: 1,
                      rotate: positions[index].rotate,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.12,
                    }}
                    whileHover={{
                      scale: 1.08,
                      rotate: 0,
                    }}
                    whileTap={{
                      scale: 0.94,
                    }}
                  >

                    {/* CARD BACK */}
                    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/30 bg-white/10 shadow-2xl backdrop-blur-md">

                      {/* Inner border */}
                      <div className="pointer-events-none absolute inset-2 rounded-xl border border-white/10" />

                      {/* Shine */}
                      <motion.div
                        className="absolute -left-20 top-0 h-full w-10 rotate-12 bg-white/10 blur-md"
                        animate={{
                          x: [0, 180],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          repeatDelay: 3,
                          ease: "easeInOut",
                        }}
                      />

                      <motion.div
                        animate={{
                          opacity: [0.35, 0.9, 0.35],
                          scale: [0.9, 1.15, 0.9],
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="text-3xl text-white/80"
                      >
                        ✦
                      </motion.div>

                      <p className="mt-5 text-[8px] tracking-[0.35em] text-white/40">
                        MYSTERY
                      </p>

                    </div>

                  </motion.button>
                );
              })}

            {/* COMPLETION MESSAGE */}
            <AnimatePresence>
              {allFound && !selected && (
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  className="absolute inset-0 z-20 flex items-center justify-center bg-black/10 backdrop-blur-sm"
                >
                  <div className="text-center">

                    <motion.div
                      animate={{
                        rotate: [0, 8, -8, 0],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                      }}
                      className="text-4xl"
                    >
                      ✨
                    </motion.div>

                    <p className="mt-5 text-xs uppercase tracking-[0.35em] text-white/60">
                      7 / 7 discovered
                    </p>

                    <h2 className="mt-3 font-serif text-3xl text-white md:text-4xl">
                      You found them all.
                    </h2>

                    <p className="mt-3 text-sm italic text-white/60">
                      But there&apos;s still more waiting ahead.
                    </p>

                    <Link
                      href="/her-story"
                      className="group mt-7 inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-7 py-3 text-sm text-white backdrop-blur-md transition-all hover:scale-105 hover:bg-white/20"
                    >
                      Continue

                      <ArrowRight
                        size={17}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </Link>

                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

          {/* FULL SCREEN CARD REVEAL */}
          <AnimatePresence>
            {selectedItem && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center bg-black/35 px-5 py-8 backdrop-blur-md"
                onClick={closeCard}
              >

                {/* EXPANDING CARD */}
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.35,
                    rotateY: 90,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    rotateY: 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.35,
                    rotateY: -90,
                  }}
                  transition={{
                    duration: 0.65,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  onClick={(event) => event.stopPropagation()}
                  className="relative flex min-h-[520px] w-full max-w-2xl flex-col items-center justify-center overflow-hidden rounded-[40px] border border-white/30 bg-white/10 p-10 text-center shadow-2xl backdrop-blur-xl md:min-h-[600px]"
                  style={{
                    perspective: "1000px",
                  }}
                >

                  {/* Inner border */}
                  <div className="pointer-events-none absolute inset-3 rounded-[35px] border border-white/10" />

                  {/* Glow */}
                  <motion.div
                    className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-[90px]"
                    animate={{
                      scale: [1, 1.25, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Close button */}
                  <button
                    type="button"
                    onClick={closeCard}
                    className="absolute right-6 top-6 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white/70 transition-all hover:bg-white/20 hover:text-white"
                  >
                    <X size={17} />
                  </button>

                  {/* Found */}
                  <p className="relative z-10 text-[9px] tracking-[0.4em] text-white/40">
                    FOUND ✦
                  </p>

                  {/* Emoji */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.5,
                      y: 20,
                    }}
                    animate={{
                      opacity: 1,
                      scale: [0.9, 1.08, 1],
                      y: 0,
                    }}
                    transition={{
                      delay: 0.25,
                      duration: 0.7,
                    }}
                    className="relative z-10 mt-10 text-7xl md:text-8xl"
                  >
                    {selectedItem.image ? (
  <img
    src={selectedItem.image}
    alt={selectedItem.title}
    className="h-40 w-40 object-contain md:h-52 md:w-52"
  />
) : (
  <div className="text-7xl">
    {selectedItem.emoji}
  </div>
)}
                  </motion.div>

                  {/* Title */}
                  <motion.h2
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.4,
                      duration: 0.6,
                    }}
                    className="relative z-10 mt-8 font-serif text-4xl font-light text-white md:text-6xl"
                  >
                    {selectedItem.title}
                  </motion.h2>

                  {/* Divider */}
                  <motion.div
                    initial={{
                      width: 0,
                    }}
                    animate={{
                      width: 50,
                    }}
                    transition={{
                      delay: 0.65,
                      duration: 0.5,
                    }}
                    className="relative z-10 mt-6 h-px bg-white/30"
                  />

                  {/* Message */}
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
                      delay: 0.75,
                      duration: 0.7,
                    }}
                    className="relative z-10 mt-7 max-w-md text-base leading-relaxed text-white/70 md:text-lg"
                  >
                    {selectedItem.message}
                  </motion.p>

                  {/* Bottom hint */}
                  <motion.p
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                    }}
                    transition={{
                      delay: 1.1,
                    }}
                    className="relative z-10 mt-12 text-[9px] tracking-[0.3em] text-white/30"
                  >
                    TAP OUTSIDE TO CLOSE
                  </motion.p>

                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* FOOTER */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: 1.8,
            }}
            className="mt-8 text-center text-[9px] tracking-[0.3em] text-white/25"
          >
            SOME THINGS ARE BETTER WHEN THEY ARE DISCOVERED ✦
          </motion.p>

        </div>
      </div>
    </TimeTheme>
  );
}