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
          (anime.rating !== "R+ - Mild Nudity" &&
            anime.rating !== "R - 17+ (violence & profanity)" &&
            anime.type !== "OVA" &&
            anime.type !== "Movie" &&
            anime.type === "TV") ||
          (anime.rating !== "R+ - Mild Nudity" &&
            anime.rating !== "R - 17+ (violence & profanity)" &&
            anime.type === "OVA" &&
            anime.type !== "Movie")
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
      <aside id="genre" className="aside left">
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
      </aside>
      <aside className="aside right">
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
                      animeList[currentIndex].rating === "Rx - Hentai"
                        ? {
                            filter:
                              "grayscale(1) brightness(0.3) contrast(0.3)",
                            opacity: "0.7",
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
      </aside>
      <figure className="closing">
        <figcaption>
          <h6>あ</h6>
          <h6>り</h6>
          <h6>が</h6>
          <h6>と</h6>
          <h6>う</h6>
        </figcaption>
        <figcaption>
          <h6>み</h6>
          <h6>な</h6>
          <h6>さ</h6>
          <h6>ん</h6>
        </figcaption>
      </figure>
    </>
  );
}
