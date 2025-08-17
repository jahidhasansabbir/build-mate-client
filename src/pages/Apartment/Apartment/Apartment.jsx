import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import ApartmentCard from "../ApartmentCard/ApartmentCard";
import useAxios from "../../../hooks/useAxios";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Loading from "../../shared/Loading/Loading";
import { FaRegSadTear } from "react-icons/fa"; // 🔹 added icon

const Apartment = () => {
  const axiosFetch = useAxios();
  const { user, isLoadingUser } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [page, setPage] = useState(1);
  const limit = 6;

  const [minRent, setMinRent] = useState("");
  const [maxRent, setMaxRent] = useState("");
  const [appliedMin, setAppliedMin] = useState("");
  const [appliedMax, setAppliedMax] = useState("");

  const [sortOrder, setSortOrder] = useState("asc");

  const { data = {}, isLoading } = useQuery({
    queryKey: ["apartments", page, appliedMin, appliedMax],
    queryFn: async () => {
      const res = await axiosFetch.get(
        `/apartments?page=${page}&limit=${limit}&min=${appliedMin}&max=${appliedMax}`
      );
      return res.data;
    },
  });

  const { data: role } = useQuery({
    enabled: !!user?.email && !isLoadingUser,
    queryKey: ["role", user?.email],
    queryFn: async () => {
      const res = await axiosSecure(`/role/${user?.email}`);
      return res.data;
    },
  });

  const rooms = data.rooms || [];
  const totalPages = data.totalPages || 1;

  const sortedRooms = [...rooms].sort((a, b) =>
    sortOrder === "asc" ? a.rent - b.rent : b.rent - a.rent
  );

  if (isLoading) return <Loading></Loading>;

  const handleApplyFilter = () => {
    setAppliedMin(minRent);
    setAppliedMax(maxRent);
    setPage(1);
  };

  return (
    <section className="max-w-[1600px] w-11/12 mx-auto py-10">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-indigo-500 mb-10 text-center tracking-tight">
        Available Apartments
      </h2>

      {/* Rent Range + Sorting */}
      <div className="bg-white shadow-sm rounded-lg p-6 mb-8 border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Filter Apartments
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Rent Inputs + Button */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            {/* Min Rent */}
            <input
              type="number"
              placeholder="Min Rent"
              className="w-full sm:w-40 px-4 py-2 rounded-lg shadow-sm bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
              value={minRent}
              onChange={(e) => setMinRent(e.target.value)}
              min={0}
            />

            {/* Max Rent */}
            <input
              type="number"
              placeholder="Max Rent"
              className="w-full sm:w-40 px-4 py-2 rounded-lg shadow-sm bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
              value={maxRent}
              onChange={(e) => setMaxRent(e.target.value)}
              min={0}
            />

            {/* Apply Button */}
            <button
              onClick={handleApplyFilter}
              className="bg-indigo-600 hover:bg-indigo-800 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition-all duration-200 cursor-pointer"
            >
              Apply
            </button>
          </div>

          {/* Right: Sorting */}
          <div className="flex flex-col w-full md:w-auto">
            
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="w-full md:w-48 px-4 py-2 rounded-lg shadow-sm bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
            >
              <option value="asc">Price: Low to High</option>
              <option value="desc">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* Apartments Grid */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {sortedRooms.length > 0 ? (
          sortedRooms.map((room) => (
            <ApartmentCard key={room._id} room={room} role={role} />
          ))
        ) : (
          <p className="flex items-center justify-center gap-2 text-center text-gray-500 text-lg col-span-full">
            <FaRegSadTear className="text-2xl text-indigo-500" />
            No apartments found in this rent range.
          </p>
        )}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-10 gap-2 flex-wrap">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className={`px-4 py-2 rounded-md ${
            page === 1
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-indigo-600 text-white hover:bg-indigo-600"
          }`}
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`px-4 py-2 rounded-md ${
              page === i + 1
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={page === totalPages}
          className={`px-4 py-2 rounded-md ${
            page === totalPages
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-indigo-600 text-white hover:bg-indigo-700"
          }`}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Apartment;
