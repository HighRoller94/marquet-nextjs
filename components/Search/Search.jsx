import React, { useState } from 'react'
import SearchResults from './SearchResults'
import Searchbar from './Searchbar'

import SearchStyles from '../../styles/components/Search.module.scss'

const Search = () => {
    const [results, setResults] = useState([]);
    const [input, setInput] = useState("")

    return (
            <div className={SearchStyles.searchContainer}>
                <Searchbar input={input} setInput={setInput} setResults={setResults} />
                {results && <SearchResults setInput={setInput} setResults={setResults} results={results} /> }
            </div>
    )
}

export default Search