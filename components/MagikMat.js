"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  { title: "Cognitive Workout", text: "Develop problem-solving, critical thinking, and memory retention." },
  { title: "Confidence Booster", text: "Build capability and confidence through play-based learning." },
  { title: "Comprehensive Learning", text: "From numeracy and literacy to critical thinking — engaging and fun." },
  { title: "Mind-Body Coordination", text: "Synchronize thoughts and actions via movement-based games." },
  { title: "Unwrap Kids' Excitement", text: "Delightful experiences that make kids want to learn more." },
];

export default function MagikMat() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-rose-50 to-stone-100 py-20">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,230,180,0.3),transparent_60%)] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 leading-tight">
              Sarv —{" "}
              <span className="bg-gradient-to-r from-rose-800 to-amber-700 bg-clip-text text-transparent">
                Jump, Play & Learn
              </span>
            </h2>
            <p className="mt-4 text-stone-700 text-lg leading-relaxed">
              A revolutionary interactive learning experience where play meets education. Sarv connects with screens to
              transform every jump, step, and move into an opportunity for joyful learning.
            </p>

            {/* Features List */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: {
                  transition: { staggerChildren: 0.15 },
                },
              }}
              className="mt-8 grid gap-4"
            >
              {features.map((f) => (
                <motion.div
                  key={f.title}
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  whileHover={{
                    scale: 1.03,
                    backgroundColor: "rgba(255,248,230,0.8)",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                  }}
                  className="rounded-xl border border-amber-200 bg-white/80 backdrop-blur-sm p-5 transition-all duration-500"
                >
                  <h3 className="font-semibold text-lg text-rose-900">{f.title}</h3>
                  <p className="mt-1 text-sm text-stone-700 leading-relaxed">{f.text}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-rose-900 to-amber-700 px-5 py-2.5 text-white font-medium shadow-md hover:shadow-lg transition-all"
              >
                🎬 Play Video
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="inline-flex items-center justify-center rounded-md border border-amber-400 bg-white/70 px-5 py-2.5 text-stone-800 font-medium hover:bg-amber-50 hover:text-rose-900 transition-all"
              >
                View More →
              </motion.a>
            </div>
          </motion.div>

          {/* Right Side Visual with Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            {/* Floating blob background */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 2, -2, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-rose-200/60 blur-3xl"
            />

            {/* Product Image Container */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[4/3] w-full max-w-md rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2lkcyUyMHBsYXlpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"
                alt="Sarv Magik Mat Learning Product"
                fill
                className="object-cover"
                priority
              />

              {/* Animated overlay glow */}
              <motion.div
                animate={{ opacity: [0.2, 0.6, 0.2] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-tr from-amber-100/30 via-transparent to-rose-100/40"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
