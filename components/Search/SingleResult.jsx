import React from 'react'
import Link from 'next/link';
import SearchStyles from '../../styles/components/Search.module.scss';

const SingleResult = ({ name, id, setInput}) => {

  return (
      <Link href={`/product/${id}`} >
        <div onClick={() => { setInput("") }} className={SearchStyles.singleResult}>{name}</div>
      </Link>
  )
}

export default SingleResult