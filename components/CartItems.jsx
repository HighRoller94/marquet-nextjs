import React from 'react'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'

const CartItems = () => {
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart)
    console.log(cart)
    return (
        <div>
            {cart.products.map((product, i) => (
                <div>
                    <h1>{product.name}</h1>
                    <h1>{product.price}</h1>
                </div>
            ))}
        </div>
    )
}

export default CartItems