import React, { useState } from 'react'

import { useRouter } from 'next/router'

import { HiOutlineSearch } from 'react-icons/hi'

import SearchStyles from '../../styles/components/Search.module.scss';

const Searchbar = ({ setResults }) => {
  const router = useRouter()
  const [input, setInput] = useState("")
  const [query, setQuery] = useState('');
  
  const fetchData = (value) => {
    fetch("http://localhost:3000/api/products")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
          );
        });
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  const searchMarquet = (e) => {
    let str = input;
    e.preventDefault()
    let cleanStr = str.replace(/\s/g, "+")
    console.log(cleanStr)
    router.push(`/search?=${cleanStr}`)
    setInput("")
    setResults("")
  }

  return (
    <>
      <form onSubmit={searchMarquet} className={SearchStyles.searchWrapper}>
        <HiOutlineSearch className={SearchStyles.searchIcon} />
        <input
          type="text"
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
        <div className={SearchStyles.overlay}></div>
      </form>

    </>
  )
}

export default Searchbar