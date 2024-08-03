/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

export default function AnimeTrailer() {
  const [animeData, setAnimeData] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const animeIds = [
    56785, 52742, 49785, 52196, 55855, 56840, 52299, 58488, 53889, 57152, 55318,
    58739, 58822, 58082, 57616, 57557, 52093, 50613, 51122,
  ];

  const animeTitles = [
    "Detective Conan",
    "Haikyuu!!",
    "Fairy Tail",
    "Date A Live",
    "Kuroshitsuji",
    "T.P BON",
    "Ore dake Level Up na Ken",
    "Sengoku Youko",
    "Ao no Exorcist",
    "Mahoutsukai no Yakusoku",
    "Medalist",
    "Momentary Lily",
    "Izure Saikyou no Renkinjutsushi?",
    "NEET Kunoichi to Nazeka Dousei Hajimemashita",
    "Kimi no Koto ga Daidaisuki na 100-nin no Kanojo",
    "The One Piece",
    "Trigun Stampede",
    "Rurouni Kenshin",
    "Ookami to Koushinryou",
  ];

  useEffect(() => {
    const fetchDataWithDelay = () => {
      setTimeout(() => {
        fetchAnimeData(animeIds[currentIndex]);
      }, 15000);
    };
    fetchDataWithDelay();
  }, [currentIndex]);

  const fetchAnimeData = async (id) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setAnimeData(data.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? animeIds.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === animeIds.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <aside className="">
        <div className="">
          <h2>
            <span style={{ color: "var(--color-primary-light)" }}>Recent</span>{" "}
            Trailer Anime
          </h2>
        </div>
        <div className="">
          {animeTitles.map((title, index) => (
            <button
              key={animeIds[index]}
              onClick={() => {
                setCurrentIndex(index);
                setAnimeData(null);
              }}
              style={{
                color:
                  index === currentIndex
                    ? "var(--color-primary-light)"
                    : "inherit",
              }}
            >
              {title}
            </button>
          ))}
        </div>
      </aside>
      <aside className="">
        <div className="">
          <h2>
            <span style={{ color: "var(--color-primary-light)" }}>
              {animeData ? "Recent" : "Loading"}
            </span>{" "}
            Trailer Anime
          </h2>
        </div>
        <div className="">
          <div className="">
            {loading ? (
              <h2
                style={{
                  color: "var(--color-text)",
                  position: "absolute",
                  left: "50%",
                  transform: "translateX(-50%) translateY(16rem)",
                  cursor: "default",
                }}
              >
                Please wait...
              </h2>
            ) : error ? (
              <h2
                style={{
                  color: "var(--color-text)",
                  position: "absolute",
                  left: "50%",
                  transform: "translateX(-50%) translateY(16rem)",
                  cursor: "default",
                }}
              >
                {error}
              </h2>
            ) : animeData ? (
              <>
                <button
                  tabIndex="up"
                  onClick={() => {
                    handlePrev;
                    setAnimeData(null);
                  }}
                >
                  ⥣
                </button>
                <div className="">
                  {animeData.trailer.embed_url && (
                    <iframe
                      width="240"
                      height="160"
                      src={`${animeData.trailer.embed_url}?autoplay=0`}
                      title="Anime Trailer"
                      frameBorder="0"
                      sandbox="allow-same-origin allow-scripts"
                      allowFullScreen
                    ></iframe>
                  )}
                </div>
                <p>{animeData.title}</p>
                <button
                  className="arrow"
                  tabIndex="down"
                  onClick={() => {
                    handleNext;
                    setAnimeData(null);
                  }}
                >
                  ⥥
                </button>
              </>
            ) : (
              <h2
                style={{
                  color: "var(--color-text)",
                  position: "absolute",
                  left: "50%",
                  transform: "translateX(-50%) translateY(16rem)",
                  cursor: "default",
                }}
              >
                Please wait...
              </h2>
            )}
          </div>
        </div>
      </aside>
    </>
  );
}
