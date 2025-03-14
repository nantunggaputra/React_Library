/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { fetchAnimeNews } from "../service/animeNewsService";
import { Fade } from "react-awesome-reveal";

export default function AnimeNews() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [animeId, setAnimeId] = useState(null);

  const animeIds = [
    56785, 52742, 49785, 52196, 55855, 56840, 52299, 58488, 53889, 57152, 55318,
    58739, 58822, 58082, 57616, 57557, 52093, 50613, 51122, 25517,
  ];

  const getRandomAnimeId = () => {
    const randomIndex = Math.floor(Math.random() * animeIds.length);
    return animeIds[randomIndex];
  };

  useEffect(() => {
    setAnimeId(getRandomAnimeId());
  }, []);

  useEffect(() => {
    if (animeId !== null) {
      setLoading(true);
      fetchAnimeNews(animeId)
        .then((newsData) => {
          setNews(newsData);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    }
  }, [animeId]);

  const handleFetchRandomNews = () => {
    setAnimeId(getRandomAnimeId());
  };

  return (
    <aside className="aside bottom-left">
      <Fade triggerOnce delay={250} duration={1000}>
        <div id="magazine" className="magazine">
          <h2>
            <span style={{ color: "var(--color-blue-light)" }}>Magazine</span>{" "}
            Anime
          </h2>
        </div>
        <div className="news-all">
          <button onClick={handleFetchRandomNews}>
            {error ? "\u2941" : loading ? "\u21BB" : "\u27F3"}
          </button>
          {loading ? (
            <p style={{ color: "var(--color-background-light)" }}>
              Please wait...
            </p>
          ) : (
            <ul>
              {news.map((article, index) => (
                <Fade
                  triggerOnce
                  delay={250 + index * 100}
                  direction="right"
                  duration={500}
                  fraction={0}
                  key={article.mal_id}
                >
                  <li>
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      title="Read news in My Anime List"
                    >
                      {article.title}
                    </a>
                    <br />
                    <span>{new Date(article.date).toLocaleDateString()}</span>
                  </li>
                </Fade>
              ))}
            </ul>
          )}
        </div>
      </Fade>
    </aside>
  );
}
