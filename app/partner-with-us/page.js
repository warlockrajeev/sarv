"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";
import {
  Handshake,
  Building2,
  Users,
  TrendingUp,
  Award,
  BookOpen,
  Globe,
  Target,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  FileText,
  Briefcase,
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
    <div className={`bg-white rounded-lg ${className}`} {...props}>
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
      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none ${className}`}
      {...props}
    />
  );
}

function Button({
  size = "md",
  variant = "default",
  className = "",
  children,
  style,
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
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border-2 border-gray-300 bg-transparent hover:bg-gray-50",
  };

  return (
    <button
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      style={style}
      {...props}
    >
      {children}
    </button>
  );
}

function Select({ children, ...props }) {
  return (
    <select
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
      {...props}
    >
      {children}
    </select>
  );
}

export default function PartnerWithUsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1758599543157-bc1a94fec33c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBhcnRuZXJzaGlwJTIwaGFuZHNoYWtlfGVufDF8fHx8MTc2MjMwNzkzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Partner with us"
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-rose-900/90 to-amber-800/80"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-5xl">
          <div className="inline-block mb-4">
            <div className="bg-amber-300/20 backdrop-blur-sm px-6 py-2 rounded-full border border-amber-300/40">
              <span className="text-amber-300">Join Our Network</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Partner With Us
          </h1>
          <p className="text-xl text-white/95 max-w-3xl mx-auto mb-8">
            Be part of India's leading educational network. Join hands with Sarv
            Education to establish world-class schools and shape the future of
            education in your community.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Why Partner With Sarv Education?
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Sarv Education is committed to transforming the educational
              landscape with innovative solutions. Our partnership model is
              designed to create successful, sustainable schools that make a
              real difference in communities across India.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <Card className="border-2 border-amber-200 hover:border-amber-400 transition-all hover:shadow-xl">
              <CardContent className="p-6 text-center">
                <div className="bg-gradient-to-br from-amber-100 to-amber-200 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Building2
                    className="w-10 h-10"
                    style={{ color: "#f26522" }}
                  />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800">
                  Trusted Brand
                </h3>
                <p className="text-gray-600">
                  Leverage our reputation and commitment to educational
                  excellence spanning years of innovation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-rose-200 hover:border-rose-400 transition-all hover:shadow-xl">
              <CardContent className="p-6 text-center">
                <div className="bg-gradient-to-br from-rose-100 to-rose-200 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-10 h-10 text-rose-900" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800">
                  Proven Curriculum
                </h3>
                <p className="text-gray-600">
                  Access to internationally recognized programs with Soul
                  Science integration and modern pedagogy.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-amber-200 hover:border-amber-400 transition-all hover:shadow-xl">
              <CardContent className="p-6 text-center">
                <div className="bg-gradient-to-br from-amber-100 to-amber-200 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-amber-800" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800">
                  Complete Support
                </h3>
                <p className="text-gray-600">
                  End-to-end guidance from planning to operations, including
                  training and ongoing assistance.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-rose-200 hover:border-rose-400 transition-all hover:shadow-xl">
              <CardContent className="p-6 text-center">
                <div className="bg-gradient-to-br from-rose-100 to-rose-200 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-10 h-10 text-rose-900" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800">
                  Business Success
                </h3>
                <p className="text-gray-600">
                  Proven business model with high demand and sustainable returns
                  on investment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 px-4 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              What We Offer Our Partners
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive support and resources to ensure your school's
              success from day one.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-amber-200 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-amber-100 p-3 rounded-xl shrink-0">
                  <Target className="w-6 h-6" style={{ color: "#f26522" }} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">
                    Strategic Planning
                  </h3>
                  <p className="text-gray-600">
                    Site selection, feasibility studies, architectural planning,
                    and infrastructure design guidance to ensure optimal setup.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-rose-200 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-rose-100 p-3 rounded-xl shrink-0">
                  <BookOpen className="w-6 h-6 text-rose-900" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">
                    Academic Framework
                  </h3>
                  <p className="text-gray-600">
                    Complete curriculum, lesson plans, assessments, and learning
                    materials aligned with international standards.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-amber-200 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-amber-100 p-3 rounded-xl shrink-0">
                  <Users className="w-6 h-6 text-amber-800" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">
                    Teacher Training
                  </h3>
                  <p className="text-gray-600">
                    Comprehensive training programs for teachers and staff,
                    including ongoing professional development workshops.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-rose-200 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-rose-100 p-3 rounded-xl shrink-0">
                  <Briefcase className="w-6 h-6 text-rose-900" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">
                    Operational Support
                  </h3>
                  <p className="text-gray-600">
                    Management systems, policies, procedures, and technology
                    platforms for smooth daily operations.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-amber-200 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-amber-100 p-3 rounded-xl shrink-0">
                  <Globe className="w-6 h-6" style={{ color: "#f26522" }} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">
                    Marketing & Branding
                  </h3>
                  <p className="text-gray-600">
                    Brand identity, marketing materials, admission strategies,
                    and ongoing promotional support.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-rose-200 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-rose-100 p-3 rounded-xl shrink-0">
                  <Award className="w-6 h-6 text-rose-900" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">
                    Quality Assurance
                  </h3>
                  <p className="text-gray-600">
                    Regular audits, quality checks, and continuous improvement
                    initiatives to maintain excellence standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-amber-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Partnership Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A straightforward journey from inquiry to launching your school.
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            {/* Step 1 */}
            <div className="group relative">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 bg-white p-8 rounded-2xl border-2 border-amber-200 hover:border-amber-400 hover:shadow-xl transition-all">
                <div className="shrink-0">
                  <div className="bg-gradient-to-br from-amber-100 to-amber-300 w-24 h-24 rounded-2xl flex items-center justify-center shadow-lg">
                    <div className="text-center">
                      <div className="text-amber-800 mb-1 text-sm font-medium">
                        STEP
                      </div>
                      <div className="text-amber-900 text-xl font-bold">01</div>
                    </div>
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Initial Contact & Inquiry
                  </h3>
                  <p className="text-gray-600">
                    Submit your inquiry through our online form or contact our
                    partnership team directly. Schedule an initial consultation
                    to discuss your vision, location, and partnership goals.
                  </p>
                </div>
                <div className="hidden md:block">
                  <div className="text-amber-800">
                    <Handshake className="w-8 h-8" />
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="group relative">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 bg-white p-8 rounded-2xl border-2 border-rose-200 hover:border-rose-400 hover:shadow-xl transition-all">
                <div className="shrink-0">
                  <div className="bg-gradient-to-br from-rose-100 to-rose-300 w-24 h-24 rounded-2xl flex items-center justify-center shadow-lg">
                    <div className="text-center">
                      <div className="text-rose-800 mb-1 text-sm font-medium">
                        STEP
                      </div>
                      <div className="text-rose-900 text-xl font-bold">02</div>
                    </div>
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Site Evaluation & Feasibility Study
                  </h3>
                  <p className="text-gray-600">
                    Our team conducts a comprehensive site visit and feasibility
                    assessment. We analyze the location, infrastructure
                    requirements, market potential, and provide detailed
                    recommendations.
                  </p>
                </div>
                <div className="hidden md:block">
                  <div className="text-rose-900">
                    <Target className="w-8 h-8" />
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="group relative">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 bg-white p-8 rounded-2xl border-2 border-amber-200 hover:border-amber-400 hover:shadow-xl transition-all">
                <div className="shrink-0">
                  <div className="bg-gradient-to-br from-amber-100 to-amber-300 w-24 h-24 rounded-2xl flex items-center justify-center shadow-lg">
                    <div className="text-center">
                      <div className="text-amber-800 mb-1 text-sm font-medium">
                        STEP
                      </div>
                      <div className="text-amber-900 text-xl font-bold">03</div>
                    </div>
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Partnership Agreement
                  </h3>
                  <p className="text-gray-600">
                    Review and sign the partnership agreement outlining roles,
                    responsibilities, investment details, and terms. Our legal
                    team ensures complete transparency and clarity.
                  </p>
                </div>
                <div className="hidden md:block">
                  <div className="text-amber-800">
                    <FileText className="w-8 h-8" />
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="group relative">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 bg-white p-8 rounded-2xl border-2 border-rose-200 hover:border-rose-400 hover:shadow-xl transition-all">
                <div className="shrink-0">
                  <div className="bg-gradient-to-br from-rose-100 to-rose-300 w-24 h-24 rounded-2xl flex items-center justify-center shadow-lg">
                    <div className="text-center">
                      <div className="text-rose-800 mb-1 text-sm font-medium">
                        STEP
                      </div>
                      <div className="text-rose-900 text-xl font-bold">04</div>
                    </div>
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Infrastructure Setup & Training
                  </h3>
                  <p className="text-gray-600">
                    Begin infrastructure development with our architectural
                    guidance. Simultaneously, recruit staff and provide
                    comprehensive training programs to ensure quality standards.
                  </p>
                </div>
                <div className="hidden md:block">
                  <div className="text-rose-900">
                    <Building2 className="w-8 h-8" />
                  </div>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="group relative">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 bg-gradient-to-r from-rose-900 to-amber-800 p-8 rounded-2xl border-2 border-transparent hover:shadow-2xl transition-all">
                <div className="shrink-0">
                  <div className="bg-white w-24 h-24 rounded-2xl flex items-center justify-center shadow-lg">
                    <div className="text-center">
                      <div className="text-amber-800 mb-1 text-sm font-medium">
                        STEP
                      </div>
                      <div className="text-rose-900 text-xl font-bold">05</div>
                    </div>
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    Grand Launch & Ongoing Support
                  </h3>
                  <p className="text-white/90">
                    Celebrate the grand opening of your school with full
                    marketing support. Our team provides continuous operational
                    assistance, quality monitoring, and growth strategies.
                  </p>
                </div>
                <div className="hidden md:block">
                  <div className="text-white">
                    <Award className="w-8 h-8" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Duration */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-white px-8 py-4 rounded-full border-2 border-amber-200 shadow-md">
              <p className="text-gray-700">
                <span className="text-amber-800 font-semibold">
                  Average Timeline:
                </span>{" "}
                12-18 months from inquiry to launch
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758936381579-c1af30a9b1de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBjYW1wdXMlMjBhZXJpYWx8ZW58MXx8fHwxNzYyMzEzMjMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="School campus"
                className="w-full h-full"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Partnership Requirements
              </h2>
              <p className="text-gray-700 mb-8">
                We seek partners who share our vision of transforming education
                and are committed to long-term excellence. Here are the key
                requirements:
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-amber-800 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1 text-gray-800">
                      Land & Infrastructure
                    </h3>
                    <p className="text-gray-600">
                      Minimum 2-3 acres of land with proper accessibility and
                      infrastructure capabilities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-rose-900 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1 text-gray-800">
                      Financial Investment
                    </h3>
                    <p className="text-gray-600">
                      Adequate capital for infrastructure development,
                      equipment, and operational costs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-amber-800 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1 text-gray-800">
                      Passion for Education
                    </h3>
                    <p className="text-gray-600">
                      Strong commitment to educational excellence and community
                      development.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-rose-900 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1 text-gray-800">
                      Local Knowledge
                    </h3>
                    <p className="text-gray-600">
                      Understanding of local community needs and educational
                      landscape.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-amber-800 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1 text-gray-800">
                      Long-term Vision
                    </h3>
                    <p className="text-gray-600">
                      Commitment to building a sustainable institution that
                      serves the community for generations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-4 bg-gradient-to-r from-rose-900 to-amber-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Network</h2>
            <p className="text-white/90 max-w-2xl mx-auto">
              Join a thriving network of successful schools across India.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="text-white">
              <div className="flex items-center justify-center mb-3">
                <Building2 className="w-10 h-10" />
              </div>
              <div className="text-3xl font-bold mb-2">60+</div>
              <p>Schools Nationwide</p>
            </div>
            <div className="text-white">
              <div className="flex items-center justify-center mb-3">
                <Users className="w-10 h-10" />
              </div>
              <div className="text-3xl font-bold mb-2">15,000+</div>
              <p>Students Enrolled</p>
            </div>
            <div className="text-white">
              <div className="flex items-center justify-center mb-3">
                <Globe className="w-10 h-10" />
              </div>
              <div className="text-3xl font-bold mb-2">45+</div>
              <p>Cities Covered</p>
            </div>
            <div className="text-white">
              <div className="flex items-center justify-center mb-3">
                <Award className="w-10 h-10" />
              </div>
              <div className="text-3xl font-bold mb-2">25+</div>
              <p>Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Start Your Partnership Journey
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Fill out the form below and our partnership team will get in touch
              with you within 48 hours.
            </p>
          </div>

          <Card className="border-2 border-amber-200">
            <CardContent className="p-8 md:p-12">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-2 text-gray-700 font-medium">
                      Full Name *
                    </label>
                    <Input
                      placeholder="Enter your full name"
                      className="border-gray-300"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-gray-700 font-medium">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      className="border-gray-300"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-2 text-gray-700 font-medium">
                      Phone Number *
                    </label>
                    <Input
                      type="tel"
                      placeholder="+91 00000 00000"
                      className="border-gray-300"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-gray-700 font-medium">
                      City *
                    </label>
                    <Input
                      placeholder="Enter your city"
                      className="border-gray-300"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-2 text-gray-700 font-medium">
                      State *
                    </label>
                    <Select>
                      <option value="">Select state</option>
                      <option value="maharashtra">Maharashtra</option>
                      <option value="karnataka">Karnataka</option>
                      <option value="delhi">Delhi</option>
                      <option value="gujarat">Gujarat</option>
                      <option value="rajasthan">Rajasthan</option>
                      <option value="tamilnadu">Tamil Nadu</option>
                      <option value="telangana">Telangana</option>
                      <option value="westbengal">West Bengal</option>
                      <option value="other">Other</option>
                    </Select>
                  </div>
                  <div>
                    <label className="block mb-2 text-gray-700 font-medium">
                      Land Available (in acres)
                    </label>
                    <Input
                      type="number"
                      placeholder="Enter available land"
                      className="border-gray-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-2 text-gray-700 font-medium">
                    Investment Capacity
                  </label>
                  <Select>
                    <option value="">Select investment range</option>
                    <option value="5-10cr">₹5-10 Crores</option>
                    <option value="10-20cr">₹10-20 Crores</option>
                    <option value="20-50cr">₹20-50 Crores</option>
                    <option value="50cr+">₹50+ Crores</option>
                  </Select>
                </div>

                <div>
                  <label className="block mb-2 text-gray-700 font-medium">
                    Message
                  </label>
                  <Textarea
                    placeholder="Tell us about your vision and any specific questions you have..."
                    rows={5}
                    className="border-gray-300"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input type="checkbox" id="terms" className="mt-1" />
                  <label htmlFor="terms" className="text-gray-600 text-sm">
                    I agree to receive communication from Sarv Education
                    regarding partnership opportunities and understand that my
                    information will be kept confidential.
                  </label>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full md:w-auto px-12 bg-gradient-to-r from-rose-900 to-amber-800 hover:shadow-lg text-white"
                >
                  Submit Inquiry
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Get In Touch
            </h2>
            <p className="text-gray-600">
              Have questions? Our partnership team is here to help.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-amber-200 hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8" style={{ color: "#f26522" }} />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800">
                  Call Us
                </h3>
                <p className="text-gray-600 mb-2">Partnership Helpline</p>
                <p className="text-gray-800 font-medium">1800-123-4567</p>
                <p className="text-gray-600 mt-2 text-sm">
                  Mon-Fri, 9 AM - 6 PM
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-rose-200 hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-rose-900" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800">
                  Email Us
                </h3>
                <p className="text-gray-600 mb-2">Partnership Queries</p>
                <p className="text-gray-800 font-medium">
                  partner@sarveducation.com
                </p>
                <p className="text-gray-600 mt-2 text-sm">
                  24-48 hour response time
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-amber-200 hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-amber-800" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800">
                  Visit Us
                </h3>
                <p className="text-gray-600 mb-2">Head Office</p>
                <p className="text-gray-800 font-medium">Mumbai, Maharashtra</p>
                <p className="text-gray-600 mt-2 text-sm">
                  By appointment only
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-rose-900 to-amber-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Education?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Join the Sarv Education family and be part of a movement that's
            shaping the future of education in India. Together, we can create
            schools that truly make a difference.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white hover:bg-gray-100 text-gray-800 font-medium"
              style={{ color: "#f26522" }}
            >
              <FileText className="w-5 h-5 mr-2" />
              Download Brochure
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 font-medium"
            >
              <Phone className="w-5 h-5 mr-2" />
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}