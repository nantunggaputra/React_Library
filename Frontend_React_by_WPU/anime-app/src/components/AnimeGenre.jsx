import { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";

export default function AnimeByGenre() {
  const [genres, setGenres] = useState([]);
  const [animeList, setAnimeList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [loadingImage, setLoadingImage] = useState(false);
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
    setLoadingImage(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? animeList.length - 1 : prevIndex - 1
    );
    setTimeout(() => {
      setLoadingImage(false);
    }, 1000);
  };

  const handleNext = () => {
    setLoadingImage(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === animeList.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => {
      setLoadingImage(false);
    }, 1000);
  };

  const getImageStyle = (animeList) => {
    return animeList[currentIndex].rating === "Rx - Hentai"
      ? {
          filter: "grayscale(1) brightness(0.3) contrast(0.3)",
          opacity: "0.7",
        }
      : {};
  };

  const getLinkStyle = (animeList) => {
    return animeList[currentIndex].rating === "Rx - Hentai"
      ? {
          filter: "grayscale(1)",
          cursor: "not-allowed",
        }
      : {};
  };

  return (
    <>
      <aside id="genre" className="aside left">
        <Fade triggerOnce delay={250} duration={1000}>
          <div className="check">
            <h2>
              <span style={{ color: "var(--color-blue-light)" }}>Genre</span>{" "}
              Anime
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
                style={
                  genre.name === "Hentai"
                    ? {
                        filter: "grayscale(1)",
                        cursor: "not-allowed",
                      }
                    : {}
                }
              >
                {genre.name}
              </button>
            ))}
          </div>
        </Fade>
      </aside>
      <aside className="aside right">
        <Fade triggerOnce delay={250} duration={1000}>
          <div className="check">
            <h2>
              <span style={{ color: "var(--color-blue-light)" }}>
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
                    color: "var(--color-white)",
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
                  <button
                    tabIndex="up"
                    onClick={!loadingImage ? handlePrev : undefined}
                  >
                    ⥣
                  </button>
                  <div
                    className="genre-list-image"
                    style={
                      !loadingImage
                        ? {}
                        : {
                            filter: "blur(0.1rem)",
                          }
                    }
                  >
                    <small>☆</small>
                    <img
                      src={animeList[currentIndex].images.jpg.image_url}
                      alt={animeList[currentIndex].title}
                      style={getImageStyle(animeList)}
                    />
                  </div>
                  <p style={getLinkStyle(animeList)}>
                    {animeList[currentIndex].title}
                  </p>
                  <button
                    className="arrow"
                    tabIndex="down"
                    onClick={!loadingImage ? handleNext : undefined}
                  >
                    ⥥
                  </button>
                </>
              ) : (
                <h2
                  style={{
                    color: "var(--color-white)",
                    position: "absolute",
                    left: "50%",
                    transform: "translateX(-50%) translateY(16rem)",
                    cursor: "default",
                  }}
                >
                  Select Genre
                </h2>
              )}
            </div>
          </div>
        </Fade>
      </aside>
    </>
  );
}
