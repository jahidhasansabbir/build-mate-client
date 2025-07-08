import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router';

const MemberRoute = ({ children }) => {
    const { role, isRoleLoading } = useAuth();
    const location = useLocation();


    if (isRoleLoading) {
        return <span className="loading loading-spinner loading-xl"></span>
    }

    if (role!=="member") {
        return <Navigate state={{ from: location.pathname }} to="/forbidden"></Navigate>
    }

    return children;
};

export default MemberRoute;