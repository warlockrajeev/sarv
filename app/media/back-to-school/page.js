"use client";

import { useState } from "react";

// Icon Components
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

function GameIcon({ className = "w-12 h-12" }) {
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
        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
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

function TrophyIcon({ className = "w-12 h-12" }) {
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
        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
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
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
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

function PaletteIcon({ className = "w-12 h-12" }) {
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
        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
      />
    </svg>
  );
}

function MusicIcon({ className = "w-12 h-12" }) {
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
        d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
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
        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  );
}

export default function BackToSchoolPage() {
  const [selectedYear, setSelectedYear] = useState("2025");

  const activities = {
    2025: [
      {
        title: "Grand Welcome Ceremony",
        description:
          "Colorful welcome arches, balloon decorations, and enthusiastic teachers greeting students with warm smiles.",
        Icon: SparklesIcon,
        date: "August 1, 2025",
      },
      {
        title: "Ice Breaker Activities",
        description:
          "Fun games and activities to help students reconnect with friends and make new connections.",
        Icon: GameIcon,
        date: "August 1-2, 2025",
      },
      {
        title: "Parent-Teacher Orientation",
        description:
          "Interactive sessions to discuss academic goals, school policies, and expectations for the year.",
        Icon: UsersIcon,
        date: "August 3, 2025",
      },
      {
        title: "Student Talent Show",
        description:
          "Platform for students to showcase their talents in music, dance, art, and public speaking.",
        Icon: MicrophoneIcon,
        date: "August 5, 2025",
      },
      {
        title: "School Supplies Drive",
        description:
          "Community initiative to ensure every student has the necessary supplies for a successful year.",
        Icon: BookOpenIcon,
        date: "August 1-7, 2025",
      },
      {
        title: "Sports & Wellness Day",
        description:
          "Fun physical activities, yoga sessions, and wellness workshops to promote healthy habits.",
        Icon: HeartIcon,
        date: "August 6, 2025",
      },
    ],
    2024: [
      {
        title: "Welcome Back Assembly",
        description:
          "School-wide gathering celebrating the new academic year with performances and speeches.",
        Icon: MicrophoneIcon,
        date: "August 1, 2024",
      },
      {
        title: "Classroom Decoration Competition",
        description:
          "Students and teachers collaborated to create vibrant, inspiring learning spaces.",
        Icon: PaletteIcon,
        date: "July 30, 2024",
      },
      {
        title: "Meet Your Teacher Day",
        description:
          "Students got to know their teachers in a relaxed, informal setting with fun activities.",
        Icon: HandshakeIcon,
        date: "August 2, 2024",
      },
      {
        title: "Digital Learning Workshop",
        description:
          "Introduction to new educational technology and digital tools for students and parents.",
        Icon: LightBulbIcon,
        date: "August 3, 2024",
      },
    ],
  };

  const highlights = [
    {
      year: "2025",
      theme: "Reconnect, Recharge, Excel",
      participation: "15,000+ students",
      schools: "500+ partner schools",
      activities: "50+ activities",
      Icon: SparklesIcon,
    },
    {
      year: "2024",
      theme: "New Beginnings, Endless Possibilities",
      participation: "12,000+ students",
      schools: "400+ partner schools",
      activities: "40+ activities",
      Icon: RocketIcon,
    },
    {
      year: "2023",
      theme: "Together We Learn, Together We Grow",
      participation: "10,000+ students",
      schools: "300+ partner schools",
      activities: "35+ activities",
      Icon: LightBulbIcon,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-amber-700 to-rose-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        {/* Animated elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 text-6xl animate-bounce">
            🎒
          </div>
          <div className="absolute top-40 right-20 text-5xl animate-bounce delay-100">
            ✏️
          </div>
          <div className="absolute bottom-20 left-1/4 text-7xl animate-bounce delay-200">
            📖
          </div>
          <div className="absolute top-32 right-1/3 text-6xl animate-bounce delay-300">
            🎨
          </div>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Back To School! 🎉
          </h1>
          <p className="text-2xl text-white/95 max-w-3xl mx-auto mb-4">
            Celebrating New Beginnings and Exciting Adventures
          </p>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Join us for a week-long celebration as we welcome students back with
            joy, enthusiasm, and memorable experiences
          </p>
        </div>
      </section>

      {/* Year Highlights */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Back to School Highlights
            </h2>
            <p className="text-lg text-gray-600">
              A glimpse of our annual celebrations over the years
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight) => (
              <div
                key={highlight.year}
                className="bg-gradient-to-br from-amber-50 to-rose-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex justify-center mb-4">
                  <highlight.Icon className="w-16 h-16 text-amber-700" />
                </div>
                <div className="text-center mb-4">
                  <span className="inline-block px-4 py-2 bg-gradient-to-r from-rose-900 to-amber-700 text-white font-bold text-2xl rounded-lg mb-3">
                    {highlight.year}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {highlight.theme}
                  </h3>
                </div>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex items-center gap-2">
                    <AcademicCapIcon className="w-5 h-5 text-amber-700" />
                    <span>{highlight.participation}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-amber-700"
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
                    <span>{highlight.schools}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="w-5 h-5 text-amber-700" />
                    <span>{highlight.activities}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-16 bg-gradient-to-b from-amber-50 to-rose-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Festival Activities
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Explore the exciting activities from our Back to School
              celebrations
            </p>

            {/* Year Selector */}
            <div className="flex justify-center gap-4 mb-8">
              {Object.keys(activities).map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                    selectedYear === year
                      ? "bg-gradient-to-r from-rose-900 to-amber-700 text-white shadow-lg"
                      : "bg-white text-gray-700 hover:bg-gray-100 shadow"
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities[selectedYear].map((activity, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="mb-4">
                  <activity.Icon className="w-12 h-12 text-amber-700" />
                </div>
                <div className="mb-2">
                  <span className="text-xs text-amber-700 font-semibold">
                    {activity.date}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {activity.title}
                </h3>
                <p className="text-gray-600 text-sm">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Moments to Remember
            </h2>
            <p className="text-lg text-gray-600">
              Capturing the joy and excitement of Back to School celebrations
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { Icon: SparklesIcon, color: "from-red-200 to-pink-200" },
              { Icon: BookOpenIcon, color: "from-blue-200 to-cyan-200" },
              { Icon: PaletteIcon, color: "from-purple-200 to-pink-200" },
              { Icon: MicrophoneIcon, color: "from-yellow-200 to-orange-200" },
              { Icon: HeartIcon, color: "from-green-200 to-emerald-200" },
              { Icon: MusicIcon, color: "from-indigo-200 to-purple-200" },
              { Icon: TrophyIcon, color: "from-amber-200 to-yellow-200" },
              { Icon: HandshakeIcon, color: "from-rose-200 to-red-200" },
            ].map((item, index) => (
              <div
                key={index}
                className={`aspect-square rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center hover:scale-105 transition-transform duration-300 cursor-pointer shadow-md`}
              >
                <item.Icon className="w-20 h-20 text-gray-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-r from-amber-50 to-rose-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What People Say
            </h2>
            <p className="text-lg text-gray-600">
              Hear from students, parents, and teachers about their experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-4xl mb-4">😊</div>
              <p className="text-gray-600 mb-4 italic">
                "The Back to School festival made my daughter so excited to
                start the new year. The activities were engaging and fun!"
              </p>
              <div className="font-semibold text-gray-900">- Parent, Delhi</div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-4xl mb-4">🎉</div>
              <p className="text-gray-600 mb-4 italic">
                "I loved the talent show! It gave me confidence to perform in
                front of everyone. Can't wait for next year!"
              </p>
              <div className="font-semibold text-gray-900">
                - Student, Grade 7
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-4xl mb-4">👏</div>
              <p className="text-gray-600 mb-4 italic">
                "The festival creates such positive energy. It's wonderful to
                see students reconnect and build community."
              </p>
              <div className="font-semibold text-gray-900">
                - Teacher, Mumbai
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-rose-900 to-amber-700">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join Our Next Celebration!
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Be part of our vibrant educational community and celebrate the joy
            of learning
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/partner-with-us"
              className="px-8 py-4 rounded-lg bg-white text-blue-600 font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg"
            >
              Partner With Us
            </a>
            <a
              href="/franchise-preschool"
              className="px-8 py-4 rounded-lg border-2 border-white text-white font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              Start a Franchise
            </a>
          </div>
        </div>
      </section>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-bounce {
          animation: bounce 3s infinite;
        }
        .delay-100 {
          animation-delay: 0.3s;
        }
        .delay-200 {
          animation-delay: 0.6s;
        }
        .delay-300 {
          animation-delay: 0.9s;
        }
      `}</style>
    </div>
  );
}
