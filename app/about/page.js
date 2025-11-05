"use client";

import Image from "next/image";
import {
  Award,
  Target,
  Users,
  BookOpen,
  Lightbulb,
  Heart,
  Globe,
  TrendingUp,
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

function Button({
  size = "md",
  variant = "default",
  className = "",
  children,
  style,
  ...props
}) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  const sizeClasses = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };
  const variantClasses = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-300 bg-transparent hover:bg-gray-50",
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

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1603958956194-cf9718dba4b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzY2hvb2wlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjIyNTY3MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="School building"
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-rose-900/80 to-amber-800/60"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            About Sarv Education
          </h1>
          <p className="text-xl text-white/95 max-w-2xl mx-auto">
            Empowering young minds with world-class education, fostering
            innovation, and nurturing future leaders since our inception.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-amber-100 p-3 rounded-full">
                    <Target className="w-6 h-6" style={{ color: "#f26522" }} />
                  </div>
                  <h2
                    className="text-2xl font-bold"
                    style={{ color: "#f26522" }}
                  >
                    Our Mission
                  </h2>
                </div>
                <p className="text-gray-700">
                  To provide a holistic, world-class education that empowers
                  students to achieve their fullest potential. We strive to
                  create an inclusive learning environment that nurtures
                  curiosity, critical thinking, and character development,
                  preparing students to be responsible global citizens.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-amber-100 p-3 rounded-full">
                    <Lightbulb className="w-6 h-6 text-amber-800" />
                  </div>
                  <h2 className="text-2xl font-bold text-amber-800">
                    Our Vision
                  </h2>
                </div>
                <p className="text-gray-700">
                  To be a leading educational institution that transforms lives
                  through innovative teaching practices and comprehensive
                  development programs. We envision a future where every student
                  becomes a confident, compassionate, and creative individual
                  ready to make a positive impact on the world.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section with Image */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Our Story
              </h2>
              <p className="text-gray-700 mb-4">
                Sarv Education is committed to bringing together decades of
                educational excellence and a commitment to nurturing young
                minds. Our journey began with a simple yet powerful vision: to
                create schools that go beyond traditional education.
              </p>
              <p className="text-gray-700 mb-4">
                We believe in fostering an environment where students don't just
                learn, but discover their passions, develop critical life
                skills, and build the confidence to pursue their dreams. Our
                curriculum blends international best practices with local
                cultural values, creating a unique learning experience.
              </p>
              <p className="text-gray-700">
                Today, we stand proud as a network committed to consistently
                producing well-rounded individuals who excel academically,
                socially, and emotionally. Our state-of-the-art facilities,
                experienced faculty, and innovative pedagogy make us the
                preferred choice for parents seeking quality education.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1540151812223-c30b3fab58e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBjaGlsZHJlbiUyMGxlYXJuaW5nfGVufDF8fHx8MTc2MjI2NTUzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Students learning"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Our Core Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These fundamental principles guide everything we do and shape the
              character of our students.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Card className="border-2 border-amber-200 hover:border-amber-400 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="bg-amber-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8" style={{ color: "#f26522" }} />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  Excellence
                </h3>
                <p className="text-gray-600">
                  Striving for excellence in all aspects of learning and
                  personal development.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-rose-200 hover:border-rose-400 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="bg-rose-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-rose-900" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  Integrity
                </h3>
                <p className="text-gray-600">
                  Building character through honesty, respect, and ethical
                  behavior.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-amber-200 hover:border-amber-400 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="bg-amber-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-amber-800" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  Innovation
                </h3>
                <p className="text-gray-600">
                  Encouraging creative thinking and embracing new ideas and
                  technologies.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-amber-200 hover:border-amber-400 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8" style={{ color: "#f26522" }} />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  Global Mindset
                </h3>
                <p className="text-gray-600">
                  Preparing students to thrive in an interconnected, diverse
                  world.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-rose-900 to-amber-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="text-white">
              <div className="flex items-center justify-center mb-3">
                <TrendingUp className="w-10 h-10" />
              </div>
              <div className="text-3xl font-bold mb-2">25+</div>
              <p>Years of Excellence</p>
            </div>
            <div className="text-white">
              <div className="flex items-center justify-center mb-3">
                <Users className="w-10 h-10" />
              </div>
              <div className="text-3xl font-bold mb-2">15,000+</div>
              <p>Students</p>
            </div>
            <div className="text-white">
              <div className="flex items-center justify-center mb-3">
                <Globe className="w-10 h-10" />
              </div>
              <div className="text-3xl font-bold mb-2">60+</div>
              <p>Schools Nationwide</p>
            </div>
            <div className="text-white">
              <div className="flex items-center justify-center mb-3">
                <Award className="w-10 h-10" />
              </div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <p>Awards & Recognition</p>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              What Sets Us Apart
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the unique features that make Sarv Education the
              preferred choice for quality education.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="bg-amber-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6" style={{ color: "#f26522" }} />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">
                International Curriculum
              </h3>
              <p className="text-gray-600">
                Globally recognized Cambridge and IB programs designed to
                prepare students for success anywhere in the world.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="bg-rose-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-rose-900" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">
                Expert Faculty
              </h3>
              <p className="text-gray-600">
                Highly qualified and passionate educators committed to bringing
                out the best in every student.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="bg-amber-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-amber-800" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">
                Modern Infrastructure
              </h3>
              <p className="text-gray-600">
                State-of-the-art facilities including smart classrooms, labs,
                sports complexes, and technology centers.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="bg-amber-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6" style={{ color: "#f26522" }} />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">
                Holistic Development
              </h3>
              <p className="text-gray-600">
                Focus on academics, sports, arts, and life skills to develop
                well-rounded individuals.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="bg-rose-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-rose-900" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">
                Proven Track Record
              </h3>
              <p className="text-gray-600">
                Consistently high academic results and successful alumni making
                their mark globally.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="bg-amber-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-amber-800" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">
                Individual Attention
              </h3>
              <p className="text-gray-600">
                Small class sizes ensuring personalized learning and mentorship
                for every student.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Our Campus Life
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience the vibrant and enriching environment where learning
              comes alive.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1522134939204-9b9957145632?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwc3R1ZGVudHMlMjBjbGFzc3Jvb218ZW58MXx8fHwxNzYyMzMyMzMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Classroom learning"
                className="w-full h-full hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                <h3 className="text-xl font-semibold text-white">
                  Interactive Learning
                </h3>
              </div>
            </div>

            <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MjMwODA3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Technology in education"
                className="w-full h-full hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                <h3 className="text-xl font-semibold text-white">
                  Technology Integration
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-rose-900 to-amber-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Join the Sarv Education Family
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Give your child the gift of world-class education. Schedule a campus
            tour today and discover why parents trust us with their children's
            future.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white hover:bg-gray-100"
              style={{ color: "#f26522" }}
            >
              Schedule a Visit
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              Download Brochure
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}