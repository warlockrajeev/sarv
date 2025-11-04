"use client";

import { motion } from "framer-motion";

export default function SeedsOfHope() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-rose-50 to-stone-50 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,209,153,0.3),transparent_50%)] pointer-events-none" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Section Label */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-rose-900 to-amber-700 text-white shadow-md"
        >
          Seeds of Hope
        </motion.span>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-5 text-3xl sm:text-4xl font-bold text-stone-900"
        >
          Shaping Tomorrow’s Leaders <br />
          <span className="bg-gradient-to-r from-rose-800 to-amber-700 bg-clip-text text-transparent">
            Through Innovation & Education
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-6 text-stone-700 text-lg max-w-3xl mx-auto leading-relaxed"
        >
          We specialize in transforming educational environments into dynamic
          spaces that inspire curiosity and foster growth. Our cutting-edge lab
          solutions are designed to empower students and educators, making
          learning a truly immersive and meaningful experience.
        </motion.p>

        {/* Accent Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-8 h-1 w-32 bg-gradient-to-r from-rose-900 to-amber-700 mx-auto rounded-full"
        />

        {/* Optional CTA */}
        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="inline-flex mt-10 px-6 py-3 rounded-full bg-gradient-to-r from-rose-900 to-amber-700 text-white font-medium shadow-lg hover:opacity-90 transition-all duration-300"
        >
          Learn More
        </motion.a>
      </div>
    </section>
  );
}
