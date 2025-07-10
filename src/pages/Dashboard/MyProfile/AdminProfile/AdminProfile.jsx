import React from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../../hooks/useAuth';
import Loading from '../../../shared/Loading/Loading';

const AdminProfile = ({ agreement }) => {
  const axiosSecure = useAxiosSecure();
  const {user}=useAuth();
  const { data: adminStats, isLoading } = useQuery({
    enabled: !!user?.accessToken,
    queryKey: ["admin-profile"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/admin-profile`);
      return res.data;
    }
  });

  const apartment = adminStats?.apartments;
  const userData = adminStats?.user;
  const totalRooms = apartment?.length;
  const availableRooms = apartment?.filter(room => room.available === true).length;
  const users = userData?.length;
  const members = userData?.filter(person => person?.role === "member").length;

  const availablePercent = ((availableRooms / totalRooms) * 100).toFixed(1);
  const unavailablePercent = (100 - availablePercent).toFixed(1);

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-10">
      <div className="bg-white/10 backdrop-blur-lg border border-gray-200 rounded-2xl p-6 md:p-10 shadow-lg text-black">
        {/* Admin Info */}
        <div className="flex flex-col md:flex-row items-center gap-6 mb-10">
          <img
            src={agreement?.user?.photoURL}
            alt="Admin"
            className="w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-gray-100 shadow-md"
          />
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-black">{agreement?.userName}</h2>
            <p className="text-sm sm:text-base mt-1 text-gray-700">{agreement?.userEmail}</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="rounded-xl p-6 border border-gray-100 shadow-md bg-white/5">
            <p className="text-lg text-black">Total Rooms</p>
            <h3 className="text-2xl font-bold text-green-700">{totalRooms}</h3>
          </div>

          <div className="rounded-xl p-6 border border-gray-100 shadow-md bg-white/5">
            <p className="text-lg text-black">Available Rooms (%)</p>
            <h3 className="text-2xl font-bold text-green-600">{availablePercent}%</h3>
          </div>

          <div className="rounded-xl p-6 border border-gray-100 shadow-md bg-white/5">
            <p className="text-lg text-black">Unavailable Rooms (%)</p>
            <h3 className="text-2xl font-bold text-red-500">{unavailablePercent}%</h3>
          </div>

          <div className="rounded-xl p-6 border border-gray-100 shadow-md bg-white/5">
            <p className="text-lg text-black">Total Users</p>
            <h3 className="text-2xl font-bold text-green-700">{users}</h3>
          </div>

          <div className="rounded-xl p-6 border border-gray-100 shadow-md bg-white/5">
            <p className="text-lg text-black">Total Members</p>
            <h3 className="text-2xl font-bold text-green-600">{members}</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminProfile;
