import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router-dom';
import Hero from '../Components/Hero';

const MainLayouts = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar/>
            <Hero/>
            <div className='flex-1'>
               <Outlet/>
            </div>
            
            <Footer/>
        </div>
    );
};

export default MainLayouts;