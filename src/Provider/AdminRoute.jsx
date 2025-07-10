import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router';
import useAxiosSecure from '../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Loading from '../pages/shared/Loading/Loading';

const AdminRoute = ({ children }) => {
      const {user, isLoadingUser}=useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: role, isLoading:isRoleLoading } = useQuery({
      enabled: !isLoadingUser,
      queryKey: ['role', user?.email],
      queryFn: async () => {
        const res = await axiosSecure(`/role/${user?.email}`);
        return res.data;
      },
    });
    const location = useLocation();


    if (isRoleLoading) {
        return <Loading></Loading>
    }

    if (role!=="admin") {
        return <Navigate state={{ from: location.pathname }} to="/forbidden"></Navigate>
    }

    return children;
};

export default AdminRoute;