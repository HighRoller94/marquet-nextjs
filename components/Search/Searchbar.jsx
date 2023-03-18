import React, { useState } from 'react'

import { HiOutlineSearch } from 'react-icons/hi'

import SearchStyles from '../../styles/components/Search.module.scss';

const Searchbar = ({ setResults }) => {
    const [input, setInput] = useState("")

    const fetchData = (value) => {
        fetch("https://jsonplaceholder.typicode.com/users")
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
    

    return (
        <div className={SearchStyles.searchWrapper}>
            <HiOutlineSearch className={SearchStyles.searchIcon}/>
            <input 
                value={input} 
                onChange={(e) => handleChange(e.target.value)}
            />
        </div>
    )
}

export default Searchbar