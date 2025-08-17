import React from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../../hooks/useAuth';
import Loading from '../../../shared/Loading/Loading';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { FiUsers, FiHome, FiCheckCircle, FiXCircle } from 'react-icons/fi';

const AdminProfile = ({ user }) => {
  const axiosSecure = useAxiosSecure();
  const { isUserLoading } = useAuth();

  const { data: adminStats } = useQuery({
    enabled: !isUserLoading && !!user?.accessToken,
    queryKey: ['admin-profile'],
    queryFn: async () => {
      const res = await axiosSecure.get(`/admin-profile`);
      return res.data;
    }
  });


  const apartment = adminStats?.apartments || [];
  const userData = adminStats?.user || [];

  const totalRooms = apartment.length;
  const availableRooms = apartment.filter(room => room.available).length;
  const unavailableRooms = totalRooms - availableRooms;

  const users = userData.length;
  const members = userData.filter(person => person.role === 'member').length;
  const otherUsers = users - members;

  const roomChartData = [
    { name: 'Available', value: availableRooms, color: '#4f46e5', icon: <FiCheckCircle className="text-indigo-500" /> },
    { name: 'Unavailable', value: unavailableRooms, color: '#ef4444', icon: <FiXCircle className="text-red-500" /> }
  ];

  const userChartData = [
    { name: 'Members', value: members, color: '#4f46e5', icon: <FiUsers className="text-indigo-500" /> },
    { name: 'Other Users', value: otherUsers, color: '#22c55e', icon: <FiUsers className="text-green-500" /> }
  ];

  return (
    <section className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <div className="bg-white/10 backdrop-blur-lg border border-gray-200 rounded-2xl p-6 md:p-10 shadow-xl text-black">

      

        {/* Combined Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Rooms Overview */}
          <div className="rounded-xl border border-gray-100 shadow-md p-6 bg-white/5 flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Rooms Overview</h3>
            <p className="mb-2 text-gray-700 text-center">
              Total Rooms: <span className="font-bold">{totalRooms}</span><br />
              Available: <span className="text-indigo-600 font-bold">{availableRooms}</span> 
            </p>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={roomChartData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label
                >
                  {roomChartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value, name) => [`${value} rooms`, name]} />
                <Legend verticalAlign="bottom" />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Users Overview */}
          <div className="rounded-xl border border-gray-100 shadow-md p-6 bg-white/5 flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Users Overview</h3>
            <p className="mb-2 text-gray-700 text-center">
              Total Users: <span className="font-bold">{users}</span><br />
              Members: <span className="text-indigo-600 font-bold">{members}</span> 
            </p>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={userChartData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label
                >
                  {userChartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value, name) => [`${value} users`, name]} />
                <Legend  verticalAlign="bottom" />
              </PieChart>
            </ResponsiveContainer>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AdminProfile;
