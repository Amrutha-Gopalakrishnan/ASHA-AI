import React from "react";

const SearchResults = ({ results }) => {
  const handleRedirect = (url) => {
    window.location.href = url;
  };

  return (
    <ul className="list-group mt-3">
      {results.map((result, index) => (
        <li
          key={index}
          className="list-group-item list-group-item-action"
          onClick={() => handleRedirect(result.FirstURL)}
          style={{ cursor: "pointer" }}
        >
          {result.Text}
        </li>
      ))}
    </ul>
  );
};

export default SearchResults;
