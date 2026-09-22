"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import TimeTheme from "../components/TimeTheme";

const childhoodPhotos = [
  "/childhood-1.jpg",
  "/childhood-2.jpg",
  "/childhood-3.jpg",
];

const presentPhotos = [
  "/present-1.png",
  "/present-2.jpg",
];

export default function HerStory() {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  return (
    <TimeTheme>
      <main className="relative min-h-screen overflow-x-hidden text-white">
        <div className="mx-auto max-w-6xl px-5 py-14 md:px-10 md:py-20">

          {/* =====================================================
              HERO
          ===================================================== */}

          <section className="flex min-h-[88vh] flex-col items-center justify-center text-center">

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[10px] tracking-[0.5em] text-white/45 md:text-xs"
            >
              
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.1, delay: 0.15 }}
              className="mt-6 font-serif text-6xl font-light italic tracking-wide md:text-8xl"
            >
              Her Story
            </motion.h1>

            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 70, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.65 }}
              className="mt-8 h-px bg-white/30"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.85 }}
              className="mt-9 font-serif text-2xl italic text-white/75 md:text-4xl"
            >
              Once a little girl...
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 1 }}
              className="mt-4 text-xs tracking-[0.3em] text-white/35"
            >
              THIS IS WHERE HER STORY BEGINS
            </motion.p>

            <motion.div
              animate={{
                y: [0, 8, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
              }}
              className="mt-20 text-xl text-white/50"
            >
              ↓
            </motion.div>

          </section>


          {/* =====================================================
              THE BEGINNING
          ===================================================== */}

          <section className="py-20 md:py-28">

            <SectionIntro
              label="THE BEGINNING"
              title="Before the Purna of today..."
              text="there was just a little girl."
            />

            {/* CHILDHOOD PHOTOS */}

            <div className="mt-16 grid gap-10 md:grid-cols-3 md:gap-8">

              <PhotoCard
                src={childhoodPhotos[0]}
                label="a little beginning"
                rotate="-5deg"
                delay={0}
                onClick={() => setSelectedPhoto(childhoodPhotos[0])}
              />

              <PhotoCard
                src={childhoodPhotos[1]}
                label="a little memory"
                rotate="3deg"
                delay={0.15}
                className="md:mt-14"
                onClick={() => setSelectedPhoto(childhoodPhotos[1])}
              />

              <PhotoCard
                src={childhoodPhotos[2]}
                label="a little moment"
                rotate="-3deg"
                delay={0.3}
                className="md:mt-5"
                onClick={() => setSelectedPhoto(childhoodPhotos[2])}
              />

            </div>

          </section>


          {/* =====================================================
              LITTLE GIRL
          ===================================================== */}

          <section className="flex min-h-[65vh] items-center justify-center py-24 text-center">

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1 }}
              className="max-w-3xl"
            >

              <motion.div
                animate={{
                  opacity: [0.25, 0.9, 0.25],
                  scale: [0.85, 1.1, 0.85],
                  rotate: [0, 8, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="mb-10 text-3xl text-white/60"
              >
                ✦
              </motion.div>

              <p className="font-serif text-3xl italic leading-relaxed text-white/85 md:text-5xl">
                Little moments.
                <br />
                Little memories.
              </p>

              <p className="mx-auto mt-8 max-w-xl font-serif text-lg italic leading-relaxed text-white/50 md:text-2xl">
                And somehow, they became the beginning
                <br className="hidden md:block" />
                of the girl she would become.
              </p>

            </motion.div>

          </section>


          {/* =====================================================
              GROWING UP
          ===================================================== */}

          <section className="flex min-h-[75vh] items-center justify-center py-24 text-center">

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.1 }}
              className="max-w-3xl"
            >

              <p className="text-[10px] tracking-[0.5em] text-white/35 md:text-xs">
                AND THEN...
              </p>

              <motion.div
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.12, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="mt-10 text-3xl text-white/55"
              >
                ✦
              </motion.div>

              <h2 className="mt-10 font-serif text-5xl font-light italic md:text-7xl">
                She grew.
              </h2>

              <div className="mx-auto mt-8 h-px w-14 bg-white/25" />

              <p className="mt-8 font-serif text-xl italic leading-relaxed text-white/60 md:text-3xl">
                Life changed.
                <br />
                She changed.
              </p>

              <p className="mt-7 font-serif text-lg italic text-white/40 md:text-xl">
                And somewhere along the way...
                <br />
                that little girl became stronger.
              </p>

            </motion.div>

          </section>


          {/* =====================================================
              PRESENT
          ===================================================== */}

          <section className="py-24 md:py-32">

            <SectionIntro
              label="THE PRESENT"
              title="And this is her today."
              text="Still growing. Still becoming."
            />

            <div className="mt-16 grid gap-12 md:grid-cols-2">

              <PhotoCard
                src={presentPhotos[0]}
                label="Eyes That Speak 👁️✨"
                rotate="-3deg"
                large
                delay={0}
                onClick={() => setSelectedPhoto(presentPhotos[0])}
              />

              <PhotoCard
                src={presentPhotos[1]}
                label="Beautiful as Always 🌸"
                rotate="3deg"
                large
                delay={0.2}
                className="md:mt-20"
                onClick={() => setSelectedPhoto(presentPhotos[1])}
              />

            </div>

          </section>


          {/* =====================================================
              THEN → NOW
          ===================================================== */}

          <section className="py-28 md:py-36">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-center"
            >

              <p className="text-[10px] tracking-[0.5em] text-white/35 md:text-xs">
                A LITTLE COMPARISON
              </p>

              <h2 className="mt-5 font-serif text-4xl italic md:text-6xl">
                Then → Now
              </h2>

            </motion.div>


            <div className="mt-16 grid items-center gap-10 md:grid-cols-[1fr_auto_1fr]">

              {/* THEN */}

              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
                className="text-center"
              >

                <p className="mb-6 text-[10px] tracking-[0.45em] text-white/40">
                  THEN
                </p>

                <ComparisonPhoto
                  src={childhoodPhotos[2]}
                  alt="Purna childhood memory"
                  onClick={() => setSelectedPhoto(childhoodPhotos[2])}
                />

              </motion.div>


              {/* ARROW */}

              <motion.div
                animate={{ x: [-5, 5, -5] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="hidden text-3xl text-white/40 md:block"
              >
                →
              </motion.div>

              <div className="text-center text-2xl text-white/35 md:hidden">
                ↓
              </div>


              {/* NOW */}

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
                className="text-center"
              >

                <p className="mb-6 text-[10px] tracking-[0.45em] text-white/40">
                  NOW
                </p>

                <ComparisonPhoto
                  src={presentPhotos[0]}
                  alt="Purna today"
                  onClick={() => setSelectedPhoto(presentPhotos[0])}
                />

              </motion.div>

            </div>


            {/* CHANGE */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="mt-20 text-center"
            >

              <p className="font-serif text-2xl italic text-white/80 md:text-4xl">
                Some things change.
              </p>

              <p className="mt-4 font-serif text-2xl italic text-white/55 md:text-4xl">
                Some things simply grow.
              </p>

            </motion.div>

          </section>


          {/* =====================================================
              FINAL
          ===================================================== */}

          <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.035] px-6 text-center backdrop-blur-sm">

            {/* BACKGROUND PHOTOS */}

            <div className="pointer-events-none absolute inset-0 opacity-[0.08]">

              <BackgroundPhoto
                src={childhoodPhotos[0]}
                className="left-[5%] top-[10%] -rotate-12"
              />

              <BackgroundPhoto
                src={childhoodPhotos[1]}
                className="right-[5%] top-[12%] rotate-12"
              />

              <BackgroundPhoto
                src={presentPhotos[0]}
                className="bottom-[10%] left-[8%] rotate-6"
              />

              <BackgroundPhoto
                src={presentPhotos[1]}
                className="bottom-[8%] right-[8%] -rotate-6"
              />

            </div>


            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="relative z-10 max-w-3xl"
            >

              <motion.div
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [0.85, 1.15, 0.85],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="text-3xl text-white/60"
              >
                ✦
              </motion.div>

              <p className="mt-10 font-serif text-2xl italic text-white/65 md:text-4xl">
                And somehow...
              </p>

              <h2 className="mt-7 font-serif text-5xl font-light italic leading-tight md:text-7xl">
                that little girl
                <br />
                became this.
              </h2>

              <div className="mx-auto my-10 h-px w-16 bg-white/25" />

              <p className="font-serif text-2xl italic text-white/80 md:text-4xl">
                Her own beautiful story.
              </p>

            </motion.div>

          </section>


          {/* =====================================================
              CONTINUE
          ===================================================== */}

          <section className="flex flex-col items-center pb-20 pt-24 text-center">

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="mb-8 text-[10px] tracking-[0.45em] text-white/30"
            >
              
            </motion.p>

            <Link
              href="/people"
              className="group inline-flex items-center rounded-full border border-white/25 bg-white/10 px-9 py-4 text-sm text-white backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:bg-white/20"
            >
              Continue

              <span className="ml-3 transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </Link>

          </section>

        </div>


        {/* =====================================================
            FULLSCREEN IMAGE
        ===================================================== */}

        <AnimatePresence>
          {selectedPhoto && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-5 backdrop-blur-xl"
              onClick={() => setSelectedPhoto(null)}
            >

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.85,
                  y: 25,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.85,
                }}
                transition={{ duration: 0.45 }}
                className="relative h-[82vh] w-full max-w-3xl"
                onClick={(event) => event.stopPropagation()}
              >

                <Image
                  src={selectedPhoto}
                  alt="Purna memory"
                  fill
                  className="rounded-2xl object-contain"
                  sizes="90vw"
                />

                <button
                  type="button"
                  onClick={() => setSelectedPhoto(null)}
                  className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-2xl text-white backdrop-blur-md transition hover:bg-black/70"
                >
                  ×
                </button>

              </motion.div>

            </motion.div>
          )}
        </AnimatePresence>

      </main>
    </TimeTheme>
  );
}


