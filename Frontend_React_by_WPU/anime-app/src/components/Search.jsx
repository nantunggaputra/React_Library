/* eslint-disable react/prop-types */
import { useState, useRef } from "react";

function NumResult({ count }) {
  return (
    <p className="search-results">
      <span>\(≧▽≦)/</span> Subarashii, Sensei! Wee found breathtaking{" "}
      <strong>{count}</strong> anime...
    </p>
  );
}

function Kanji() {
  return (
    <div className="search-kanji">
      <img src="Success.png" />
    </div>
  );
}

function SearchInput({ fetchAnime, setResultCount, setLoading, loading }) {
  const [query, setQuery] = useState("");
  const audioRef = useRef(null);

  const handleSearch = async () => {
    if (query.trim()) {
      setLoading(true);
      if (audioRef.current) {
        audioRef.current.play();
      }
      const results = await fetchAnime(query);
      setResultCount(results.length);
      setLoading(false);
      setQuery("");
    }
  };

  return (
    <div className="search-container">
      <audio ref={audioRef} src="There is Always Only One Truth.mp3" />
      {loading && <Kanji />}
      <div className="search-label">
        <div className="container">
          <label htmlFor="search-anime">
            <span title="Search">⌕</span>
          </label>
        </div>
      </div>
      <input
        className="search"
        id="search-anime"
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
      <button className="search-btn" onClick={handleSearch}>
        {loading ? "Please wait..." : "Search"}
      </button>
      <div className="search-icon">
        <img src="Conan Edogawa Search.png" alt=" " />
      </div>
    </div>
  );
}

export default function Search({ fetchAnime }) {
  const [resultCount, setResultCount] = useState(0);
  const [loading, setLoading] = useState(false);

  return (
    <div className="search-container">
      <>
        <SearchInput
          fetchAnime={fetchAnime}
          setResultCount={setResultCount}
          setLoading={setLoading}
          loading={loading}
        />
        {resultCount > 0 && <NumResult count={resultCount} />}
      </>
    </div>
  );
}
