import { useState, useEffect } from "react";

export default function Aside() {
  const [genres, setGenres] = useState([]);
  const [animeList, setAnimeList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState("");

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

  const fetchAnimeByGenre = async (genreId, genreName) => {
    setLoading(true);
    setSelectedGenre(genreName);
    try {
      const response = await fetch(
        `https://api.jikan.moe/v4/anime?genres=${genreId}&limit=25`
      );
      const data = await response.json();
      const filteredAnimes = data.data.filter(
        (anime) =>
          (anime.type == "TV" &&
            anime.type !== "Movie" &&
            anime.type !== "OVA") ||
          anime.type === "OVA"
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
            <span style={{ color: "#0377b9" }}>Genre</span> Anime
          </h2>
        </div>
        <div className="genre-all">
          {genres.map((genre) => (
            <button
              key={genre.mal_id}
              onClick={
                !loading
                  ? () => fetchAnimeByGenre(genre.mal_id, genre.name)
                  : undefined
              }
              className={genre.name === selectedGenre ? "selected" : ""}
            >
              {genre.name}
            </button>
          ))}
        </div>
      </div>
      <div className="aside right">
        <div className="check">
          <h2>
            <span style={{ color: "#0377b9" }}>
              {selectedGenre ? selectedGenre : "Genre"}
            </span>{" "}
            Anime
          </h2>
        </div>
        <div className="genre-list">
          <div className="genre-list-overview">
            {loading ? (
              <h2
                style={{
                  color: "#e1e8ed",
                  position: "absolute",
                  left: "50%",
                  transform: "translateX(-50%) translateY(16rem)",
                  cursor: "default",
                }}
              >
                Please wait...
              </h2>
            ) : animeList.length > 0 ? (
              <>
                <button tabIndex="up" onClick={handlePrev}>
                  ⥣
                </button>
                <div className="genre-list-image">
                  <small>☆</small>
                  <img
                    src={animeList[currentIndex].images.jpg.image_url}
                    alt={animeList[currentIndex].title}
                    style={
                      animeList[currentIndex].rating === "Rx - Hentai" ||
                      animeList[currentIndex].rating === "R+ - Mild Nudity"
                        ? {
                            filter:
                              "grayscale(1) brightness(0.2) contrast(0.2)",
                            opacity: "0.2",
                          }
                        : {}
                    }
                  />
                </div>
                <p>{animeList[currentIndex].title}</p>
                <button className="arrow" tabIndex="down" onClick={handleNext}>
                  ⥥
                </button>
              </>
            ) : (
              <h2
                style={{
                  color: "#e1e8ed",
                  position: "absolute",
                  left: "50%",
                  transform: "translateX(-50%) translateY(16rem)",
                  cursor: "default",
                }}
              >
                Minna! Select Genre
              </h2>
            )}
          </div>
        </div>
      </div>
      <div className="closing">
        <div>
          <h4>あ</h4>
          <h4>り</h4>
          <h4>が</h4>
          <h4>と</h4>
          <h4>う</h4>
        </div>
        <div>
          <h4>み</h4>
          <h4>な</h4>
          <h4>さ</h4>
          <h4>ん</h4>
        </div>
      </div>
    </>
  );
}
