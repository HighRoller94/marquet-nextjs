import React from "react";

import SingleResult from "./SingleResult";
import SearchStyles from "../../styles/components/Search.module.scss";

const SearchResults = ({
  handleMobSearchClose,
  results,
  setResults,
  setInput,
}) => {
  const handleClick = (e) => {
    document.getElementById("submit").value = "";
    setResults("");
  };

  return (
    <>
      <div className="absolute top-14 overflow-hidden flex flex-col w-full z-auto bg-white md:top-16 lg:w-[305px] lg:ml-2 lg:top-14" onClick={handleClick}>
        {results?.map((result, i) => {
          return (
            <SingleResult
              handleMobSearchClose={handleMobSearchClose}
              setInput={setInput}
              handleClick={handleClick}
              key={i}
              name={result.name}
              id={result.id}
            />
          );
        })}
      </div>
    </>
  );
};

export default SearchResults;
