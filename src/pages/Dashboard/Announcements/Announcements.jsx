import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Announcements = () => {
  const axiosSecure = useAxiosSecure();
  const { data: announcements = [], isLoading } = useQuery({
    queryKey: ["announcements"],
    queryFn: async () => {
      const res = await axiosSecure.get("/announcements");
      return res.data;
    },
  });

  if (isLoading) return "loading...";

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 md:px-10 py-10">
      <h2 className="text-3xl font-bold text-green-500 mb-8 text-center">
        Announcements
      </h2>

      <div className="space-y-6">
        {announcements.map((announcement, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-lg border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md transition "
          >
            <h3 className="text-2xl font-semibold text-black mb-2">
              {announcement.title}
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              {new Date(announcement.date).toLocaleString("en-GB", {
                day: "2-digit",
                month: "long",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
              })}
            </p>
            <p className="text-base leading-relaxed text-gray-700">
              {announcement.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Announcements;
