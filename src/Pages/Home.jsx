import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from '../Components/ProductCard';

const Home = () => {
    const products = useLoaderData()
    console.log(products)
    return (
        <div className='grid grid-cols-4 gap-5 '>
            
            {
                products.map(product=><ProductCard product={product}></ProductCard>)
            }
        </div>
    );
};

export default Home;