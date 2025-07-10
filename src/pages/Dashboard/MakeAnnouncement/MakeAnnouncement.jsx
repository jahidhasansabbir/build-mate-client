import React, { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const MakeAnnouncement = () => {
  const axiosSecure = useAxiosSecure();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const sweetAlert = () => {
    Swal.fire({
      icon: "success",
      title: "Announcement successfully posted!",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axiosSecure.post("/announcement", formData)
    .then(() => {
       setFormData({ title: "", description: "" });
        sweetAlert();

      })
      .catch(() => {
      });
      
  };

  return (
    <section data-aos="fade-up" className="max-w-4xl mx-auto px-4 sm:px-6 md:px-10 py-12">
      <div className="bg-white/10 backdrop-blur-lg border border-gray-300 rounded-2xl p-8 shadow-lg text-black">
        <h2 className="text-2xl sm:text-3xl font-bold text-green-500 mb-6 drop-shadow-lg">
          Make an Announcement
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label
              htmlFor="title"
              className="block text-gray-500 mb-1 font-medium"
            >
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              value={formData.title}
              onChange={handleChange}
              required
              placeholder="Enter announcement title"
              className="w-full rounded-lg border border-gray-300 bg-white/20 text-black p-3 focus:outline-none focus:ring-2 focus:ring-green-600 transition"
            />
          </div>

          {/* Description */}
          <div>
            <label
              htmlFor="description"
              className="block text-gray-500 mb-1 font-medium"
            >
              Description
            </label>
            <textarea
              name="description"
              id="description"
              rows={5}
              value={formData.description}
              onChange={handleChange}
              required
              placeholder="Write your announcement here..."
              className="w-full rounded-lg border border-gray-300 bg-white/20 text-black p-3 focus:outline-none focus:ring-2 focus:ring-green-600 transition resize-none"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition drop-shadow-md"
            >
              Post Announcement
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default MakeAnnouncement;
