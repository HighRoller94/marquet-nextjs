import { useRouter } from "next/navigation";

import { RiSearchLine } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

const Searchbar = ({
  handleMobSearchOpen,
  handleMobSearchClose,
  setResults,
  setInput,
  input,
  setSearchOpen,
  searchOpen,
  handleBlur,
  handleFocus,
  isFocused,
}) => {
  const router = useRouter();

  const fetchData = (value) => {
    fetch("/api/products")
      .then((response) => response.json())
      .then((json) => {
        if (json) {
          const results = json.products.filter((product) => {
            return (
              value &&
              product &&
              product.name &&
              product.name.toLowerCase().includes(value)
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
    if (input !== "") {
      let str = input;
      e.preventDefault();
      let cleanStr = str.replace(/\s/g, "+");
      setInput("");
      setResults([]);
      setSearchOpen(false);
      handleBlur();
      document.getElementById("submit").blur();
      router.push(`/search?q=${cleanStr}`);
    } else {
      e.preventDefault();
      return;
    }
  };

  return (
    <form onSubmit={searchMarquet} className="w-full border-none">
      <div className="flex lg:min-w-[300px]  md:w-[98%] relative p-1 items-center bg-white mx-2 py-2 rounded-full outline-none l g:flex-row lg:p-2  lg:border lg:b-2 lg:rounded-full">
        <RiSearchLine
          onClick={handleMobSearchClose}
          size={20}
          className="text-neutral-300 ml-2 mr-2 md:mr-4 cursor-pointer hover:text-neutral-400 lg:mr-0"
        />

        <input
          className={` p-1 ml-2 text-sm w-full md:w-[98%] h-[20px] outline-none border-none lg:w-fit ring-1 ring-inset  ring-white focus:ring-2 focus:ring-inset focus:ring-white `}
          id="submit"
          type="text"
          autoComplete="off"
          value={input}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
    </form>
  );
};

export default Searchbar;
