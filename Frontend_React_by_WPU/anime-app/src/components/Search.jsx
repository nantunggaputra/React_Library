/* eslint-disable react/prop-types */
import { useState, useRef } from "react";

function Kanji() {
  return (
    <figure className="search-kanji">
      <figcaption>
        <h6>コ</h6>
        <h6>ナ</h6>
        <h6>ン</h6>
      </figcaption>
    </figure>
  );
}

function SearchInput({ fetchAnime, setResultCount, setLoading, loading }) {
  const [placeholder, setPlaceholder] = useState("Search anime...");
  const [query, setQuery] = useState("");
  const audioRef = useRef(null);

  const handleSearch = async () => {
    if (query.trim()) {
      setLoading(true);
      audioRef.current && audioRef.current.play();
      const results = await fetchAnime(query);
      setResultCount(results.length);
      setLoading(false);
      setQuery("");
      setPlaceholder(results.length > 0 ? query.trim() : "Search anime...");
    }
  };

  return (
    <div className="search-container">
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
        placeholder={placeholder}
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
        <img src="Conan Edogawa Search.webp" alt="" />
      </div>
      <audio ref={audioRef} src="There is Always Only One Truth.aac" />
      {loading && <Kanji />}
    </div>
  );
}

const hasData = (data) => data !== 0;

function MainResult({ count }) {
  return (
    <>
      <p className="search-results" style={{ cursor: "default" }}>
        <span>{hasData(count) ? "⋋≧.≦⋌" : "⋋T_T⋌"}</span>{" "}
        <strong>
          {hasData(count)
            ? `Subarashi Minna-san! Wee found breathtaking of ${count} anime...`
            : "Gomennasai Minna-san! Please search another anime..."}
        </strong>
      </p>
    </>
  );
}

export default function Search({ fetchAnime }) {
  const [resultCount, setResultCount] = useState(undefined);
  const [loading, setLoading] = useState(false);

  return (
    <div className="search-container">
      <SearchInput
        fetchAnime={fetchAnime}
        setResultCount={setResultCount}
        setLoading={setLoading}
        loading={loading}
      />
      {resultCount >= 0 && <MainResult count={resultCount} />}
    </div>
  );
}
