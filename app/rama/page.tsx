"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import TimeTheme from "../components/TimeTheme";

export default function RamaPage() {
  const [showBlessing, setShowBlessing] = useState(false);
  

  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Floating divine particles
  const particles = useMemo(() => {
    return Array.from({ length: 28 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() > 0.7 ? 4 : 2,
      duration: 4 + Math.random() * 5,
      delay: Math.random() * 4,
    }));
  }, []);

  


  return (
    <TimeTheme>
      <main className="relative min-h-screen overflow-hidden text-white">

        {/* =====================================================
            DIVINE GOLDEN AMBIENCE
        ====================================================== */}

        <motion.div
          className="pointer-events-none absolute left-1/2 top-[18%] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-amber-300/10 blur-[130px]"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.35, 0.6, 0.35],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* =====================================================
            FLOATING GOLDEN PARTICLES
        ====================================================== */}

        {particles.map((particle) => (
          <motion.span
            key={particle.id}
            className="pointer-events-none absolute rounded-full bg-amber-200"
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
              boxShadow: "0 0 10px rgba(251,191,36,0.7)",
            }}
            animate={{
              y: [0, -25, 0],
              opacity: [0.15, 0.8, 0.15],
              scale: [0.8, 1.3, 0.8],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        
        {/* =====================================================
            MAIN CONTENT
        ====================================================== */}

        <section className="relative z-20 mx-auto max-w-6xl px-5 py-16 md:px-10">

          {/* =================================================
              HERO
          ================================================== */}

          <section className="flex min-h-screen flex-col items-center justify-center text-center">

            <motion.p
              initial={{ opacity: 0, letterSpacing: "0.1em" }}
              animate={{
                opacity: 1,
                letterSpacing: "0.45em",
              }}
              transition={{ duration: 1.3 }}
              className="text-xs text-white/45"
            >
            </motion.p>

            <motion.h1
              initial={{
                opacity: 0,
                y: 35,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1.3,
                delay: 0.2,
              }}
              className="mt-6 font-serif text-5xl font-light italic md:text-7xl"
            >
              Her Divine Sanctuary
            </motion.h1>

            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{
                width: 90,
                opacity: 1,
              }}
              transition={{
                duration: 1,
                delay: 0.8,
              }}
              className="my-7 h-px bg-amber-200/40"
            />

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                delay: 1,
              }}
              className="max-w-xl font-serif text-xl italic text-white/65 md:text-2xl"
            >
              A place where her heart feels at home.
            </motion.p>

            {/* =================================================
                RAMA VISUAL
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
                y: 30,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{
                duration: 1.5,
                delay: 0.7,
              }}
              className="relative mt-14"
            >

              {/* Outer aura */}

              <motion.div
                className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-300/15 blur-[70px] md:h-[470px] md:w-[470px]"
                animate={{
                  scale: [0.9, 1.08, 0.9],
                  opacity: [0.35, 0.65, 0.35],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Rama */}

              <motion.div
                animate={{
                  y: [0, -6, 0],
                  scale: [1, 1.012, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10"
              >
                <Image
                  src="/rama2.png"
                  alt="Lord Rama"
                  width={440}
                  height={560}
                  priority
                  className="h-auto max-h-[520px] w-auto object-contain drop-shadow-[0_0_35px_rgba(251,191,36,0.25)]"
                />
              </motion.div>

              {/* Lotus */}

              <motion.div
                animate={{
                  opacity: [0.4, 1, 0.4],
                  scale: [0.95, 1.08, 0.95],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-5 left-1/2 z-20 -translate-x-1/2 text-3xl"
              >
                🪷
              </motion.div>

            </motion.div>

            {/* Scroll indicator */}

            <motion.div
              animate={{
                y: [0, 8, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
              }}
              className="mt-14 text-xl text-white/40"
            >
              ↓
            </motion.div>

          </section>

          {/* =================================================
              THE SECRET KEEPER
          ================================================== */}

          <motion.section
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 1.1,
            }}
            className="flex min-h-[80vh] items-center justify-center text-center"
          >

            <div className="max-w-3xl">

              <div className="mb-10 text-2xl text-amber-200/60">
                ✦
              </div>

              <p className="font-serif text-2xl italic leading-relaxed text-white/85 md:text-4xl">
                In a world where everyone sees her smile,
                <br />
                there is one place where she can simply be herself.
              </p>

              <p className="mt-10 font-serif text-xl italic leading-relaxed text-white/55 md:text-2xl">
                When the noise of the world gets a little too heavy...
                <br />
                and there are thoughts she cannot share with anyone else...
              </p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 1 }}
                className="mt-12 font-serif text-4xl italic text-amber-200/90 md:text-6xl"
              >
                She turns to Lord Rama.
              </motion.p>

              <p className="mx-auto mt-10 max-w-2xl font-serif text-lg italic leading-relaxed text-white/45 md:text-xl">
                To her, He isn't just a prayer.
                <br />
                He is her quiet comfort,
                her silent strength,
                and the one who listens to every
                unspoken thought in her heart.
              </p>

            </div>

          </motion.section>

          {/* =================================================
              HER FAITH
          ================================================== */}

          <motion.section
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.35,
            }}
            transition={{
              duration: 1,
            }}
            className="flex min-h-[70vh] items-center justify-center text-center"
          >

            <div className="max-w-3xl">

              <p className="text-xs tracking-[0.45em] text-amber-100/40">
                HER FAITH
              </p>

              <h2 className="mt-6 font-serif text-4xl italic md:text-6xl">
                A quiet kind of faith.
              </h2>

              <div className="mx-auto my-10 flex items-center justify-center gap-4 text-amber-200/50">
                <span className="h-px w-16 bg-amber-200/20" />
                ✦
                <span className="h-px w-16 bg-amber-200/20" />
              </div>

              <p className="font-serif text-2xl italic leading-relaxed text-white/80 md:text-4xl">
                She carries a heart that values
                <br />
                purity, patience,
                <br />
                and doing what is right —
                <br />
                even when it's hard.
              </p>

              <p className="mt-10 font-serif text-lg italic leading-relaxed text-white/45 md:text-2xl">
                Her devotion isn't about grand gestures...
                <br />
                it's a quiet, deep faith
                <br />
                that guides her through every turn of life.
              </p>

            </div>

          </motion.section>

          {/* =================================================
              BLESSING INTRO
          ================================================== */}

          <motion.section
            initial={{
              opacity: 0,
              scale: 0.96,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 1,
            }}
            className="flex min-h-[80vh] items-center justify-center"
          >

            <div className="w-full max-w-3xl text-center">

              <p className="text-xs tracking-[0.45em] text-white/35">
                A LITTLE BLESSING
              </p>

              <h2 className="mt-5 font-serif text-4xl italic md:text-6xl">
                For you
              </h2>

              <p className="mx-auto mt-6 max-w-xl font-serif text-lg italic text-white/45">
                Some wishes are never spoken aloud.
                <br />
                Maybe they don't have to be.
              </p>

              {/* Reveal button */}

              {!showBlessing && (
                <motion.button
                  onClick={() => setShowBlessing(true)}
                  whileHover={{
                    scale: 1.04,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="mt-12 rounded-full border border-amber-200/30 bg-amber-100/5 px-8 py-3 font-serif text-sm italic text-amber-100/75 backdrop-blur-xl transition hover:bg-amber-100/10"
                >
                  Open the blessing ✦
                </motion.button>
              )}

              {/* Blessing card */}

              {showBlessing && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 30,
                    scale: 0.96,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  transition={{
                    duration: 1,
                  }}
                  className="relative mt-12 overflow-hidden rounded-[2rem] border border-amber-200/30 bg-black/10 p-8 shadow-[0_0_70px_rgba(251,191,36,0.08)] backdrop-blur-xl md:p-14"
                >

                  {/* Card glow */}

                  <motion.div
                    className="absolute left-1/2 top-0 h-40 w-72 -translate-x-1/2 rounded-full bg-amber-300/10 blur-[70px]"
                    animate={{
                      opacity: [0.3, 0.7, 0.3],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                    }}
                  />

                  <div className="relative z-10">

                    <div className="text-2xl text-amber-200/80">
                      ✨
                    </div>

                    <h3 className="mt-5 font-serif text-3xl italic text-amber-100/90 md:text-4xl">
                      A Divine Blessing
                    </h3>

                    <div className="mx-auto my-8 h-px w-20 bg-amber-200/30" />

                    <p className="font-serif text-xl italic leading-relaxed text-white/80 md:text-2xl">
                      May the one who knows your heart
                      <br />
                      always protect your peace.
                    </p>

                    <p className="mt-8 font-serif text-lg italic leading-relaxed text-white/60 md:text-xl">
                      May every silent prayer you offered in secret
                      <br />
                      be answered with grace,
                      happiness, and clarity.
                    </p>

                    <p className="mt-8 font-serif text-lg italic leading-relaxed text-white/60 md:text-xl">
                      You will never have to walk alone...
                      <br />
                      because the righteousness you hold in your heart
                      <br />
                      will always guide you to where you truly belong.
                    </p>

                    <p className="mt-8 font-serif text-lg italic leading-relaxed text-amber-100/75 md:text-xl">
                      May He grant you every good thing
                      <br />
                      your pure soul silently wishes for.
                    </p>

                    <motion.div
                      animate={{
                        scale: [0.9, 1.1, 0.9],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                      }}
                      className="mt-8 text-3xl"
                    >
                      🪷
                    </motion.div>

                  </div>

                </motion.div>
              )}

            </div>

          </motion.section>

          {/* =================================================
              FINAL THOUGHT
          ================================================== */}

          <motion.section
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.35,
            }}
            transition={{
              duration: 1.2,
            }}
            className="flex min-h-[75vh] flex-col items-center justify-center text-center"
          >

            <motion.div
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [0.9, 1.1, 0.9],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="mb-10 text-2xl text-amber-200/60"
            >
              ✦
            </motion.div>

            <p className="font-serif text-2xl italic text-white/75 md:text-4xl">
              Some people pray for miracles.
            </p>

            <p className="mt-4 font-serif text-2xl italic text-white/55 md:text-4xl">
              Some simply carry faith in their hearts.
            </p>

            <div className="mx-auto my-10 h-px w-16 bg-amber-200/25" />

            <p className="font-serif text-3xl italic text-amber-100/80 md:text-5xl">
              And perhaps...
            </p>

            <p className="mt-5 font-serif text-2xl italic text-white/65 md:text-4xl">
              that's where her strength begins.
            </p>

          </motion.section>

          {/* =================================================
              CONTINUE
          ================================================== */}

          <motion.section
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1,
            }}
            className="flex flex-col items-center pb-24 text-center"
          >

            <Link
              href="/surprise"
              className="group rounded-full border border-amber-100/25 bg-white/5 px-10 py-4 text-sm text-white/75 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:bg-white/10"
            >
              Continue

              <span className="ml-3 inline-block transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </Link>

          </motion.section>

        </section>
      </main>
    </TimeTheme>
  );
}