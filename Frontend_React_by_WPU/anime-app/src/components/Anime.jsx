/* eslint-disable react/prop-types */
function AnimeList({ anime, onSelectedAnime }) {
  return (
    <li onClick={() => onSelectedAnime(anime.mal_id)}>
      <img src={anime.image} alt={`${anime.title} cover`} />
      <h3>{anime.title}</h3>
      <div>
        <p>
          <span>{anime.year.split(" ")[0]}</span>
        </p>
      </div>
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
