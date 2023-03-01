import React from 'react'
import Image from 'next/image'

import TrendingProductStyles from '../styles/components/TrendingProducts.module.scss'

const TrendingProducts = () => {
  return (
    <div className={TrendingProductStyles.trendingProducts}>
      <div className={TrendingProductStyles.trending}>
        <div className={TrendingProductStyles.imageContainer}>
            <Image
                src="/images/trending/vans1.svg"
                fill
                alt="mens"
            />
        </div>
        <h1 class="item__name">VANS Oldskools</h1>
        <p class="item__price" >£65.00</p>
        <button class="add__button">Add to cart</button>
      </div>
      <div className={TrendingProductStyles.trending}>
        <div className={TrendingProductStyles.imageContainer}>
            <Image
                src="/images/trending/converse1.svg"                
                fill
                alt="mens"
            />
        </div>
        <h1 class="item__name">Converse All Stars</h1>
        <p class="item__price">£62.00</p>
        <button class="add__button">Add to cart</button>
      </div>
      <div className={TrendingProductStyles.trending}>
        <div className={TrendingProductStyles.imageContainer}>
            <Image
                src="/images/trending/vanscoat1.svg"                
                fill
                alt="mens"
            />
        </div>
        <h1 class="item__name">Drill chore coat</h1>
        <p class="item__price">£59.99</p>
        <button class="add__button">Add to cart</button>
      </div>
      <div className={TrendingProductStyles.trending}>
        <div className={TrendingProductStyles.imageContainer}>
            <Image
                src="/images/trending/vansshirt1.svg"                
                fill
                alt="mens"
            />
        </div>
        <h1 class="item__name">Time off stripe shirt</h1>
        <p class="item__price">£32.00</p>
        <button class="add__button">Add to cart</button>
      </div>
    </div>
  )
}

export default TrendingProducts