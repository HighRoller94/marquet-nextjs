import React from 'react'

import FavouriteStyles from '../styles/pages/Favourites.module.scss'
import FavouriteProducts from '@/components/FavouriteProducts'
import { Breadcrumbs } from '@mui/material'
import { HiHeart } from 'react-icons/hi'

const Favourites = () => {
  return (
    <div className={FavouriteStyles.favouritesPage}>
        <Breadcrumbs />
        <div className={FavouriteStyles.favouritesHeader}>
          <HiHeart className={FavouriteStyles.icon}/>
          <h1>Saved Items</h1>
        </div>
        <div>
          <FavouriteProducts />
        </div>

    </div> 
  )
}

export default Favourites