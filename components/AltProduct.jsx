import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import AltProductStyles from '../styles/components/AltProduct.module.scss'

import { AiOutlineEye } from 'react-icons/ai'
import { HiHeart } from 'react-icons/hi'
import { ImBin } from 'react-icons/im'

const AltProduct = ({ name, price, gallery, type, product, setCount, count }) => {
    const priceFixed = (Math.round(price * 100) / 100).toFixed(2);
    const [saved, setSaved] = useState("");

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
        setCount(count+1)
    }

    return (
        <div className={AltProductStyles.product}>
            <div className={AltProductStyles.imageContainer}>
                <Link href={`/product/${product._id}`}>
                    <Image
                        src={gallery[0]}
                        fill
                        loading="lazy"
                        alt={name}
                    />
                    <Image
                        src={gallery[1]}
                        fill
                        loading="lazy"
                        alt={name}
                        className={AltProductStyles.hoverImage}
                    />
                </Link>
                <div className={AltProductStyles.iconHolder}>
                    <ImBin className={`${AltProductStyles.favIcon} fill`} onClick={removeProductFromFavourites} />
                </div>
            </div>
            <h1 className="item__name">{name}</h1>
            <p className="item__price">£{priceFixed}</p>
        </div>
    )
}

export default AltProduct