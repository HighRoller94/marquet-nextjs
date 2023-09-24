import React from "react";
import BasketProduct from "./BasketProduct";

const BasketProductList = ({ products, paramQuery }) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 sm:gap-8 sm:my-10 gap-3">
      {products?.map((product, i) => (
        <div key={i}>
          <BasketProduct
            paramQuery={paramQuery}
            selectedSize={product.sizeSelected}
            quantity={product.quantity}
            id={product._id}
            product={product}
            index={i}
            name={product.name}
            mainImage={product.mainImage}
            type={product.type}
            price={product.price}
            gallery={product.gallery}
          />
        </div>
      ))}
    </div>
  );
};

export default BasketProductList;
