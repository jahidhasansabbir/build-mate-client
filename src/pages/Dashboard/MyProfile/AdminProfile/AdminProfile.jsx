import React from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const AdminProfile = ({ agreement }) => {
  const axiosSecure = useAxiosSecure();
  const {data:adminStats, isLoading}=useQuery({
    queryKey: ["admin-profile", agreement?.userEmail],
    queryFn: async()=>{
        const res = await axiosSecure.get(`/admin-profile/${agreement?.userEmail}`)
        return res.data;
    }
  })
  const apartment = adminStats?.apartments;
  const user = adminStats?.user;
  console.log(apartment, user);
  const totalRooms = apartment?.length;

  const availableRooms = apartment?.filter(room=>room.available==true).length;
  console.log(availableRooms);
  const users = user?.length;
  const members = user?.filter(person=>person?.role=="member").length;
  console.log(members);

  const availablePercent = ((availableRooms / totalRooms) * 100).toFixed(1);
  const unavailablePercent = (100 - availablePercent).toFixed(1);
  if(isLoading){
    return "loading..."
  }
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-10">
      <div className="bg-[#161B22]/80 backdrop-blur-md border border-[#30363D] rounded-2xl p-6 md:p-10 text-white shadow-xl">
        {/* Admin Info */}
        <div className="flex flex-col md:flex-row items-center gap-6 mb-10">
          <img
            src={agreement?.user?.photoURL}
            alt="Admin"
            className="w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-blue-600 shadow-md"
          />
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-500">{agreement?.userName}</h2>
            <p className="text-[#9CA3AF] text-sm sm:text-base mt-1">{agreement?.userEmail}</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-[#1F2937] rounded-xl p-6 border border-[#30363D] shadow-lg">
            <p className="text-lg text-gray-400">Total Rooms</p>
            <h3 className="text-2xl font-bold text-blue-400">{totalRooms}</h3>
          </div>

          <div className="bg-[#1F2937] rounded-xl p-6 border border-[#30363D] shadow-lg">
            <p className="text-lg text-gray-400">Available Rooms (%)</p>
            <h3 className="text-2xl font-bold text-green-400">{availablePercent}%</h3>
          </div>

          <div className="bg-[#1F2937] rounded-xl p-6 border border-[#30363D] shadow-lg">
            <p className="text-lg text-gray-400">Unavailable Rooms (%)</p>
            <h3 className="text-2xl font-bold text-red-400">{unavailablePercent}%</h3>
          </div>

          <div className="bg-[#1F2937] rounded-xl p-6 border border-[#30363D] shadow-lg">
            <p className="text-lg text-gray-400">Total Users</p>
            <h3 className="text-2xl font-bold text-indigo-400">{users}</h3>
          </div>

          <div className="bg-[#1F2937] rounded-xl p-6 border border-[#30363D] shadow-lg">
            <p className="text-lg text-gray-400">Total Members</p>
            <h3 className="text-2xl font-bold text-purple-400">{members}</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminProfile;
