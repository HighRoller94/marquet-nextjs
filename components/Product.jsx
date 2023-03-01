import React from 'react'
import Image from 'next/image'

import ProductStyles from '../styles/components/Product'

import { addProduct } from '@/redux/cartSlice'

const Product = ({ image, name, price }) => {
  return (
    <div className={ProductStyles.product}>
        <div className={ProductStyles.imageContainer}>
            <Image
                src="/images/trending/converse1.svg"                
                fill
                alt="mens"
            />
        </div>
        <h1 class="item__name">{name}</h1>
        <p class="item__price">{price}</p>
        <button class="add__button" onClick={addProduct}>Add to cart</button>
    </div>
  )
}

export default Product