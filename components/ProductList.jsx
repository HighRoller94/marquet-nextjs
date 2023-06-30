import React from 'react'
import Product from './Product'

const ProductList = ({ products, paramQuery }) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 sm:gap-8 sm:my-10 gap-1" >
        {products?.map((product, i) => (
          <Product
            paramQuery={paramQuery}
            key={product.name}
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
  )
}

export default ProductList