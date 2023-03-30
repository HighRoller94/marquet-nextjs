import React from 'react'

import SingleResult from './SingleResult'
import SearchStyles from '../../styles/components/Search.module.scss'

const SearchResults = ({ handleMobSearchClose, results, setResults, setInput }) => {

    const handleClick = (e) => {
        document.getElementById("submit").value = ''
        setResults("")
    }

    return (
        <>
            <div className={SearchStyles.resultsList} onClick={handleClick}>
                {results?.map((result, i) => {
                    return <SingleResult handleMobSearchClose={handleMobSearchClose} setInput={setInput} handleClick={handleClick} key={i} name={result.name} id={result._id} />;
                })}
            </div>
        </>
    )
}

export default SearchResults