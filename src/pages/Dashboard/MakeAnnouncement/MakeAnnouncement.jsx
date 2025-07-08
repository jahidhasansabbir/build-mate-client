import React, { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle the form submission (e.g., POST to server)
    console.log("Announcement Submitted:", formData);
    axiosSecure.post('/announcement', formData)
    .then(res=>console.log(res.data))
    .catch(err=>{console.log(err);})
  };

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 md:px-10 py-12">
      <div className="bg-[#161B22] border border-[#30363D] rounded-2xl p-8 shadow-xl backdrop-blur-md">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-6">
          Make an Announcement
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-[#F3F4F6] mb-1"
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
              className="w-full rounded-lg border border-[#30363D] bg-[#0D1117] text-[#F3F4F6] p-3 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
              placeholder="Enter announcement title"
            />
          </div>

          {/* Description */}
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-[#F3F4F6] mb-1"
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
              className="w-full rounded-lg border border-[#30363D] bg-[#0D1117] text-[#F3F4F6] p-3 focus:outline-none focus:ring-2 focus:ring-blue-600 transition resize-none"
              placeholder="Write your announcement here..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition"
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
