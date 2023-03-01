import React from 'react'
import Image from 'next/image'

import LatestArrivalStyles from '../styles/components/LatestArrivals.module.scss'

const LatestArrivals = () => {
  return (
    <div className={LatestArrivalStyles.latest}>
      <div className={LatestArrivalStyles.product}>
        <div className={LatestArrivalStyles.imageContainer}>
            <Image
                src="/images/latest/nike1.svg"
                fill
                alt="mens"
            />
        </div>
        <div className={LatestArrivalStyles.productInfo}>
          <h1 class="item__name">Womens Lightweight Jacket</h1>
          <p class="item__price">£94.95</p>
          <button class="add__button">Add to cart</button>
        </div>
      </div>
      <div className={LatestArrivalStyles.product}>
        <div className={LatestArrivalStyles.imageContainer}>
            <Image
                src="/images/latest/niketrainers1.svg"                
                fill
                alt="mens"
            />
        </div>     
        <div className={LatestArrivalStyles.productInfo}>
          <h1 class="item__name">Nike Air Pegasus 39</h1>
          <p class="item__price">£32.00</p>
          <button class="add__button">Add to cart</button>
        </div>
      </div>
      <div className={LatestArrivalStyles.product}>
        <div className={LatestArrivalStyles.imageContainer}>
            <Image
                src="/images/latest/vans1.svg"                
                fill
                alt="mens"
            />
        </div>
        <div className={LatestArrivalStyles.productInfo}>
          <h1 class="item__name">VANS Classic Tee</h1>
          <p class="item__price" >£65.00</p>
          <button class="add__button">Add to cart</button>
        </div>
      </div>
      <div className={LatestArrivalStyles.product}>
        <div className={LatestArrivalStyles.imageContainer}>
            <Image
                src="/images/latest/nikestrack1.svg"                
                fill
                alt="mens"
            />
        </div>    
        <div className={LatestArrivalStyles.productInfo}>
          <h1 class="item__name">Nike Mens Tracksuit</h1>
          <p class="item__price">£69.95</p>
          <button class="add__button">Add to cart</button>
        </div>    

      </div>
      
      <div className={LatestArrivalStyles.product}>
        <div className={LatestArrivalStyles.imageContainer}>
            <Image
                src="/images/latest/vans4.svg"                
                fill
                alt="mens"
            />
        </div>      
        <div className={LatestArrivalStyles.productInfo}>
          <h1 class="item__name">Vans Pullover Hoodie</h1>
          <p class="item__price" >£55.00</p>
          <button class="add__button">Add to cart</button>
        </div>  
      </div>
      <div className={LatestArrivalStyles.product}>
        <div className={LatestArrivalStyles.imageContainer}>
            <Image
                src="/images/latest/chuck1.svg"                
                fill
                alt="mens"
            />
        </div>    
        <div className={LatestArrivalStyles.productInfo}>
          <h1 class="item__name">Chuck 70 Paisley Patchwork</h1>
          <p class="item__price">£99.99</p>
          <button class="add__button">Add to cart</button>
        </div>  
      </div>
      <div className={LatestArrivalStyles.product}>
        <div className={LatestArrivalStyles.imageContainer}>
            <Image
                src="/images/latest/trench1.svg"                
                fill
                alt="mens"
            />
        </div>     
        <div className={LatestArrivalStyles.productInfo}>
          <h1 class="item__name">3-in-1 Trench Coat</h1>
          <p class="item__price">£120.00</p>
          <button class="add__button">Add to cart</button>
        </div> 
      </div>
      <div className={LatestArrivalStyles.product}>
        <div className={LatestArrivalStyles.imageContainer}>
            <Image
                src="/images/latest/tee1.svg"                
                fill
                alt="mens"
            />
        </div>        
        <div className={LatestArrivalStyles.productInfo}>
          <h1 class="item__name">Unity Jersey T Shirt</h1>
          <p class="item__price">£9.99</p>
          <button class="add__button">Add to cart</button>
        </div>
      </div>
    </div>
  )
}

export default LatestArrivals