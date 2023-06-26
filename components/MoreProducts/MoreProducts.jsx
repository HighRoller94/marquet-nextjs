import React from "react";

import Product from "../Product";
import { getProductsByBrand } from "@/lib/prisma/products";

const MoreProducts = async ({ brand }) => {
  const param = brand;
  const products = await getProductsByBrand(param);

  console.log(products)
  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-semibold">
          More from <span className="font-bold capitalize">{brand}</span>
        </h1>
      </div>
      <div className="flex flex-col sm:grid grid-cols-2 lg:grid-cols-4 sm:gap-8 mt-4" >
        {products.products.slice(0, 4).map((product, i) => (
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
