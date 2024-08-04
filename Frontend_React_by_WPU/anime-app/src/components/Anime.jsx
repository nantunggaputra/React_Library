/* eslint-disable react/prop-types */
import { useState } from "react";

function AnimeList({ anime, onSelectedAnime, isSelected }) {
  const getImageSrc = (anime) => {
    return anime.images?.jpg?.large_image_url || anime.image;
  };

  const getAnimeYear = (anime) => {
    return anime.aired?.prop?.from?.year || anime.year || "Year";
  };

  const getImageStyle = (rating) => {
    return rating === "Rx - Hentai"
      ? {
          filter: "grayscale(1) brightness(0.3) contrast(0.3)",
          opacity: "0.7",
        }
      : {};
  };

  const getLinkStyle = (rating) => {
    return rating === "Rx - Hentai"
      ? {
          filter: "grayscale(1)",
          cursor: "help",
        }
      : {};
  };

  return (
    <li
      tabIndex={anime.mal_id}
      onClick={() => onSelectedAnime(anime)}
      className={isSelected ? "selected" : ""}
      style={getLinkStyle(anime.rating)}
    >
      <img
        src={getImageSrc(anime)}
        alt={`${anime.title} Cover`}
        style={getImageStyle(anime.rating)}
      />
      <h3>{anime.title}</h3>
      <div>
        <p>
          <span>{getAnimeYear(anime)}</span>
        </p>
      </div>
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
