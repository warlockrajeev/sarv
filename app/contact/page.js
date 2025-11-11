"use client";

import { useEffect, useState } from "react";
import { X, MessageCircle, Loader2, MapPin, Phone, Mail, Clock } from "lucide-react";
import FixedEnquiryButton from "../../components/FixedEnquiryButton";

// Enquiry Modal Component (extracted from FixedEnquiryButton)
function EnquiryModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    state: "",
    city: "",
    zipCode: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: null, message: "" });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Enquiry submitted successfully! We'll get back to you soon.",
        });
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          mobile: "",
          email: "",
          state: "",
          city: "",
          zipCode: "",
        });
        // Close modal after 2 seconds
        setTimeout(() => {
          onClose();
          setSubmitStatus({ type: null, message: "" });
        }, 2000);
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Failed to submit enquiry. Please try again.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "An error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-stone-100 text-stone-600 transition-colors"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <div className="p-6">
          <h2 className="text-2xl font-bold text-stone-900 mb-2">Enquiry Form</h2>
          <p className="text-sm text-stone-600 mb-6">Fill in your details and we'll get back to you soon.</p>

          {submitStatus.message && (
            <div
              className={`mb-4 p-3 rounded-md ${
                submitStatus.type === "success"
                  ? "bg-green-50 text-green-800 border border-green-200"
                  : "bg-red-50 text-red-800 border border-red-200"
              }`}
            >
              {submitStatus.message}
            </div>
          )}

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">
                  First Name <span className="text-rose-900">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full rounded-md border border-stone-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-600 disabled:bg-stone-100 disabled:cursor-not-allowed"
                  placeholder="First Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">
                  Last Name <span className="text-rose-900">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full rounded-md border border-stone-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-600 disabled:bg-stone-100 disabled:cursor-not-allowed"
                  placeholder="Last Name"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">Mobile</label>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                disabled={isSubmitting}
                className="w-full rounded-md border border-stone-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-600 disabled:bg-stone-100 disabled:cursor-not-allowed"
                placeholder="Mobile Number"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                disabled={isSubmitting}
                className="w-full rounded-md border border-stone-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-600 disabled:bg-stone-100 disabled:cursor-not-allowed"
                placeholder="Email Address"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">State</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                disabled={isSubmitting}
                className="w-full rounded-md border border-stone-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-600 disabled:bg-stone-100 disabled:cursor-not-allowed"
                placeholder="State"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full rounded-md border border-stone-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-600 disabled:bg-stone-100 disabled:cursor-not-allowed"
                  placeholder="City"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Zip Code</label>
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full rounded-md border border-stone-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-600 disabled:bg-stone-100 disabled:cursor-not-allowed"
                  placeholder="Zip Code"
                />
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-md bg-rose-900 px-4 py-3 text-white font-medium hover:bg-rose-800 transition-colors disabled:bg-stone-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit Enquiry"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default function ContactUs() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-amber-700 to-amber-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-amber-100 max-w-2xl mx-auto">
              Get in touch with us for franchise opportunities, partnerships, or any inquiries about our educational solutions.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-stone-900 mb-8">Get In Touch</h2>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="bg-amber-100 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-amber-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-stone-900 mb-1">Address</h3>
                  <p className="text-stone-600">
                    123 Learning Street<br />
                    Connaught Place<br />
                    New Delhi, India - 110001
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="bg-amber-100 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-amber-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-stone-900 mb-1">Phone</h3>
                  <p className="text-stone-600">+91 99999 99999</p>
                  <p className="text-stone-600">+91 88888 88888</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="bg-amber-100 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-amber-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-stone-900 mb-1">Email</h3>
                  <p className="text-stone-600">contact@sarv.educare</p>
                  <p className="text-stone-600">info@sarv.educare</p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start gap-4">
                <div className="bg-amber-100 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-amber-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-stone-900 mb-1">Business Hours</h3>
                  <p className="text-stone-600">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                  <p className="text-stone-600">Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-8">
              <button
                onClick={() => setIsEnquiryOpen(true)}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-900 to-amber-800 text-white px-8 py-4 rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <MessageCircle size={20} />
                Send us an Enquiry
              </button>
            </div>
          </div>

          {/* Map */}
          <div>
            <h2 className="text-3xl font-bold text-stone-900 mb-8">Our Location</h2>
            <div className="rounded-2xl overflow-hidden shadow-lg h-[400px] lg:h-[500px]">
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
        </div>

        {/* Additional Information */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-stone-900 mb-4">Ready to Transform Education?</h3>
          <p className="text-stone-600 mb-8 max-w-2xl mx-auto">
            Whether you're interested in franchising opportunities, partnerships, or learning more about our educational solutions,
            we're here to help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsEnquiryOpen(true)}
              className="bg-gradient-to-r from-amber-700 to-amber-800 text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Start Your Journey
            </button>
            <a
              href="/franchise-preschool"
              className="border-2 border-amber-700 text-amber-700 px-8 py-3 rounded-lg font-medium hover:bg-amber-700 hover:text-white transition-colors"
            >
              Explore Franchises
            </a>
          </div>
        </div>
      </div>

      {/* Enquiry Modal */}
      <EnquiryModal isOpen={isEnquiryOpen} onClose={() => setIsEnquiryOpen(false)} />

      {/* Fixed Enquiry Button */}
      <FixedEnquiryButton />
    </div>
  );
}
