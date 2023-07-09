"use client";

import React, { useEffect, useState } from "react";

import AltProduct from "./AltProduct";

const AltProducts = () => {
  const [products, setProducts] = useState();
  const [count, setCount] = useState(0);

  const getUserSavedProducts = () => {
    const savedProducts = JSON.parse(localStorage.getItem("savedProducts"));
    setProducts(savedProducts);
  };

  useEffect(() => {
    getUserSavedProducts();
  }, [count]);

  return (
    <div className="grid grid-cols-2 sm:grid lg:grid-cols-4 sm:gap-8 sm:my-10">
      {products?.length > 0 ? (
        products.map((product, i) => (
          <AltProduct
            key={product.name}
            id={product._id}
            product={product}
            index={i}
            name={product.name}
            mainImage={product.mainImage}
            type={product.type}
            price={product.price}
            gallery={product.gallery}
            setCount={setCount}
            count={count}
          />
        ))
      ) : (
        <div className="flex items-center justify-center w-screen">
          <p className="flex mx-auto w-screen">You have no saved items. Start shopping!</p>
        </div>
      )}
    </div>
  );
};

export default AltProducts;
