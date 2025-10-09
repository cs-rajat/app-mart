import React from 'react';
import error404 from "../assets/error-404.png"
import { Link } from 'react-router-dom';
const ErrorPage = () => {
    
    return (
        <div className='flex flex-col justify-center items-center h-screen gap-3 p-5'>
          
           <img src={error404} className=''></img>
           <p className='text-gray-500 text-center'>Sorry, the page you are looking for might be removed,renamed,or is temporarily unavailable</p>
           <div className='flex gap-3'>
            <Link to='/' className='btn btn-primary'>Back to Home</Link>
            <Link to="/products" className='btn btn-outline'>Browse Apps</Link>
           </div>
        </div>
    );
};

export default ErrorPage;