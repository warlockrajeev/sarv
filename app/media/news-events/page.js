"use client";

import { useState } from "react";

// Icon Components
function DeviceIcon({ className = "w-12 h-12" }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
      />
    </svg>
  );
}

function HandshakeIcon({ className = "w-12 h-12" }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
      />
    </svg>
  );
}

function AcademicCapIcon({ className = "w-12 h-12" }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 14l9-5-9-5-9 5 9 5z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
      />
    </svg>
  );
}

function TruckIcon({ className = "w-12 h-12" }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
      />
    </svg>
  );
}

function HeartIcon({ className = "w-12 h-12" }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    </svg>
  );
}

function ChartIcon({ className = "w-12 h-12" }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
      />
    </svg>
  );
}

function MicrophoneIcon({ className = "w-12 h-12" }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
      />
    </svg>
  );
}

function TeacherIcon({ className = "w-12 h-12" }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      />
    </svg>
  );
}

function BuildingIcon({ className = "w-12 h-12" }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
      />
    </svg>
  );
}

function ScienceIcon({ className = "w-12 h-12" }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
      />
    </svg>
  );
}

function BackpackIcon({ className = "w-12 h-12" }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
      />
    </svg>
  );
}

function LaptopIcon({ className = "w-12 h-12" }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );
}

function CalendarIcon({ className = "w-12 h-12" }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  );
}

function LocationIcon({ className = "w-12 h-12" }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );
}

