import React from 'react'
import Product from './Product'

import ProductListStyles from '../styles/components/ProductList.module.scss'

const ProductList = ({ products, paramQuery }) => {
  return (
    <div className={ProductListStyles.productList}>
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