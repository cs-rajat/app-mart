import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet, useLocation } from 'react-router-dom';
import Hero from '../Components/Hero';
import { ToastContainer } from 'react-toastify';
import useProducts from '../hooks/useProducts';
import Spinner from '../Components/Spinner';

const MainLayouts = () => {
  const location = useLocation();
  const { loading } = useProducts();
  const isHomePage = location.pathname === "/";

  
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    if (isHomePage) {
      setShowSpinner(true);

      const timer = setTimeout(() => {
        if (!loading) setShowSpinner(false);
      }, 300); 

      return () => clearTimeout(timer);
    } else {
      setShowSpinner(false);
    }
  }, [location.pathname, loading, isHomePage]);

  if (showSpinner) {
    return (
      <div className="flex items-center justify-center h-screen w-screen">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {isHomePage && <Hero />}
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default MainLayouts;
