import React from 'react';
import useAuth from '../../../../hooks/useAuth';
import useAxiosSecure from '../../../../hooks/useAxiosSecure'
import UserProfile from '../UserProfile/UserProfile';
import { useQuery } from '@tanstack/react-query';
import MemberProfile from "../MemberProfile/MemberProfile"
const MyProfile = () => {
    const {user}=useAuth()
    const axiosSecure = useAxiosSecure();
    // const { data: agreement = [], isLoading } = useQuery({
    // queryKey: ["apartments"],
    // queryFn: async () => {
    //   const res = await axiosFetch.get("/announcements");
    //   return res.data;
    // }});
    const {data:agreement =[],isLoading }=useQuery({
        queryKey: ['agreement', user?.email],
        queryFn: async ()=>{
            const res = await axiosSecure.get(`agreement/${user?.email}`)
            return res.data;
        }
    })
    if(isLoading)return "loading..."
    return (
        <div>
            {
                agreement?.status=='active'? <MemberProfile user={user} agreement={agreement}></MemberProfile> : <UserProfile user={user}></UserProfile>
            }
        </div>
    );
};

export default MyProfile;