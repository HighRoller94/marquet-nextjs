import React, { useState } from 'react'
import SearchResults from './SearchResults'
import Searchbar from './Searchbar'

import SearchStyles from '../../styles/components/Search.module.scss'

const Search = () => {
    const [results, setResults] = useState([]);

    return (
        
            <div className={SearchStyles.searchContainer}>
                <Searchbar setResults={setResults} />
                {results && <SearchResults results={results} /> }
            </div>

    )
}

export default Search