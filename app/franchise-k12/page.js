"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";

export default function FranchiseK12Page() {
  const [activeCategory, setActiveCategory] = useState("INFRASTRUCTURE");
  const [showTransformationOnly, setShowTransformationOnly] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    state: "",
    city: "",
    zipCode: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: null, message: "" });

  // Check URL hash on mount and hash change
  useEffect(() => {
    const checkHash = () => {
      setShowTransformationOnly(window.location.hash === "#transformation");
    };
    
    checkHash();
    window.addEventListener("hashchange", checkHash);
    
    return () => window.removeEventListener("hashchange", checkHash);
  }, []);

  const categories = {
    INFRASTRUCTURE: [
      "Land Selection Guidance",
      "Planning & Design Consultation",
      "Project Planning & Execution Strategy",
      "Interior Layout & Finishing Consultation",
      "Material Procurement Assistance",
    ],
    "ACADEMIC OFFERINGS": [
      "Holistic Progress Cards",
      "Student Led Conference",
      "Student Portfolio",
      "Curriculum and Assessment Guidelines",
      "Well Researched Textbooks and Curriculum",
    ],
    "TEACHER TRAINING & SUPPORT": [
      "Induction and CPD",
      "Academic Excellence",
      "Classroom Teacher Observation",
      "Need Analysis Based Training",
      "People/Soft Skills Training",
    ],
    "HR & FINANCE": [
      "Recruitment of the heads and core staff for the school",
      "Teacher Advisory Support For Maintaining Accounts Annually",
      "Statutory Compliance Assistance",
      "Finance",
      "MIS",
    ],
    "OPERATION SUPPORT": [
      "School Admission Support",
      "Counsellors Training",
      "Regular Visit for Support and Guidance",
      "Competitor Analysis and Fee Finalisation",
      "Bi-annual Quality Audits",
    ],
    "BRANDING & MARKETING": [
      "Customised Marketing Plan",
      "Innovative Marketing Strategies",
      "Marketing Collateral Support",
      "PR Guidance",
      "Launch Plan",
      "Digital Marketing Plan",
    ],
    "IT SUPPORT": [
      "Technical support for inter-networking setup",
      "Designing and implementing school specific websites",
      "Regular updation of school activities & news on the website",
      "Creation and maintenance of official email accounts and FTP's",
      "Smart Classroom Setup with modern digital learning tools",
      "Data Privacy and security ensuring safe information protection",
      "IT Procurement and setup providing complete technology solution",
    ],
  };

  const requirements = [
    {
      title: "Space Required",
      value: "Min 2 acres as per CBSE/ICSE by-laws",
    },
    {
      title: "Total Project Cost*",
      value: "INR 10-25 Crs. (Including the Franchise Fee)",
    },
    {
      title: "*Return on Investment",
      value: "Up to 30% ROI",
    },
    {
      title: "Additional Revenue Earning Programs",
      value: ["Summer Camp", "Winter Camp", "Teacher Training Programme", "After School Sports Programmes", "Extended Day Care (EDS)"],
    },
    {
      title: "Teacher : Child Ratio",
      value: "1 : 20",
    },
    {
      title: "Age Group",
      value: "As Per CBSE/ICSE by Laws",
    },
  ];

  const steps = [
    { number: "1", title: "Fill the Franchise Enquiry Form" },
    { number: "2", title: "Sarv Samagra team will connect with you within 48 Hours" },
    { number: "3", title: "KYC Check" },
    { number: "4", title: "Face to Face Meeting & Franchise Signup" },
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
          state: "",
          city: "",
          zipCode: "",
        });
        setTimeout(() => {
          setIsModalOpen(false);
          setSubmitStatus({ type: null, message: "" });
        }, 2000);
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
            {showTransformationOnly ? (
              <>
                <h1 className="text-4xl md:text-6xl font-bold text-[#f26522] mb-4 leading-tight">
                  Unlock Potential
                </h1>
                <h2 className="text-3xl md:text-5xl font-bold text-[#f26522] mb-4 leading-tight">
                  Embrace Excellence
                </h2>
                <p className="text-2xl md:text-3xl text-gray-700 font-medium mb-2">
                  Transform Your School With
                </p>
                <p className="text-3xl md:text-4xl text-[#f26522] font-bold">
                  Sarv Samagra
                </p>
              </>
            ) : (
              <>
                <h1 className="text-4xl md:text-6xl font-bold text-[#f26522] mb-6 leading-tight">
                  Empowering Minds, Nurturing India's Tomorrow
                </h1>
                <p className="text-2xl md:text-3xl text-gray-700 font-medium">
                  Join Us as a School Franchise Partner!
                </p>
              </>
            )}
          </motion.div>

          {/* Right Side - Enquiry Form (Takes 1/3 width) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1 bg-white rounded-2xl shadow-2xl p-5"
          >
            <h2 className="text-xl font-bold text-stone-900 mb-1">
              Franchise Enquiry
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
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full text-sm rounded-md border border-stone-300 px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-amber-600 disabled:bg-stone-100 disabled:cursor-not-allowed"
                  placeholder="Email Address"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">
                  State
                </label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full text-sm rounded-md border border-stone-300 px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-amber-600 disabled:bg-stone-100 disabled:cursor-not-allowed"
                  placeholder="State"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full text-sm rounded-md border border-stone-300 px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-amber-600 disabled:bg-stone-100 disabled:cursor-not-allowed"
                    placeholder="City"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    Zip Code
                  </label>
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full text-sm rounded-md border border-stone-300 px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-amber-600 disabled:bg-stone-100 disabled:cursor-not-allowed"
                    placeholder="Zip Code"
                  />
                </div>
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
                    "Submit Enquiry"
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* SCHOOL TRANSFORMATION SHOWCASE */}
      {showTransformationOnly && (
        <section className="py-20 bg-gradient-to-b from-white via-orange-50 to-white overflow-x-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-rose-900 to-amber-700 text-white shadow-md">
                School Transformation
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mt-5">
                Before & After: Real
                <span className="bg-gradient-to-r from-rose-800 to-amber-700 bg-clip-text text-transparent">
                  {" "}Transformation Stories
                </span>
              </h2>
              <p className="mt-4 text-xl text-stone-700 max-w-3xl mx-auto">
                See how schools across India have been transformed through our comprehensive franchise model
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* School 1 */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden border border-orange-100"
              >
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#f26522] mb-4">Delhi Public School</h3>
                  <p className="text-stone-700 mb-6">A traditional school that embraced modern education technology</p>
                </div>

                <div className="grid grid-cols-2 gap-4 p-6 pt-0">
                  {/* Before */}
                  <div className="text-center">
                    <div className="relative mb-3">
                      <img
                        src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                        alt="School before transformation"
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                        BEFORE
                      </div>
                    </div>
                    <ul className="text-xs text-stone-600 space-y-1">
                      <li>• Traditional classrooms</li>
                      <li>• Limited technology</li>
                      <li>• Basic learning methods</li>
                    </ul>
                  </div>

                  {/* After */}
                  <div className="text-center">
                    <div className="relative mb-3">
                      <img
                        src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                        alt="School after transformation"
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                        AFTER
                      </div>
                    </div>
                    <ul className="text-xs text-stone-600 space-y-1">
                      <li>• Smart classrooms</li>
                      <li>• STEM & robotics labs</li>
                      <li>• Digital learning tools</li>
                    </ul>
                  </div>
                </div>

                <div className="px-6 pb-6">
                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded-lg">
                    <p className="text-sm text-stone-700 italic">
                      "Student engagement increased by 300% and academic performance improved significantly."
                    </p>
                    <p className="text-xs text-stone-500 mt-2">- Principal, Delhi Public School</p>
                  </div>
                </div>
              </motion.div>

              {/* School 2 */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden border border-orange-100"
              >
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#f26522] mb-4">Mumbai International School</h3>
                  <p className="text-stone-700 mb-6">From conventional teaching to innovative learning spaces</p>
                </div>

                <div className="grid grid-cols-2 gap-4 p-6 pt-0">
                  {/* Before */}
                  <div className="text-center">
                    <div className="relative mb-3">
                      <img
                        src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                        alt="School before transformation"
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                        BEFORE
                      </div>
                    </div>
                    <ul className="text-xs text-stone-600 space-y-1">
                      <li>• Chalkboard teaching</li>
                      <li>• Limited resources</li>
                      <li>• Traditional assessments</li>
                    </ul>
                  </div>

                  {/* After */}
                  <div className="text-center">
                    <div className="relative mb-3">
                      <img
                        src="https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                        alt="School after transformation"
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                        AFTER
                      </div>
                    </div>
                    <ul className="text-xs text-stone-600 space-y-1">
                      <li>• Interactive whiteboards</li>
                      <li>• AI-powered learning</li>
                      <li>• Project-based learning</li>
                    </ul>
                  </div>
                </div>

                <div className="px-6 pb-6">
                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded-lg">
                    <p className="text-sm text-stone-700 italic">
                      "Our teachers now have access to cutting-edge tools that make learning engaging and effective."
                    </p>
                    <p className="text-xs text-stone-500 mt-2">- Director, Mumbai International School</p>
                  </div>
                </div>
              </motion.div>

              {/* School 3 */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden border border-orange-100"
              >
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#f26522] mb-4">Chennai Progressive School</h3>
                  <p className="text-stone-700 mb-6">Building the future of education through comprehensive transformation</p>
                </div>

                <div className="grid grid-cols-2 gap-4 p-6 pt-0">
                  {/* Before */}
                  <div className="text-center">
                    <div className="relative mb-3">
                      <img
                        src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                        alt="School before transformation"
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                        BEFORE
                      </div>
                    </div>
                    <ul className="text-xs text-stone-600 space-y-1">
                      <li>• Basic infrastructure</li>
                      <li>• Limited extracurricular</li>
                      <li>• Conventional methods</li>
                    </ul>
                  </div>

                  {/* After */}
                  <div className="text-center">
                    <div className="relative mb-3">
                      <img
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                        alt="School after transformation"
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                        AFTER
                      </div>
                    </div>
                    <ul className="text-xs text-stone-600 space-y-1">
                      <li>• Modern campus</li>
                      <li>• Sports & arts facilities</li>
                      <li>• Holistic development</li>
                    </ul>
                  </div>
                </div>

                <div className="px-6 pb-6">
                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded-lg">
                    <p className="text-sm text-stone-700 italic">
                      "The transformation has not only improved our infrastructure but also our teaching methodology."
                    </p>
                    <p className="text-xs text-stone-500 mt-2">- Chairman, Chennai Progressive School</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-center mt-16"
            >
              <h3 className="text-2xl font-bold text-stone-900 mb-4">
                Ready to Transform Your School?
              </h3>
              <p className="text-stone-700 mb-8 max-w-2xl mx-auto">
                Join the growing network of successful schools that have embraced the future of education
              </p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#top"
                className="inline-block px-8 py-4 bg-gradient-to-r from-rose-900 to-amber-700 text-white font-bold rounded-xl hover:shadow-2xl transition-all duration-300 shadow-lg"
              >
                Start Your Transformation
              </motion.a>
            </motion.div>
          </div>
        </section>
      )}

      {/* WHY SARV SAMAGRA SECTION */}
      {!showTransformationOnly && (
      <section className="py-20 bg-gradient-to-br from-white via-orange-50/30 to-rose-50/30">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-gradient-to-r from-rose-900 to-amber-700 bg-clip-text">
              Why Sarv Samagra Techno World School?
            </h2>
            <p className="mt-4 text-xl text-stone-700 max-w-3xl mx-auto">
              Discover the comprehensive support system that transforms your K12 school into an educational leader
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
            {Object.keys(categories).map((key) => (
              <motion.button
                key={key}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(key)}
                className={`px-6 py-3 font-semibold rounded-full transition-all duration-300 shadow-md ${
                  activeCategory === key
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
              key={activeCategory}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8"
            >
              {categories[activeCategory].map((item, i) => (
                <motion.div
                  key={`${activeCategory}-${i}`}
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
                        activeCategory === 'INFRASTRUCTURE' ? (
                          i === 0 ? 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' :
                          i === 1 ? 'https://images.unsplash.com/photo-1503387837-b154d5074bd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' :
                          i === 2 ? 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' :
                          i === 3 ? 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' :
                          'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
                        ) :
                        activeCategory === 'ACADEMIC OFFERINGS' ? (
                          i === 0 ? 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' :
                          i === 1 ? 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' :
                          i === 2 ? 'https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' :
                          i === 3 ? 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' :
                          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
                        ) :
                        activeCategory === 'TEACHER TRAINING & SUPPORT' ? (
                          i === 0 ? 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' :
                          i === 1 ? 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' :
                          i === 2 ? 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' :
                          i === 3 ? 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' :
                          'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
                        ) :
                        activeCategory === 'HR & FINANCE' ? (
                          i === 0 ? 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' :
                          i === 1 ? 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' :
                          i === 2 ? 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' :
                          i === 3 ? 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' :
                          'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
                        ) :
                        activeCategory === 'OPERATION SUPPORT' ? (
                          i === 0 ? 'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' :
                          i === 1 ? 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' :
                          i === 2 ? 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' :
                          i === 3 ? 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' :
                          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
                        ) :
                        activeCategory === 'BRANDING & MARKETING' ? (
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
                      {activeCategory === 'INFRASTRUCTURE' && (
                        <div className="flex items-center gap-2">
                          <span className="text-amber-600">🏗️</span>
                          <span>Complete setup assistance</span>
                        </div>
                      )}
                      {activeCategory === 'ACADEMIC OFFERINGS' && (
                        <div className="flex items-center gap-2">
                          <span className="text-blue-600">📚</span>
                          <span>Comprehensive curriculum</span>
                        </div>
                      )}
                      {activeCategory === 'TEACHER TRAINING & SUPPORT' && (
                        <div className="flex items-center gap-2">
                          <span className="text-purple-600">👨‍🏫</span>
                          <span>Professional development</span>
                        </div>
                      )}
                      {activeCategory === 'HR & FINANCE' && (
                        <div className="flex items-center gap-2">
                          <span className="text-green-600">💼</span>
                          <span>Business management support</span>
                        </div>
                      )}
                      {activeCategory === 'OPERATION SUPPORT' && (
                        <div className="flex items-center gap-2">
                          <span className="text-indigo-600">⚙️</span>
                          <span>Ongoing operational guidance</span>
                        </div>
                      )}
                      {activeCategory === 'BRANDING & MARKETING' && (
                        <div className="flex items-center gap-2">
                          <span className="text-pink-600">📢</span>
                          <span>Brand & marketing support</span>
                        </div>
                      )}
                      {activeCategory === 'IT SUPPORT' && (
                        <div className="flex items-center gap-2">
                          <span className="text-cyan-600">💻</span>
                          <span>Technology solutions</span>
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
      )}

      {/* FRANCHISE REQUIREMENTS */}
      {!showTransformationOnly && (
      <section className="py-16 bg-gradient-to-b from-white via-orange-50 to-white overflow-x-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-[#f26522] text-center mb-4"
          >
            Franchise Requirements
          </motion.h2>
          
          <motion.h3
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl font-semibold text-gray-700 text-center mb-12"
          >
            Empowering Excellence at Every Step
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-white via-orange-50 to-amber-50 rounded-2xl shadow-2xl p-8 border border-orange-200"
          >
            <div className="grid md:grid-cols-2 gap-6">
              {requirements.map((req, i) => (
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

      {/* FRANCHISE PROCEDURE */}
      {!showTransformationOnly && (
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

      {/* FAQ SECTION */}
      {!showTransformationOnly && (
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
                answer: "A minimum of 2 acres is required as per CBSE/ICSE by-laws for establishing a K12 school."
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