"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";

const services = [
  {
    title: "Innovation & Learning Programs",
    subtitle: "Innovation at the core of education",
    points: [
      "Project-based STEM and robotics programs",
      "Exposure to modern tools and competitions",
      "Outcome-driven learning journeys",
    ],
  },
  {
    title: "Curriculum & Teacher Training",
    subtitle: "International-standard classroom systems",
    points: [
      "Structured curriculum and assessments",
      "Teacher enablement and ongoing coaching",
      "Improved classroom outcomes",
    ],
  },
  {
    title: "Interactive Learning Systems",
    subtitle: "Educational games and active learning",
    points: [
      "Math and English concept mastery",
      "Screen-integrated movement-based activities",
      "Engaging practice with real-time feedback",
    ],
  },
  {
    title: "Lab Setup & Solutions",
    subtitle: "Where education meets innovation",
    points: [
      "Tailored STEAM and innovation labs",
      "Advanced technology to enhance learning",
      "Implementation, support, and training",
    ],
  },
];

export default function OurServices() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="franchises"
      className="relative py-24 px-6 sm:px-10 lg:px-16 text-center overflow-hidden"
    >
      {/* Beautiful Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-rose-50 to-amber-100"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.6),_transparent_50%)]"></div>

      <div className="relative mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-rose-800 to-amber-700">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-stone-700">
            End-to-end education solutions delivered by <strong>Sarv</strong> to enrich
            learning at your school.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {services.map((service, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`px-6 py-3 rounded-full text-base font-medium border transition-all duration-300 ${
                active === i
                  ? "bg-gradient-to-r from-rose-900 to-amber-700 text-white border-transparent shadow-lg scale-105"
                  : "bg-white border-gray-300 text-gray-700 hover:bg-amber-50 hover:scale-105"
              }`}
            >
              {service.title}
            </button>
          ))}
        </motion.div>

        {/* Active Content */}
        <div className="mt-8 min-h-[280px] relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 25, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -25, scale: 0.97 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-left mx-auto max-w-3xl bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-10 border border-amber-100"
            >
              <h3 className="text-2xl font-semibold text-gray-900">
                {services[active].title}
              </h3>
              <p className="mt-2 text-base text-gray-600">
                {services[active].subtitle}
              </p>

              <ul className="mt-6 space-y-3">
                {services[active].points.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-base leading-relaxed"
                  >
                    <CheckCircle
                      size={20}
                      className="text-amber-700 mt-1 flex-shrink-0"
                    />
                    <span className="text-gray-800">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
