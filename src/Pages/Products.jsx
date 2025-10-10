import React, { useState, useEffect } from "react";
import useProducts from "../hooks/useProducts";
import ProductCard from "../Components/ProductCard";
import errImg from "../assets/App-Error.png";
import Spinner from "../Components/Spinner";

const Products = () => {
  const { products, loading: initialLoading } = useProducts();
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(initialLoading); 

  const term = search.trim().toLowerCase();
  const searchedProducts = term
    ? products.filter((product) =>
        product.title.toLowerCase().includes(term)
      )
    : products;

 
  useEffect(() => {
    if (!initialLoading) {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 300); 
      return () => clearTimeout(timer);
    }
  }, [search, initialLoading]);

  return (
    <section className="bg-gray-200 min-h-screen">
      <div className="max-w-6xl mx-auto py-10 px-5">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-extrabold">Our All Applications</h1>
          <p className="text-gray-500">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>

        <div className="md:flex flex-col md:flex-row space-y-2 md:space-y-0 justify-between py-5 items-center">
          <h1 className="text-3xl font-semibold">
            All Apps{" "}
            <span className="text-sm text-gray-500">
              ({searchedProducts.length}) Apps Found
            </span>
          </h1>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Search Products"
            className="input input-bordered mt-2 md:mt-0"
          />
        </div>

        {loading ? (
          <div className="flex justify-center items-center mt-20">
            <Spinner />
          </div>
        ) : searchedProducts.length > 0 ? (
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10 mt-10">
            {searchedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center space-y-7 mt-10">
            <img className="mx-auto" src={errImg} alt="No apps found" />
            <button
              className="btn btn-primary px-8 py-3 rounded-lg hover:bg-blue-700 transition"
              onClick={() => setSearch("")}
            >
              Show All Apps
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
