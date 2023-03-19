import React, { useState } from "react";
import * as actions from "../Books/redux/actions";
import { useDispatch } from "react-redux";

const Search = () => {
  const [searchedBook, setSearchedBook] = useState(null);
  const dispatch = useDispatch();

  const onSearch = () => {
    const params = {
      title: searchedBook,
    };
    searchedBook
      ? dispatch(actions.getBooks(params))
      : console.log("Please, add an author or book title");
  };

  const onKeyDown = event => {
      if (event.key === 'Enter') {
        event.preventDefault();
        event.stopPropagation();
        onSearch();
      }
  }
  

  return (
    <form className="w-full max-w-sm">
      <div className="flex items-center border-b border-teal-500 py-2">
        <input
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchedBook(e.target.value)}
          onKeyDown={onKeyDown}
        />
        <button
          className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
          type="button"
          onClick={onSearch}
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default Search;
