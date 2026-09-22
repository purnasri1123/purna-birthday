"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, ArrowRight, Heart, Sparkles } from "lucide-react";
import { useState } from "react";
import TimeTheme from "../components/TimeTheme";

const daddyPhoto = "/daddy-purna.png";
// ↑ Nee actual photo filename different ayithe ikkada filename maatrame change cheyyi.

export default function People() {
  const [revealed, setRevealed] = useState(false);
  const [showPhoto, setShowPhoto] = useState(false);

  return (
    <TimeTheme>
      <main className="relative min-h-screen overflow-x-hidden text-white">

        {/* =====================================================
            1. MYSTERIOUS BEGINNING
        ====================================================== */}

        <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">

          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.15em" }}
            animate={{ opacity: 1, letterSpacing: "0.4em" }}
            transition={{ duration: 1.3 }}
            className="text-[10px] text-white/40 md:text-xs"
          >
          
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: [0.35, 1, 0.35],
              scale: [0.9, 1.12, 0.9],
              rotate: [0, 8, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mt-10"
          >
            <Heart
              size={27}
              strokeWidth={1.2}
              className="text-white/70"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.1,
              delay: 0.25,
            }}
            className="mt-8 font-serif text-4xl font-light italic tracking-wide md:text-6xl"
          >
            A bond beyond words
          </motion.h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 60 }}
            transition={{
              duration: 0.8,
              delay: 0.8,
            }}
            className="mt-8 h-px bg-white/30"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 1,
            }}
            className="mt-12 max-w-xl font-serif text-2xl italic leading-relaxed text-white/85 md:text-4xl"
          >
            There is a name that isn&apos;t
            <br />
            really just a name...
          </motion.p>

          {!revealed && (
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 1.8,
                duration: 0.8,
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setRevealed(true)}
              className="group mt-16 flex flex-col items-center gap-4"
            >
              <span className="rounded-full border border-white/25 bg-white/5 px-7 py-3 text-[10px] tracking-[0.35em] text-white/65 backdrop-blur-md transition-all duration-300 group-hover:bg-white/10 group-hover:text-white">
                CLICK TO REVEAL
              </span>

              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                }}
                className="text-white/30"
              >
                <ArrowDown size={17} />
              </motion.div>
            </motion.button>
          )}

          {revealed && (
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
                y: 25,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-14"
            >
              <motion.div
                animate={{
                  opacity: [0.35, 1, 0.35],
                  scale: [0.9, 1.1, 0.9],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                }}
                className="mb-5 flex justify-center"
              >
                <Sparkles
                  size={22}
                  strokeWidth={1.1}
                  className="text-white/60"
                />
              </motion.div>

              <h2 className="font-serif text-5xl font-light md:text-7xl">
                Kittamma
                <span className="ml-2 text-3xl md:text-4xl">🤍</span>
              </h2>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mx-auto mt-6 max-w-lg font-serif text-base italic leading-relaxed text-white/60 md:text-lg"
              >
                A soft little name, given by the person
                <br className="hidden md:block" />
                who knows her in a way nobody else does.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-white/45"
              >
                It isn&apos;t a title used by the world.
                <br />
                It&apos;s a quiet bond, a special word reserved only for her.
              </motion.p>

              <motion.button
                type="button"
                onClick={() => {
                  document
                    .getElementById("bond")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3 }}
                className="mt-14"
              >
                <motion.div
                  animate={{ y: [0, 7, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="flex flex-col items-center gap-3 text-white/35"
                >
                  <span className="text-[9px] tracking-[0.35em]">
                    KEEP GOING
                  </span>
                  <ArrowDown size={16} />
                </motion.div>
              </motion.button>
            </motion.div>
          )}
        </section>


        {/* =====================================================
            2. EMOTIONAL BRIDGE
        ====================================================== */}

        <AnimatePresence>
          {revealed && (
            <motion.section
              id="bond"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="flex min-h-screen items-center justify-center px-6 py-24"
            >
              <div className="mx-auto max-w-3xl text-center">

                <motion.div
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="mb-12 flex justify-center"
                >
                  <Heart
                    size={25}
                    strokeWidth={1.1}
                    className="text-white/50"
                  />
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9 }}
                  className="font-serif text-2xl italic leading-relaxed text-white/85 md:text-4xl"
                >
                  Some bonds don&apos;t need heavy words
                  <br className="hidden md:block" />
                  or long explanations.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.9,
                    delay: 0.25,
                  }}
                  className="mx-auto mt-12 max-w-2xl font-serif text-lg italic leading-loose text-white/60 md:text-2xl"
                >
                  It&apos;s in the way a father&apos;s biggest anger
                  vanishes in a single second just seeing her smile.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.9,
                    delay: 0.45,
                  }}
                  className="mx-auto mt-8 max-w-2xl font-serif text-lg italic leading-loose text-white/60 md:text-2xl"
                >
                  It&apos;s in the unspoken protection,
                  holding her like pure gold.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: 0.7,
                  }}
                  className="mx-auto my-14 h-px w-16 bg-white/25"
                />

                <motion.p
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.9,
                    delay: 0.8,
                  }}
                  className="font-serif text-2xl italic leading-relaxed text-white/85 md:text-4xl"
                >
                  And in return...
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.9,
                    delay: 1,
                  }}
                  className="mx-auto mt-7 max-w-2xl font-serif text-xl italic leading-relaxed text-white/70 md:text-3xl"
                >
                  a daughter for whom her father&apos;s world
                  means more than anything else in this universe.
                </motion.p>

                <motion.button
                  type="button"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 1.4,
                  }}
                  onClick={() => setShowPhoto(true)}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="mt-20 rounded-full border border-white/25 bg-white/5 px-8 py-4 text-[10px] tracking-[0.35em] text-white/65 backdrop-blur-md transition-all hover:bg-white/10 hover:text-white"
                >
                  REVEAL THE MOMENT
                </motion.button>

              </div>
            </motion.section>
          )}
        </AnimatePresence>


        {/* =====================================================
            3. PHOTO REVEAL
        ====================================================== */}

        <AnimatePresence>
          {showPhoto && (
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="flex min-h-screen flex-col items-center justify-center px-6 py-24"
            >

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-[10px] tracking-[0.45em] text-white/35"
              >
                THE MOMENT
              </motion.p>

              {/* PHOTO */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.8,
                  y: 50,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                transition={{
                  duration: 1.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-10 w-full max-w-md"
              >
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 25px rgba(255,255,255,0.05)",
                      "0 0 55px rgba(255,255,255,0.14)",
                      "0 0 25px rgba(255,255,255,0.05)",
                    ],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="rounded-[1.5rem] border border-white/20 bg-white/10 p-2 backdrop-blur-md"
                >
                  <div className="relative overflow-hidden rounded-[1.2rem] bg-black/20">

                    <motion.div
                      initial={{ scale: 1 }}
                      animate={{ scale: 1.025 }}
                      transition={{
                        duration: 8,
                        ease: "linear",
                      }}
                      className="relative"
                    >
                      <Image
                        src={daddyPhoto}
                        alt="Purna with her daddy"
                        width={700}
                        height={1000}
                        priority
                        className="h-auto w-full object-contain"
                      />
                    </motion.div>

                  </div>
                </motion.div>
              </motion.div>

              {/* CAPTION */}

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.7,
                }}
                className="mt-10 max-w-xl text-center font-serif text-base italic leading-relaxed text-white/60 md:text-lg"
              >
                Somewhere between a father&apos;s favorite nickname
                <br className="hidden md:block" />
                and a daughter&apos;s warm hug...
                <br />
                a lifetime of love lives.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{
                  delay: 1.1,
                  duration: 0.7,
                }}
                className="my-12 h-px w-14 bg-white/25"
              />

              {/* ENDING */}

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  delay: 1.3,
                }}
                className="max-w-2xl text-center font-serif text-2xl italic leading-relaxed text-white/80 md:text-4xl"
              >
                No matter how big she grows,
                <br />
                to him, she will always be
                <br />
                his little Kittamma.
              </motion.p>

              {/* HEART */}

              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{
                  opacity: [0.4, 1, 0.4],
                  scale: [0.9, 1.1, 0.9],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: 1.6,
                }}
                className="mt-10"
              >
                <Heart
                  size={25}
                  strokeWidth={1.1}
                  className="text-white/60"
                />
              </motion.div>

              {/* FINAL BIRTHDAY MESSAGE */}

              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.2,
                  delay: 2,
                }}
                className="mt-28 text-center"
              >
                <p className="text-[9px] tracking-[0.4em] text-white/30">
                  WITH ALL THE LOVE
                </p>

                <h2 className="mt-5 font-serif text-4xl font-light italic text-white md:text-6xl">
                  Happy Birthday,
                  <br />
                  <span className="text-white/90">
                    Kittamma
                  </span>
                  <span className="ml-2">🤍</span>
                </h2>
              </motion.div>

              {/* CONTINUE */}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: 2.7,
                  duration: 1,
                }}
                className="mt-24 pb-10"
              >
                <Link
                  href="/rama"
                  className="group inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-8 py-3 text-xs text-white/60 backdrop-blur-md transition-all hover:scale-105 hover:bg-white/10 hover:text-white"
                >
                  Continue

                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </motion.div>

            </motion.section>
          )}
        </AnimatePresence>

      </main>
    </TimeTheme>
  );
}