import CheckoutProduct from "./CheckoutProduct";

const CheckoutProductList = ({ products, paramQuery }) => {
  return (
    <div className="flex flex-col sm:gap-8  gap-1">
      {products?.map((product, i) => (
        <CheckoutProduct
          paramQuery={paramQuery}
          selectedSize={product.sizeSelected}
          key={product.name}
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
      ))}
    </div>
  );
};

export default CheckoutProductList;
