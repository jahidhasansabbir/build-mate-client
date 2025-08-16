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
import AgreementRequests from "../pages/Dashboard/AgreementRequests/AgreementRequests";
import ManageCoupons from "../pages/Dashboard/ManageCoupons/ManageCoupons";
import PrivateRoute from "../Provider/PrivateRoute";
import Forbidden from "../pages/shared/Forbidden/Forbidden";
import MemberRoute from "../Provider/MemberRoute";
import AdminRoute from "../Provider/AdminRoute";
import Payment from "../pages/Dashboard/Payment/Payment/Payment";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import ContactUs from "../pages/contact-us/ContactUs";
import TermsAndConditions from "../pages/terms-and-conditions/TermsAndConditions";


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
            }, 
            {
                path:'contact-us',
                Component: ContactUs
            },
             {
                path:'announcements',
                element: <PrivateRoute><Announcements></Announcements></PrivateRoute>
            },
        ]
    },
    {
        path: '/dashboard',
        element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children:[
            {
                index:true,
                element:<PrivateRoute><MyProfile></MyProfile></PrivateRoute>
            },
           
            {
                path: 'make-payment',
                element:<MemberRoute><MakePayment></MakePayment></MemberRoute>
            },
            {
                path: 'manage-members',
                element: <AdminRoute><ManageMembers></ManageMembers></AdminRoute>
            },
            {
                path: 'make-announcement',
                element:<AdminRoute><MakeAnnouncement></MakeAnnouncement></AdminRoute>
            },
            {
                path: 'agreement-requests',
                element:<AdminRoute><AgreementRequests></AgreementRequests></AdminRoute>
            },
            {
                path: 'manage-coupons',
                element: <AdminRoute><ManageCoupons></ManageCoupons></AdminRoute>
            },
            {
                path: 'payment/:id/:month',
                element:<MemberRoute><Payment></Payment></MemberRoute>
            },
            {
                path:'payment-history',
                element:<MemberRoute><PaymentHistory></PaymentHistory></MemberRoute>
            }
        ]
    },
    {
        path:'forbidden',
        Component: Forbidden
    },
    {
        path:'terms-and-conditions',
        Component: TermsAndConditions
    },
    // {
    //     path: '*',
    //     Component: Erro
    // }
])