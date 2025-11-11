"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";

export default function Client360EdTechPage() {
  const [activeCategory, setActiveCategory] = useState("STEM & ROBOTICS");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    schoolName: "",
    city: "",
    interestedIn: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: null, message: "" });

  const categories = {
    "STEM & ROBOTICS": [
      "Complete STEM Lab Setup with Equipment",
      "Robotics Kits and Learning Modules",
      "Arduino & IoT Project Kits",
      "Hands-on Learning Activities",
      "Age-appropriate Curriculum (K-12)",
      "Teacher Training & Support",
      "Competition Preparation Programs",
    ],
    "AI & MACHINE LEARNING": [
      "AI Lab Setup for Schools",
      "Machine Learning Fundamentals",
      "Python Programming for AI",
      "Computer Vision Projects",
      "Natural Language Processing",
      "AI Ethics and Responsible AI",
      "Real-world AI Applications",
    ],
    "AR/VR LAB": [
      "Virtual Reality Lab Setup",
      "Augmented Reality Learning Tools",
      "Immersive 3D Learning Experiences",
      "Subject-specific VR Content",
      "Interactive Science Simulations",
      "Virtual Field Trips",
      "VR Headsets & Equipment",
    ],
    "SMART CLASSROOMS": [
      "Interactive Smart Boards",
      "Digital Projectors & Displays",
      "Audio-Visual Equipment",
      "Classroom Management Software",
      "Digital Content Library",
      "Student Response Systems",
      "Cloud-based Learning Platform",
    ],
    "LEARNING MANAGEMENT SYSTEM": [
      "Comprehensive School ERP",
      "Student Information System",
      "Attendance & Fee Management",
      "Online Assessment Tools",
      "Parent-Teacher Communication",
      "Performance Analytics Dashboard",
      "Mobile App for Parents & Students",
    ],
    "CODING & PROGRAMMING": [
      "Block-based Coding for Beginners",
      "Python, JavaScript, Java Courses",
      "Web Development Training",
      "App Development Workshops",
      "Game Development Programs",
      "Competitive Programming",
      "Coding Competitions & Hackathons",
    ],
    "DIGITAL CURRICULUM": [
      "NEP 2020 Aligned Content",
      "Interactive Digital Textbooks",
      "Video Lessons & Animations",
      "Gamified Learning Modules",
      "Practice Tests & Assessments",
      "Personalized Learning Paths",
      "Multi-language Support",
    ],
    "TEACHER TRAINING": [
      "Technology Integration Training",
      "Digital Pedagogy Workshops",
      "LMS Platform Training",
      "Content Creation Skills",
      "Online Teaching Methodologies",
      "Assessment Design Training",
      "Continuous Professional Development",
    ],
  };

  const packages = [
    {
      name: "Starter Package",
      price: "₹5-8 Lakhs",
      features: [
        "Smart Classroom Setup (2-3 rooms)",
        "Basic Learning Management System",
        "Digital Content Library",
        "Teacher Training (Basic)",
        "1 Year Technical Support",
      ],
    },
    {
      name: "Advanced Package",
      price: "₹15-20 Lakhs",
      features: [
        "Complete Smart School Setup",
        "STEM & Robotics Lab",
        "Advanced LMS with Mobile Apps",
        "Coding & Programming Lab",
        "Comprehensive Teacher Training",
        "2 Years Support & Maintenance",
      ],
    },
    {
      name: "Premium Package",
      price: "₹30-40 Lakhs",
      features: [
        "Full 360° Digital Transformation",
        "STEM, Robotics, AI & IoT Labs",
        "AR/VR Lab Setup",
        "Complete Smart Classroom Infrastructure",
        "Enterprise LMS & ERP System",
        "Ongoing Training & Support",
        "3 Years Comprehensive Warranty",
      ],
    },
  ];

  const stats = [
    { number: "1000+", label: "Schools Transformed" },
    { number: "5 Lakh+", label: "Students Impacted" },
    { number: "10,000+", label: "Teachers Trained" },
    { number: "25+", label: "States Covered" },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Enquiry submitted successfully! We'll get back to you soon.",
        });
        setFormData({
          firstName: "",
          lastName: "",
          mobile: "",
          email: "",
          schoolName: "",
          city: "",
          interestedIn: "",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Failed to submit enquiry. Please try again.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "An error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#fffaf3] text-gray-800 overflow-x-hidden">
      {/* HERO SECTION WITH FORM */}
      <section id="top" className="relative bg-gradient-to-br from-orange-50 to-orange-100 py-16 px-6 overflow-x-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8 items-center">
          {/* Left Side - Text Content (Takes 2/3 width) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-[#f26522] mb-6 leading-tight">
              Transform Your School with 360° Ed-Tech Solutions
            </h1>
            <p className="text-2xl md:text-3xl text-gray-700 font-medium mb-4">
              Empowering Education Through Technology
            </p>
            <p className="text-lg text-gray-600">
              Complete digital transformation solutions - STEM Labs, AI, Robotics, AR/VR, Smart Classrooms, and Learning Management Systems
            </p>
          </motion.div>

          {/* Right Side - Enquiry Form (Takes 1/3 width) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1 bg-white rounded-2xl shadow-2xl p-5"
          >
            <h2 className="text-xl font-bold text-stone-900 mb-1">
              Request a Demo
            </h2>
            <p className="text-xs text-stone-600 mb-4">
              Fill in your details below
            </p>

            {submitStatus.message && (
              <div
                className={`mb-3 p-2 rounded-md text-xs ${
                  submitStatus.type === "success"
                    ? "bg-green-50 text-green-800 border border-green-200"
                    : "bg-red-50 text-red-800 border border-red-200"
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <form className="space-y-3" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    First Name <span className="text-rose-900">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full text-sm rounded-md border border-stone-300 px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-amber-600 disabled:bg-stone-100 disabled:cursor-not-allowed"
                    placeholder="First Name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    Last Name <span className="text-rose-900">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full text-sm rounded-md border border-stone-300 px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-amber-600 disabled:bg-stone-100 disabled:cursor-not-allowed"
                    placeholder="Last Name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">
                  Mobile
                </label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full text-sm rounded-md border border-stone-300 px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-amber-600 disabled:bg-stone-100 disabled:cursor-not-allowed"
                  placeholder="Mobile Number"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">
                  Email <span className="text-rose-900">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full text-sm rounded-md border border-stone-300 px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-amber-600 disabled:bg-stone-100 disabled:cursor-not-allowed"
                  placeholder="Email Address"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">
                  School Name <span className="text-rose-900">*</span>
                </label>
                <input
                  type="text"
                  name="schoolName"
                  value={formData.schoolName}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full text-sm rounded-md border border-stone-300 px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-amber-600 disabled:bg-stone-100 disabled:cursor-not-allowed"
                  placeholder="School Name"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">
                  City <span className="text-rose-900">*</span>
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full text-sm rounded-md border border-stone-300 px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-amber-600 disabled:bg-stone-100 disabled:cursor-not-allowed"
                  placeholder="City"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">
                  Interested In
                </label>
                <select
                  name="interestedIn"
                  value={formData.interestedIn}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full text-sm rounded-md border border-stone-300 px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-amber-600 disabled:bg-stone-100 disabled:cursor-not-allowed"
                >
                  <option value="">Select Solution</option>
                  <option value="stem-robotics">STEM & Robotics Lab</option>
                  <option value="ai-ml">AI & Machine Learning</option>
                  <option value="ar-vr">AR/VR Lab</option>
                  <option value="smart-classroom">Smart Classrooms</option>
                  <option value="lms">Learning Management System</option>
                  <option value="complete">Complete 360° Solution</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-md bg-rose-900 px-4 py-3 text-white font-medium hover:bg-rose-800 transition-colors disabled:bg-stone-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Request Demo"
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* ED-TECH SOLUTIONS SECTION */}
      <section id="solutions" className="py-16 bg-gradient-to-b from-orange-50 via-amber-50 to-white overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-[#f26522] text-center mb-4"
          >
            Comprehensive Ed-Tech Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 text-center mb-12"
          >
            Everything Your School Needs for Digital Transformation
          </motion.p>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Object.entries(categories).map(([categoryName, items], index) => (
              <motion.div
                key={categoryName}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl p-6 border border-amber-100 hover:border-amber-300 transition-all duration-300"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.1, type: "spring" }}
                  className="w-full h-32 mb-4 rounded-xl overflow-hidden bg-gradient-to-br from-orange-100 to-amber-100"
                >
                  <img
                    src={
                      categoryName === 'STEM & ROBOTICS' ? 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' :
                      categoryName === 'AI & MACHINE LEARNING' ? 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' :
                      categoryName === 'AR/VR LAB' ? 'https://miro.medium.com/v2/resize:fit:2000/format:webp/1*R85NjcjYmtuuVVhIRimU7g.jpeg' :
                      categoryName === 'SMART CLASSROOMS' ? 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' :
                      categoryName === 'LEARNING MANAGEMENT SYSTEM' ? 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' :
                      categoryName === 'CODING & PROGRAMMING' ? 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' :
                      categoryName === 'DIGITAL CURRICULUM' ? 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' :
                      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
                    }
                    alt={categoryName}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                    className="w-10 h-10 rounded-xl bg-gradient-to-r from-rose-900 to-amber-700 flex items-center justify-center shadow-md"
                  >
                    <span className="text-white font-bold text-lg">
                      {categoryName.split(' ')[0][0]}{categoryName.split(' ')[1]?.[0] || ''}
                    </span>
                  </motion.div>
                  <h3 className="font-bold text-lg text-gray-800 leading-tight">
                    {categoryName}
                  </h3>
                </div>

                <ul className="space-y-2">
                  {items.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + i * 0.05 }}
                      className="flex items-start gap-2 text-sm text-gray-700"
                    >
                      <motion.span
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + i * 0.05 + 0.1, type: "spring" }}
                        className="w-2 h-2 rounded-full bg-gradient-to-r from-rose-900 to-amber-700 mt-1.5 flex-shrink-0"
                      />
                      <span className="leading-relaxed">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES SECTION */}
      <section id="packages" className="py-16 bg-white overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-[#f26522] text-center mb-4"
          >
            Choose Your Package
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 text-center mb-12"
          >
            Flexible solutions tailored to your school's needs and budget
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`relative bg-white rounded-2xl shadow-xl p-8 border-2 transition-all ${
                  pkg.name === "Advanced Package"
                    ? "border-[#f26522] shadow-2xl"
                    : "border-orange-100 hover:border-orange-300"
                }`}
              >
                {pkg.name === "Advanced Package" && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-rose-900 to-amber-700 text-white px-6 py-1 rounded-full text-sm font-semibold shadow-lg">
                      Recommended
                    </span>
                  </div>
                )}

                <h3 className="text-2xl font-bold text-gray-800 mb-2 text-center">{pkg.name}</h3>
                <div className="text-3xl font-bold text-[#f26522] mb-6 text-center">{pkg.price}</div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700">
                      <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-green-600 text-xs">✓</span>
                      </span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#top"
                  className={`block text-center px-6 py-3 rounded-lg font-semibold transition-all ${
                    pkg.name === "Advanced Package"
                      ? "bg-gradient-to-r from-rose-900 to-amber-700 text-white shadow-lg hover:shadow-xl"
                      : "border-2 border-[#f26522] text-[#f26522] hover:bg-[#f26522] hover:text-white"
                  }`}
                >
                  Get Started
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-12 bg-gradient-to-r from-rose-900 to-amber-700">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center text-white"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm md:text-base opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OLD REQUIREMENTS SECTION - REMOVED */}
      {false && (
      <section className="py-16 bg-gradient-to-b from-white via-orange-50 to-white overflow-x-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-white via-orange-50 to-amber-50 rounded-2xl shadow-2xl p-8 border border-orange-200"
          >
            <div className="grid md:grid-cols-2 gap-6">
              {[].map((req, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: i * 0.1,
                    type: "spring",
                    stiffness: 100,
                    damping: 10
                  }}
                  whileHover={{
                    scale: 1.03,
                    y: -5,
                    boxShadow: "0 10px 25px rgba(242, 101, 34, 0.2)"
                  }}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-orange-100 hover:border-orange-300 group"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + 0.2, type: "spring" }}
                      className="w-8 h-8 rounded-full bg-gradient-to-r from-rose-900 to-amber-700 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                    >
                      <span className="text-white font-bold text-sm">{i + 1}</span>
                    </motion.div>
                    <h4 className="font-bold text-lg text-[#f26522] group-hover:text-rose-900 transition-colors">
                      {req.title}
                    </h4>
                  </div>
                  {Array.isArray(req.value) ? (
                    <ul className="space-y-2 ml-11">
                      {req.value.map((item, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 + idx * 0.05 }}
                          className="flex items-start gap-2 text-gray-700"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-rose-900 to-amber-700 mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-700 ml-11 font-medium">{req.value}</p>
                  )}
                </motion.div>
              ))}
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="text-sm text-gray-600 text-center mt-8 italic"
            >
              * Indicative and Variable Per Project
            </motion.p>
          </motion.div>
        </div>
      </section>
      )}

      {/* CONTACT CTA SECTION - HIDDEN FOR NOW */}
      {false && (
      <section className="py-16 bg-gradient-to-b from-white via-orange-50 to-white overflow-x-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-[#f26522] text-center mb-12"
          >
            Franchise Procedure
          </motion.h2>

          <div className="relative grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.15,
                  type: "spring",
                  stiffness: 100,
                  damping: 10
                }}
                whileHover={{
                  y: -10,
                  scale: 1.05,
                }}
                className="flex flex-col items-center text-center group relative"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="relative w-24 h-24 rounded-full bg-gradient-to-br from-rose-900 via-[#f26522] to-amber-700 flex items-center justify-center shadow-xl mb-6 group-hover:shadow-2xl transition-shadow"
                >
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + 0.3, type: "spring" }}
                    className="text-4xl font-bold text-white"
                  >
                    {step.number}
                  </motion.span>
                  
                  {/* Animated ring */}
                  <motion.div
                    initial={{ scale: 1, opacity: 0.5 }}
                    animate={{ scale: 1.3, opacity: 0 }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 0.5,
                      delay: i * 0.3
                    }}
                    className="absolute inset-0 rounded-full border-4 border-[#f26522]"
                  />
                </motion.div>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 + 0.4 }}
                  className="text-sm font-semibold text-gray-700 group-hover:text-[#f26522] transition-colors px-2"
                >
                  {step.title}
                </motion.p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="text-center mt-16"
          >
            <motion.a
              href="#top"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-10 py-4 bg-gradient-to-r from-rose-900 to-amber-700 text-white font-bold rounded-xl hover:shadow-2xl transition-all duration-300 shadow-lg"
            >
              Apply Now
            </motion.a>
          </motion.div>
        </div>
      </section>
      )}

      {/* PARTNER TESTIMONIAL SECTION */}
      <section className="py-16 bg-gradient-to-b from-white via-orange-50 to-white overflow-x-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-[#f26522] text-center mb-12"
          >
            Partner Testimonial
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-white via-orange-50 to-amber-50 rounded-2xl shadow-2xl p-8 border border-orange-200"
          >
            <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden shadow-lg mb-6 flex items-center justify-center">
              {/* Video placeholder - Replace with actual video embed */}
              <div className="text-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-rose-900 to-amber-700 flex items-center justify-center"
                >
                  <svg
                    className="w-10 h-10 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </motion.div>
                <p className="text-gray-600 font-medium">Video Coming Soon</p>
                <p className="text-sm text-gray-500 mt-2">Partner testimonial video will be added here</p>
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-center"
            >
              <h3 className="text-xl font-bold text-[#f26522] mb-2">
                Partner Testimonial - Sarv Samagra School
              </h3>
              <p className="text-gray-600">
                Hear from our successful franchise partners about their journey with Sarv Samagra
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ SECTION - HIDDEN FOR NOW */}
      {false && (
      <section className="py-16 bg-white overflow-x-hidden">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-[#f26522] text-center mb-12"
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="space-y-4">
            {[
              {
                question: "What is the total investment required for a K12 franchise?",
                answer: "The total project cost is approximately INR 10-12 Crores, including the franchise fee. This covers infrastructure, setup, training, and initial operational costs."
              },
              {
                question: "What kind of support does Sarv Samagra provide?",
                answer: "We provide comprehensive support including infrastructure planning, academic offerings, teacher training, HR & finance assistance, operational support, branding & marketing, and IT support."
              },
              {
                question: "What is the expected return on investment (ROI)?",
                answer: "Our franchise partners can expect up to 30% ROI. The actual returns may vary based on location, management, and market conditions."
              },
              {
                question: "What is the minimum space required?",
                answer: "A minimum of 2 acres is required as per CBSE by-laws for establishing a K12 school."
              },
              {
                question: "What is the teacher to student ratio?",
                answer: "We maintain a healthy teacher to child ratio of 1:20 to ensure quality education and individual attention to students."
              },
              {
                question: "How long does it take to set up a franchise?",
                answer: "The setup process typically takes 12-18 months from the initial agreement to the school opening, depending on various factors like infrastructure readiness and regulatory approvals."
              }
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <motion.details
                  whileHover={{ scale: 1.01 }}
                  className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-orange-100 hover:border-orange-300"
                >
                  <summary className="cursor-pointer p-6 font-semibold text-gray-800 flex items-center justify-between group-hover:text-[#f26522] transition-colors">
                    <span className="flex items-center gap-3">
                      <motion.span
                        whileHover={{ rotate: 90 }}
                        className="w-6 h-6 rounded-full bg-gradient-to-r from-rose-900 to-amber-700 flex items-center justify-center text-white text-sm flex-shrink-0"
                      >
                        Q
                      </motion.span>
                      {faq.question}
                    </span>
                    <motion.svg
                      className="w-5 h-5 text-[#f26522] flex-shrink-0 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </summary>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6 text-gray-700 leading-relaxed"
                  >
                    <div className="flex items-start gap-3 pl-9">
                      <span className="w-6 h-6 rounded-full bg-gradient-to-r from-amber-700 to-rose-900 flex items-center justify-center text-white text-sm flex-shrink-0 mt-0.5">
                        A
                      </span>
                      <p>{faq.answer}</p>
                    </div>
                  </motion.div>
                </motion.details>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 mb-6">Still have questions?</p>
            <motion.a
              href="#top"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-3 bg-gradient-to-r from-rose-900 to-amber-700 text-white font-semibold rounded-lg hover:shadow-xl transition-all duration-300 shadow-md"
            >
              Contact Us
            </motion.a>
          </motion.div>
        </div>
      </section>
      )}
    </div>
  );
}