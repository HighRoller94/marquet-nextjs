import React, { useState } from "react";
import SearchResults from "./SearchResults";
import Searchbar from "./Searchbar";
import { useRouter } from "next/navigation";
import Link from "next/link";
import SearchStyles from "../../styles/components/Search.module.scss";
import { RiSearchLine } from "react-icons/ri";

const Search = ({
  handleFocus,
  handleBlur,
  handleMobSearchOpen,
  overlay,
  searchOpen,
  setSearchOpen,
  isFocused,
  setIsFocused,
  handleMobSearchClose,
}) => {
  const [results, setResults] = useState([]);
  const [input, setInput] = useState("");
  const router = useRouter();

  const pushUrl = (url) => {
    console.log(url);
    const path = `/search?q=${url}`
    router.push(path);
  };

  return (
    <>
      <span
        className={SearchStyles.searchIcon}
        onClick={!searchOpen ? handleMobSearchOpen : handleMobSearchClose}
      >
        <RiSearchLine className={SearchStyles.navIcon} />
      </span>
      <div
        className={
          !searchOpen
            ? SearchStyles.searchContainer
            : `${SearchStyles.searchContainer} ${SearchStyles.searchOpen}`
        }
      >
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

        {results.length <= 0 && isFocused && (
          <div className="absolute flex justify-start flex-col w-full pb-2 bg-white top-14 md:top-16 lg:w-[305px] lg:ml-2 lg:top-14">
            <p className=" text-neutral-900 uppercase tracking-widest text-xs font-bold px-3 pt-3">
              Suggested Search
            </p>
            <ul className="flex flex-col w-full mt-1">
              <Link href={`/search?q=vans`}>
                <li className="text-sm p-2 px-3 cursor-pointer hover:bg-neutral-100 w-full">
                  vans
                </li>
              </Link>
              <li
                className="text-sm p-2 px-3 cursor-pointer hover:bg-neutral-100 w-full"
                onClick={() => pushUrl("tee")}
              >
                tee
              </li>
            </ul>
          </div>
        )}

        {results && (
          <SearchResults
            handleMobSearchClose={handleMobSearchClose}
            setInput={setInput}
            setResults={setResults}
            results={results}
          />
        )}
      </div>
    </>
  );
};

export default Search;
