import React from 'react'

import SingleResult from './SingleResult'
import SearchStyles from '../../styles/components/Search.module.scss'

const SearchResults = ({ results }) => {
    
    return (
        <>
            <div className={SearchStyles.resultsList}>
                {results.map((result, i) => {
                    return <SingleResult key={i} name={result.name} />;
                })}
            </div>
        </>

    )
}

export default SearchResults