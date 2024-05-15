/* eslint-disable react/prop-types */
import { useState } from "react";

function NumResult({ count }) {
  return (
    <p className="search-results">
      <span>\(≧▽≦)/</span> Subarashii! We found <strong>{count}</strong> anime
      results
    </p>
  );
}

function SearchInput({ fetchAnime, setResultCount, setLoading, loading }) {
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    if (query.trim()) {
      setLoading(true);
      const results = await fetchAnime(query);
      setResultCount(results.length);
      setLoading(false);
    }
  };

  return (
    <div className="search-container">
      <input
        className="search"
        type="text"
        placeholder="Search anime..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
      />
      <button className="search-btn" onClick={() => handleSearch()}>
        {loading ? "Loading..." : "Search"}
      </button>
    </div>
  );
}

export default function Search({ fetchAnime }) {
  const [resultCount, setResultCount] = useState(0);
  const [loading, setLoading] = useState(false);

  return (
    <div className="search-container">
      <SearchInput
        fetchAnime={fetchAnime}
        setResultCount={setResultCount}
        setLoading={setLoading}
        loading={loading}
      />
      {resultCount > 0 && <NumResult count={resultCount} />}
    </div>
  );
}
