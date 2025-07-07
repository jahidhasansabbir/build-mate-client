import React from "react";
import useAxios from "../../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";


const Announcements = () => {
    const axiosFetch = useAxios();
    const { data: announcements = [], isLoading } = useQuery({
    queryKey: ["announcements"],
    queryFn: async () => {
      const res = await axiosFetch.get("/announcements");
      return res.data;
    },
  });
  if(isLoading) return "loading..."
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 md:px-10 py-10">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-8 text-center">
        Announcements
      </h2>

      <div className="space-y-6">
        {announcements.map((announcement, index) => (
          <div
            key={index}
            className="bg-[#161B22]/60 border border-[#30363D] rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-lg transition hover:border-blue-600"
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-[#F3F4F6] mb-2">
              {announcement.title}
            </h3>
            <p className="text-sm text-[#9CA3AF] mb-4">{announcement.date}</p>
            <p className="text-base leading-relaxed text-[#D1D5DB]">
              {announcement.message}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Announcements;
