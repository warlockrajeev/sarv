"use client";

import { motion } from "framer-motion";

const items = [
  { title: "English Language Lab", text: "Master communication with confidence.", image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
  { title: "Math Lab", text: "Discover the beauty of mathematics through hands-on learning.", image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
  { title: "Smart Class Solutions", text: "Elevate teaching with the latest technology.", image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
  { title: "Science Labs", text: "Make science tangible and exciting.", image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
  { title: "Geography Lab", text: "Navigate the wonders of our world.", image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
  { title: "AI & Robotics Lab", text: "Explore the frontiers of technology.", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
];

export default function LabSolutions() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-rose-50 to-stone-50 py-20">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(255,220,180,0.4),transparent_60%)] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-rose-900 to-amber-700 text-white shadow-md">
            Lab & Classroom Solutions
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl font-bold text-stone-900 leading-tight">
            Dynamic spaces that inspire{" "}
            <span className="bg-gradient-to-r from-amber-800 to-rose-800 bg-clip-text text-transparent">
              curiosity and growth
            </span>
          </h2>
          <p className="mt-4 text-stone-700 text-lg leading-relaxed">
            Explore our wide range of labs and classroom innovations designed to empower students and teachers through immersive learning.
          </p>
        </motion.div>

        {/* Animated Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((it) => (
            <motion.div
              key={it.title}
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{
                scale: 1.08,
                borderRadius: "50%",
                rotate: [0, 3, -3, 0],
                backgroundColor: "rgba(255, 248, 230, 0.95)",
                boxShadow: "0 15px 40px rgba(0,0,0,0.12)",
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative overflow-hidden rounded-2xl bg-white border border-amber-100 p-6 shadow-md transition-all duration-700 ease-in-out"
            >
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, type: "spring" }}
                className="w-full h-32 mb-4 rounded-xl overflow-hidden bg-gradient-to-br from-orange-100 to-amber-100"
              >
                <img
                  src={it.image}
                  alt={it.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Background overlay on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-rose-900/5 via-transparent to-amber-800/5 opacity-0 group-hover:opacity-100 transition-all duration-700"
              />

              {/* Title */}
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center text-xl font-semibold bg-gradient-to-r from-rose-900 via-amber-700 to-stone-800 bg-clip-text text-transparent group-hover:from-rose-700 group-hover:to-amber-600 transition-all duration-500"
              >
                {it.title}
              </motion.h3>

              {/* Description with gradient text */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="mt-3 text-center text-base font-medium bg-gradient-to-r from-stone-700 via-amber-700 to-rose-700 bg-clip-text text-transparent leading-relaxed group-hover:from-rose-700 group-hover:to-amber-800 transition-all duration-700"
              >
                {it.text}
              </motion.p>

              {/* Accent line */}
              <motion.div
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.4 }}
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-amber-700 to-rose-800 rounded-tr-xl"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
