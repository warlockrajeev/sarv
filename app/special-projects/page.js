"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";
import {
  Rocket,
  Palette,
  Trophy,
  Music,
  Microscope,
  Users,
  Globe,
  BookOpen,
  Lightbulb,
  Code,
  Camera,
  Heart,
  TreePine,
  Megaphone,
  FlaskConical,
  Brush,
  Star,
  Award,
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

function Tabs({ defaultValue, className, children }) {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <div className={className}>
      {React.Children.map(children, (child) => {
        if (child.type === TabsList) {
          return React.cloneElement(child, { activeTab, setActiveTab });
        }
        if (child.type === TabsContent) {
          return React.cloneElement(child, { activeTab });
        }
        return child;
      })}
    </div>
  );
}

function TabsList({ className, children, activeTab, setActiveTab }) {
  return (
    <div className={className}>
      {React.Children.map(children, (child) => {
        if (child.type === TabsTrigger) {
          return React.cloneElement(child, { activeTab, setActiveTab });
        }
        return child;
      })}
    </div>
  );
}

function TabsTrigger({ value, className, children, activeTab, setActiveTab }) {
  const isActive = activeTab === value;
  return (
    <button
      className={`${className} ${
        isActive
          ? "data-[state=active]:bg-amber-100 data-[state=active]:text-amber-800"
          : ""
      }`}
      onClick={() => setActiveTab(value)}
      data-state={isActive ? "active" : "inactive"}
    >
      {children}
    </button>
  );
}

function TabsContent({ value, className, children, activeTab }) {
  if (activeTab !== value) return null;

  return <div className={className}>{children}</div>;
}

