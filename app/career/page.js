"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  MapPin,
  Mail,
  Users,
  Briefcase,
  GraduationCap,
  TrendingUp,
  Heart,
  Clock,
  Search,
  Filter,
  ArrowRight,
  Building2,
  Target,
  Award,
  Globe,
  ChevronDown,
  Send,
  CheckCircle,
  Star,
  Calendar,
  Phone,
  BookOpen,
  Lightbulb,
} from "lucide-react";

function ImageWithFallback({ src, alt, className, ...props }) {
  return (
    <div className={`relative ${className}`} {...props}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
}

function Card({ className = "", children, ...props }) {
  return (
    <div className={`bg-white rounded-lg shadow-md ${className}`} {...props}>
      {children}
    </div>
  );
}

function CardContent({ className = "", children, ...props }) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}

function Input({ className = "", ...props }) {
  return (
    <input
      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent ${className}`}
      {...props}
    />
  );
}

function Textarea({ className = "", ...props }) {
  return (
    <textarea
      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-vertical ${className}`}
      {...props}
    />
  );
}

function Button({
  size = "md",
  variant = "default",
  className = "",
  children,
  ...props
}) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  const sizeClasses = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-3 text-sm",
    lg: "px-6 py-4 text-base",
  };
  const variantClasses = {
    default:
      "bg-gradient-to-r from-rose-900 to-amber-800 text-white hover:shadow-lg",
    outline: "border-2 border-gray-300 bg-transparent hover:bg-gray-50",
    ghost: "bg-transparent hover:bg-gray-100",
  };

  return (
    <button
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

// Job listings data based on the website content
const jobListings = [
  {
    id: 1,
    title: "Academic Trainer - K12 - West & Central",
    department: "Training & Development",
    location: "Mumbai, Pune, Gwalior",
    type: "Full-time",
    experience: "3-5 years",
    description:
      "We are looking for experienced and passionate Academic Trainers to join our Training & Development team for the K12 segment. The ideal candidates will be responsible for training teachers, supporting academic excellence across schools, and driving curriculum implementation with consistency and quality.",
    requirements: [
      "Bachelor's/Master's degree in Education or relevant subject",
      "Minimum 3 years of teaching experience in K12 segment",
      "Strong communication and presentation skills",
      "Experience in teacher training and development",
      "Passion for educational excellence and innovation",
    ],
    featured: true,
  },
  {
    id: 2,
    title: "Curriculum Developer - ELA",
    department: "Academics",
    location: "Mumbai Head Office",
    type: "Full-time",
    experience: "2-4 years",
    description:
      "Join our Academics team as a Curriculum Developer – ELA and contribute to shaping innovative and comprehensive language learning experiences. We are looking for someone with a strong command of English, creativity in curriculum design, and a deep understanding of literacy development.",
    requirements: [
      "Master's degree in English Literature or Education",
      "Strong command of English language and literature",
      "Experience in curriculum design and development",
      "Understanding of modern pedagogical approaches",
      "Creative thinking and problem-solving skills",
    ],
    featured: true,
  },
  {
    id: 3,
    title: "Regional Manager - Sales - K12 - North",
    department: "Sales & Business Development",
    location: "Delhi, Gurgaon, Amritsar",
    type: "Full-time",
    experience: "5-8 years",
    description:
      "Join our dynamic K12 Sales team as a Regional Sales Manager in the North region. This role focuses on acquiring and onboarding schools, building strong partnerships, and driving brand expansion across the region.",
    requirements: [
      "MBA or equivalent qualification",
      "5+ years of sales experience in education sector",
      "Strong network in the education industry",
      "Excellent communication and negotiation skills",
      "Proven track record of achieving sales targets",
    ],
    featured: false,
  },
  {
    id: 4,
    title: "Curriculum Developer - Maths (Primary)",
    department: "Academics",
    location: "Mumbai Head Office",
    type: "Full-time",
    experience: "2-4 years",
    description:
      "We are inviting applications for Curriculum Developer – Primary Maths. This role involves designing conceptually strong, engaging, and age-appropriate math curriculum aligned with modern pedagogical approaches for young learners in primary grades.",
    requirements: [
      "Master's degree in Mathematics or Education",
      "Experience in primary mathematics education",
      "Knowledge of child development and learning theories",
      "Creativity in developing engaging math content",
      "Familiarity with digital learning platforms",
    ],
    featured: false,
  },
  {
    id: 5,
    title: "General Manager - Preschool - Sales and Operations",
    department: "Operations",
    location: "Mumbai Head Office",
    type: "Full-time",
    experience: "8-12 years",
    description:
      "Lead our preschool division as General Manager overseeing sales and operations. Drive business growth, manage operations excellence, and build strategic partnerships in the preschool segment.",
    requirements: [
      "MBA with 8+ years of leadership experience",
      "Experience in preschool or early childhood education",
      "Strong business acumen and strategic thinking",
      "Team management and leadership skills",
      "Understanding of franchise business models",
    ],
    featured: true,
  },
  {
    id: 6,
    title: "Social Media Marketing Executive",
    department: "PR & Marketing",
    location: "Mumbai Head Office",
    type: "Full-time",
    experience: "1-3 years",
    description:
      "We're looking for a creative and enthusiastic Social Media Marketing Executive to join our PR & Marketing team. The ideal candidate should have a flair for content creation, digital campaigns, and growing brand visibility across platforms.",
    requirements: [
      "Bachelor's degree in Marketing, Communications or related field",
      "1-3 years of social media marketing experience",
      "Proficiency in social media platforms and tools",
      "Creative content creation skills",
      "Understanding of digital marketing trends",
    ],
    featured: false,
  },
  {
    id: 7,
    title: "Academic Trainer - Preschool - East",
    department: "Training & Development",
    location: "Patna, Kolkata",
    type: "Full-time",
    experience: "2-4 years",
    description:
      "We are looking for a dedicated preschool academic trainer to join our team. The candidate will be responsible for training teachers, developing curriculum, and promoting an engaging learning environment for young learners.",
    requirements: [
      "Bachelor's degree in Early Childhood Education",
      "2+ years of preschool teaching experience",
      "Understanding of child development principles",
      "Excellent communication and training skills",
      "Passion for early childhood education",
    ],
    featured: false,
  },
  {
    id: 8,
    title: "Regional Manager - Franchise Relations - North",
    department: "Franchise Operations",
    location: "Delhi",
    type: "Full-time",
    experience: "5-7 years",
    description:
      "We are hiring a Regional Manager – Franchise Relations for the North region. The selected candidate will manage relationships with existing franchise partners, oversee compliance and academic delivery, and support business growth.",
    requirements: [
      "MBA or equivalent qualification",
      "5+ years in franchise or partnership management",
      "Strong relationship management skills",
      "Understanding of education sector dynamics",
      "Excellent problem-solving abilities",
    ],
    featured: false,
  },
];

const departments = [
  "All Departments",
  "Training & Development",
  "Academics",
  "Sales & Business Development",
  "Operations",
  "PR & Marketing",
  "Franchise Operations",
];

const locations = [
  "All Locations",
  "Mumbai Head Office",
  "Delhi",
  "Gurgaon",
  "Pune",
  "Patna",
  "Kolkata",
  "Gwalior",
  "Amritsar",
];

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description:
      "Comprehensive health insurance and wellness programs for you and your family.",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description:
      "Clear career progression paths with mentorship and skill development opportunities.",
  },
  {
    icon: Award,
    title: "Performance Recognition",
    description:
      "Merit-based rewards, bonuses, and recognition programs for outstanding performance.",
  },
  {
    icon: BookOpen,
    title: "Learning & Development",
    description:
      "Continuous learning opportunities, workshops, and professional development programs.",
  },
  {
    icon: Users,
    title: "Work-Life Balance",
    description:
      "Flexible working arrangements and supportive work environment.",
  },
  {
    icon: Globe,
    title: "Global Exposure",
    description:
      "Opportunities to work with international education standards and best practices.",
  },
];

