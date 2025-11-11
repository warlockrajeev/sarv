"use client";

import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-amber-700 to-amber-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Grid: Contact + Links + Map */}
        <div className="grid gap-10 lg:grid-cols-3 items-start">
          {/* Contact Card */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
            <div className="flex items-center gap-3">
              <div className="bg-white text-amber-800 font-bold text-lg flex items-center justify-center h-10 w-10 rounded-lg">
                S
              </div>
              <h2 className="text-xl font-semibold tracking-wide">
                Sarv EduCare
              </h2>
            </div>

            <p className="mt-3 text-sm text-amber-100">
              Empowering schools through innovation, technology, and integrated
              learning experiences.
            </p>

            <div className="mt-5 space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-amber-200" />
                <span>123 Learning Street, New Delhi, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-amber-200" />
                <span>contact@sarv.educare</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-amber-200" />
                <span>+91 99999 99999</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="mt-5 flex gap-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                className="hover:text-amber-300 transition"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                className="hover:text-amber-300 transition"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                className="hover:text-amber-300 transition"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Links Section (Center Column) */}
          <div className="grid sm:grid-cols-2 gap-10">
            {/* Useful Links */}
            <div>
              <h3 className="font-semibold text-white mb-3">Useful Links</h3>
              <ul className="space-y-2 text-amber-100 text-sm">
                {[
                  { label: "Home", href: "/" },
                  { label: "About Us", href: "/about" },
                  { label: "Franchise With Us", href: "/franchise-preschool" },
                  { label: "Alumni Area", href: "/alumni/guidance" },
                  { label: "Contact Us", href: "/contact" },
                  { label: "Media", href: "/media/awards-certificates" },
                  { label: "Career", href: "/career" },
                  { label: "Blogs", href: "/blogs" },
                ].map((item, i) => (
                  <li key={i}>
                    <Link
                      href={item.href}
                      className="hover:text-amber-300 transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Other Links */}
            <div>
              <h3 className="font-semibold text-white mb-3">Other Links</h3>
              <ul className="space-y-2 text-amber-100 text-sm">
                {[
                  { label: "Franchise Preschool", href: "/franchise-preschool" },
                  { label: "Franchise K12", href: "/franchise-k12" },
                  { label: "School Transformation", href: "/franchise-k12#transformation" },
                  { label: "Soul Science", href: "/soul-science" },
                  { label: "Special Projects", href: "/special-projects" },
                  { label: "Partner With Us", href: "/partner-with-us" },
                  { label: "Privacy Policy", href: "/privacy-policy" },
                ].map((item, i) => (
                  <li key={i}>
                    <Link
                      href={item.href}
                      className="hover:text-amber-300 transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Embedded Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg h-[300px] lg:h-[350px]">
            <iframe
              title="Sarv EduCare Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.196437933582!2d77.2167213!3d28.6448006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2ed4b4a1d33%3A0x1b1f9d22168e6f4a!2sConnaught%20Place%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1683123456789!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-white/20 pt-5 text-center text-xs text-amber-100">
          © {new Date().getFullYear()} Sarv EduCare. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
