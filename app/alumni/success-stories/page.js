"use client";

import { useState } from "react";

// Icon Components
function MedicalIcon({ className = "w-12 h-12" }) {
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
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    </svg>
  );
}

function CodeIcon({ className = "w-12 h-12" }) {
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
        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
      />
    </svg>
  );
}

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

function FilmIcon({ className = "w-12 h-12" }) {
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
        d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
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

export default function SuccessStoriesPage() {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const successStories = [
    {
      id: 1,
      name: "Dr. Aisha Khan",
      batch: "Class of 2015",
      achievement: "Chief Medical Officer",
      organization: "Apollo Hospitals, Mumbai",
      category: "healthcare",
      Icon: MedicalIcon,
      story:
        "From our classrooms to leading one of India's premier hospitals, Dr. Aisha's journey is inspiring. She credits her foundation in discipline and compassion to her time at Sarv Education schools.",
      quote:
        "The values I learned here shaped not just my career, but who I am as a person.",
      highlights: [
        "MBBS from AIIMS",
        "MD in Cardiology",
        "Published 20+ research papers",
        "Youngest CMO in Apollo's history",
      ],
    },
    {
      id: 2,
      name: "Rahul Sharma",
      batch: "Class of 2016",
      achievement: "Senior Software Engineer",
      organization: "Google, Bangalore",
      category: "technology",
      Icon: CodeIcon,
      story:
        "Rahul's passion for coding started in our computer labs. Today, he's building products used by millions worldwide. His journey from a curious student to a tech leader inspires our current students.",
      quote:
        "The problem-solving skills I developed here are the foundation of my success in tech.",
      highlights: [
        "BTech from IIT Delhi",
        "3 Google Cloud certifications",
        "Led 5+ major product launches",
        "Mentor to 50+ engineers",
      ],
    },
    {
      id: 3,
      name: "Priya Deshmukh",
      batch: "Class of 2014",
      achievement: "Founder & CEO",
      organization: "GreenTech Solutions",
      category: "entrepreneurship",
      Icon: BriefcaseIcon,
      story:
        "Priya's startup is revolutionizing sustainable agriculture in rural India. Her entrepreneurial spirit was nurtured through our innovation programs and science fairs.",
      quote:
        "The school taught me to dream big and gave me the tools to make those dreams reality.",
      highlights: [
        "Raised $5M in funding",
        "Impacted 10,000+ farmers",
        "Forbes 30 Under 30",
        "Multiple sustainability awards",
      ],
    },
    {
      id: 4,
      name: "Vikram Patel",
      batch: "Class of 2017",
      achievement: "Indian Foreign Service Officer",
      organization: "Ministry of External Affairs",
      category: "government",
      Icon: GlobeIcon,
      story:
        "Vikram's dedication to public service began with our Model UN programs. Now representing India on the global stage, he's making a real difference in international relations.",
      quote:
        "The leadership opportunities here prepared me for the challenges of diplomatic service.",
      highlights: [
        "UPSC Rank 15",
        "BA from St. Stephen's College",
        "Posted in 3 countries",
        "Youth Ambassador for UN initiatives",
      ],
    },
    {
      id: 5,
      name: "Anjali Reddy",
      batch: "Class of 2018",
      achievement: "Professional Athlete",
      organization: "Indian National Cricket Team",
      category: "sports",
      Icon: TrophyIcon,
      story:
        "From our school cricket team to representing India internationally, Anjali's journey showcases dedication and perseverance. Our sports programs helped her discover and nurture her talent.",
      quote:
        "The discipline and teamwork I learned here are crucial to my success on the field.",
      highlights: [
        "100+ international matches",
        "3 Player of the Series awards",
        "Part of Women's World Cup team",
        "Youth cricket coach",
      ],
    },
    {
      id: 6,
      name: "Karan Malhotra",
      batch: "Class of 2015",
      achievement: "Award-Winning Filmmaker",
      organization: "Independent Productions",
      category: "arts",
      Icon: FilmIcon,
      story:
        "Karan's creative journey started in our drama club and school film projects. His documentaries on social issues have won multiple international awards and sparked important conversations.",
      quote:
        "The creative freedom and encouragement here gave me the confidence to pursue my passion.",
      highlights: [
        "5 National Film Awards",
        "Screened at Cannes",
        "Netflix original series director",
        "Taught filmmaking to 500+ students",
      ],
    },
    {
      id: 7,
      name: "Meera Iyer",
      batch: "Class of 2016",
      achievement: "Investment Banker",
      organization: "Goldman Sachs, Singapore",
      category: "finance",
      Icon: ChartIcon,
      story:
        "Meera's analytical skills were honed through our math olympiads and economics clubs. She's now one of the youngest Vice Presidents at a top investment bank.",
      quote:
        "The rigorous academics and competitive spirit here prepared me for the demanding world of finance.",
      highlights: [
        "MBA from Harvard",
        "Managed $2B portfolio",
        "Featured in Business Today",
        "Mentors aspiring finance professionals",
      ],
    },
    {
      id: 8,
      name: "Arjun Singh",
      batch: "Class of 2019",
      achievement: "Social Entrepreneur",
      organization: "Education For All Foundation",
      category: "social",
      Icon: HeartIcon,
      story:
        "Inspired by the school's community service programs, Arjun founded an NGO providing education to underprivileged children. His organization has set up 50+ learning centers across India.",
      quote:
        "The values of compassion and service instilled here drive my mission to give back to society.",
      highlights: [
        "Impact on 5,000+ children",
        "Partnered with 100+ schools",
        "Social Impact Award 2024",
        "TED speaker",
      ],
    },
  ];

  const categories = [
    { id: "all", label: "All Stories", Icon: SparklesIcon },
    { id: "technology", label: "Technology", Icon: CodeIcon },
    { id: "healthcare", label: "Healthcare", Icon: MedicalIcon },
    { id: "entrepreneurship", label: "Business", Icon: BriefcaseIcon },
    { id: "government", label: "Public Service", Icon: GlobeIcon },
    { id: "sports", label: "Sports", Icon: TrophyIcon },
    { id: "arts", label: "Arts & Media", Icon: FilmIcon },
    { id: "finance", label: "Finance", Icon: ChartIcon },
    { id: "social", label: "Social Impact", Icon: HeartIcon },
  ];

  const filteredStories =
    selectedFilter === "all"
      ? successStories
      : successStories.filter((story) => story.category === selectedFilter);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-amber-700 to-rose-800">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <SparklesIcon className="w-12 h-12" />
            Alumni Success Stories
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Celebrating the achievements of our outstanding alumni who are
            making a difference across the globe
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent mb-2">
                10,000+
              </div>
              <div className="text-gray-600">Alumni Worldwide</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent mb-2">
                50+
              </div>
              <div className="text-gray-600">Countries</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent mb-2">
                500+
              </div>
              <div className="text-gray-600">Success Stories</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent mb-2">
                95%
              </div>
              <div className="text-gray-600">Career Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50 sticky top-0 z-40 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedFilter(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 flex items-center ${
                  selectedFilter === category.id
                    ? "bg-gradient-to-r from-rose-900 to-amber-700 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100 shadow border border-gray-200"
                }`}
              >
                <category.Icon className="w-4 h-4 mr-2" />
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredStories.map((story) => (
              <article
                key={story.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="p-8">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="flex-shrink-0">
                      <story.Icon className="w-20 h-20 text-amber-700" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">
                        {story.name}
                      </h3>
                      <div className="text-amber-600 font-semibold mb-1">
                        {story.achievement}
                      </div>
                      <div className="text-gray-600 text-sm mb-2">
                        {story.organization}
                      </div>
                      <div className="inline-block px-3 py-1 bg-amber-100 text-amber-800 text-xs font-semibold rounded-full">
                        {story.batch}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {story.story}
                  </p>

                  <div className="bg-gradient-to-r from-amber-50 to-rose-50 rounded-lg p-4 mb-4">
                    <p className="text-gray-800 italic">"{story.quote}"</p>
                  </div>

                  <div>
                    <div className="text-sm font-semibold text-gray-700 mb-3">
                      Key Achievements:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {story.highlights.map((highlight, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 text-sm text-gray-600"
                        >
                          <span className="text-amber-500 mt-0.5">✓</span>
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredStories.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <p className="text-xl text-gray-600">
                No stories found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Share Your Story CTA */}
      <section className="py-16 bg-gradient-to-r from-amber-50 to-rose-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-6">📣</div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Share Your Success Story
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Are you a Sarv Education alumnus with an inspiring journey? We'd
            love to feature your story and inspire the next generation!
          </p>
          <button className="px-8 py-4 rounded-lg bg-gradient-to-r from-amber-600 to-rose-600 text-white font-semibold hover:opacity-90 transition-all duration-200 shadow-lg">
            Submit Your Story
          </button>
        </div>
      </section>

      {/* Alumni Network */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Join Our Alumni Network
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay connected, network with fellow alumni, and access exclusive
              opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-amber-50 to-white rounded-xl shadow-md hover:shadow-lg transition-all">
              <div className="text-5xl mb-4">🌐</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Alumni Portal
              </h3>
              <p className="text-gray-600 mb-4">
                Access exclusive content, job postings, and networking
                opportunities
              </p>
              <button className="text-amber-600 font-semibold hover:text-amber-700">
                Join Now →
              </button>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-rose-50 to-white rounded-xl shadow-md hover:shadow-lg transition-all">
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Mentorship Program
              </h3>
              <p className="text-gray-600 mb-4">
                Mentor current students or get guidance from senior alumni
              </p>
              <button className="text-rose-600 font-semibold hover:text-rose-700">
                Learn More →
              </button>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-orange-50 to-white rounded-xl shadow-md hover:shadow-lg transition-all">
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Alumni Events
              </h3>
              <p className="text-gray-600 mb-4">
                Reunions, networking events, and professional workshops
              </p>
              <button className="text-orange-600 font-semibold hover:text-orange-700">
                View Events →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-rose-600">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Inspired by These Stories?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join Sarv Education and write your own success story
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/franchise-preschool"
              className="px-8 py-4 rounded-lg bg-white text-amber-600 font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg"
            >
              Start a Franchise
            </a>
            <a
              href="/partner-with-us"
              className="px-8 py-4 rounded-lg border-2 border-white text-white font-semibold hover:bg-white hover:text-amber-600 transition-all duration-200"
            >
              Partner With Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
