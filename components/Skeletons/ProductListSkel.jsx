import React from 'react'
import ProductSkel from './ProductSkel'

const ProductListSkel = () => {

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 sm:my-10 gap-3" >
        {[...Array(8).keys()].map((i)=> (
          <ProductSkel key={i}
          />
        ))}
      </div>
  )
}

export default ProductListSkel