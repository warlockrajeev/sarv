"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

function MenuIcon({ className = "w-6 h-6" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
    </svg>
  );
}

function CloseIcon({ className = "w-6 h-6" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [academicsOpen, setAcademicsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/60 backdrop-blur-xl shadow-[0_1px_10px_rgba(0,0,0,0.08)]">
      {/* Top Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 font-semibold text-gray-900">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-amber-700 to-rose-800 text-white text-lg font-bold shadow-md">
              S
            </span>
            <span className="text-xl font-bold tracking-tight">Sarv Education</span>
          </Link>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="franchise-preschool"
              className="px-5 py-2.5 rounded-md bg-gradient-to-r from-rose-900 to-amber-700 text-white font-medium hover:opacity-90 transition-all duration-200 shadow-sm"
            >
              Franchise – Preschool
            </Link>
            <Link
              href="/franchise-k12"
              className="px-5 py-2.5 rounded-md border border-amber-700 text-amber-800 font-medium hover:bg-amber-700 hover:text-white transition-all duration-200"
            >
              Franchise – K12
            </Link>
            <Link
              href="/franchise-k12#transformation"
              className="px-5 py-2.5 rounded-md border border-rose-900 text-rose-900 font-medium hover:bg-rose-900 hover:text-white transition-all duration-200"
            >
              School Transformation
            </Link>
            <Link
              href="/360-edtech"
              className="px-5 py-2.5 rounded-md border border-amber-700 text-amber-800 font-medium hover:bg-amber-700 hover:text-white transition-all duration-200"
            >
              360 Ed-Tech
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 transition"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle Menu"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Secondary Navigation */}
      <div className="border-t border-amber-700 bg-gradient-to-r from-amber-700 to-rose-800 relative">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ul className="flex overflow-x-auto h-11 items-center text-sm text-white/90 gap-6">
            {[
              ["About Us", "#about"],
              ["Preschool", "#preschool"],
              ["K12", "#k12"],
              ["Academics", "#academics"],
              ["Soul Science", "#soul-science"],
              ["LearnLeap", "#learnleap"],
              ["Special Projects", "#projects"],
              ["Partner With Us", "#partner"],
              ["Media", "#media"],
              ["Alumni", "#alumni"],
              ["Blogs", "#blogs"],
              ["Career", "#career"],
            ].map(([label, href]) => (
              <li key={label}
                  onMouseEnter={() => label === "Academics" && setAcademicsOpen(true)}
                  onMouseLeave={() => label === "Academics" && setAcademicsOpen(false)}
              >
                <Link
                  href={href}
                  className="relative px-1 hover:text-white transition group"
                >
                  {label}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Academics Dropdown Overlay */}
        <AnimatePresence>
          {academicsOpen && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              className="absolute left-0 right-0 top-full z-50"
              onMouseEnter={() => setAcademicsOpen(true)}
              onMouseLeave={() => setAcademicsOpen(false)}
            >
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mt-2 rounded-xl bg-white shadow-xl ring-1 ring-black/5 overflow-hidden">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {[ 
                      { label: "Pre Primary Years Curriculum", href: "/academics/pre-primary" },
                      { label: "Primary Years Curriculum", href: "/academics/primary" },
                      { label: "Middle Years Curriculum", href: "/academics/middle" },
                      { label: "High School Curriculum", href: "/academics/high-school" },
                      { label: "Teacher Training and Support", href: "/academics/teacher-training" },
                    ].map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="flex items-center justify-between gap-4 px-5 py-4 hover:bg-amber-50 transition"
                      >
                        <span className="text-stone-800 text-sm font-medium">{item.label}</span>
                        <span className="text-amber-700">→</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Scrolling Ticker */}
      <div className="bg-rose-900 text-white/90 border-b border-rose-950 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap py-2 text-sm font-medium">
          <span className="mx-6">
            Transforming India, One School at a Time with Cutting-Edge Digital Learning Solutions
          </span>
          <span className="mx-6">
            Your Trusted Partner for Learning and Global Success
          </span>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white border-t border-gray-200 shadow-inner"
          >
            <div className="px-4 py-4 space-y-4">
              <div className="flex flex-col gap-3">
                <Link
                  href="#franchises"
                  className="rounded-md bg-gradient-to-r from-rose-900 to-amber-700 text-white px-5 py-3 text-center font-medium"
                  onClick={() => setOpen(false)}
                >
                  Franchise – Preschool
                </Link>
                <Link
                  href="#franchises"
                  className="rounded-md border border-amber-700 text-amber-800 px-5 py-3 text-center font-medium"
                  onClick={() => setOpen(false)}
                >
                  Franchise – K12
                </Link>
                <Link
                  href="#transformation"
                  className="rounded-md border border-rose-900 text-rose-900 px-5 py-3 text-center font-medium"
                  onClick={() => setOpen(false)}
                >
                  School Transformation
                </Link>
                <Link
                  href="/360-edtech"
                  className="rounded-md border border-amber-700 text-amber-800 px-5 py-3 text-center font-medium"
                  onClick={() => setOpen(false)}
                >
                  360 Ed-Tech
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-2 text-sm">
                {[
                  ["About Us", "#about"],
                  ["Preschool", "#preschool"],
                  ["K12", "#k12"],
                  ["Academics", "#academics"],
                  ["Soul Science", "#soul-science"],
                  ["LearnLeap", "#learnleap"],
                  ["Special Projects", "#projects"],
                  ["Partner With Us", "#partner"],
                  ["Media", "#media"],
                  ["Alumni", "#alumni"],
                  ["Blogs", "#blogs"],
                  ["Career", "#career"],
                ].map(([label, href]) => (
                  <Link
                    key={label}
                    href={href}
                    className="px-3 py-2 rounded-md hover:bg-gray-50 transition"
                    onClick={() => setOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Marquee Animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: inline-block;
          white-space: nowrap;
          animation: marquee 18s linear infinite;
        }
      `}</style>
    </header>
  );
}
