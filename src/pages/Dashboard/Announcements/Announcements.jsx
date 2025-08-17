import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Loading from "../../shared/Loading/Loading";

const Announcements = () => {
  const axiosSecure = useAxiosSecure();
  const { data: announcements = [], isLoading } = useQuery({
    queryKey: ["announcements"],
    queryFn: async () => {
      const res = await axiosSecure.get("/announcements");
      return res.data;
    },
  });

  if (isLoading) return <Loading></Loading>;

  return (
    <section data-aos="fade-up" className="max-w-4xl mx-auto py-10">
      <h2 className="text-3xl font-bold text-indigo-500 mb-8 text-center">
        Announcements
      </h2>

      <div className="space-y-6">
        {announcements.map((announcement, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 shadow-md transition "
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
