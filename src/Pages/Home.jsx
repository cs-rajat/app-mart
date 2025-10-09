import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from '../Components/ProductCard';

const Home = () => {
    const products = useLoaderData()
    console.log(products)
    return (
       <section className='bg-gray-100'>
         <div className='max-w-11/12 mx-auto py-10'>
            <div className='text-center  space-y-2'>
                <h1 className='text-3xl font-bold'>Trending Apps</h1>
                <p className='text-gray-500'>Explore All Trending Apps on the Market developed by us</p>
            </div>
             <div className='grid grid-cols-4 gap-10 mt-10'>
            
            {
                products.map(product=><ProductCard product={product}></ProductCard>)
            }
              </div>
        </div>
       
       </section>
    );
};

export default Home;