"use client"

import Head from 'next/head'
import { motion } from "framer-motion";

import { useSelector } from 'react-redux'
import Breadcrumbs from '/components/Breadcrumbs';
import AltProducts from '/components/AltProducts'
import { BsBag } from 'react-icons/bs'

import LayoutStyles from '../../../styles/layout/Layout.module.scss'
import BasketStyles from '../../../styles/pages/Basket.module.scss'

const Basket = () => {
  const quantity = useSelector((state) => state.cart.quantity)
  const cart = useSelector((state) => state.cart)

  return (
      <motion.div className={LayoutStyles.page} 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        >
        <Head>
          <title>Marquet | Cart</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/MarquetLogo.ico" />
        </Head>
        <Breadcrumbs />

        <div className={BasketStyles.basketHeader}>
          <BsBag className={BasketStyles.icon} />
          <h1>My Basket</h1>
        </div>
        {!quantity > 0 ? (
          <div>
            <p>There are no items in your basket. Start shopping!</p>
          </div>
        ) : (
          <>
            <AltProducts products={cart.products} />
          </>
        )}

      </motion.div>
  )
}

export default Basket