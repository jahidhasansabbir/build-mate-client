import React from 'react';
import useAuth from '../../../../hooks/useAuth';
import UserProfile from '../UserProfile/UserProfile';

const MyProfile = () => {
    const {user}=useAuth()
    return (
        <div>
            <UserProfile user={user}></UserProfile>
        </div>
    );
};

export default MyProfile;