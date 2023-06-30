import React from "react";

import Product from "../Product";
import { getProductsByBrand } from "@/lib/prisma/products";

const MoreProducts = async ({ product }) => {
  const param = product.brand;
  const products = await getProductsByBrand(param);

  function filterProductById(products, id) {
    return products.filter(product => product.id !== id);
  }

  const filteredProducts = filterProductById(products.products, product.id);

  return (
    <>
      <div className="mb-8">
        <h1 className="text-lg tracking-widest text-neutral-600 font-bold uppercase">
          More from <span>{param}</span>
        </h1>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 sm:gap-8 sm:my-10 gap-1 mt-4" >
        {filteredProducts.slice(0, 4).map((product, i) => (
          <Product
            key={product.name}
            id={product._id}
            product={product}
            index={i}
            name={product.name}
            mainImage={product.mainImage}
            type={product.type}
            price={product.price}
            gallery={product.gallery}
            brand={product.brand}
          />
        ))}
      </div>
    </>
  );
};

export default MoreProducts;
