import React, { useState } from "react";
import useProducts from "../hooks/useProducts";
import ProductCard from "../Components/ProductCard";

const Products = () => {
  const { products, loading } = useProducts();
  const [search, setSearch] = useState("");
  const term = search.trim().toLocaleLowerCase();
  const searchedProducts = term
    ? products.filter((product) =>
        product.title.toLocaleLowerCase().includes(term)
      )
    : products;
  return (
    <section className="bg-gray-200">
      <div className="max-w-11/12 mx-auto py-10">
        <div className="flex justify-between py-5 items-center">
          <h1 className="text-3xl font-semibold">
            All Products{" "}
            <span className="text-sm text-gray-500">
              ({searchedProducts.length}) Products Found.
            </span>
          </h1>
          <label className="input">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              placeholder="Search Products"
            />
          </label>
        </div>
        <div className="grid md:grid-cols-4 gap-10 mt-10">
          {searchedProducts.map((product) => (
            <ProductCard key={product.id} product={product}></ProductCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
