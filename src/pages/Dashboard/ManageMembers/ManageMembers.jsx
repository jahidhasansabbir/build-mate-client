import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../shared/Loading/Loading";
import useAuth from "../../../hooks/useAuth";

const ManageMembers = () => {
  const axiosSecure = useAxiosSecure();
  const {user} =useAuth();
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["user"],
    enabled: !!user.accessToken,
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const members = data?.filter((member) => member.role === "member");

  const handleRemove = (id) => {
    axiosSecure
      .patch(`/users/${id}`)
      .then(() => refetch())
      .catch(() =>{});
  };

  if (isLoading) return <Loading></Loading>;

  return (
    <section data-aos="fade-up" className="max-w-4xl mx-auto py-10">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-indigo-500 mb-8 text-center">
        Manage Members
      </h2>

      <div className="overflow-x-auto bg-white/10 backdrop-blur-lg border border-gray-200 rounded-2xl shadow-md">
        <table className="min-w-full text-left text-sm sm:text-base text-black">
          <thead className="bg-indigo-500/10 border-b border-gray-200">
            <tr>
              <th className="px-4 py-3 font-semibold">#</th>
              <th className="px-4 py-3 font-semibold">Name</th>
              <th className="px-4 py-3 font-semibold">Email</th>
              <th className="px-4 py-3 text-center font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member, index) => (
              <tr
                key={member._id}
                className="border-t border-gray-200 hover:bg-white/20 transition"
              >
                <td className="px-4 py-3 text-gray-600">{index + 1}</td>
                <td className="px-4 py-3">{member.name}</td>
                <td className="px-4 py-3">{member.email}</td>
                <td className="px-4 py-3 text-center">
                  <button
                    onClick={() => handleRemove(member._id)}
                    className="px-2 py-1 rounded-sm bg-red-500 hover:bg-red-700 text-white font-medium transition"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {members.length === 0 && (
          <div className="p-6 text-center text-gray-600">No members found.</div>
        )}
      </div>
    </section>
  );
};

export default ManageMembers;
