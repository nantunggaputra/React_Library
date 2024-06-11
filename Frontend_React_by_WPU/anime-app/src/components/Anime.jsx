/* eslint-disable react/prop-types */
import { useState } from "react";

function AnimeList({ anime, onSelectedAnime, isSelected }) {
  return (
    <li
      tabIndex={anime.mal_id}
      onClick={() => onSelectedAnime(anime)}
      className={isSelected ? "selected" : ""}
    >
      {anime.images && anime.images.jpg && anime.images.jpg.large_image_url ? (
        <>
          <img
            src={anime.images.jpg.large_image_url}
            alt={`${anime.title} Cover`}
            style={
              anime.rating === "Rx - Hentai" ||
              anime.rating === "R+ - Mild Nudity"
                ? {
                    filter: "grayscale(1) brightness(0.2) contrast(0.2)",
                    opacity: "0.2",
                  }
                : {}
            }
          />
          <h3>{anime.title}</h3>
          <div>
            <p>
              <span>
                {anime.aired.prop.from.year
                  ? anime.aired.prop.from.year
                  : "Year"}
              </span>
            </p>
          </div>
        </>
      ) : (
        <>
          <img src={anime.image} alt="Anime Cover" />
          <h3>{anime.title}</h3>
          <div>
            <p>
              <span>{anime.year}</span>
            </p>
          </div>
        </>
      )}
    </li>
  );
}

export default function Anime({ animes, onSelectedAnime }) {
  const [selectedAnimeId, setSelectedAnimeId] = useState(null);

  const handleSelectedAnime = (anime) => {
    setSelectedAnimeId(anime.mal_id);
    onSelectedAnime(anime);
  };

  return (
    <ul className="list list-anime">
      {animes?.map((anime) => (
        <AnimeList
          anime={anime}
          onSelectedAnime={handleSelectedAnime}
          key={anime.mal_id}
          isSelected={anime.mal_id === selectedAnimeId}
        />
      ))}
    </ul>
  );
}
