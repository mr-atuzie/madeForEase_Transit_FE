import React from "react";

const ContactUs = () => {
  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="w-[90%] lg:w-[60%] mx-auto bg-white rounded-lg shadow-lg p-8 lg:p-12">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl  font-bold800">Get in Touch</h2>
          <p className="text-yellow-500 mt-2 text-sm lg:text-base">
            Whether you have a question, want to work together, or just say hi,
            drop me a message.
          </p>
        </div>

        {/* Contact Form */}
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
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
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
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
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
              placeholder="Write your message here..."
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent resize-none"
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
    </section>
  );
};

export default ContactUs;
