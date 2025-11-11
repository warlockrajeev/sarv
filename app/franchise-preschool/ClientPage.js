"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FixedEnquiryButton from "@/components/FixedEnquiryButton";

export default function ClientFranchisePreschoolPage() {
  const [activeSection, setActiveSection] = useState("INFRASTRUCTURE");
  const [openFaq, setOpenFaq] = useState(null);

  // Content for each clickable section
  const data = {
    INFRASTRUCTURE: [
      "Land Selection Guidance",
      "Planning & Design Consultation",
      "Project Planning & Execution Strategy",
      "Interior Layout & Finishing Consultation",
      "Material Procurement Assistance",
    ],
    "ACADEMIC OFFERINGS": [
      "Curriculum aligned with NEP 2020",
      "Activity-based learning modules",
      "Digital teaching aids and worksheets",
      "Assessment and feedback tools",
      "Holistic child development programs",
    ],
    "TEACHER TRAINING & SUPPORT": [
      "Certified Teacher Training Modules",
      "Ongoing Mentorship and Support",
      "Workshops on Classroom Management",
      "Child Psychology & Development Training",
      "Monthly Performance Evaluations",
    ],
    "HR & FINANCE": [
      "Recruitment Assistance",
      "Staff Training and Onboarding",
      "Payroll Management Templates",
      "Financial Planning Support",
      "Profitability Optimization Tools",
    ],
    "OPERATION SUPPORT": [
      "Operational Manuals and SOPs",
      "Parent Communication Tools",
      "Safety and Hygiene Protocols",
      "Academic Calendar Setup",
      "Audit and Compliance Assistance",
    ],
    "BRANDING & MARKETING": [
      "Local Marketing Strategy Assistance",
      "Launch Event Planning",
      "Social Media Promotions",
      "Print & Outdoor Campaign Templates",
      "Lead Management System",
    ],
    "IT SUPPORT": [
      "School Management Software",
      "Attendance & Fee Tracking",
      "Mobile App Integration",
      "Tech Support Helpline",
      "Regular Software Updates",
    ],
  };

  const steps = [
    { title: "Fill the Franchise Form", img: "https://images.unsplash.com/photo-1759752393975-7ca7b302fcc6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9ybSUyMGZpbGxpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600" },
    { title: "Sarv Edu Care Interaction", img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW50ZXJhY3Rpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600" },
    { title: "KYC Check", img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGNoZWNrfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600" },
    { title: "Face-to-Face Meeting", img: "https://images.unsplash.com/photo-1568992688065-536aad8a12f6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWVldGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600" },
  ];

 

  const faqs = [
    {
      q: "What is the initial investment required?",
      a: "Total project cost is typically ₹10–12 Lakh including the franchise fee, depending on city and space fit-out.",
    },
    {
      q: "How soon can we expect ROI?",
      a: "With proper execution, many partners target up to 200% ROI over the first few academic cycles.",
    },
    {
      q: "Do you help with recruitment and training?",
      a: "Yes. We support hiring, onboarding, and provide structured teacher training and ongoing mentorship.",
    },
    {
      q: "Is marketing support provided?",
      a: "We provide launch support, local marketing playbooks, digital creatives, and campaign guidance.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-amber-50 to-white text-gray-800">
      {/* Mount enquiry modal (hidden floating button) so page button can trigger it */}
      <FixedEnquiryButton hideFloatingButton />
      {/* Right-side Apply Now trigger */}
      <ApplyNowTrigger />
      {/* ---------------- HERO SECTION ---------------- */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-rose-50 to-white py-20">
        <div className="absolute -top-16 -right-16 h-72 w-72 rounded-full bg-rose-200 opacity-50 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-32 w-32 bg-amber-200 rounded-full blur-3xl opacity-50" />

        <div className="relative z-10 text-center max-w-3xl mx-auto px-3">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-gradient-to-r from-rose-900 to-amber-700 bg-clip-text leading-tight whitespace-nowrap">
            Partner with Samagra Balvatika
          </h1>
          <p className="mt-4 text-stone-700 text-lg">
            Join India’s fastest-growing preschool network and shape the future of education.
            With our complete franchise model — success begins from day one.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#contact"
            className="inline-block mt-8 px-8 py-3 bg-gradient-to-r from-rose-900 to-amber-700 text-white font-semibold rounded-md shadow-md hover:shadow-lg transition-all"
          >
            Become a Partner
          </motion.a>
        </div>
      </section>

      {/* ---------------- WHY CHOOSE SECTION ---------------- */}
      <section className="py-20 bg-gradient-to-br from-white via-amber-50/30 to-rose-50/30">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-gradient-to-r from-rose-900 to-amber-700 bg-clip-text">
              Why Choose Samagra Balvatika for Your Preschool Franchise?
            </h2>
            <p className="mt-4 text-xl text-stone-700 max-w-3xl mx-auto">
              See the comprehensive support system that transforms your preschool into a success story
            </p>
          </motion.div>

          {/* Category Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {Object.keys(data).map((key) => (
              <motion.button
                key={key}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveSection(key)}
                className={`px-6 py-3 font-semibold rounded-full transition-all duration-300 shadow-md ${
                  activeSection === key
                    ? "bg-gradient-to-r from-rose-900 to-amber-700 text-white shadow-lg"
                    : "bg-white text-stone-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-amber-50 hover:shadow-lg border border-orange-200"
                }`}
              >
                {key}
              </motion.button>
            ))}
          </motion.div>

          {/* Main Content Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8"
            >
              {data[activeSection].map((item, i) => (
                <motion.div
                  key={`${activeSection}-${i}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden border border-orange-100"
                >
                  {/* Large Prominent Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={
                        activeSection === 'INFRASTRUCTURE' ? (
                          i === 0 ? 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' :
                          i === 1 ? 'https://images.unsplash.com/photo-1503387837-b154d5074bd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' :
                          i === 2 ? 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' :
                          i === 3 ? 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' :
                          'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
                        ) :
                        activeSection === 'ACADEMIC OFFERINGS' ? (
                          i === 0 ? 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' :
                          i === 1 ? 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' :
                          i === 2 ? 'https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' :
                          i === 3 ? 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' :
                          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
                        ) :
                        activeSection === 'TEACHER TRAINING & SUPPORT' ? (
                          i === 0 ? 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' :
                          i === 1 ? 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' :
                          i === 2 ? 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' :
                          i === 3 ? 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' :
                          'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
                        ) :
                        activeSection === 'HR & FINANCE' ? (
                          i === 0 ? 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' :
                          i === 1 ? 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' :
                          i === 2 ? 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' :
                          i === 3 ? 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' :
                          'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
                        ) :
                        activeSection === 'OPERATION SUPPORT' ? (
                          i === 0 ? 'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' :
                          i === 1 ? 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' :
                          i === 2 ? 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' :
                          i === 3 ? 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' :
                          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
                        ) :
                        activeSection === 'BRANDING & MARKETING' ? (
                          i === 0 ? 'https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' :
                          i === 1 ? 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' :
                          i === 2 ? 'https://images.unsplash.com/photo-1562577309-2592ab84b1bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' :
                          i === 3 ? 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' :
                          'https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
                        ) :
                        'https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
                      }
                      alt={item}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Number badge */}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full w-8 h-8 flex items-center justify-center shadow-lg">
                      <span className="text-stone-800 font-bold text-sm">{i + 1}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-stone-900 mb-3 group-hover:text-rose-900 transition-colors">
                      {item}
                    </h3>

                    {/* Visual indicators */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-stone-600">Included in your franchise package</span>
                    </div>

                    {/* Supporting text with icons */}
                    <div className="space-y-2 text-sm text-stone-700">
                      {activeSection === 'INFRASTRUCTURE' && (
                        <div className="flex items-center gap-2">
                          <span className="text-amber-600">🏗️</span>
                          <span>Complete setup assistance</span>
                        </div>
                      )}
                      {activeSection === 'ACADEMIC OFFERINGS' && (
                        <div className="flex items-center gap-2">
                          <span className="text-blue-600">📚</span>
                          <span>NEP 2020 aligned curriculum</span>
                        </div>
                      )}
                      {activeSection === 'TEACHER TRAINING & SUPPORT' && (
                        <div className="flex items-center gap-2">
                          <span className="text-purple-600">👩‍🏫</span>
                          <span>Certified training programs</span>
                        </div>
                      )}
                      {activeSection === 'HR & FINANCE' && (
                        <div className="flex items-center gap-2">
                          <span className="text-green-600">💼</span>
                          <span>Complete business support</span>
                        </div>
                      )}
                      {activeSection === 'OPERATION SUPPORT' && (
                        <div className="flex items-center gap-2">
                          <span className="text-indigo-600">⚙️</span>
                          <span>Ongoing operational guidance</span>
                        </div>
                      )}
                      {activeSection === 'BRANDING & MARKETING' && (
                        <div className="flex items-center gap-2">
                          <span className="text-pink-600">📢</span>
                          <span>Marketing & brand support</span>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ---------------- PRESCHOOL REQUIREMENTS (REDESIGNED) ---------------- */}
      <section className="py-20 bg-gradient-to-b from-amber-50 to-rose-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-gradient-to-r from-rose-900 to-amber-700 bg-clip-text">
              Preschool Franchise Requirements
            </h2>
            <p className="mt-3 text-stone-600">A Strong & Sure Start</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <motion.div whileHover={{ y: -8, scale: 1.02 }} className="group relative rounded-2xl border border-amber-200 bg-white shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="absolute -top-6 -right-6 h-20 w-20 bg-amber-200/40 rounded-full blur-2xl" />

              {/* Large Image Section */}
              <div className="relative h-32 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Space Required - Modern preschool facility"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1">
                  <span className="text-stone-800 font-semibold text-sm">Space Planning</span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-stone-900 mb-4 group-hover:text-rose-900 transition-colors">Space Required</h3>
                <div className="space-y-3">
                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-3 rounded-lg">
                    <p className="text-stone-700 font-medium text-sm">1500 - 2000 sq.ft</p>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="text-stone-500 text-sm font-medium">OR</span>
                  </div>
                  <div className="bg-gradient-to-r from-rose-50 to-pink-50 p-3 rounded-lg">
                    <p className="text-stone-700 font-medium text-sm">2000 - 5000+ sq.ft</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div whileHover={{ y: -8, scale: 1.02 }} className="group relative rounded-2xl border border-rose-200 bg-white shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="absolute -top-6 -right-6 h-20 w-20 bg-rose-200/40 rounded-full blur-2xl" />

              {/* Large Image Section */}
              <div className="relative h-32 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Total Project Cost - Financial planning"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1">
                  <span className="text-stone-800 font-semibold text-sm">Investment</span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-stone-900 mb-4 group-hover:text-rose-900 transition-colors">Total Project Cost</h3>
                <div className="space-y-3">
                  <div className="bg-gradient-to-r from-rose-50 to-pink-50 p-3 rounded-lg">
                    <p className="text-stone-700 font-medium text-sm">₹3–12 Lakh</p>
                    <p className="text-stone-500 text-xs">(Incl. Franchise Fee)</p>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="text-stone-500 text-sm font-medium">OR</span>
                  </div>
                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-3 rounded-lg">
                    <p className="text-stone-700 font-medium text-sm">₹15–30 Lakh</p>
                    <p className="text-stone-500 text-xs">(Incl. Franchise Fee)</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div whileHover={{ y: -8, scale: 1.02 }} className="group relative rounded-2xl border border-amber-200 bg-white shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="absolute -top-6 -right-6 h-20 w-20 bg-amber-200/40 rounded-full blur-2xl" />

              {/* Large Image Section */}
              <div className="relative h-32 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="ROI - Return on investment growth"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1">
                  <span className="text-stone-800 font-semibold text-sm">Growth</span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-stone-900 mb-4 group-hover:text-rose-900 transition-colors">Return on Investment</h3>
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg text-center">
                  <p className="text-2xl font-bold text-green-700 mb-1">Up to 200%</p>
                  <p className="text-stone-600 text-sm">ROI Potential</p>
                </div>
              </div>
            </motion.div>

            <motion.div whileHover={{ y: -8, scale: 1.02 }} className="group relative rounded-2xl border border-rose-200 bg-white shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="absolute -top-6 -right-6 h-20 w-20 bg-rose-200/40 rounded-full blur-2xl" />

              {/* Large Image Section */}
              <div className="relative h-32 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Teacher to Child Ratio - Quality education"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1">
                  <span className="text-stone-800 font-semibold text-sm">Quality</span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-stone-900 mb-4 group-hover:text-rose-900 transition-colors">Teacher : Child Ratio</h3>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg text-center">
                  <p className="text-2xl font-bold text-blue-700 mb-1">1 : 15</p>
                  <p className="text-stone-600 text-sm">Optimal Learning Environment</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-12 rounded-2xl bg-white border border-amber-100 shadow-lg overflow-hidden">
            <div className="p-6 md:p-8">
              <h4 className="text-xl font-bold text-amber-800 mb-6 text-center">Additional Revenue Programs</h4>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Toddler Programme",
                  "Summer Camp",
                  "Winter Camp",
                  "Teacher Training Programme",
                  "Extended Day Care (EDC)",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="group relative bg-gradient-to-br from-amber-50 to-orange-50 p-4 rounded-xl border border-amber-100 hover:border-amber-300 transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-gradient-to-r from-rose-500 to-amber-500 rounded-full group-hover:scale-125 transition-transform"></div>
                      <span className="font-medium text-stone-800 group-hover:text-rose-900 transition-colors">{item}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- STEPS SECTION ---------------- */}
      <section className="py-16 bg-white">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold text-transparent bg-gradient-to-r from-rose-900 to-amber-700 bg-clip-text mb-10">
          Steps to Open a Samagra Balvatika
        </h2>
        <div className="max-w-6xl mx-auto px-6">
          {/* Mobile Layout - Vertical Stack */}
          <div className="md:hidden space-y-8">
            {steps.map((step, i) => (
              <div key={i} className="flex items-center gap-4">
                {/* Circle Card with Flip */}
                <motion.div
                  className="relative h-20 w-20 rounded-full shadow-lg overflow-hidden group flex-shrink-0"
                  style={{ perspective: 1000 }}
                >
                  <motion.div
                    className="absolute inset-0"
                    style={{ transformStyle: "preserve-3d" }}
                    initial={{ rotateY: 0 }}
                    whileHover={{ rotateY: 180 }}
                    transition={{ duration: 0.6 }}
                  >
                    {/* Front */}
                    <div
                      className="absolute inset-0"
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      <div className="absolute inset-0 rounded-full overflow-hidden">
                        <img
                          src={step.img}
                          alt={step.title}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                    {/* Back */}
                    <div
                      className="absolute inset-0 flex items-center justify-center rounded-full bg-gradient-to-br from-amber-50 to-rose-50 px-2 text-center"
                      style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                    >
                      <p className="text-xs font-semibold text-stone-800">
                        Step {i + 1}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-bold text-stone-900 mb-1">{step.title}</h3>
                  <div className="w-full bg-gradient-to-r from-amber-200 to-rose-200 h-1 rounded-full">
                    <div className="bg-gradient-to-r from-amber-500 to-rose-500 h-1 rounded-full transition-all duration-1000"
                         style={{ width: i === steps.length - 1 ? '100%' : `${((i + 1) / steps.length) * 100}%` }}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Layout - Horizontal */}
          <div className="hidden md:flex md:items-center md:justify-between gap-8">
            {steps.map((step, i) => (
              <div key={i} className="flex items-center gap-8 md:gap-6">
                {/* Circle Card with Flip */}
                <motion.div
                  className="relative h-36 w-36 md:h-40 md:w-40 rounded-full shadow-lg overflow-hidden group"
                  style={{ perspective: 1000 }}
                >
                  <motion.div
                    className="absolute inset-0"
                    style={{ transformStyle: "preserve-3d" }}
                    initial={{ rotateY: 0 }}
                    whileHover={{ rotateY: 180 }}
                    transition={{ duration: 0.6 }}
                  >
                    {/* Front */}
                    <div
                      className="absolute inset-0"
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      <div className="absolute inset-0 rounded-full overflow-hidden">
                        <img
                          src={step.img}
                          alt={step.title}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                    {/* Back */}
                    <div
                      className="absolute inset-0 flex items-center justify-center rounded-full bg-gradient-to-br from-amber-50 to-rose-50 px-4 text-center"
                      style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                    >
                      <p className="text-xs font-semibold text-stone-800">
                        {step.title}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Arrow between circles (hidden on last) */}
                {i !== steps.length - 1 && (
                  <div className="hidden md:flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeWidth="2"
                      className="h-8 w-8 stroke-amber-700"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h14m-4-4 4 4-4 4" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- TESTIMONIALS (VIDEO) ---------------- */}
<section className="py-5 bg-gradient-to-b from-rose-950 via-rose-900 to-amber-900">
  <div className="max-w-3xl mx-auto px-6">
    <h2 className="text-center text-3xl md:text-4xl font-extrabold text-transparent bg-gradient-to-r from-amber-200 to-rose-200 bg-clip-text mb-10">
      Franchise Partner Testimonials
    </h2>

    {/* Embedded YouTube Video */}
    <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/61KQopzFiWE?si=gD5pmUzN8OLsC9Nk"
        title="Sarv Franchise Testimonial"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>

    <p className="mt-4 text-center text-sm text-amber-100/80">
      Hear from our partners about their journey with Sarv.
    </p>
  </div>
</section>


      {/* ---------------- FAQs ---------------- */}
      <section className="py-20 bg-white" id="faqs">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-center text-3xl md:text-4xl font-extrabold text-transparent bg-gradient-to-r from-rose-900 to-amber-700 bg-clip-text mb-10">
            FAQs
          </h2>
          <div className="rounded-2xl border border-stone-200 overflow-hidden">
            {faqs.map((f, i) => {
              const isOpen = openFaq === i;
              const accent = i % 2 === 0 ? "from-amber-50 to-rose-50" : "from-rose-50 to-amber-50";
              const borderAccent = i % 2 === 0 ? "border-amber-200" : "border-rose-200";
              return (
                <div key={i} className={`bg-gradient-to-r ${accent} ${i !== 0 ? "border-t" : ""} ${borderAccent}`}>
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="font-medium text-stone-900 flex items-center gap-3">
                      <span className={`h-2.5 w-2.5 rounded-full ${i % 2 === 0 ? "bg-amber-500" : "bg-rose-500"}`}></span>
                      {f.q}
                    </span>
                    <span
                      className={`inline-flex h-7 w-7 items-center justify-center rounded-full text-white transition-transform ${
                        isOpen ? "rotate-45" : "rotate-0"
                      } ${i % 2 === 0 ? "bg-amber-500" : "bg-rose-500"}`}
                    >
                      +
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="border-t border-stone-200/60 bg-white/80"
                      >
                        <div className="px-5 py-4 text-sm text-stone-700">{f.a}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

// Apply Now button fixed on right middle to trigger enquiry modal
export function ApplyNowTrigger() {
  return (
    <button
      onClick={() => window.dispatchEvent(new Event("open-enquiry"))}
      className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden md:flex items-center justify-center h-48 w-12 rounded-l-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-linear-to-b from-rose-900 to-amber-800"
      aria-label="Apply now"
    >
      <span className="text-white text-xs tracking-wider [writing-mode:vertical-rl] rotate-180">Apply Now</span>
    </button>
  );
}


