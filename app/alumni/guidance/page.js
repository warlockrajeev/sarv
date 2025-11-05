"use client";

import { useState } from "react";

// Icon Components
function BriefcaseIcon({ className = "w-12 h-12" }) {
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
        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );
}

function DocumentIcon({ className = "w-12 h-12" }) {
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
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>
  );
}

function TargetIcon({ className = "w-12 h-12" }) {
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
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

function SearchIcon({ className = "w-12 h-12" }) {
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
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
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

function GlobeIcon({ className = "w-12 h-12" }) {
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
        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

function BookOpenIcon({ className = "w-12 h-12" }) {
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
        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
      />
    </svg>
  );
}

function RocketIcon({ className = "w-12 h-12" }) {
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
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    </svg>
  );
}

function LightBulbIcon({ className = "w-12 h-12" }) {
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

function UsersIcon({ className = "w-12 h-12" }) {
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

function ScaleIcon({ className = "w-12 h-12" }) {
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
        d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
      />
    </svg>
  );
}

function ClipboardIcon({ className = "w-12 h-12" }) {
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
        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
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

function SparklesIcon({ className = "w-12 h-12" }) {
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
        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
      />
    </svg>
  );
}

function UserGroupIcon({ className = "w-12 h-12" }) {
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

function ChatIcon({ className = "w-12 h-12" }) {
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
        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
      />
    </svg>
  );
}

export default function AlumniGuidancePage() {
  const [selectedCategory, setSelectedCategory] = useState("career");

  const guidanceCategories = {
    career: [
      {
        title: "Career Counseling Sessions",
        description:
          "One-on-one sessions with experienced career counselors to help you navigate your professional journey.",
        Icon: BriefcaseIcon,
        features: [
          "Personalized career mapping",
          "Industry insights",
          "Skills assessment",
          "Goal setting",
        ],
      },
      {
        title: "Resume & Portfolio Building",
        description:
          "Expert guidance on creating compelling resumes and portfolios that stand out to employers.",
        Icon: DocumentIcon,
        features: [
          "Professional templates",
          "Content optimization",
          "ATS-friendly formats",
          "LinkedIn profile enhancement",
        ],
      },
      {
        title: "Interview Preparation",
        description:
          "Comprehensive interview coaching including mock interviews and feedback sessions.",
        Icon: TargetIcon,
        features: [
          "Mock interviews",
          "Technical prep",
          "Behavioral questions",
          "Confidence building",
        ],
      },
      {
        title: "Job Search Strategies",
        description:
          "Learn effective techniques to find and apply for positions that match your career goals.",
        Icon: SearchIcon,
        features: [
          "Job market analysis",
          "Networking tips",
          "Application strategies",
          "Follow-up techniques",
        ],
      },
    ],
    education: [
      {
        title: "Higher Education Counseling",
        description:
          "Guidance on choosing the right colleges, courses, and academic paths for your future.",
        Icon: AcademicCapIcon,
        features: [
          "University selection",
          "Course recommendations",
          "Scholarship guidance",
          "Application support",
        ],
      },
      {
        title: "Study Abroad Advisory",
        description:
          "Comprehensive support for planning and executing your international education journey.",
        Icon: GlobeIcon,
        features: [
          "Country selection",
          "Visa assistance",
          "Financial planning",
          "Cultural preparation",
        ],
      },
      {
        title: "Competitive Exam Preparation",
        description:
          "Strategic guidance for various competitive examinations and entrance tests.",
        Icon: BookOpenIcon,
        features: [
          "Study plans",
          "Resource recommendations",
          "Time management",
          "Test strategies",
        ],
      },
      {
        title: "Skill Development Programs",
        description:
          "Access to various upskilling and reskilling programs to enhance your capabilities.",
        Icon: RocketIcon,
        features: [
          "Technical skills",
          "Soft skills",
          "Certifications",
          "Online courses",
        ],
      },
    ],
    entrepreneurship: [
      {
        title: "Startup Mentorship",
        description:
          "Connect with successful entrepreneurs for guidance on starting and growing your business.",
        Icon: LightBulbIcon,
        features: [
          "Business planning",
          "Funding strategies",
          "Market analysis",
          "Pitch preparation",
        ],
      },
      {
        title: "Business Development Support",
        description:
          "Resources and guidance for scaling your entrepreneurial ventures.",
        Icon: ChartIcon,
        features: [
          "Growth strategies",
          "Marketing guidance",
          "Financial management",
          "Team building",
        ],
      },
      {
        title: "Networking Opportunities",
        description:
          "Connect with investors, partners, and fellow entrepreneurs in your industry.",
        Icon: UsersIcon,
        features: [
          "Investor connects",
          "Partner matching",
          "Industry events",
          "Collaboration platforms",
        ],
      },
      {
        title: "Legal & Compliance Guidance",
        description:
          "Navigate the legal aspects of starting and running a business.",
        Icon: ScaleIcon,
        features: [
          "Registration support",
          "Legal documentation",
          "IP protection",
          "Tax planning",
        ],
      },
    ],
  };

  const mentors = [
    {
      name: "Dr. Priya Sharma",
      role: "Career Counselor",
      expertise: "Technology & Engineering Careers",
      experience: "15+ years",
      Icon: BriefcaseIcon,
    },
    {
      name: "Rajesh Kumar",
      role: "Education Advisor",
      expertise: "International Education",
      experience: "12+ years",
      Icon: AcademicCapIcon,
    },
    {
      name: "Anita Desai",
      role: "Entrepreneurship Mentor",
      expertise: "Startup Strategy & Funding",
      experience: "20+ years",
      Icon: LightBulbIcon,
    },
    {
      name: "Vikram Singh",
      role: "Industry Expert",
      expertise: "Finance & Business",
      experience: "18+ years",
      Icon: ChartIcon,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-amber-700 to-rose-800">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Alumni Guidance Program
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Empowering our alumni with personalized guidance and mentorship for
            their future success
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-amber-700 mb-2">500+</div>
              <div className="text-gray-600">Alumni Mentored</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-rose-800 mb-2">50+</div>
              <div className="text-gray-600">Expert Counselors</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-700 mb-2">
                1000+
              </div>
              <div className="text-gray-600">Sessions Conducted</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-rose-800 mb-2">95%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Guidance Categories */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Guidance Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive support across various aspects of your professional
              and personal growth
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setSelectedCategory("career")}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                selectedCategory === "career"
                  ? "bg-gradient-to-r from-rose-900 to-amber-700 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-50 shadow border border-gray-200"
              }`}
            >
              Career Guidance
            </button>
            <button
              onClick={() => setSelectedCategory("education")}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                selectedCategory === "education"
                  ? "bg-gradient-to-r from-rose-900 to-amber-700 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-50 shadow border border-gray-200"
              }`}
            >
              Education Advisory
            </button>
            <button
              onClick={() => setSelectedCategory("entrepreneurship")}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                selectedCategory === "entrepreneurship"
                  ? "bg-gradient-to-r from-rose-900 to-amber-700 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-50 shadow border border-gray-200"
              }`}
            >
              Entrepreneurship
            </button>
          </div>

          {/* Guidance Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {guidanceCategories[selectedCategory].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div>
                    <item.Icon className="w-16 h-16 text-amber-700" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm font-semibold text-gray-700 mb-2">
                    Key Features:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {item.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <span className="text-amber-700">✓</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Mentors */}
      <section className="py-16 bg-gradient-to-r from-amber-50 to-rose-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Expert Mentors
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Learn from experienced professionals dedicated to your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mentors.map((mentor, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="mb-4 flex justify-center">
                  <mentor.Icon className="w-16 h-16 text-amber-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {mentor.name}
                </h3>
                <div className="text-sm text-amber-700 font-semibold mb-2">
                  {mentor.role}
                </div>
                <div className="text-sm text-gray-600 mb-2">
                  {mentor.expertise}
                </div>
                <div className="text-xs text-gray-500">{mentor.experience}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple steps to get started with our guidance program
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Register",
                description:
                  "Fill out the alumni guidance form with your details and needs",
                Icon: ClipboardIcon,
              },
              {
                step: "2",
                title: "Match",
                description:
                  "Get matched with the right mentor based on your goals",
                Icon: TargetIcon,
              },
              {
                step: "3",
                title: "Schedule",
                description: "Book your convenient session slot",
                Icon: CalendarIcon,
              },
              {
                step: "4",
                title: "Grow",
                description: "Attend sessions and achieve your goals",
                Icon: SparklesIcon,
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-rose-900 to-amber-700 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                  {item.step}
                </div>
                <div className="mb-3">
                  <item.Icon className="w-12 h-12 text-amber-700 mx-auto" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-gray-600">
              Hear from alumni who benefited from our guidance program
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Neha Patel",
                role: "Software Engineer at Google",
                text: "The career counseling helped me transition from teaching to tech. The mentors guided me through every step of the journey.",
                year: "Class of 2018",
              },
              {
                name: "Arjun Mehta",
                role: "MBA Student at IIM Bangalore",
                text: "The higher education counseling was invaluable. I got into my dream B-school with their expert guidance and support.",
                year: "Class of 2019",
              },
              {
                name: "Sneha Reddy",
                role: "Founder, EduTech Startup",
                text: "The entrepreneurship mentorship program gave me the confidence and knowledge to start my own company. Forever grateful!",
                year: "Class of 2017",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="mb-4">
                  <ChatIcon className="w-12 h-12 text-amber-700" />
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t pt-4">
                  <div className="font-bold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-amber-700">
                    {testimonial.role}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {testimonial.year}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-rose-900 to-amber-700">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Book your guidance session today and take the next step towards your
            goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 rounded-lg bg-white text-amber-800 font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg">
              Book a Session
            </button>
            <button className="px-8 py-4 rounded-lg border-2 border-white text-white font-semibold hover:bg-white hover:text-amber-800 transition-all duration-200">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
