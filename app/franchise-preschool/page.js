"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function FranchisePreschoolPage() {
  const [activeTab, setActiveTab] = useState("PRESCHOOL");

  const infrastructure = [
    "Land Selection Guidance",
    "Planning & Design Consultation",
    "Project Planning & Execution Strategy",
    "Interior Layout & Finishing Consultation",
    "Material Procurement Assistance",
  ];

  const preschoolRequirements = {
    space: "1500 - 2000 square feet",
    cost: "₹10-12 Lakh (Including the Franchise Fee)",
    roi: "Up to 200% ROI",
    extraPrograms: [
      "Toddler Programme",
      "Summer Camp",
      "Winter Camp",
      "Teacher Training Programme",
      "Extended Day Care (EDC)",
    ],
    ratio: "1:15",
  };

  const steps = [
    { title: "Fill the Franchise Form", img: "/images/step1.png" },
    { title: "Birla Open Minds Interaction", img: "/images/step2.png" },
    { title: "KYC Check", img: "/images/step3.png" },
    { title: "Face to Face Meeting", img: "/images/step4.png" },
  ];

  return (
    <div className="bg-[#fffaf3] text-gray-800">
      {/* WHY CHOOSE SECTION */}
      <section className="text-center py-12 bg-white">
        <h2 className="text-2xl md:text-3xl font-bold text-[#f26522]">
          WHY CHOOSE BIRLA OPEN MINDS FOR YOUR PRESCHOOL FRANCHISE?
        </h2>

        <div className="max-w-6xl mx-auto mt-10 grid md:grid-cols-7 gap-4 px-6">
          <div className="md:col-span-2 flex flex-col space-y-3">
            {[
              "INFRASTRUCTURE",
              "ACADEMIC OFFERINGS",
              "TEACHER TRAINING & SUPPORT",
              "HR & FINANCE",
              "OPERATION SUPPORT",
              "BRANDING & MARKETING",
              "IT SUPPORT",
            ].map((item, i) => (
              <button
                key={i}
                className={`text-left px-4 py-2 font-medium rounded ${
                  item === "INFRASTRUCTURE"
                    ? "bg-[#f26522] text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="md:col-span-5 bg-[#fef0e7] p-6 rounded-lg grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {infrastructure.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white shadow-md p-4 rounded-lg text-sm font-medium"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRESCHOOL FRANCHISE REQUIREMENTS */}
      <section className="py-12 bg-gradient-to-b from-orange-50 to-orange-100 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#f26522] mb-8">
          PRESCHOOL FRANCHISE REQUIREMENTS
        </h2>

        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          {/* Tabs */}
          <div className="flex justify-center">
            <button
              onClick={() => setActiveTab("PRESCHOOL")}
              className={`px-6 py-3 font-semibold ${
                activeTab === "PRESCHOOL"
                  ? "bg-[#f26522] text-white"
                  : "bg-gray-100 text-gray-700"
              } rounded-tl-xl`}
            >
              PRESCHOOL
            </button>
            <button
              onClick={() => setActiveTab("K12")}
              className={`px-6 py-3 font-semibold ${
                activeTab === "K12"
                  ? "bg-[#f26522] text-white"
                  : "bg-gray-100 text-gray-700"
              } rounded-tr-xl`}
            >
              K12
            </button>
          </div>

          {/* Content */}
          {activeTab === "PRESCHOOL" && (
            <div className="p-6 md:flex items-center justify-between">
              <img
                src="/images/preschool-children.jpg"
                alt="Preschool"
                className="rounded-lg w-full md:w-1/2"
              />
              <div className="mt-6 md:mt-0 md:ml-8 text-left">
                <h3 className="font-bold text-lg mb-2 text-[#f26522]">
                  A strong & sure start
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <strong>Space Required:</strong> {preschoolRequirements.space}
                  </li>
                  <li>
                    <strong>Total Project Cost:</strong> {preschoolRequirements.cost}
                  </li>
                  <li>
                    <strong>Return on Investment:</strong> {preschoolRequirements.roi}
                  </li>
                </ul>

                <h4 className="font-semibold mt-4">Additional Revenue Programs:</h4>
                <ul className="list-disc list-inside text-sm mt-2">
                  {preschoolRequirements.extraPrograms.map((prog, i) => (
                    <li key={i}>{prog}</li>
                  ))}
                </ul>

                <p className="mt-4">
                  <strong>Teacher : Child Ratio:</strong> {preschoolRequirements.ratio}
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* STEPS SECTION */}
      <section className="py-12 text-center bg-white">
        <h2 className="text-2xl md:text-3xl font-bold text-[#f26522] mb-10">
          STEPS TO OPEN A PRESCHOOL FRANCHISE
        </h2>

        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-6 px-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center"
            >
              <div className="w-24 h-24 rounded-full bg-orange-100 flex items-center justify-center shadow-md overflow-hidden">
                <img src={step.img} alt={step.title} className="w-16 h-16" />
              </div>
              <p className="mt-3 text-sm font-medium text-gray-700">{step.title}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