export default function CareerPage() {
  const [selectedDepartment, setSelectedDepartment] =
    useState("All Departments");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [searchTerm, setSearchTerm] = useState("");
  const [showApplicationForm, setShowApplicationForm] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    resume: null,
    coverLetter: "",
  });

  const filteredJobs = jobListings.filter((job) => {
    const matchesDepartment =
      selectedDepartment === "All Departments" ||
      job.department === selectedDepartment;
    const matchesLocation =
      selectedLocation === "All Locations" ||
      job.location.includes(selectedLocation.replace(" Head Office", ""));
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesDepartment && matchesLocation && matchesSearch;
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleApplicationSubmit = (e) => {
    e.preventDefault();
    // Handle application submission
    alert("Application submitted successfully! We will get back to you soon.");
    setShowApplicationForm(null);
    setFormData({
      name: "",
      email: "",
      phone: "",
      position: "",
      experience: "",
      resume: null,
      coverLetter: "",
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=800&fit=crop"
            alt="Career Opportunities"
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-rose-900/90 to-amber-800/80"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-5xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Career Opportunities
          </h1>
          <p className="text-xl text-white/95 max-w-3xl mx-auto mb-8">
            Join our mission to transform education in India. Be part of a team
            that's shaping the future of learning and making a meaningful impact
            on students' lives across the country.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              <Briefcase className="w-5 h-5 mr-2" />
              View Open Positions
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 bg-white/10 border-white text-white hover:bg-white hover:text-rose-900"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact HR Team
            </Button>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Why Choose Sarv Education?
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We believe in nurturing talent and providing an environment where
              passionate educators and professionals can thrive while making a
              meaningful difference in education.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="bg-gradient-to-br from-amber-100 to-amber-200 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-amber-800" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Find Your Perfect Role
            </h2>

            <div className="grid md:grid-cols-4 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search positions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12"
                />
              </div>

              {/* Department Filter */}
              <div className="relative">
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent appearance-none bg-white"
                >
                  {departments.map((dept) => (
                    <option key={dept} value={dept}>
                      {dept}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
              </div>

              {/* Location Filter */}
              <div className="relative">
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent appearance-none bg-white"
                >
                  {locations.map((location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
              </div>

              {/* Results Count */}
              <div className="flex items-center justify-center bg-amber-100 rounded-lg px-4 py-3">
                <span className="text-amber-800 font-medium">
                  {filteredJobs.length} position
                  {filteredJobs.length !== 1 ? "s" : ""} found
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-6">
            {filteredJobs.map((job) => (
              <Card
                key={job.id}
                className="p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                          {job.title}
                        </h3>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                          <div className="flex items-center gap-1">
                            <Building2 className="w-4 h-4" />
                            {job.department}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {job.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {job.type}
                          </div>
                          <div className="flex items-center gap-1">
                            <Award className="w-4 h-4" />
                            {job.experience}
                          </div>
                        </div>
                      </div>
                      {job.featured && (
                        <span className="bg-gradient-to-r from-rose-900 to-amber-800 text-white px-3 py-1 rounded-full text-sm font-medium">
                          Featured
                        </span>
                      )}
                    </div>

                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {job.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Key Requirements:
                      </h4>
                      <ul className="text-gray-600 text-sm space-y-1">
                        {job.requirements.slice(0, 3).map((req, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                        {job.requirements.length > 3 && (
                          <li className="text-amber-800 font-medium">
                            +{job.requirements.length - 3} more requirements
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>

                  <div className="lg:ml-6 mt-4 lg:mt-0">
                    <Button
                      onClick={() => setShowApplicationForm(job.id)}
                      className="w-full lg:w-auto"
                    >
                      Apply Now <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No positions found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search criteria or check back later for new
                opportunities.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Application Form Modal */}
      {showApplicationForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-800">
                  Apply for Position
                </h3>
                <button
                  onClick={() => setShowApplicationForm(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ×
                </button>
              </div>
              <p className="text-gray-600 mt-1">
                {
                  jobListings.find((job) => job.id === showApplicationForm)
                    ?.title
                }
              </p>
            </div>

            <form onSubmit={handleApplicationSubmit} className="p-6 space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Years of Experience *
                  </label>
                  <Input
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    required
                    placeholder="e.g. 5 years"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Resume/CV *
                </label>
                <Input
                  type="file"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  required
                  className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-medium file:bg-amber-50 file:text-amber-700 hover:file:bg-amber-100"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cover Letter
                </label>
                <Textarea
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleInputChange}
                  rows="4"
                  placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                />
              </div>

              <div className="flex gap-4 pt-4">
                <Button type="submit" className="flex-1">
                  <Send className="w-4 h-4 mr-2" />
                  Submit Application
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowApplicationForm(null)}
                  className="flex-1"
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Contact HR Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-rose-900 to-amber-800">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Have Questions?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Can't find the right position or have questions about our hiring
            process? Our HR team is here to help you find your perfect role at
            Sarv Education.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-3 rounded-full">
                <Mail className="w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="font-medium">Email Us</div>
                <div className="text-white/80">careers@sarveducation.com</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-3 rounded-full">
                <Phone className="w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="font-medium">Call Us</div>
                <div className="text-white/80">+91 98765 43210</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}