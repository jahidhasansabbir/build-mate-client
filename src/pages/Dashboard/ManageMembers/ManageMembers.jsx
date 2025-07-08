import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";



const ManageMembers = () => {
  const axiosSecure = useAxiosSecure();
  const {data, isLoading, refetch}= useQuery({
    queryKey: ["user"],
    queryFn: async()=>{
      const res = await axiosSecure.get('/users')
      return res.data;
    }
  })
  const members = data?.filter(member=>member.role==="member")
  // console.log(m);
  const handleRemove = (id) => {
    console.log("Remove member with ID:", id);
    // Add delete request here
    axiosSecure.patch(`/users/${id}`)
    .then(data=>{
      console.log(data)
      refetch()
    })
    .catch(err=>console.log(err))
  };
  if(isLoading) return "loading..."
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-10">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-8 text-center">
        Manage Members
      </h2>

      <div className="overflow-x-auto bg-[#161B22] border border-[#30363D] rounded-xl shadow-md">
        <table className="min-w-full text-left text-sm sm:text-base">
          <thead className="bg-[#1F2937] text-[#F3F4F6]">
            <tr>
              <th className="px-4 py-3">#</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member, index) => (
              <tr key={member._id} className="border-t border-[#30363D] hover:bg-[#1f2937]/60 transition">
                <td className="px-4 py-3 text-[#9CA3AF]">{index + 1}</td>
                <td className="px-4 py-3 text-[#F3F4F6]">{member.name}</td>
                <td className="px-4 py-3 text-[#F3F4F6]">{member.email}</td>
                <td className="px-4 py-3 text-center">
                  <button
                    onClick={() => handleRemove(member._id)}
                    className="px-4 py-1 rounded-lg bg-red-600 hover:bg-red-700 text-white font-medium transition"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {members.length === 0 && (
          <div className="p-6 text-center text-[#9CA3AF]">No members found.</div>
        )}
      </div>
    </section>
  );
};

export default ManageMembers;
