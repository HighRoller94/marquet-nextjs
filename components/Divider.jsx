import React from 'react'

import DividerStyles from '../styles/components/Divider.module.scss'

const Divider = ({ heading, text}) => {
  return (
    <div className={DividerStyles.divider}>
        <h2>{heading}</h2>
        <p>{text}</p>
        <span></span>
    </div>
  )
}

export default Divider