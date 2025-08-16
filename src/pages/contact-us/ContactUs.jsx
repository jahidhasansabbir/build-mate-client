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
      confirmButtonColor: "#16a34a", // Tailwind green-600
    });
  };

  const faqs = [
    {
      icon: <FaHome className="text-green-600" />,
      question: "How can I book an apartment?",
      answer:
        "You need to log in and go to the Apartments page. From there, you can request an agreement for your preferred apartment.",
    },
    {
      icon: <FaCreditCard className="text-green-600" />,
      question: "What payment methods do you accept?",
      answer:
        "We currently accept Stripe payments with credit/debit cards. Coupon discounts can also be applied during checkout.",
    },
    {
      icon: <FaBullhorn className="text-green-600" />,
      question: "Where can I see announcements?",
      answer:
        "Announcements are available in your Dashboard. Admins post updates there so all members stay informed.",
    },
  ];

  return (
    <div className="min-h-screen w-11/12 mx-auto flex flex-col items-center py-12 max-w-[1600px]">
      {/* Header */}
      <div className=" text-center mb-12">
        <h1 className="text-4xl font-bold text-green-600 mb-4">Contact Us</h1>
        <p className="text-gray-600">
          Have questions or need help? Get in touch with us — we’d love to hear
          from you.
        </p>
      </div>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-10 w-full">
        {/* Contact Info */}
        <div className="bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Contact Information
          </h2>
          <ul className="space-y-4 text-gray-600">
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-green-600 text-xl" />
              <span>Dhaka, Bangladesh</span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-green-600 text-xl" />
              <span>+880 1234-567890</span>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-green-600 text-xl" />
              <span>support@buildmate.com</span>
            </li>
          </ul>

          {/* Social Links */}
          <div className="mt-6 flex space-x-4 text-xl">
            <a href="#" className="text-green-600 hover:text-green-800 transition">
              <FaFacebook />
            </a>
            <a href="#" className="text-green-600 hover:text-green-800 transition">
              <FaLinkedin />
            </a>
            <a href="#" className="text-green-600 hover:text-green-800 transition">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Send a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border-gray-300 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full border-gray-300 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full border-gray-300 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-16 w-full">
        <h2 className="text-3xl font-bold text-center text-green-600 mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md cursor-pointer"
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
                  <FaChevronUp className="text-green-600" />
                ) : (
                  <FaChevronDown className="text-green-600" />
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
