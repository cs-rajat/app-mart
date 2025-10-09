import React from "react";
import downIcon from "../assets/icon-downloads.png";
import ratIcon from "../assets/icon-ratings.png";

const ProductCard = ({ product }) => {
  const { title, image, downloads, ratingAvg } = product;
  return (
    <div
      className="card p-5 rounded-md flex flex-col gap-2 shadow-xs bg-white 
    transition-all duration-300 hover:shadow-lg hover:-translate-y-3 cursor-pointer"
    >
      <img
        className="bg-gray-300 p-3 rounded-md"
        src={image}
        alt={product.imageAlt}
        onError={(e) => (e.currentTarget.src = product.imageFallback)}
      />

      <h1 className="font-semibold">{title}</h1>

      <div className="flex justify-between">
        <p className="flex btn text-green-500">
          <img className="w-5" src={downIcon} alt="downloads" />
          {downloads}
        </p>
        <p className="flex btn text-yellow-500">
          <img className="w-5" src={ratIcon} alt="rating" />
          {ratingAvg}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
