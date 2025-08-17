import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import { FiMail, FiUser, FiCalendar, FiClock } from 'react-icons/fi';

const Profile = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: agreement = [] } = useQuery({
        queryKey: ['agreement', user?.email],
        enabled: !!user.accessToken,
        queryFn: async () => {
            const res = await axiosSecure.get(`agreement/${user?.email}`);
            return res.data;
        },
    });

    const userInfo = agreement.user;

    return (
        <div className="min-h-[80vh] flex justify-center items-start p-6 ">
            <div className="bg-white rounded-lg p-10 w-full max-w-lg border border-gray-200">
                {/* Avatar */}
                <div className="flex flex-col items-center gap-4">
                    <img
                        src={userInfo?.photoURL}
                        alt={userInfo?.name}
                        className="w-28 h-28 rounded-full border-4 border-gradient-to-r from-indigo-500 to-indigo-500 object-cover shadow-lg"
                    />
                    <h2 className="text-3xl font-bold text-gray-900">{userInfo?.name}</h2>
                    <p className="flex items-center gap-2 text-indigo-600 font-medium">
                        <FiUser /> {userInfo?.role?.toUpperCase()}
                    </p>
                </div>

                {/* Details */}
                <div className="mt-8 space-y-5">
                    <div className="flex items-center gap-3 text-gray-700">
                        <FiMail className="text-xl text-indigo-500" />
                        <span className="font-medium">Email:</span>
                        <span className="text-gray-900">{userInfo?.email}</span>
                    </div>

                    <div className="flex items-center gap-3 text-gray-700">
                        <FiCalendar className="text-xl text-indigo-500" />
                        <span className="font-medium">Created Date:</span>
                        <span className="text-gray-900">
                            {userInfo?.createdDate
                                ? format(new Date(userInfo.createdDate), 'PPP p')
                                : 'N/A'}
                        </span>
                    </div>

                    <div className="flex items-center gap-3 text-gray-700">
                        <FiClock className="text-xl text-indigo-500" />
                        <span className="font-medium">Last Login:</span>
                        <span className="text-gray-900">
                            {userInfo?.lastLogin
                                ? format(new Date(userInfo.lastLogin), 'PPP p')
                                : 'N/A'}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
