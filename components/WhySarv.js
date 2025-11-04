"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";

const features = [
  {
    title: "Curated Excellence",
    text: "We deliver vetted programs that drive measurable outcomes for schools and students.",
    image:
      "https://images.unsplash.com/photo-1533222481259-ce20eda1e20b?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
  },
  {
    title: "Hassle-free Adoption",
    text: "Implementation, training, and ongoing support handled end-to-end for a smooth experience.",
    image:
      "https://images.unsplash.com/photo-1596464716127-f2a82984de30?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
  },
  {
    title: "Outcome Focused",
    text: "Aligned with international standards and modern pedagogy for real-world learning results.",
    image:
      "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
  },
];

export default function WhySarv() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slide
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused]);

  // Handlers
  const handlePrev = () =>
    setCurrent((prev) => (prev === 0 ? features.length - 1 : prev - 1));
  const handleNext = () => setCurrent((prev) => (prev + 1) % features.length);

  return (
    <section
      id="about"
      className="relative bg-gradient-to-br from-amber-50 via-rose-50 to-stone-100 py-20 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center relative">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900">
          Why Sarv
        </h2>
        <p className="mt-3 text-stone-700 max-w-2xl mx-auto">
          We integrate the best of educational innovation so schools can focus
          on what matters—teaching and learning.
        </p>

        {/* Slider */}
        <div className="relative mt-12 h-[420px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.9 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute w-full max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-lg flex flex-col sm:flex-row text-left border border-stone-200 bg-gradient-to-br from-white/80 via-amber-50/80 to-rose-50/80 backdrop-blur-md"
            >
              {/* Image */}
              <div className="sm:w-1/2 w-full h-56 sm:h-auto">
                <img
                  src={features[current].image}
                  alt={features[current].title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text */}
              <div className="sm:w-1/2 w-full p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-semibold text-rose-900">
                  {features[current].title}
                </h3>
                <p className="mt-3 text-stone-700 leading-relaxed text-sm sm:text-base">
                  {features[current].text}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-10 p-3 rounded-full bg-white/80 backdrop-blur-md shadow-md hover:scale-110 transition"
          >
            <Star className="text-rose-800 rotate-180" size={22} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-10 p-3 rounded-full bg-white/80 backdrop-blur-md shadow-md hover:scale-110 transition"
          >
            <Star className="text-amber-700" size={22} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                index === current ? "bg-rose-900 w-6" : "bg-stone-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
