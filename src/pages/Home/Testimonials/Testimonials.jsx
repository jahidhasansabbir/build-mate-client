// src/components/Home/Testimonials.jsx
import React from "react";
import { FaQuoteLeft, FaUserCircle } from "react-icons/fa";

const testimonialsData = [
  {
    name: "Rafi Ahmed",
    text: "The payment system is so convenient and secure. I can manage my apartment payments easily.",
  },
  {
    name: "Tanim Rahman",
    text: "Announcements keep me updated about building events and notices. Very useful feature!",
  },
  {
    name: "Sara Khan",
    text: "BuildMate makes managing my apartment and payments hassle-free. Highly recommended!",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white border border-gray-200 rounded-3xl p-8 text-gray-900 shadow-lg">
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-indigo-500 mb-8 text-center">
        What Our Users Say
      </h2>

      {/* Testimonials Grid */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className="bg-indigo-50/50 backdrop-blur-sm border border-indigo-200 rounded-xl p-6 flex flex-col items-center text-center transition-transform duration-300 hover:shadow-md"
          >
            <FaQuoteLeft className="text-3xl text-indigo-600 mb-3" />
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              "{testimonial.text}"
            </p>
            <div className="flex items-center gap-2 mt-auto">
              <FaUserCircle className="text-2xl text-indigo-600" />
              <span className="font-semibold text-gray-800">
                {testimonial.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
