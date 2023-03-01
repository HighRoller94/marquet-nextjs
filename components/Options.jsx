import React from 'react'
import Image from 'next/image'

import OptionsStyles from '../styles/components/Options.module.scss'

const Options = () => {
    
  return (
    <div className={OptionsStyles.options}>
        <div className={OptionsStyles.option}>
            <div className={OptionsStyles.imageContainer}>
                <Image
                    src="/images/mens.svg"
                    fill
                    alt="mens"
                />
            </div>
            <h1>Mens Clothing</h1>
        </div>
        <div className={OptionsStyles.option}>
            <div className={OptionsStyles.imageContainer}>
                <Image
                    src="/images/womensFootwear.svg"
                    fill
                    alt="womensFootwear"
                />
            </div>
            <h1>Womens Footwear</h1>
        </div>
        <div className={OptionsStyles.option}>
            <div className={OptionsStyles.imageContainer}>
                <Image
                    src="/images/accessories.svg"
                    fill
                    alt="accessories"
                />
            </div>
            <h1>Accessories</h1>
        </div>
    </div>
  )
}

export default Options