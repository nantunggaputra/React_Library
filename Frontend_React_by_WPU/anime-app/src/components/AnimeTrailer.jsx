/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

export default function AnimeTrailer() {
  const [animeData, setAnimeData] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const animeIds = [
    56785, 52742, 49785, 52196, 55855, 56840, 52299, 58488, 53889, 57152, 55318,
    58739, 58822, 58082, 57616, 57557, 52093, 50613, 51122, 56785, 52742, 49785,
    52196, 55855, 56840, 52299, 58488, 53889, 57152, 55318, 58739, 58822, 58082,
    57616, 57557, 52093, 50613, 51122,
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
    "Conan",
    "Hinata",
    "Natsu",
    "Shido Itsuka",
    "Ciel",
    "Bon Namihira",
    "Jin-woo",
    "Jinka Yamato",
    "Rin",
    "Akira Masaki",
    "Inori Yuitsuka",
    "Yuri Kawazu",
    "Takumi",
    "Shizuri",
    "Rentaro",
    "Monkey D. Luffy",
    "Vash",
    "Kenshin",
    "Kraft Lawrence",
  ];

  useEffect(() => {
    const fetchTrailers = () => {
      setTimeout(() => {
        fetchAnimeTrailer(animeIds[currentIndex]);
      }, 15000);
    };
    fetchTrailers();
  }, [currentIndex]);

  const fetchAnimeTrailer = async (id) => {
    setLoading(true);
    try {
      const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setAnimeData(data.data);
    } catch (error) {
      console.error("Error fetching trailers:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <aside className="aside last-left">
        <div className="recent">
          <h2>
            <span style={{ color: "var(--color-primary-light)" }}>Recent</span>{" "}
            Trailer Anime
          </h2>
        </div>
        <div className="trailer-all">
          {animeTitles.map((title, index) => (
            <button
              key={title}
              onClick={
                !loading
                  ? () => {
                      setLoading(true);
                      setCurrentIndex(index);
                    }
                  : undefined
              }
              className={index === currentIndex ? "selected" : ""}
            >
              {title}
            </button>
          ))}
        </div>
      </aside>
      <aside className="aside last-right">
        <div className="recent">
          <h2>
            <span style={{ color: "var(--color-primary-light)" }}>
              {animeData ? "Recent" : "Loading"}
            </span>{" "}
            Trailer Anime
          </h2>
        </div>
        <div className="trailer-list">
          <div className="trailer-list-overview">
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
            ) : animeData ? (
              <>
                <div className="trailer-list-video">
                  {animeData.trailer.embed_url && (
                    <iframe
                      width="100%"
                      height="100%"
                      src={`${animeData.trailer.embed_url}?autoplay=0&mute=0`}
                      title="Anime Trailer"
                      allow="autoplay; encrypted-media"
                      sandbox="allow-same-origin allow-scripts allow-modal"
                      loading="lazy"
                      allowFullScreen
                      style={{ border: "0" }}
                    ></iframe>
                  )}
                </div>
                <p>{animeData.title}</p>
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
                Select Trailer
              </h2>
            )}
          </div>
        </div>
      </aside>
    </>
  );
}
