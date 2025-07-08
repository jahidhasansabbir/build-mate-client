import React from "react";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const MakePayment = () => {
  const {user}=useAuth()
  const axiosSecure = useAxiosSecure();
  const {data:agreement =[],isLoading }=useQuery({
          queryKey: ['agreement', user?.email],
          queryFn: async ()=>{
              const res = await axiosSecure.get(`agreement/${user?.email}`)
              return res.data;
          }
      })
  if(isLoading)return "Loading..."
  const { blockName, apartmentNo, floorNo, rent} = agreement
 

  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 md:px-10 py-10">
      <div className="bg-[#161B22]/60 border border-[#30363D] rounded-2xl shadow-lg p-6 sm:p-10 backdrop-blur-lg">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-6 text-center">
          Make Payment
        </h2>

        <form className="space-y-6">
          {/* Member Email */}
          <div>
            <label className="block text-[#9CA3AF] mb-1">Member Email</label>
            <input
              type="email"
              defaultValue={user?.email}
              disabled
              className="w-full bg-[#0D1117] text-[#F3F4F6] border border-[#30363D] rounded-lg px-4 py-3 focus:outline-none"
            />
          </div>

          {/* Grid for apartment info */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[#9CA3AF] mb-1">Floor</label>
              <input
                type="text"
                defaultValue={floorNo}
                disabled
                className="w-full bg-[#0D1117] text-[#F3F4F6] border border-[#30363D] rounded-lg px-4 py-3"
              />
            </div>
            <div>
              <label className="block text-[#9CA3AF] mb-1">Block Name</label>
              <input
                type="text"
                defaultValue={blockName}
                disabled
                className="w-full bg-[#0D1117] text-[#F3F4F6] border border-[#30363D] rounded-lg px-4 py-3"
              />
            </div>
            <div>
              <label className="block text-[#9CA3AF] mb-1">Apartment No</label>
              <input
                type="text"
                defaultValue={apartmentNo}
                disabled
                className="w-full bg-[#0D1117] text-[#F3F4F6] border border-[#30363D] rounded-lg px-4 py-3"
              />
            </div>
            <div>
              <label className="block text-[#9CA3AF] mb-1">Rent (৳)</label>
              <input
                type="text"
                defaultValue={`৳${rent}`}
                disabled
                className="w-full bg-[#0D1117] text-[#F3F4F6] border border-[#30363D] rounded-lg px-4 py-3"
              />
            </div>
          </div>

          {/* Month Selector */}
          <div>
            <label className="block text-[#9CA3AF] mb-1">Select Month</label>
            <select className="w-full bg-[#0D1117] text-[#F3F4F6] border border-[#30363D] rounded-lg px-4 py-3">
              <option disabled >
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
                <option key={month} defaultValue={month}>
                  {month}
                </option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <div className="text-center pt-4">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 transition text-white font-semibold px-6 py-3 rounded-lg shadow-md"
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
