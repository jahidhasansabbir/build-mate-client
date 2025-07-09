import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import ApartmentCard from "../ApartmentCard/ApartmentCard";
import useAxios from "../../../hooks/useAxios";

const Apartment = () => {
  const axiosFetch = useAxios();
  const [page, setPage] = useState(1);
  const limit = 6;

  const [minRent, setMinRent] = useState("");
  const [maxRent, setMaxRent] = useState("");
  const [appliedMin, setAppliedMin] = useState("");
  const [appliedMax, setAppliedMax] = useState("");

  const { data = {}, isLoading } = useQuery({
    queryKey: ["apartments", page, appliedMin, appliedMax],
    queryFn: async () => {
      const res = await axiosFetch.get(
        `/apartments?page=${page}&limit=${limit}&min=${appliedMin}&max=${appliedMax}`
      );
      return res.data;
    },
  });

  const rooms = data.rooms || [];
  const totalPages = data.totalPages || 1;

  if (isLoading) return "Loading...";

  const handleApplyFilter = () => {
    setAppliedMin(minRent);
    setAppliedMax(maxRent);
    setPage(1); // Reset to first page when filters applied
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-10">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-500 mb-10 text-center tracking-tight">
        Available Apartments
      </h2>

      {/* Rent Range Inputs */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
        <input
          type="number"
          placeholder="Min Rent"
          className="w-full sm:w-48 px-4 py-2 rounded-xl shadow-sm bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-200"
          value={minRent}
          onChange={(e) => setMinRent(e.target.value)}
          min={0}
        />
        <input
          type="number"
          placeholder="Max Rent"
          className="w-full sm:w-48 px-4 py-2 rounded-xl shadow-sm bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-200"
          value={maxRent}
          onChange={(e) => setMaxRent(e.target.value)}
          min={0}
        />
        <button
          onClick={handleApplyFilter}
          className="bg-green-500 hover:bg-green-700 text-white px-6 py-2 rounded-xl"
        >
          Apply Filter
        </button>
      </div>

      {/* Apartments Grid */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {rooms.length > 0 ? (
          rooms.map((room) => <ApartmentCard key={room._id} room={room} />)
        ) : (
          <p className="text-center text-gray-500 text-lg col-span-full">
            🚫 No apartments found in this rent range.
          </p>
        )}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-10 gap-2 flex-wrap">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className={`px-4 py-2 rounded-lg ${
            page === 1
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-green-500 text-white hover:bg-green-600"
          }`}
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`px-4 py-2 rounded-lg ${
              page === i + 1
                ? "bg-green-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={page === totalPages}
          className={`px-4 py-2 rounded-lg ${
            page === totalPages
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-green-500 text-white hover:bg-green-600"
          }`}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Apartment;
