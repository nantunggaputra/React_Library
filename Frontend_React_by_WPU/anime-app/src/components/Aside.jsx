import { useState, useEffect } from "react";

export default function Aside() {
  const [genres, setGenres] = useState([]);
  const [animeList, setAnimeList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await fetch("https://api.jikan.moe/v4/genres/anime");
        const data = await response.json();
        setGenres(data.data);
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };

    fetchGenres();
  }, []);

  const fetchAnimeByGenre = async (genreId) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.jikan.moe/v4/anime?genres=${genreId}&limit=24`
      );
      const data = await response.json();
      const filteredAnimes = data.data.filter(
        (anime) => anime.type === "TV" || anime.type !== "Movie"
      );
      setAnimeList(filteredAnimes);
      setCurrentIndex(0);
    } catch (error) {
      console.error("Error fetching anime:", error);
    } finally {
      setLoading(false);
    }
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? animeList.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === animeList.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <div id="check" className="aside left">
        <div className="check">
          <h2>
            <span style={{ color: "#0377b9" }}>Genre</span> and Anime
          </h2>
        </div>
        <div className="genre-all">
          {genres.map((genre) => (
            <button
              key={genre.mal_id}
              onClick={() => fetchAnimeByGenre(genre.mal_id)}
            >
              {genre.name}
            </button>
          ))}
        </div>
      </div>
      <div className="aside right">
        <div className="check">
          <h2>
            <span style={{ color: "#0377b9" }}>Genre</span> and Anime
          </h2>
        </div>
        {loading ? (
          <h2
            style={{
              color: "#e1e8ed",
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%) translateY(20rem)",
              cursor: "default",
            }}
          >
            Please wait...
          </h2>
        ) : animeList.length > 0 ? (
          <div className="genre-list">
            <div className="genre-list-overview">
              <button tabIndex="up" onClick={handlePrev}>
                ⥣
              </button>
              <div className="genre-list-image">
                <img
                  src={animeList[currentIndex].images.jpg.image_url}
                  alt={animeList[currentIndex].title}
                />
              </div>
              <p>{animeList[currentIndex].title}</p>
              <button className="arrow" tabIndex="down" onClick={handleNext}>
                ⥥
              </button>
            </div>
          </div>
        ) : (
          <h2
            style={{
              color: "#e1e8ed",
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%) translateY(20rem)",
              cursor: "default",
            }}
          >
            Sensei! Select a genre
          </h2>
        )}
      </div>
    </>
  );
}
