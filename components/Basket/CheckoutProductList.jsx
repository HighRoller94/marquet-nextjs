import CheckoutProduct from "./CheckoutProduct";

const CheckoutProductList = ({ products, paramQuery }) => {
  return (
    <div className="flex flex-col sm:gap-8  gap-1">
      {products?.map((product, i) => (
        <div key={i}>
          <CheckoutProduct
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

export default CheckoutProductList;
