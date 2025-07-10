import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useNavigate } from "react-router";
import Loading from "../../shared/Loading/Loading";

const MakePayment = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate()
  const [selectedMonth, setSelectedMonth]=useState("");
  const { data: agreement = [], isLoading } = useQuery({
    queryKey: ["agreement", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`agreement/${user?.email}`);
      return res.data;
    },
  });
  if (isLoading) return <Loading></Loading>;
  const { blockName, apartmentNo, floorNo, rent } = agreement;

  const handlePayment = e=>{
    e.preventDefault()
    navigate(`/dashboard/payment/${agreement?._id}/${selectedMonth}`)

  }
  const handleMonth=e=>{
    setSelectedMonth(e.target.value)
  }

  return (
    <section data-aos="fade-up" className="max-w-4xl mx-auto  py-10">
      <div className="bg-white/10 backdrop-blur-lg border border-gray-200 rounded-2xl shadow-lg p-6 sm:p-10 text-black">
        <h2 className="text-2xl sm:text-3xl font-bold text-green-500 mb-6 text-center drop-shadow-lg">
          Make Payment
        </h2>

        <form className="space-y-6" onSubmit={handlePayment}>
          {/* Member Email */}
          <div>
            <label className="block text-gray-500 mb-1">Member Email</label>
            <input
              type="email"
              defaultValue={user?.email}
              disabled
              className="w-full bg-white/20 text-black border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          {/* Grid for apartment info */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-500 mb-1">Floor</label>
              <input
                type="text"
                defaultValue={floorNo}
                disabled
                className="w-full bg-white/20 text-black border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
            <div>
              <label className="block text-gray-500 mb-1">Block Name</label>
              <input
                type="text"
                defaultValue={blockName}
                disabled
                className="w-full bg-white/20 text-black border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
            <div>
              <label className="block text-gray-500 mb-1">Apartment No</label>
              <input
                type="text"
                defaultValue={apartmentNo}
                disabled
                className="w-full bg-white/20 text-black border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
            <div>
              <label className="block text-gray-500 mb-1">Rent (৳)</label>
              <input
                type="text"
                defaultValue={`৳${rent}`}
                disabled
                className="w-full bg-white/20 text-black border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
          </div>

          {/* Month Selector */}
          <div>
            <label className="block text-gray-500 mb-1">Select Month</label>
            <select
              className="w-full bg-white/20 text-black border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
              onChange={handleMonth} value={selectedMonth}
              required
            >
              <option disabled value="">
                -- Choose Month --
              </option>
              {[
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
              ].map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <div className="text-center pt-4">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 transition text-white font-semibold px-6 py-3 rounded-lg shadow-lg drop-shadow-md"
            >
              Pay Rent
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default MakePayment;
