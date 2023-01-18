import { useRef } from "react";
import { fetchCharacterDataList } from "lib/utils";

const SearchBar = ({ placeholder, setter }) => {
  let input = useRef("");

  const handleClick = async (e) => {
    e.preventDefault();
    let value = input.current.value;

    let heroes = await fetchCharacterDataList(value);
    setter(heroes);
  };

  return (
    <form className="flex flex-col">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          ref={input}
          type="search"
          id="search"
          className="block w-full p-4 pl-10 text-sm text-gray-900 rounded-lg focus:ring-red-700 focus:border-red-700"
          placeholder={placeholder}
          required
        />
        <button
          onClick={handleClick}
          className="text-white absolute right-2.5 bottom-2.5 bg-zinc-900 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
