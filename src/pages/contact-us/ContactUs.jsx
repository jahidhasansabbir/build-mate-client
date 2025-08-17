import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaChevronDown,
  FaChevronUp,
  FaHome,
  FaCreditCard,
  FaBullhorn,
  FaGithub,
} from "react-icons/fa";
import Swal from "sweetalert2";

const ContactUs = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      icon: "success",
      title: "Message Sent!",
      text: "✅ We’ll get back to you soon.",
      confirmButtonColor: "#16a34a", // Tailwind indigo-600
    });
  };

  const faqs = [
    {
      icon: <FaHome className="text-indigo-600" />,
      question: "How can I book an apartment?",
      answer:
        "You need to log in and go to the Apartments page. From there, you can request an agreement for your preferred apartment.",
    },
    {
      icon: <FaCreditCard className="text-indigo-600" />,
      question: "What payment methods do you accept?",
      answer:
        "We currently accept Stripe payments with credit/debit cards. Coupon discounts can also be applied during checkout.",
    },
  ];

  return (
    <div className="min-h-screen w-11/12 mx-auto flex flex-col items-center py-12 max-w-[1600px]">
      {/* Header */}
      <div className=" text-center mb-12">
        <h1 className="text-4xl font-bold text-indigo-600 mb-4">Contact Us</h1>
        <p className="text-gray-600">
          Have questions or need help? Get in touch with us — we’d love to hear
          from you.
        </p>
      </div>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-10 w-full">
        {/* Contact Info */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Contact Information
          </h2>
          <ul className="space-y-4 text-gray-600">
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-indigo-600 text-xl" />
              <span>Dhaka, Bangladesh</span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-indigo-600 text-xl" />
              <span>+880 1234-567890</span>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-indigo-600 text-xl" />
              <span>support@buildmate.com</span>
            </li>
          </ul>

          {/* Social Links */}
          <div className="mt-6 flex space-x-4 text-xl">
            <a href="https://github.com/jahidhasansabbir/" target="_blank" className="text-indigo-600 hover:text-indigo-800 transition">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/jahid-hasan-sabbir/" target="_blank" className="text-indigo-600 hover:text-indigo-800 transition">
              <FaLinkedin />
            </a>
            <a href="https://x.com/jahid_sabbir1" target="_blank" className="text-indigo-600 hover:text-indigo-800 transition">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Send a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border-gray-300 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full border-gray-300 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full border-gray-300 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-800 transition font-semibold cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-16 w-full">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  {faq.icon}
                  <h3 className="text-lg font-semibold text-gray-800">
                    {faq.question}
                  </h3>
                </div>
                {openFAQ === index ? (
                  <FaChevronUp className="text-indigo-600" />
                ) : (
                  <FaChevronDown className="text-indigo-600" />
                )}
              </div>
              {openFAQ === index && (
                <p className="text-gray-600 mt-3">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
