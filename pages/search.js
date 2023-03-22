import React, { useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

export default function Search({ productList }) {
    const router = useRouter()
    console.log(productList)

    useEffect(() => {

    }, [])

    return (
        <div>search</div>
    )
}

export const getServerSideProps = async (context) => {
    const id = context.query;
    const value = Object.values(id)[0];
    const res = await axios.get(`http://localhost:3000/api/search/${value}`);
    return {
      props : {
        productList:res.data,
      }
    }
  }