import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Authentication/Login/Login";
import Register from "../pages/Authentication/Register/Register";
import Apartment from "../pages/Apartment/Apartment/Apartment";
import DashboardLayout from "../layouts/DashboardLayout";
import MyProfile from "../pages/Dashboard/MyProfile/MyProfile/MyProfile";
import Announcements from "../pages/Dashboard/Announcements/Announcements";
import MakePayment from "../pages/Dashboard/MakePayment/MakePayment";
import ManageMembers from "../pages/Dashboard/ManageMembers/ManageMembers";
import MakeAnnouncement from "../pages/Dashboard/MakeAnnouncement/MakeAnnouncement";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index:true,
                Component:Home
            },
            {
                path:'login',
                Component:Login
            },
            {
                path:'register',
                Component:Register
            },
            {
                path: 'apartment',
                Component: Apartment
            }
        ]
    },
    {
        path: '/dashboard',
        Component: DashboardLayout,
        children:[
            {
                index:true,
                Component:MyProfile
            },
            {
                path:'announcements',
                Component: Announcements
            },
            {
                path: 'make-payment',
                Component: MakePayment
            },
            {
                path: 'manage-members',
                Component: ManageMembers
            },
            {
                path: 'make-announcement',
                Component: MakeAnnouncement
            }
        ]
    }
])