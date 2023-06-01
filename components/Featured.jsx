import React from 'react'
import Image from 'next/image'

import { AiFillEye } from 'react-icons/ai'
import FeaturedStyles from '../styles/components/Featured.module.scss'

const Featured = () => {
  return (
    <div className={FeaturedStyles.container}>
        <div className={FeaturedStyles.wrapper}>
            <div className={FeaturedStyles.imageContainer}>
                <Image
                    src="/images/vans-bg.svg"
                    alt="Vans" 
                    fill
                />
            </div>
            <div className={FeaturedStyles.iconContainer}>
                <AiFillEye className={FeaturedStyles.icon}/>
            </div>
            <div>
                <h1>Vans</h1>
            </div>
        </div>
        <div className={FeaturedStyles.wrapper}>
            <div className={FeaturedStyles.imageContainer}>
                <Image
                    src="/images/nike-bg.svg"
                    alt="Vans" 
                    fill
                />
            </div>
            <div className={FeaturedStyles.iconContainer}>
                <AiFillEye className={FeaturedStyles.icon}/>
            </div>
            <div>
                <h1>Nike</h1>
            </div>
        </div>
        <div className={FeaturedStyles.wrapper}>
            <div className={FeaturedStyles.imageContainer}>
                <Image
                    src="/images/converse-bg.svg"
                    alt="Vans" 
                    fill
                />
            </div>
            <div className={FeaturedStyles.iconContainer}>
                <AiFillEye className={FeaturedStyles.icon}/>
            </div>
            <div>
                <h1>Converse</h1>
            </div>
        </div>
    </div>
    
  )
}

export default Featured