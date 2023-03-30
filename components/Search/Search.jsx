import React, { useState } from 'react'
import SearchResults from './SearchResults'
import Searchbar from './Searchbar'

import SearchStyles from '../../styles/components/Search.module.scss'
import { RiSearchLine } from 'react-icons/ri'

const Search = ({ handleFocus, handleBlur, handleMobSearchOpen, overlay, searchOpen, setSearchOpen, isFocused, setIsFocused, handleMobSearchClose}) => {
    const [results, setResults] = useState([]);
    const [input, setInput] = useState("")

    return (
        <>
            <span 
                className={SearchStyles.searchIcon} 
                onClick={!searchOpen ? (
                    handleMobSearchOpen
                ) : (
                    handleMobSearchClose
                )}
                >
                <RiSearchLine className={SearchStyles.navIcon} />
            </span>
            <div className={!searchOpen ? (SearchStyles.searchContainer) : (`${SearchStyles.searchContainer} ${SearchStyles.searchOpen}`)}>
                <Searchbar 
                    overlay={overlay} 
                    handleFocus={handleFocus} 
                    handleBlur={handleBlur} 
                    handleMobSearchOpen={handleMobSearchOpen} 
                    handleMobSearchClose={handleMobSearchClose} 
                    searchOpen={searchOpen} 
                    setSearchOpen={setSearchOpen} 
                    input={input} 
                    setInput={setInput} 
                    setResults={setResults} 
                    isFocused={isFocused}
                    setIsFocused={setIsFocused}
                />
                {results && 
                <SearchResults 
                    handleMobSearchClose={handleMobSearchClose} 
                    setInput={setInput} 
                    setResults={setResults} 
                    results={results} 
                />}
            </div>
        </>
    )
}

export default Search