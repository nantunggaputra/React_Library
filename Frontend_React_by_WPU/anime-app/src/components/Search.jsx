/* eslint-disable react/prop-types */
import { useState } from "react";

function SearchInput() {
  const [query, setQuery] = useState("");

  return (
    <input
      className="search"
      type="text"
      placeholder="Search anime..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}

function NumResult({ animes }) {
  return (
    <p className="search-results">
      <span>\(≧▽≦)/</span> Subarashii! Wee found{" "}
      <strong>{animes.length}</strong> anime results :
    </p>
  );
}

export default function Search({ animes }) {
  return (
    <div className="search-container">
      <SearchInput />
      <NumResult animes={animes} />
    </div>
  );
}
