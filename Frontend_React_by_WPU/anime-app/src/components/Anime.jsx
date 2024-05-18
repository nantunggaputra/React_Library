/* eslint-disable react/prop-types */
function AnimeList({ anime, onSelectedAnime }) {
  return (
    <li tabIndex={anime.mal_id} onClick={() => onSelectedAnime(anime)}>
      {anime.images && anime.images.jpg && anime.images.jpg.large_image_url ? (
        <>
          <img
            src={anime.images.jpg.large_image_url}
            alt={`${anime.title} Cover`}
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
  return (
    <ul className="list list-anime">
      {animes?.map((anime) => (
        <AnimeList
          anime={anime}
          onSelectedAnime={onSelectedAnime}
          key={anime.mal_id}
        />
      ))}
    </ul>
  );
}