/* =========================================================
   SECTION INTRO
========================================================= */

function SectionIntro({
  label,
  title,
  text,
}: {
  label: string;
  title: string;
  text: string;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 35,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.5,
      }}
      transition={{
        duration: 1,
      }}
      className="mx-auto max-w-3xl text-center"
    >

      <p className="text-[10px] tracking-[0.5em] text-white/35 md:text-xs">
        {label}
      </p>

      <h2 className="mt-5 font-serif text-4xl font-light italic md:text-6xl">
        {title}
      </h2>

      <p className="mt-5 font-serif text-lg italic text-white/50 md:text-2xl">
        {text}
      </p>

    </motion.div>
  );
}


/* =========================================================
   PHOTO CARD
========================================================= */

function PhotoCard({
  src,
  label,
  rotate,
  delay,
  onClick,
  className = "",
  large = false,
}: {
  src: string;
  label: string;
  rotate: string;
  delay: number;
  onClick: () => void;
  className?: string;
  large?: boolean;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 55,
        scale: 0.94,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.9,
        delay,
      }}
      className={`flex justify-center ${className}`}
    >

      <motion.div
        whileHover={{
          scale: 1.04,
          rotate: "0deg",
          y: -8,
        }}
        whileTap={{
          scale: 0.98,
        }}
        style={{
          rotate,
        }}
        onClick={onClick}
        className={`relative w-full cursor-pointer rounded-sm bg-white p-3 pb-12 shadow-2xl ${
          large ? "max-w-lg" : "max-w-sm"
        }`}
      >

        <div className="relative aspect-[4/5] overflow-hidden">

          <Image
            src={src}
            alt="Purna memory"
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
            sizes="(max-width: 768px) 90vw, 500px"
          />

        </div>

        <p className="absolute bottom-3 left-0 right-0 text-center font-serif text-sm italic text-gray-500">
          {label}
        </p>

      </motion.div>

    </motion.div>
  );
}


/* =========================================================
   COMPARISON PHOTO
========================================================= */

function ComparisonPhoto({
  src,
  alt,
  onClick,
}: {
  src: string;
  alt: string;
  onClick: () => void;
}) {
  return (
    <motion.div
      whileHover={{
        scale: 1.025,
        y: -5,
      }}
      onClick={onClick}
      className="relative mx-auto aspect-[4/5] max-w-sm cursor-pointer overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-2 shadow-2xl backdrop-blur-sm"
    >

      <div className="relative h-full w-full overflow-hidden rounded-xl">

        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 90vw, 400px"
        />

      </div>

    </motion.div>
  );
}


/* =========================================================
   BACKGROUND PHOTO
========================================================= */

function BackgroundPhoto({
  src,
  className,
}: {
  src: string;
  className: string;
}) {
  return (
    <div
      className={`absolute h-40 w-28 overflow-hidden rounded-lg ${className}`}
    >

      <Image
        src={src}
        alt=""
        fill
        className="object-cover"
        sizes="120px"
      />

    </div>
  );
}