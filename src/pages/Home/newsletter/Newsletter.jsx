// src/components/Home/Newsletter.jsx
import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import Swal from "sweetalert2";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter a valid email address!",
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: "Subscribed!",
      text: "✅ You’ve successfully subscribed!",
      timer: 2500,
      showConfirmButton: false,
    });

    setEmail("");
  };

  return (
    <section className="text-gray-900">
      <div className="mx-auto bg-white bg-opacity-70 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 shadow-md">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-indigo-500 text-center mb-4">
          Stay Updated
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-center mb-6 text-base sm:text-lg max-w-2xl mx-auto">
          Get the latest announcements, promotions, and updates straight to your inbox.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center gap-4 max-w-2xl mx-auto"
        >
          <div className="flex items-center border border-gray-300 rounded-xl px-4 py-2 w-full">
            <FaEnvelope className="text-indigo-600 mr-2" />
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full focus:outline-none text-gray-900"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-indigo-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-indigo-700 transition w-full sm:w-auto"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
