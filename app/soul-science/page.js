"use client";

import React from "react";
import Image from "next/image";
import {
  Brain,
  Heart,
  Users,
  Sparkles,
  Target,
  Smile,
  Sun,
  Star,
  Leaf,
  Eye,
  Hand,
  BookHeart,
} from "lucide-react";
import { useState } from "react";

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

function Accordion({ type, collapsible, className, children }) {
  return <div className={className}>{children}</div>;
}

function AccordionItem({ value, className, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={className}>
      {React.Children.map(children, (child) => {
        if (child.type === AccordionTrigger) {
          return React.cloneElement(child, { isOpen, setIsOpen });
        }
        if (child.type === AccordionContent) {
          return React.cloneElement(child, { isOpen });
        }
        return child;
      })}
    </div>
  );
}

function AccordionTrigger({ className, children, isOpen, setIsOpen }) {
  return (
    <button
      className={`flex justify-between items-center w-full py-4 text-left ${className}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      {children}
      <svg
        className={`w-4 h-4 transition-transform duration-200 ${
          isOpen ? "rotate-180" : ""
        }`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>
  );
}

function AccordionContent({ className, children, isOpen }) {
  return (
    <div
      className={`overflow-hidden transition-all duration-200 ${
        isOpen ? "max-h-96 pb-4" : "max-h-0"
      }`}
    >
      <div className={className}>{children}</div>
    </div>
  );
}

export default function SoulSciencePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1760774714285-61ff516f86c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGF0aW9uJTIwbWluZGZ1bG5lc3MlMjBzdHVkZW50c3xlbnwxfHx8fDE3NjIzMzYxNjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Soul Science"
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-rose-900/85 to-amber-800/70"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-5xl">
          <div className="inline-block mb-4">
            <div className="bg-amber-300/20 backdrop-blur-sm px-6 py-2 rounded-full border border-amber-300/40">
              <span className="text-amber-300">
                A Unique Approach to Holistic Development
              </span>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Soul Science
          </h1>
          <p className="text-xl text-white/95 max-w-3xl mx-auto mb-8">
            An innovative curriculum that nurtures the mind, body, and spirit,
            empowering students to discover their inner potential and develop
            emotional intelligence for lifelong success.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4">
                <span className="text-amber-800 bg-amber-50 px-4 py-2 rounded-full">
                  What is Soul Science?
                </span>
              </div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Nurturing Balanced Individuals
              </h2>
              <p className="text-gray-700 mb-4">
                Soul Science is a pioneering curriculum designed to complement
                academic excellence with inner development. It is a
                comprehensive program that focuses on developing emotional
                intelligence, mindfulness, values, and life skills essential for
                the 21st century.
              </p>
              <p className="text-gray-700 mb-4">
                Through a carefully crafted blend of ancient wisdom and modern
                psychology, Soul Science helps students understand themselves
                better, manage emotions effectively, build meaningful
                relationships, and develop a strong moral compass.
              </p>
              <p className="text-gray-700">
                This unique program is seamlessly integrated into our daily
                curriculum, ensuring that students grow not just academically,
                but also as compassionate, confident, and conscious individuals
                ready to make a positive impact on the world.
              </p>
            </div>
            <div className="relative h-[450px] rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1693714699076-62658757f103?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwY2hpbGRyZW4lMjBwZWFjZXxlbnwxfHx8fDE3NjIzMzYxNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Students practicing mindfulness"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Five Pillars Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Five Pillars of Soul Science
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our comprehensive approach is built on five fundamental pillars
              that work together to develop well-rounded individuals.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            <Card className="border-2 border-amber-200 hover:border-amber-400 transition-all hover:shadow-xl">
              <CardContent className="p-6 text-center">
                <div className="bg-gradient-to-br from-amber-100 to-amber-200 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-10 h-10" style={{ color: "#f26522" }} />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800">
                  Self Awareness
                </h3>
                <p className="text-gray-600">
                  Understanding one's thoughts, emotions, strengths, and areas
                  for growth.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-rose-200 hover:border-rose-400 transition-all hover:shadow-xl">
              <CardContent className="p-6 text-center">
                <div className="bg-gradient-to-br from-rose-100 to-rose-200 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-10 h-10 text-rose-900" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800">
                  Emotional Intelligence
                </h3>
                <p className="text-gray-600">
                  Managing emotions, developing empathy, and building
                  resilience.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-amber-200 hover:border-amber-400 transition-all hover:shadow-xl">
              <CardContent className="p-6 text-center">
                <div className="bg-gradient-to-br from-amber-100 to-amber-200 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-amber-800" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800">
                  Social Skills
                </h3>
                <p className="text-gray-600">
                  Building healthy relationships, effective communication, and
                  teamwork.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-amber-200 hover:border-amber-400 transition-all hover:shadow-xl">
              <CardContent className="p-6 text-center">
                <div className="bg-gradient-to-br from-amber-100 to-amber-200 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Sparkles
                    className="w-10 h-10"
                    style={{ color: "#f26522" }}
                  />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800">
                  Values & Ethics
                </h3>
                <p className="text-gray-600">
                  Cultivating integrity, responsibility, and moral
                  decision-making.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-rose-200 hover:border-rose-400 transition-all hover:shadow-xl">
              <CardContent className="p-6 text-center">
                <div className="bg-gradient-to-br from-rose-100 to-rose-200 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-10 h-10 text-rose-900" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800">
                  Life Skills
                </h3>
                <p className="text-gray-600">
                  Developing critical thinking, problem-solving, and
                  goal-setting abilities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Components */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Key Components of Our Program
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Soul Science integrates various practices and activities to ensure
              comprehensive development.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-2xl border border-amber-200 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-amber-200 p-3 rounded-xl">
                  <Sun className="w-6 h-6" style={{ color: "#f26522" }} />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Mindfulness & Meditation
                </h3>
              </div>
              <p className="text-gray-600">
                Daily mindfulness practices help students develop focus, reduce
                stress, and cultivate inner peace. Age-appropriate meditation
                techniques enhance concentration and emotional balance.
              </p>
            </div>

            <div className="bg-gradient-to-br from-rose-50 to-white p-8 rounded-2xl border border-rose-200 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-rose-200 p-3 rounded-xl">
                  <Smile className="w-6 h-6 text-rose-900" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Positive Psychology
                </h3>
              </div>
              <p className="text-gray-600">
                Students learn about gratitude, optimism, and positive thinking.
                Activities are designed to build resilience, self-esteem, and a
                growth mindset.
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-2xl border border-amber-200 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-amber-200 p-3 rounded-xl">
                  <BookHeart className="w-6 h-6 text-amber-800" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Value Education
                </h3>
              </div>
              <p className="text-gray-600">
                Through stories, discussions, and real-life scenarios, students
                explore universal values like honesty, compassion, respect, and
                responsibility.
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-2xl border border-amber-200 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-amber-200 p-3 rounded-xl">
                  <Leaf className="w-6 h-6" style={{ color: "#f26522" }} />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Nature Connection
                </h3>
              </div>
              <p className="text-gray-600">
                Outdoor activities and environmental awareness programs help
                students develop a deep connection with nature and understand
                their role in environmental stewardship.
              </p>
            </div>

            <div className="bg-gradient-to-br from-rose-50 to-white p-8 rounded-2xl border border-rose-200 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-rose-200 p-3 rounded-xl">
                  <Hand className="w-6 h-6 text-rose-900" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Creative Expression
                </h3>
              </div>
              <p className="text-gray-600">
                Art, music, drama, and movement activities provide healthy
                outlets for self-expression and emotional processing, nurturing
                creativity and imagination.
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-2xl border border-amber-200 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-amber-200 p-3 rounded-xl">
                  <Eye className="w-6 h-6 text-amber-800" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Reflective Practices
                </h3>
              </div>
              <p className="text-gray-600">
                Journaling, group discussions, and reflection time encourage
                students to process experiences, understand their actions, and
                make conscious choices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-rose-900 to-amber-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Benefits for Students
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto">
              Soul Science creates lasting positive impacts that extend far
              beyond the classroom.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-amber-300" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Enhanced Focus
              </h3>
              <p className="text-white/80">
                Improved concentration and academic performance through
                mindfulness practices.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-amber-300" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Emotional Balance
              </h3>
              <p className="text-white/80">
                Better emotional regulation and reduced stress and anxiety
                levels.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-amber-300" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Better Relationships
              </h3>
              <p className="text-white/80">
                Improved social skills and ability to form meaningful
                connections.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-amber-300" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Strong Character
              </h3>
              <p className="text-white/80">
                Development of core values and ethical decision-making
                abilities.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-amber-300" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Self-Awareness
              </h3>
              <p className="text-white/80">
                Greater understanding of personal strengths, values, and
                purpose.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-amber-300" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Resilience
              </h3>
              <p className="text-white/80">
                Enhanced ability to cope with challenges and bounce back from
                setbacks.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Smile className="w-6 h-6 text-amber-300" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Happiness
              </h3>
              <p className="text-white/80">
                Increased overall well-being, positivity, and life satisfaction.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Leaf className="w-6 h-6 text-amber-300" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Environmental Consciousness
              </h3>
              <p className="text-white/80">
                Deep respect for nature and commitment to sustainable living.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1658252844173-ba5de80a3015?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHdlbGxuZXNzJTIwaGFwcGluZXNzfGVufDF8fHx8MTc2MjMzNjE2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Students in wellness activity"
                className="w-full h-full"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                How We Implement Soul Science
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center font-semibold"
                    style={{ color: "#f26522" }}
                  >
                    <span>1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      Daily Practice Sessions
                    </h3>
                    <p className="text-gray-600">
                      Dedicated time slots in the daily schedule for Soul
                      Science activities, ensuring consistency and integration
                      into the school routine.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center font-semibold text-rose-900">
                    <span>2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      Trained Facilitators
                    </h3>
                    <p className="text-gray-600">
                      Our teachers undergo specialized training in Soul Science
                      methodologies to effectively guide students through the
                      program.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center font-semibold text-amber-800">
                    <span>3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      Age-Appropriate Content
                    </h3>
                    <p className="text-gray-600">
                      Curriculum tailored to different age groups, from primary
                      to senior secondary, ensuring developmentally suitable
                      activities.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center font-semibold text-rose-900">
                    <span>4</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      Parent Involvement
                    </h3>
                    <p className="text-gray-600">
                      Regular workshops and communication to help parents
                      reinforce Soul Science principles at home, creating a
                      holistic support system.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center font-semibold"
                    style={{ color: "#f26522" }}
                  >
                    <span>5</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      Continuous Assessment
                    </h3>
                    <p className="text-gray-600">
                      Regular monitoring of student progress through
                      observations, reflections, and feedback to ensure
                      meaningful growth and development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Learn more about Soul Science and its implementation at our
              school.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem
              value="item-1"
              className="border border-gray-200 rounded-lg px-6"
            >
              <AccordionTrigger className="hover:no-underline">
                <span className="text-gray-800 font-medium">
                  How much time is dedicated to Soul Science daily?
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                We dedicate 20-30 minutes daily to structured Soul Science
                sessions, plus integration of principles throughout the day in
                regular classroom activities. This ensures students receive
                consistent exposure without compromising academic time.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="border border-gray-200 rounded-lg px-6"
            >
              <AccordionTrigger className="hover:no-underline">
                <span className="text-gray-800 font-medium">
                  Is Soul Science based on any specific religion?
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                No, Soul Science is completely secular and universal. It draws
                from scientific research in psychology, neuroscience, and child
                development, along with time-tested wisdom traditions. It
                respects all faiths and focuses on universal human values.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="border border-gray-200 rounded-lg px-6"
            >
              <AccordionTrigger className="hover:no-underline">
                <span className="text-gray-800 font-medium">
                  How do you measure the effectiveness of Soul Science?
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                We use a combination of qualitative and quantitative methods
                including student reflections, teacher observations, peer
                feedback, parent surveys, and behavioral assessments. We track
                improvements in emotional regulation, social skills, and overall
                well-being.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="border border-gray-200 rounded-lg px-6"
            >
              <AccordionTrigger className="hover:no-underline">
                <span className="text-gray-800 font-medium">
                  Can parents participate in Soul Science activities?
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Absolutely! We conduct regular parent workshops, share
                resources, and encourage families to practice Soul Science
                principles at home. We believe parent involvement is crucial for
                reinforcing the learning and creating a supportive environment
                for children.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-5"
              className="border border-gray-200 rounded-lg px-6"
            >
              <AccordionTrigger className="hover:no-underline">
                <span className="text-gray-800 font-medium">
                  What age groups is Soul Science suitable for?
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Soul Science is adapted for all age groups from pre-primary
                through senior secondary. The activities and content are
                age-appropriate, with younger children focusing on basic
                emotional awareness and older students exploring deeper concepts
                of self-reflection and ethical decision-making.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Soul Science in Action
            </h2>
            <p className="text-gray-600">
              Witness the transformative impact of our holistic approach to
              education.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-[350px] rounded-2xl overflow-hidden shadow-xl group">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1760774714285-61ff516f86c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGF0aW9uJTIwbWluZGZ1bG5lc3MlMjBzdHVkZW50c3xlbnwxfHx8fDE3NjIzMzYxNjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Mindfulness practice"
                className="w-full h-full group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <h3 className="text-xl font-semibold text-white">
                  Mindfulness Sessions
                </h3>
              </div>
            </div>

            <div className="relative h-[350px] rounded-2xl overflow-hidden shadow-xl group">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758876442636-23f3153af92c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob2xpc3RpYyUyMGVkdWNhdGlvbiUyMG5hdHVyZXxlbnwxfHx8fDE3NjIzMzYxNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Nature connection"
                className="w-full h-full group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <h3 className="text-xl font-semibold text-white">
                  Nature Connection Activities
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-rose-900 to-amber-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Experience Soul Science
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Discover how Soul Science can transform your child's educational
            journey. Visit us to see the program in action and learn more about
            our holistic approach to education.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              className="px-8 py-3 bg-white hover:bg-gray-100 rounded-lg transition-colors font-medium"
              style={{ color: "#f26522" }}
            >
              Schedule a Campus Tour
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-lg transition-colors font-medium">
              Download Curriculum Guide
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}