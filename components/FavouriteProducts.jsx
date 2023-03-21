import React, { useEffect, useState } from 'react'
import FavouriteProduct from './FavouriteProduct';

import FavouriteListStyles from '../styles/components/FavouriteList.module.scss'

const FavouriteProducts = () => {
    const [products, setProducts] = useState();

    const getUserSavedProducts = () => {
        const savedProducts = JSON.parse(localStorage.getItem('savedProducts'));
        setProducts(savedProducts);
    }

    useEffect(() => {
        getUserSavedProducts();
    }, []);

    return (
        <div className={FavouriteListStyles.productList}>
            {products ? (
                products.map((product, i) => (
                    <FavouriteProduct
                        key={product.name}
                        id={product._id}
                        product={product}
                        index={i}
                        name={product.name}
                        mainImage={product.mainImage}
                        type={product.type}
                        price={product.price}
                        gallery={product.gallery}
                    />
                ))
            ) : (
                <div>
                    <p>You have no items saved.</p>
                </div>
            )}

        </div>
    )
}

export default FavouriteProducts