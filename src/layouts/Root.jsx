import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../pages/shared/Navbar/Navbar';
import Footer from '../pages/shared/Footer/Footer';

const Root = () => {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-[#0d1117c6] via-[#0d11174a] to-[#0d1117e3] text-[#F3F4F6]">
            <Navbar></Navbar>
            <div className='min-h-screen'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;