import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../pages/shared/Navbar/Navbar';
import Footer from '../pages/shared/Footer/Footer';

const Root = () => {
    return (
        <div className="min-h-screen w-full bg-gradient-to-bl from-white via-indigo-50 to-indigo-100 text-gray-900">
            <Navbar />
            <div className="min-h-screen">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};


export default Root;