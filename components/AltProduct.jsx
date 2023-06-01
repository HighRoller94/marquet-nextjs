import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import AltProductStyles from '../styles/components/AltProduct.module.scss'
import { motion } from 'framer-motion'
import { ImBin } from 'react-icons/im'
import { useDispatch } from "react-redux";
import { addProduct } from "@/redux/cartSlice";

const AltProduct = ({ name, price, gallery, type, product, setCount, count }) => {
    const priceFixed = (Math.round(price * 100) / 100).toFixed(2);
    const [saved, setSaved] = useState("");
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);

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
            setCount(count+1)
        })

    }

    const handleClick = () => {
        dispatch(addProduct({ ...product, price, quantity }))
        removeProductFromFavourites()
    }

    return (
        <motion.div className={AltProductStyles.product} layout>
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
                <div className={AltProductStyles.iconHolder} onClick={removeProductFromFavourites}>
                    <ImBin className={`${AltProductStyles.favIcon} fill`} />
                </div>
            </div>
            <h1 className="item__name">{name}</h1>
            <p className="item__price">£{priceFixed}</p>
            <button onClick={handleClick}>Move to Cart</button>
        </motion.div>
    )
}

export default AltProduct