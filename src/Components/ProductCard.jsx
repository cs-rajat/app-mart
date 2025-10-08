import React from 'react';

const ProductCard = ({product}) => {

    const {title,image,downloads,ratingAvg}=product
    return (
        <div className='border p-5 rounded-md flex flex-col gap-2'>
            <img src={image}></img>
            <h1>{title}</h1>
            <div className=' flex justify-between'>
                <p>{downloads}</p>
                <p>{ratingAvg}</p>
            </div>

        </div>
    );
};

export default ProductCard;