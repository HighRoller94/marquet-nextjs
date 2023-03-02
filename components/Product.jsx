import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import ProductStyles from '../styles/components/Product.module.scss'
import { AiOutlineEye } from 'react-icons/ai'
import { addProduct } from '@/redux/cartSlice'

const Product = ({ name, price, gallery, type, product }) => {
  const priceFixed = (Math.round(price * 100) / 100).toFixed(2);
  
  return (
    <div className={ProductStyles.product}>
        <Link href={`/product/${product._id}`}>
          <div className={ProductStyles.imageContainer}>
              <Image
                src={gallery[0]}
                fill
                loading="lazy"
                alt={name}
              />
          </div>
        </Link>
        <h1 class="item__name">{name}</h1>
        <p class="item__price">£{priceFixed}</p>
    </div>
  )
}

export default Product