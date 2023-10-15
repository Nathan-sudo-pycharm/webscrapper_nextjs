"use client";
{
  /* Check   */
}
import { scrapeAndStoreProduct } from "@/lib/actions";
import React, { FormEvent, useState } from "react";
const isValidAmamzonProductURL = (url: string) => {
  try {
    const parsedURL = new URL(url);
    const hostname = parsedURL.hostname;

    //check if hostname contains amazon.com or amazon.in etc

    if (
      hostname.includes("amazon.com") ||
      hostname.includes("amazon.") ||
      hostname.endsWith("amazon")
    ) {
      return true;
    }
  } catch (error) {
    return false;
  }
  return false;
};
const SearchBar = () => {
  const [searchPrompt, setSearchPrompt] = useState("");
  const [isloadig, setIsloading] = useState(false);
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isValidLink = isValidAmamzonProductURL(searchPrompt);
    if (!isValidLink) return alert("Please enter a valid Amazon Link");

    try {
      setIsloading(true);
      // Scrape the first product
      const product = await scrapeAndStoreProduct(searchPrompt);
    } catch (error) {
      console.log(error);
    } finally {
      setIsloading(false);
    }
  };
  return (
    <form className="flex flex-wrap gap-4 mt-12" onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchPrompt}
        onChange={(e) => setSearchPrompt(e.target.value)}
        className="border-2 border-gray-200 rounded-md px-4 py-2 w-full md:w-1/2"
        placeholder="Enter Product Link"
      />
      <button
        type="submit"
        className="searchbar-btn"
        disabled={searchPrompt === ""}
      >
        {isloadig ? "Searching..." : "Search"}
      </button>
    </form>
  );
};

export default SearchBar;
