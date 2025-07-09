import React from 'react';
import useAuth from '../../../../hooks/useAuth';
import useAxiosSecure from '../../../../hooks/useAxiosSecure'
import UserProfile from '../UserProfile/UserProfile';
import { useQuery } from '@tanstack/react-query';
import MemberProfile from "../MemberProfile/MemberProfile"
import AdminProfile from '../AdminProfile/AdminProfile';
const MyProfile = () => {
    const {user,isLoadingUser}=useAuth()
    const axiosSecure = useAxiosSecure();
    const {data:agreement =[],isLoading }=useQuery({
        queryKey: ['agreement', user?.email],
        enabled: !isLoadingUser,
        queryFn: async ()=>{
            const res = await axiosSecure.get(`agreement/${user?.email}`)
            return res.data;
        }
    })
    const role = agreement?.user?.role;
    if(isLoading)return "loading..."
    return (
        <div>
            {
                role==='member' && <MemberProfile user={user} agreement={agreement}></MemberProfile>  
            }
            {
                role==='user' && <UserProfile user={user}></UserProfile>
            }
            {
                role==="admin" && <AdminProfile agreement={agreement}></AdminProfile>
            }
        </div>
    );
};

export default MyProfile;