export default function NewsEventsPage() {
  const [activeTab, setActiveTab] = useState("news");

  const newsItems = [
    {
      id: 1,
      title: "Sarv Education Launches New Digital Learning Platform",
      date: "October 15, 2025",
      category: "Product Launch",
      description:
        "Revolutionary platform combines AI-powered personalized learning with interactive content to enhance student engagement and outcomes.",
      Icon: DeviceIcon,
    },
    {
      id: 2,
      title: "Partnership with 500+ Schools Across India",
      date: "September 28, 2025",
      category: "Milestone",
      description:
        "Sarv Education reaches a major milestone, partnering with over 500 schools nationwide to transform education delivery.",
      Icon: HandshakeIcon,
    },
    {
      id: 3,
      title: "Award for Excellence in Teacher Training",
      date: "August 12, 2025",
      category: "Recognition",
      description:
        "Our comprehensive teacher training program receives national recognition for innovation and effectiveness.",
      Icon: AcademicCapIcon,
    },
    {
      id: 4,
      title: "Expansion to Rural Areas with Mobile Learning Units",
      date: "July 5, 2025",
      category: "Social Impact",
      description:
        "New initiative brings quality education to underserved communities through innovative mobile learning solutions.",
      Icon: TruckIcon,
    },
    {
      id: 5,
      title: "Launch of Soul Science Program in 100 Schools",
      date: "June 20, 2025",
      category: "Program Launch",
      description:
        "Holistic education program focusing on emotional intelligence and well-being now available in 100 institutions.",
      Icon: HeartIcon,
    },
    {
      id: 6,
      title: "Record Student Performance in Board Exams",
      date: "May 15, 2025",
      category: "Achievement",
      description:
        "Students from Sarv Education partner schools achieve outstanding results with 98% pass rate in board examinations.",
      Icon: ChartIcon,
    },
  ];

  const events = [
    {
      id: 1,
      title: "Annual Education Excellence Summit 2025",
      date: "December 10-12, 2025",
      location: "New Delhi, India",
      status: "Upcoming",
      description:
        "Join educators, policymakers, and industry leaders for three days of workshops, keynotes, and networking focused on the future of education.",
      Icon: MicrophoneIcon,
    },
    {
      id: 2,
      title: "Teacher Training Bootcamp - Batch 12",
      date: "November 20-24, 2025",
      location: "Mumbai, India",
      status: "Registration Open",
      description:
        "Intensive five-day training program for teachers covering modern pedagogical techniques and digital tools.",
      Icon: TeacherIcon,
    },
    {
      id: 3,
      title: "Franchise Partner Meet 2025",
      date: "November 5, 2025",
      location: "Bangalore, India",
      status: "Upcoming",
      description:
        "Annual gathering of franchise partners to share best practices, celebrate successes, and plan for growth.",
      Icon: BuildingIcon,
    },
    {
      id: 4,
      title: "Student Science & Innovation Fair",
      date: "October 28, 2025",
      location: "Online & Multiple Cities",
      status: "Completed",
      description:
        "Students from partner schools showcased innovative science projects and technological solutions to real-world problems.",
      Icon: ScienceIcon,
    },
    {
      id: 5,
      title: "Back to School Festival 2025",
      date: "August 1-7, 2025",
      location: "Nationwide",
      status: "Completed",
      description:
        "Week-long celebration welcoming students back with special activities, workshops, and community engagement programs.",
      Icon: BackpackIcon,
    },
    {
      id: 6,
      title: "Digital Learning Workshop Series",
      date: "July 15-30, 2025",
      location: "Online",
      status: "Completed",
      description:
        "Series of webinars and workshops on implementing effective digital learning strategies in classrooms.",
      Icon: LaptopIcon,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-rose-800 to-amber-700">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            News & Events
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Stay updated with the latest happenings at Sarv Education
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setActiveTab("news")}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-200 ${
                activeTab === "news"
                  ? "bg-gradient-to-r from-rose-900 to-amber-700 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Latest News
            </button>
            <button
              onClick={() => setActiveTab("events")}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-200 ${
                activeTab === "events"
                  ? "bg-gradient-to-r from-rose-900 to-amber-700 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Events
            </button>
          </div>
        </div>
      </section>

      {/* News Tab */}
      {activeTab === "news" && (
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsItems.map((news) => (
                <article
                  key={news.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="h-48 bg-gradient-to-br from-amber-100 to-rose-100 flex items-center justify-center">
                    <news.Icon className="w-20 h-20 text-amber-700" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-amber-100 text-amber-800 text-xs font-semibold rounded-full">
                        {news.category}
                      </span>
                      <span className="text-xs text-gray-500">{news.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {news.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {news.description}
                    </p>
                    <button className="text-amber-700 font-semibold text-sm hover:text-amber-800 transition-colors">
                      Read More →
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Events Tab */}
      {activeTab === "events" && (
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-6">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="md:flex">
                    <div className="md:w-48 h-48 bg-gradient-to-br from-rose-100 to-amber-100 flex items-center justify-center">
                      <event.Icon className="w-20 h-20 text-rose-700" />
                    </div>
                    <div className="flex-1 p-8">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">
                            {event.title}
                          </h3>
                          <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                            <span className="flex items-center gap-1">
                              <CalendarIcon className="w-4 h-4" /> {event.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <LocationIcon className="w-4 h-4" />{" "}
                              {event.location}
                            </span>
                          </div>
                        </div>
                        <span
                          className={`px-4 py-2 rounded-full text-xs font-semibold ${
                            event.status === "Upcoming"
                              ? "bg-green-100 text-green-800"
                              : event.status === "Registration Open"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {event.status}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4">{event.description}</p>
                      {event.status !== "Completed" && (
                        <button className="px-6 py-2 bg-gradient-to-r from-rose-900 to-amber-700 text-white rounded-lg font-semibold hover:opacity-90 transition-all duration-200">
                          {event.status === "Registration Open"
                            ? "Register Now"
                            : "Learn More"}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-amber-50 to-rose-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Stay in the Loop
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Subscribe to our newsletter for the latest news, events, and
            educational insights
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <button className="px-8 py-4 rounded-lg bg-gradient-to-r from-rose-900 to-amber-700 text-white font-semibold hover:opacity-90 transition-all duration-200 shadow-lg">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
