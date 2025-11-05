"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";
import {
  BookOpen,
  Users,
  Lightbulb,
  Heart,
  Rocket,
  Search,
  Calendar,
  ArrowRight,
  Filter,
  Tag,
  TrendingUp,
  Globe,
  GraduationCap,
  Baby,
  Building2,
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

// Sample blog data based on the website content
const blogPosts = [
  {
    id: 1,
    title: "Must Have Skills Every Kid Needs for Kindergarten",
    excerpt:
      "Discover the essential skills your child needs to succeed in kindergarten and how to prepare them for this important milestone.",
    category: "Kindergarten",
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&h=600&fit=crop",
    date: "2024-11-01",
    readTime: "5 min read",
    featured: true,
  },
  {
    id: 2,
    title: "Montessori vs Traditional Preschools: Finding the Right Fit",
    excerpt:
      "A comprehensive guide to help parents choose between Montessori and traditional preschool approaches for their child's development.",
    category: "Preschool",
    image:
      "https://images.unsplash.com/photo-1581726690015-c9861dcb1f64?w=800&h=600&fit=crop",
    date: "2024-10-28",
    readTime: "7 min read",
    featured: true,
  },
  {
    id: 3,
    title: "Bullying Prevention: How to Prepare Your Child",
    excerpt:
      "Learn effective strategies to help your child recognize, respond to, and prevent bullying situations at school.",
    category: "Preschool",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
    date: "2024-10-25",
    readTime: "6 min read",
    featured: false,
  },
  {
    id: 4,
    title: "Top 10 Activities to Boost Social Skills for Preschoolers",
    excerpt:
      "Engaging activities and games that help preschoolers develop crucial social skills through play and interaction.",
    category: "Preschool",
    image:
      "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&h=600&fit=crop",
    date: "2024-10-22",
    readTime: "8 min read",
    featured: false,
  },
  {
    id: 5,
    title: "How to Scale Your Education Franchise for Long-Term Success",
    excerpt:
      "Strategic insights and practical tips for education entrepreneurs looking to expand their franchise operations effectively.",
    category: "Franchise",
    image:
      "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?w=800&h=600&fit=crop",
    date: "2024-10-20",
    readTime: "10 min read",
    featured: true,
  },
  {
    id: 6,
    title: "How to Improve Concentration in Children",
    excerpt:
      "Evidence-based techniques and activities to help children develop better focus and concentration skills.",
    category: "Education",
    image:
      "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=800&h=600&fit=crop",
    date: "2024-10-18",
    readTime: "6 min read",
    featured: false,
  },
  {
    id: 7,
    title: "The Importance of Parent-Teacher Collaboration",
    excerpt:
      "Exploring how strong partnerships between parents and teachers contribute to student success and overall development.",
    category: "Learners",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
    date: "2024-10-15",
    readTime: "7 min read",
    featured: false,
  },
  {
    id: 8,
    title: "The Impact of Digital Literacy on Student Success",
    excerpt:
      "Understanding how digital literacy skills prepare students for the modern world and enhance their learning outcomes.",
    category: "Learners",
    image:
      "https://images.unsplash.com/photo-1581726690015-c9861dcb1f64?w=800&h=600&fit=crop",
    date: "2024-10-12",
    readTime: "8 min read",
    featured: false,
  },
  {
    id: 9,
    title: "Soul Science: Exploring Modern Education Integration",
    excerpt:
      "How Soul Science philosophy enhances traditional education by focusing on holistic development and inner growth.",
    category: "Soul Science",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    date: "2024-10-10",
    readTime: "9 min read",
    featured: true,
  },
  {
    id: 10,
    title: "AI and Technology Transforming Education in India",
    excerpt:
      "Examining the revolutionary impact of artificial intelligence and technology on India's educational landscape.",
    category: "AI Education",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
    date: "2024-10-08",
    readTime: "11 min read",
    featured: false,
  },
  {
    id: 11,
    title: "The Importance of Early Childhood Development",
    excerpt:
      "Scientific insights into crucial early years and their lasting impact on cognitive, social, and emotional development.",
    category: "Childhood Development",
    image:
      "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&h=600&fit=crop",
    date: "2024-10-05",
    readTime: "7 min read",
    featured: false,
  },
  {
    id: 12,
    title: "Why Learn Leap Empowers Teachers with 21st Century Skills",
    excerpt:
      "Discover how Learn Leap platform equips educators with modern teaching tools and methodologies for effective learning.",
    category: "Birla Learn Leap",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
    date: "2024-10-02",
    readTime: "6 min read",
    featured: false,
  },
];

const categories = [
  "All",
  "Preschool",
  "Kindergarten",
  "Education",
  "Franchise",
  "Learners",
  "Soul Science",
  "AI Education",
  "Childhood Development",
  "Birla Learn Leap",
];

const categoryIcons = {
  Preschool: Baby,
  Kindergarten: BookOpen,
  Education: GraduationCap,
  Franchise: Building2,
  Learners: Users,
  "Soul Science": Heart,
  "AI Education": Rocket,
  "Childhood Development": Heart,
  "Birla Learn Leap": TrendingUp,
};

export default function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter((post) => post.featured);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&h=800&fit=crop"
            alt="Blogs"
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-rose-900/90 to-amber-800/80"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Sarv Education Blogs
          </h1>
          <p className="text-xl text-white/95 max-w-2xl mx-auto">
            Discover valuable insights, expert opinions, and the latest trends
            in education and child development.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search blogs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 border-gray-300"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter className="text-gray-600 w-5 h-5" />
              <div className="flex flex-wrap gap-2">
                {categories.slice(0, 6).map((category) => (
                  <Button
                    key={category}
                    size="sm"
                    variant={
                      selectedCategory === category ? "default" : "ghost"
                    }
                    onClick={() => setSelectedCategory(category)}
                    className={
                      selectedCategory === category
                        ? "text-white"
                        : "text-gray-700"
                    }
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {selectedCategory === "All" && (
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 mb-8">
              <TrendingUp className="w-6 h-6 text-amber-800" />
              <h2 className="text-3xl font-bold text-gray-800">
                Featured Articles
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.slice(0, 3).map((post) => (
                <Card
                  key={post.id}
                  className="overflow-hidden hover:shadow-2xl transition-shadow duration-300 border-2 border-amber-200"
                >
                  <div className="relative h-[250px]">
                    <ImageWithFallback
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-to-r from-rose-900 to-amber-800 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center gap-1">
                        {categoryIcons[post.category] &&
                          React.createElement(categoryIcons[post.category], {
                            className: "w-4 h-4 text-amber-800",
                          })}
                        <span className="text-sm font-medium text-amber-800">
                          {post.category}
                        </span>
                      </div>
                      <span className="text-gray-400">•</span>
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {post.readTime}
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-amber-800 hover:bg-amber-50"
                      >
                        Read More <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Blog Posts */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-800">
              {selectedCategory === "All"
                ? "Latest Articles"
                : `${selectedCategory} Articles`}
            </h2>
            <div className="text-gray-600">
              {filteredPosts.length} article
              {filteredPosts.length !== 1 ? "s" : ""} found
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card
                key={post.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-1"
              >
                <div className="relative h-[200px]">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString()}
                    <span className="mx-2">•</span>
                    {post.readTime}
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2 hover:text-amber-800 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-amber-800 hover:bg-amber-50 p-0"
                  >
                    Read More <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No articles found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search terms or category filter.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Categories Overview */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Explore by Category
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse articles by topic to find exactly what you're looking for.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {categories.slice(1).map((category) => {
              const IconComponent = categoryIcons[category] || Tag;
              const categoryCount = blogPosts.filter(
                (post) => post.category === category
              ).length;

              return (
                <Card
                  key={category}
                  className="p-6 text-center hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-amber-200"
                  onClick={() => setSelectedCategory(category)}
                >
                  <div className="bg-gradient-to-br from-amber-100 to-amber-200 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-amber-800" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    {category}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {categoryCount} article{categoryCount !== 1 ? "s" : ""}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 bg-gradient-to-r from-rose-900 to-amber-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest insights on
            education, child development, and innovative teaching practices
            delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 border-white/20 bg-white/10 text-white placeholder-white/70"
            />
            <Button className="bg-white text-rose-900 hover:bg-gray-100 font-medium">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}