/* eslint-disable react/prop-types */
import { useState, useRef } from "react";
import { Fade } from "react-awesome-reveal";

function NumResult({ count }) {
  return (
    <p className="search-results">
      <span>\(≧▽≦)/</span> Subarashii, Sensei! Wee found this breathtaking{" "}
      <strong>{count}</strong> anime...
    </p>
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
        {loading ? "Please wait..." : "Search"}
      </button>
    </div>
  );
}

export default function Search({ fetchAnime }) {
  const [resultCount, setResultCount] = useState(0);
  const [loading, setLoading] = useState(false);

  return (
    <div className="search-container">
      <Fade durations={2000}>
        <SearchInput
          fetchAnime={fetchAnime}
          setResultCount={setResultCount}
          setLoading={setLoading}
          loading={loading}
        />
        {resultCount > 0 && <NumResult count={resultCount} />}
      </Fade>
    </div>
  );
}
