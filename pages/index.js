import React from 'react'
import Head from 'next/head'
import { motion } from "framer-motion";

import SaleBanner from '@/components/SaleBanner'
import Carousel from '@/components/Carousel'
import Divider from '@/components/Divider'
import Options from '@/components/Options'
import Newsletter from '@/components/Newsletter'
import Misc from '@/components/Misc'
import Featured from '@/components/Featured'
import Slider from '@/components/Slider'
import HomeHeader from '@/components/HomeHeader'

import LayoutStyles from '../styles/layout/Layout.module.scss'

export default function Home() {

  return (
      <motion.div className={LayoutStyles.page}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Head>
          <title>Marquet | Home</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/MarquetLogo.ico" />
        </Head>

        <HomeHeader
          header="Sale on Now"
          body="Exclusive top brands at the best prices, only at Marquet"
        />

        <Carousel />
        <SaleBanner />
        <Options />
        <Misc />
        <Divider
          heading="our top exclusives"
          text="latest additions to marquet"
        />
        <Featured />
        <Slider />
        <Newsletter />
      </motion.div>
  )
}

