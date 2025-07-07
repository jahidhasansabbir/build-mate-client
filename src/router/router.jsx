import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Authentication/Login/Login";
import Register from "../pages/Authentication/Register/Register";
import Apartment from "../pages/Apartment/Apartment/Apartment";
import DashboardLayout from "../layouts/DashboardLayout";
import MyProfile from "../pages/Dashboard/MyProfile/MyProfile/MyProfile";

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
            }
        ]
    }
])