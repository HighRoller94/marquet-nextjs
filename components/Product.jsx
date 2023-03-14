import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import ProductStyles from '../styles/components/Product.module.scss'
import { AiOutlineEye } from 'react-icons/ai'
import { HiHeart, HiOutlineHeart } from 'react-icons/hi'

const Product = ({ name, price, gallery, type, product }) => {
  const priceFixed = (Math.round(price * 100) / 100).toFixed(2);
  const [saved, setSaved] = useState("");
  
  const saveProductToFavourites = () =>  {
    const savedProducts = JSON.parse(localStorage.getItem('savedProducts'));
    localStorage.setItem(`savedProducts`, JSON.stringify([...savedProducts, product]));
    setSaved(true);
  }

  const removeProductFromFavourites = () => {
    const savedProducts = JSON.parse(localStorage.getItem('savedProducts'));
    savedProducts.forEach(savedProduct => {
        if (savedProduct._id === product._id) {
            const index = savedProducts.indexOf(savedProduct)
            if (index > -1) {
                savedProducts.splice(index, 1)
                localStorage.setItem(`savedProducts`, JSON.stringify(savedProducts));;
            }
            setSaved(false);
        }
    })
  }

  useEffect(() => {
    if (localStorage.getItem("savedProducts") === null) {
      let products = []
      localStorage.setItem(`savedProducts`, JSON.stringify(products));
    }
  }, []);

  return (
    <div className={ProductStyles.product}>
        <div className={ProductStyles.imageContainer}>
            <Link href={`/product/${product._id}`}>
              <Image
                src={gallery[0]}
                fill
                loading="lazy"
                alt={name}
              />
            </Link>
            <button className={ProductStyles.lookButton}>
              <AiOutlineEye className={ProductStyles.icon} />
              Shop the Look
            </button>
            {saved ? (
              <HiHeart className={`${ProductStyles.favIcon} fill`} onClick={removeProductFromFavourites} />
            ) : (
              <HiOutlineHeart className={ProductStyles.favIcon} onClick={saveProductToFavourites} />
            )}
        </div>
        <h1 class="item__name">{name}</h1>
        <p class="item__price">£{priceFixed}</p>
    </div>
  )
}

export default Product