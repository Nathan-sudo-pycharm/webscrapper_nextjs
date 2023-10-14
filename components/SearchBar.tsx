"use client";
{
  /* Check   */
}
import React from "react";

const SearchBar = () => {
  const handleSubmit = () => {};
  return (
    <form className="flex flex-wrap gap-4 mt-12" onSubmit={handleSubmit}>
      <input
        type="text"
        className="border-2 border-gray-200 rounded-md px-4 py-2 w-full md:w-1/2"
        placeholder="Enter Product Link"
      />
      <button type="submit" className="searchbar-btn">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
