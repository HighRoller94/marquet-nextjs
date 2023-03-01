import React from 'react'
import Image from 'next/image'

import CollectionBannerStyles from '../styles/components/CollectionBanner.module.scss'

const CollectionBanner = () => {
  return (
    <div className={CollectionBannerStyles.banner}>
        <div className={CollectionBannerStyles.imageContainer}>
          <Image 
            src="/images/banner.svg"
            fill
            alt="Banner"
          />
        </div>
        <div className={CollectionBannerStyles.bannerInfo}>
          <h1>2022 spring collection</h1>
          <p>Shop Now</p>
        </div>
    </div>
  )
}

export default CollectionBanner