import React from 'react';
import useAuth from '../../../../hooks/useAuth';
import useAxiosSecure from '../../../../hooks/useAxiosSecure'
import UserProfile from '../UserProfile/UserProfile';
import { useQuery } from '@tanstack/react-query';
import MemberProfile from "../MemberProfile/MemberProfile"
import AdminProfile from '../AdminProfile/AdminProfile';
import Loading from '../../../shared/Loading/Loading';
const MyProfile = () => {
    const {user}=useAuth()
    const axiosSecure = useAxiosSecure();
    const {data:agreement =[],isLoading }=useQuery({
        queryKey: ['agreement', user?.email],
        enabled: !!user.accessToken,
        queryFn: async ()=>{
            const res = await axiosSecure.get(`agreement/${user?.email}`)
            return res.data;
        }
    })
    const role = agreement?.user?.role;
    if(isLoading)return <Loading></Loading>
    return (
        <div data-aos="fade-up">
            {
                role==='member' && <MemberProfile user={user} agreement={agreement}></MemberProfile>  
            }
            {
                role==='user' && <UserProfile></UserProfile>
            }
            {
                role==="admin" && <AdminProfile user={user} agreement={agreement}></AdminProfile>
            }
        </div>
    );
};

export default MyProfile;