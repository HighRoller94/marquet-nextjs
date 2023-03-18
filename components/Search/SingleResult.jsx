import React from 'react'

import SearchStyles from '../../styles/components/Search.module.scss';

const SingleResult = ({ name }) => {
  return (
    <div className={SearchStyles.singleResult}>{name}</div>
  )
}

export default SingleResult