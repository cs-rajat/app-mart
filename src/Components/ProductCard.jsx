import React from "react";
import { useNavigate } from "react-router-dom";
import downIcon from "../assets/icon-downloads.png";
import ratIcon from "../assets/icon-ratings.png";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };

  const { title, image, downloads, ratingAvg, imageAlt, imageFallback } = product;

  const formatDownloads = (num) => {
    if (num >= 1_000_000) {
      return (num / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
    } else if (num >= 1_000) {
      return (num / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
    } else {
      return num;
    }
  };

  return (
    <div
      onClick={handleClick}
      className="card p-5 rounded-md flex flex-col gap-2 shadow-xs bg-white 
      transition-all duration-300 hover:shadow-lg hover:-translate-y-3 cursor-pointer"
    >
      <img
        className="bg-gray-300 p-3 rounded-md"
        src={image}
        alt={imageAlt}
        onError={(e) => (e.currentTarget.src = imageFallback)}
      />

      <h1 className="font-semibold">{title}</h1>

      <div className="flex justify-between">
        <p className="flex items-center gap-1 text-green-500">
          <img className="w-5" src={downIcon} alt="downloads" />
          {formatDownloads(downloads)}
        </p>
        <p className="flex items-center gap-1 text-yellow-500">
          <img className="w-5" src={ratIcon} alt="rating" />
          {ratingAvg}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
