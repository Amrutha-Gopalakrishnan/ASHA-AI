import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SearchResults from "./SearchResults";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    if (query.trim() === "") return;

    try {
      const response = await axios.get(
        `https://api.duckduckgo.com/?q=${query}&format=json`
      );
      setResults(response.data.RelatedTopics.slice(0, 5)); // Get top 5 results
    } catch (error) {
      console.error("Error fetching results", error);
    }
  };

  return (
    <div className="mt-3">
      <form onSubmit={handleSearch} className="d-flex justify-content-center align-items-center">
        <input
          type="text"
          className="form-control me-2 w-50 d-flex"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">Search</button>
      </form>

      {/* Display search results */}
      {results.length > 0 && <SearchResults results={results} />}
    </div>
  );
};

export default SearchBar;
