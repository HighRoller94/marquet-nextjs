import React from 'react'
import { BiChevronDown } from 'react-icons/bi'

import HomeHeaderStyles from '../styles/components/HomeHeader.module.scss'

const HomeHeader = ({ header, body }) => {
  return (
    <div className={HomeHeaderStyles.container}>
        <h1 className={HomeHeaderStyles.header}>{header}</h1>
        <span className={HomeHeaderStyles.body}>{body}</span>
        <BiChevronDown className={HomeHeaderStyles.icon}/>
    </div>
  )
}

export default HomeHeader