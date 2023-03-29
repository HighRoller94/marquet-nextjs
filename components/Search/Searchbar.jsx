import React, { useState, useEffect } from 'react'

import { useRouter } from 'next/router'

import { HiOutlineSearch } from 'react-icons/hi'

import SearchStyles from '../../styles/components/Search.module.scss';

const Searchbar = ({ setResults, setInput, input }) => {
  const router = useRouter()

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
    if (input !== '') {
      let str = input;
      e.preventDefault()
      let cleanStr = str.replace(/\s/g, "+")
      router.push(`/search?=${cleanStr}`)
      setInput("") 
      setResults("")
      document.getElementById("submit").blur();
    } else {
      e.preventDefault()
      return;
    }
  }

  return (
    <>
      <form onSubmit={searchMarquet} className={SearchStyles.searchWrapper}>
        <div className={SearchStyles.searchBoxContainer}>
          <HiOutlineSearch className={SearchStyles.searchIcon} />
          <input
            className={SearchStyles.searchInput}
            id="submit"
            type="text"
            value={input}
            onChange={(e) => handleChange(e.target.value)}
          />
        </div>
        {input != '' && <div className={SearchStyles.overlay}></div>}
      </form>

    </>
  )
}

export default Searchbar