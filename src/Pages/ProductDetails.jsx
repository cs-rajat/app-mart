import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useProducts from "../hooks/useProducts";
import { Download, Star, MessageSquare } from "lucide-react";
import { isProductInstalled, installProduct } from "../utils/localStorageUtils";

const ProductDetails = () => {
  const { id } = useParams();
  const {  products } = useProducts()

  const app = products.find((p) => p.id.toString() === id);

  const [isInstalled, setIsInstalled] = useState(false);

  
  useEffect(() => {
    if (app) setIsInstalled(isProductInstalled(app.id));
  }, [app]);


  const handleInstall = () => {
    installProduct(app);
    setIsInstalled(true);
  };

  if (!app) {
    return <p className="text-center py-12">Product not found.</p>;
  }

  const totalRatings = app.ratings.reduce((sum, r) => sum + r.count, 0);

  return (
    <div className="max-w-11/12 mx-auto py-12 px-6">
      <div className="p-8 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all">
       
        <div className="flex items-center gap-8 mb-8">
          <img
            src={app.image}
            onError={(e) => (e.currentTarget.src = app.imageFallback)}
            alt={app.imageAlt}
            className="w-28 h-28 rounded-2xl bg-gray-50 p-3 shadow"
          />
          <div>
            <h2 className="text-xl font-semibold">{app.title}</h2>
            <p className="text-sm text-gray-500 mb-4">
              Developed by{" "}
              <span className="text-indigo-600 font-medium">
                {app.companyName}
              </span>
            </p>

            <div className="flex flex-wrap items-center gap-6 text-gray-700">
              <div className="flex items-center gap-2">
                <Download className="w-5 h-5 text-green-600" />
                <div>
                  <p className="font-bold">
                    {(app.downloads / 1000000).toFixed(1)}M
                  </p>
                  <p className="text-xs text-gray-500">Downloads</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                <div>
                  <p className="font-bold">{app.ratingAvg}</p>
                  <p className="text-xs text-gray-500">Average Rating</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-purple-500" />
                <div>
                  <p className="font-bold">
                    {(app.reviews / 1000).toFixed(0)}K
                  </p>
                  <p className="text-xs text-gray-500">Total Reviews</p>
                </div>
              </div>
            </div>

           
            <button
              onClick={handleInstall}
              disabled={isInstalled}
              className={`mt-6 text-white text-sm px-5 py-2 rounded-lg shadow ${
                isInstalled
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-green-600 hover:bg-green-700"
              }`}
            >
              {isInstalled ? "Installed" : `Install Now (${app.size} MB)`}
            </button>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-md font-semibold mb-3">Ratings</h3>
          {app.ratings
            .slice()
            .reverse()
            .map((rate) => (
              <div key={rate.name} className="flex items-center mb-2">
                <span className="w-16 text-sm text-gray-600">{rate.name}</span>
                <div className="flex-1 bg-gray-200 h-3 rounded-full overflow-hidden">
                  <div
                    className="bg-orange-500 h-3"
                    style={{ width: `${(rate.count / totalRatings) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
        </div>

    
        <p className="text-gray-700 text-sm leading-relaxed">
          {app.description}
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;
