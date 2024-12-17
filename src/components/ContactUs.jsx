import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const ContactUs = () => {
  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="w-[90%] lg:w-[80%] mx-auto bg-white rounded-lg shadow-lg p-3 lg:p-12">
        {/* Main Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
            Contact <span className="text-yellow-500">Us</span>
          </h2>
          <p className="text-gray-600 mt-2 text-sm lg:text-base">
            We’d love to hear from you! Reach out for questions, collaborations,
            or inquiries.
          </p>
        </div>

        {/* Two Columns */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Contact Info */}
          <div className="flex-1 space-y-6">
            {/* Location */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-yellow-500 text-white rounded-full">
                <FaMapMarkerAlt size={20} />
              </div>
              <div>
                <h4 className="text-gray-800 font-medium text-lg">
                  Our Location
                </h4>
                <p className="text-gray-600 text-sm">
                  123 Ease Transit Ave, Lagos, Nigeria
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-yellow-500 text-white rounded-full">
                <FaPhoneAlt size={20} />
              </div>
              <div>
                <h4 className="text-gray-800 font-medium text-lg">Call Us</h4>
                <p className="text-gray-600 text-sm">+234 123 456 7890</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-yellow-500 text-white rounded-full">
                <FaEnvelope size={20} />
              </div>
              <div>
                <h4 className="text-gray-800 font-medium text-lg">Email Us</h4>
                <p className="text-gray-600 text-sm">contact@easetransit.com</p>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-gray-800 font-medium text-lg mb-3">
                Connect With Us
              </h4>
              <div className="flex gap-4">
                <a
                  href="*"
                  className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-yellow-500 text-gray-600 hover:text-white rounded-full transition-all duration-300"
                >
                  <FaFacebookF size={18} />
                </a>
                <a
                  href="*"
                  className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-yellow-500 text-gray-600 hover:text-white rounded-full transition-all duration-300"
                >
                  <FaTwitter size={18} />
                </a>
                <a
                  href="*"
                  className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-yellow-500 text-gray-600 hover:text-white rounded-full transition-all duration-300"
                >
                  <FaInstagram size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex-1">
            <form className="flex flex-col gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Write your message here..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-none"
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-yellow-500 text-white font-medium px-6 py-3 rounded-md hover:bg-yellow-600 transition-all duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
