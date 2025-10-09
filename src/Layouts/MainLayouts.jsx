import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet, useLocation } from 'react-router-dom';
import Hero from '../Components/Hero';
import { ToastContainer } from 'react-toastify';

const MainLayouts = () => {
    const location = useLocation();            
    const isHomePage = location.pathname === "/"; 

    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar/>
            {isHomePage && <Hero/>}

            <div className='flex-1'>
               <Outlet/>
            </div>
            
            <Footer/>
            <ToastContainer />
        </div>
    );
};

export default MainLayouts;
