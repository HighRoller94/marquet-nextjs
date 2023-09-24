import React, { useState } from "react";
import SearchResults from "./SearchResults";
import Searchbar from "./Searchbar";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { RiSearchFill } from "react-icons/ri";

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
    const path = `/search?q=${url}`;
    router.push(path);
  };

  return (
    <>
      <span onClick={!searchOpen ? handleMobSearchOpen : handleMobSearchClose}>
        <RiSearchFill size={25} className="text-white mr-4 md:mr-2 lg:hidden -mt-0.5" />
      </span>
      <div
        className={`bg-stone-200 w-full h-[64px]  flex flex-col justify-center items start absolute mr-8 outline-none top-12 left-0 py-3 z-50 transition border-none border border-b-2 border-neutral-500 md:top-16 md:w-[101%] lg:flex lg:bg-transparent lg:static lg:w-full ${
-          !searchOpen && `hidden`
        }`}
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
          <div className="absolute flex justify-start flex-col w-full pb-2 bg-white top-16 md:top-16 lg:w-[305px] lg:ml-2 lg:top-16">
            <p className=" text-neutral-600 uppercase tracking-widest text-xs font-bold px-3 pt-3">
              Suggested Search
            </p>
            <ul className="flex flex-col w-full mt-1">
              <Link href={`/search?q=vans`}>
                <li className="text-sm p-2 px-3 cursor-pointer text-neutral-600 hover:bg-neutral-100 w-full hover:text-neutral-800 hover:font-semibold">
                  vans
                </li>
              </Link>
              <li
                className="text-sm p-2 px-3 cursor-pointer text-neutral-600 hover:bg-neutral-100 w-full hover:text-neutral-800 hover:font-semibold"
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