export default function SpecialProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[550px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1742767069929-0c663150b164?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHJvYm90aWNzJTIwU1RFTXxlbnwxfHx8fDE3NjIzMzY2NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Special Projects"
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-rose-900/90 to-amber-800/80"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-5xl">
          <div className="inline-block mb-4">
            <div className="bg-amber-300/20 backdrop-blur-sm px-6 py-2 rounded-full border border-amber-300/40">
              <span className="text-amber-300">Beyond the Classroom</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Special Projects & Initiatives
          </h1>
          <p className="text-xl text-white/95 max-w-3xl mx-auto">
            Enriching student experiences through innovative programs, hands-on
            projects, and transformative learning opportunities that go beyond
            traditional academics.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Empowering Students Through Specialized Programs
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto mb-4">
            At Sarv Education, we believe education extends far beyond textbooks
            and classrooms. Our special projects are carefully designed to
            develop creativity, critical thinking, leadership, and practical
            skills that prepare students for real-world challenges.
          </p>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Each initiative provides unique opportunities for students to
            explore their passions, collaborate with peers, and make meaningful
            contributions to their communities.
          </p>
        </div>
      </section>

      {/* Main Categories */}
      <section className="py-20 px-4 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="stem" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 gap-2 bg-transparent h-auto mb-12">
              <TabsTrigger
                value="stem"
                className="border border-gray-200 py-3 px-4 rounded-md hover:bg-gray-50 transition-colors"
              >
                <Rocket className="w-4 h-4 mr-2" />
                STEM
              </TabsTrigger>
              <TabsTrigger
                value="arts"
                className="border border-gray-200 py-3 px-4 rounded-md hover:bg-gray-50 transition-colors"
              >
                <Palette className="w-4 h-4 mr-2" />
                Arts & Culture
              </TabsTrigger>
              <TabsTrigger
                value="sports"
                className="border border-gray-200 py-3 px-4 rounded-md hover:bg-gray-50 transition-colors"
              >
                <Trophy className="w-4 h-4 mr-2" />
                Sports
              </TabsTrigger>
              <TabsTrigger
                value="social"
                className="border border-gray-200 py-3 px-4 rounded-md hover:bg-gray-50 transition-colors"
              >
                <Heart className="w-4 h-4 mr-2" />
                Social Impact
              </TabsTrigger>
              <TabsTrigger
                value="leadership"
                className="border border-gray-200 py-3 px-4 rounded-md hover:bg-gray-50 transition-colors"
              >
                <Star className="w-4 h-4 mr-2" />
                Leadership
              </TabsTrigger>
            </TabsList>

            {/* STEM Tab */}
            <TabsContent value="stem" className="space-y-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1742767069929-0c663150b164?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHJvYm90aWNzJTIwU1RFTXxlbnwxfHx8fDE3NjIzMzY2NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="STEM Projects"
                    className="w-full h-full"
                  />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-gray-800">
                    STEM Excellence Programs
                  </h2>
                  <p className="text-gray-700 mb-6">
                    Our comprehensive STEM initiatives prepare students for the
                    future through hands-on learning, innovation, and real-world
                    problem-solving.
                  </p>

                  <div className="space-y-4">
                    <Card className="border-l-4 border-amber-800">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="bg-amber-100 p-3 rounded-lg">
                            <Code
                              className="w-5 h-5"
                              style={{ color: "#f26522" }}
                            />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2 text-gray-800">
                              Coding & Robotics Club
                            </h3>
                            <p className="text-gray-600">
                              Students learn programming, build robots, and
                              participate in national competitions. Curriculum
                              includes Python, Arduino, and AI fundamentals.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-rose-900">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="bg-rose-100 p-3 rounded-lg">
                            <FlaskConical className="w-5 h-5 text-rose-900" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2 text-gray-800">
                              Science Innovation Lab
                            </h3>
                            <p className="text-gray-600">
                              State-of-the-art facilities for conducting
                              experiments, research projects, and participating
                              in science fairs and olympiads.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-amber-800">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="bg-amber-100 p-3 rounded-lg">
                            <Lightbulb className="w-5 h-5 text-amber-800" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2 text-gray-800">
                              Maker Space
                            </h3>
                            <p className="text-gray-600">
                              A creative space equipped with 3D printers,
                              electronics, and tools for students to design,
                              prototype, and build innovative solutions.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Arts & Culture Tab */}
            <TabsContent value="arts" className="space-y-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                  <h2 className="text-3xl font-bold mb-6 text-gray-800">
                    Arts & Cultural Programs
                  </h2>
                  <p className="text-gray-700 mb-6">
                    Fostering creativity, cultural appreciation, and artistic
                    expression through diverse programs in visual arts,
                    performing arts, and cultural studies.
                  </p>

                  <div className="space-y-4">
                    <Card className="border-l-4 border-rose-900">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="bg-rose-100 p-3 rounded-lg">
                            <Palette className="w-5 h-5 text-rose-900" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2 text-gray-800">
                              Visual Arts Studio
                            </h3>
                            <p className="text-gray-600">
                              Painting, sculpture, ceramics, and digital art
                              programs guided by professional artists. Regular
                              exhibitions showcase student creativity.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-amber-800">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="bg-amber-100 p-3 rounded-lg">
                            <Music
                              className="w-5 h-5"
                              style={{ color: "#f26522" }}
                            />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2 text-gray-800">
                              Music & Performing Arts
                            </h3>
                            <p className="text-gray-600">
                              Vocal and instrumental training, theater
                              productions, dance performances, and annual
                              cultural festivals celebrating diverse traditions.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-rose-900">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="bg-rose-100 p-3 rounded-lg">
                            <Camera className="w-5 h-5 text-rose-900" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2 text-gray-800">
                              Media & Photography Club
                            </h3>
                            <p className="text-gray-600">
                              Students explore photography, videography, and
                              digital media production while documenting school
                              events and creating creative content.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl order-1 md:order-2">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1751031388376-b963848a043a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGFydCUyMHBhaW50aW5nfGVufDF8fHx8MTc2MjMyOTMzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Arts Programs"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </TabsContent>

            {/* Sports Tab */}
            <TabsContent value="sports" className="space-y-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1760035435867-4f4dc47853a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHNwb3J0cyUyMHRlYW13b3JrfGVufDF8fHx8MTc2MjI4MzUyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Sports Programs"
                    className="w-full h-full"
                  />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-gray-800">
                    Sports & Athletics
                  </h2>
                  <p className="text-gray-700 mb-6">
                    Comprehensive sports programs that develop physical fitness,
                    teamwork, discipline, and competitive spirit across various
                    disciplines.
                  </p>

                  <div className="space-y-4">
                    <Card className="border-l-4 border-amber-800">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="bg-amber-100 p-3 rounded-lg">
                            <Trophy className="w-5 h-5 text-amber-800" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2 text-gray-800">
                              Competitive Sports Training
                            </h3>
                            <p className="text-gray-600">
                              Professional coaching in cricket, football,
                              basketball, athletics, and swimming. Regular
                              participation in inter-school and national
                              tournaments.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-rose-900">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="bg-rose-100 p-3 rounded-lg">
                            <Heart className="w-5 h-5 text-rose-900" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2 text-gray-800">
                              Fitness & Wellness
                            </h3>
                            <p className="text-gray-600">
                              Yoga, aerobics, and fitness programs focused on
                              overall health and well-being. Nutrition guidance
                              and mental fitness workshops included.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-amber-800">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="bg-amber-100 p-3 rounded-lg">
                            <Users
                              className="w-5 h-5"
                              style={{ color: "#f26522" }}
                            />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2 text-gray-800">
                              Sports Leadership Program
                            </h3>
                            <p className="text-gray-600">
                              Training student athletes in leadership,
                              sportsmanship, and team management through captain
                              roles and peer mentoring.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Social Impact Tab */}
            <TabsContent value="social" className="space-y-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                  <h2 className="text-3xl font-bold mb-6 text-gray-800">
                    Social Impact Initiatives
                  </h2>
                  <p className="text-gray-700 mb-6">
                    Empowering students to become responsible global citizens
                    through community service, environmental action, and social
                    entrepreneurship.
                  </p>

                  <div className="space-y-4">
                    <Card className="border-l-4 border-rose-900">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="bg-rose-100 p-3 rounded-lg">
                            <Heart className="w-5 h-5 text-rose-900" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2 text-gray-800">
                              Community Outreach Programs
                            </h3>
                            <p className="text-gray-600">
                              Students engage in regular community service,
                              teaching underprivileged children, organizing
                              health camps, and supporting local causes.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-amber-800">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="bg-amber-100 p-3 rounded-lg">
                            <TreePine className="w-5 h-5 text-amber-800" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2 text-gray-800">
                              Environmental Stewardship
                            </h3>
                            <p className="text-gray-600">
                              Green clubs, tree plantation drives, waste
                              management initiatives, and sustainability
                              projects promoting environmental consciousness.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-rose-900">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="bg-rose-100 p-3 rounded-lg">
                            <Globe className="w-5 h-5 text-rose-900" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2 text-gray-800">
                              Global Citizenship Program
                            </h3>
                            <p className="text-gray-600">
                              Model UN, cultural exchange programs, and global
                              issues forums developing international awareness
                              and diplomacy skills.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl order-1 md:order-2">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1605781573960-d12a0d37b2d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGNvbW11bml0eSUyMHNlcnZpY2V8ZW58MXx8fHwxNzYyMzM2NjY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Social Impact"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </TabsContent>

            {/* Leadership Tab */}
            <TabsContent value="leadership" className="space-y-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1605781645799-c9c7d820b4ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwbGFib3JhdG9yeSUyMHN0dWRlbnRzfGVufDF8fHx8MTc2MjI4MzUyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Leadership Programs"
                    className="w-full h-full"
                  />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-gray-800">
                    Leadership Development
                  </h2>
                  <p className="text-gray-700 mb-6">
                    Nurturing future leaders through structured programs that
                    develop communication, decision-making, and organizational
                    skills.
                  </p>

                  <div className="space-y-4">
                    <Card className="border-l-4 border-amber-800">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="bg-amber-100 p-3 rounded-lg">
                            <Star
                              className="w-5 h-5"
                              style={{ color: "#f26522" }}
                            />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2 text-gray-800">
                              Student Council
                            </h3>
                            <p className="text-gray-600">
                              Elected student representatives lead initiatives,
                              organize events, and serve as a bridge between
                              students and administration.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-rose-900">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="bg-rose-100 p-3 rounded-lg">
                            <Megaphone className="w-5 h-5 text-rose-900" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2 text-gray-800">
                              Public Speaking & Debate
                            </h3>
                            <p className="text-gray-600">
                              Regular competitions, workshops, and training in
                              effective communication, argumentation, and
                              presentation skills.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-amber-800">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="bg-amber-100 p-3 rounded-lg">
                            <Award className="w-5 h-5 text-amber-800" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2 text-gray-800">
                              Youth Entrepreneurship
                            </h3>
                            <p className="text-gray-600">
                              Business plan competitions, start-up incubation,
                              and mentorship programs fostering innovation and
                              entrepreneurial thinking.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Featured Projects Gallery */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Featured Projects
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Highlights from our recent special projects and student
              achievements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="relative h-[200px]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1742767069929-0c663150b164?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHJvYm90aWNzJTIwU1RFTXxlbnwxfHx8fDE3NjIzMzY2NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Robotics Competition"
                  className="w-full h-full"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-amber-300 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                    STEM
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  National Robotics Championship
                </h3>
                <p className="text-gray-600 mb-4">
                  Our robotics team secured first place in the national
                  competition with their innovative autonomous robot design.
                </p>
                <div className="flex items-center gap-2 text-amber-800">
                  <Award className="w-4 h-4" />
                  <span className="text-sm font-medium">Winner - 2024</span>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="relative h-[200px]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1614442848457-36ddcbb0876d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMG11c2ljJTIwcGVyZm9ybWFuY2V8ZW58MXx8fHwxNzYyMzM2NjY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Cultural Festival"
                  className="w-full h-full"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-rose-200 text-rose-900 px-3 py-1 rounded-full text-sm font-medium">
                    Arts
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  Annual Cultural Fest
                </h3>
                <p className="text-gray-600 mb-4">
                  A spectacular celebration of diversity featuring music, dance,
                  drama, and art from around the world.
                </p>
                <div className="flex items-center gap-2 text-rose-900">
                  <Music className="w-4 h-4" />
                  <span className="text-sm font-medium">500+ Participants</span>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="relative h-[200px]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1605781573960-d12a0d37b2d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGNvbW11bml0eSUyMHNlcnZpY2V8ZW58MXx8fHwxNzYyMzM2NjY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Community Service"
                  className="w-full h-full"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-amber-300 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                    Social
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  Rural Education Initiative
                </h3>
                <p className="text-gray-600 mb-4">
                  Students volunteered to teach in rural schools, impacting over
                  1000 children through educational support.
                </p>
                <div className="flex items-center gap-2 text-amber-800">
                  <Heart className="w-4 h-4" />
                  <span className="text-sm font-medium">Community Impact</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-rose-900 to-amber-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Impact by Numbers
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="text-white">
              <div className="flex items-center justify-center mb-3">
                <Rocket className="w-10 h-10" />
              </div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <p>Active Clubs & Projects</p>
            </div>
            <div className="text-white">
              <div className="flex items-center justify-center mb-3">
                <Users className="w-10 h-10" />
              </div>
              <div className="text-3xl font-bold mb-2">3,000+</div>
              <p>Student Participants</p>
            </div>
            <div className="text-white">
              <div className="flex items-center justify-center mb-3">
                <Award className="w-10 h-10" />
              </div>
              <div className="text-3xl font-bold mb-2">200+</div>
              <p>Awards Won</p>
            </div>
            <div className="text-white">
              <div className="flex items-center justify-center mb-3">
                <Heart className="w-10 h-10" />
              </div>
              <div className="text-3xl font-bold mb-2">10,000+</div>
              <p>Community Impact Hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Participate */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            How to Get Involved
          </h2>
          <p className="text-gray-700 mb-12">
            We encourage all students to participate in at least one special
            project each year. Here's how to join:
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-amber-800">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                Explore Options
              </h3>
              <p className="text-gray-600">
                Browse available programs and clubs that match your interests
                and passions.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-rose-900">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                Register
              </h3>
              <p className="text-gray-600">
                Sign up through the student portal or contact club coordinators
                for more information.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-amber-800">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                Participate
              </h3>
              <p className="text-gray-600">
                Attend sessions, collaborate with peers, and make the most of
                the learning opportunity.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-rose-900 to-amber-800 text-white hover:shadow-lg rounded-lg transition-all font-medium">
              View All Programs
            </button>
            <button
              className="px-8 py-3 bg-white border-2 text-gray-800 hover:shadow-lg rounded-lg transition-all font-medium"
              style={{ borderColor: "#f26522", color: "#f26522" }}
            >
              Contact Coordinators
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}