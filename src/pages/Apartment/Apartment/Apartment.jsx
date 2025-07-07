import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import ApartmentCard from "../ApartmentCard/ApartmentCard";
import useAxios from "../../../hooks/useAxios";

const Apartment = () => {
  const axiosFetch = useAxios();
  const { data: rooms = [], isLoading } = useQuery({
    queryKey: ["apartments"],
    queryFn: async () => {
      const res = await axiosFetch.get("/apartments");
      return res.data;
    },
  });

  const [minRent, setMinRent] = useState("");
  const [maxRent, setMaxRent] = useState("");

  if (isLoading) return "Loading...";

  // Filter rooms based on rent range
  const filteredRooms = rooms.filter((room) => {
    const min = parseInt(minRent) || 0;
    const max = parseInt(maxRent) || Infinity;
    return room.rent >= min && room.rent <= max;
  });

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-10">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6 text-center">
        Available Apartments
      </h2>

      {/* Rent Range Search Inputs */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
        <input
          type="number"
          placeholder="Min Rent"
          className="w-full sm:w-48 px-4 py-2 rounded-lg bg-[#161B22] border border-[#30363D] text-[#F3F4F6] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-blue-600"
          value={minRent}
          onChange={(e) => setMinRent(e.target.value)}
          min={0}
        />
        <input
          type="number"
          placeholder="Max Rent"
          className="w-full sm:w-48 px-4 py-2 rounded-lg bg-[#161B22] border border-[#30363D] text-[#F3F4F6] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-blue-600"
          value={maxRent}
          onChange={(e) => setMaxRent(e.target.value)}
          min={0}
        />
      </div>

      {/* Apartments Grid */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {filteredRooms.length > 0 ? (
          filteredRooms.map((room) => (
            <ApartmentCard key={room._id} room={room} />
          ))
        ) : (
          <p className="text-center text-[#9CA3AF] col-span-full">
            No apartments found in this rent range.
          </p>
        )}
      </div>
    </section>
  );
};

export default Apartment;
