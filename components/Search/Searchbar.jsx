import React, { useState, useEffect } from 'react'

import { useRouter } from 'next/router'

import { RiSearchLine } from 'react-icons/ri'
import { AiOutlineClose } from 'react-icons/ai'
import SearchStyles from '../../styles/components/Search.module.scss';

const Searchbar = ({ handleMobSearchOpen, handleMobSearchClose , setResults, setInput, input, setSearchOpen, searchOpen, handleBlur, handleFocus, isFocused }) => {
  const router = useRouter()

  const fetchData = (value) => {
    fetch("http://localhost:3000/api/products")
      .then((response) => response.json())
      .then((json) => {
        if (json) {
          const results = json.filter((user) => {
            return (
              value &&
              user &&
              user.name &&
              user.name.toLowerCase().includes(value)
            );
          });
          setResults(results);
        }

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
      setSearchOpen(false)
      handleBlur()
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
          {isFocused ? (
            <AiOutlineClose onClick={handleBlur} className={SearchStyles.searchIconClose} />
          ) : (
            <RiSearchLine onClick={handleFocus} className={SearchStyles.searchIconMain} />
          )}
          {searchOpen ? (
            <AiOutlineClose onClick={handleMobSearchClose} className={SearchStyles.searchIcon} />
          ) : (
            <RiSearchLine className={SearchStyles.searchIcon} />
          )}
          
          <input
            className={SearchStyles.searchInput}
            id="submit"
            type="text"
            value={input}
            onFocus={handleFocus}
            onChange={(e) => handleChange(e.target.value)}
          />
        </div>
      </form>

    </>
  )
}

export default Searchbar