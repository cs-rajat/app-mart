import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../Components/ProductCard';
import useProducts from '../hooks/useProducts';

const Home = () => {
    const { loading, error, products } = useProducts()
    console.log(products,loading,error)
    const futuresProduct = products.slice(0,8)
    return (
        <>
       
       <section className='bg-gray-100'>
         <div className='max-w-11/12 mx-auto py-10'>
            <div className='text-center  space-y-2'>
                <h1 className='text-4xl font-extraboldbold'>Trending Apps</h1>
                <p className='text-gray-500'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='grid md:grid-cols-4 gap-10 mt-10'>
            
            {
                futuresProduct.map(product=><ProductCard key={product.id}  product={product}></ProductCard>)
            }
            </div>
              <div className='text-center pt-10'>
                <Link className='btn btn-outline  bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] text-white' to='/products'>
                 See More
                </Link>
              </div>
        </div>
       
       </section>
      
        </>
    
    );
};

export default Home;