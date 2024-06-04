export default function Aside() {
  const genres = [
    "Action",
    "Adventure",
    "Comedy",
    "Crime",
    "Demons",
    "Drama",
    "Fantasy",
    "Game",
    "Historical",
    "Horror",
    "Isekai",
    "Magic",
    "Martial Arts",
    "Mecha",
    "Medical",
    "Military",
    "Music",
    "Mystery",
    "Mythology",
    "Philosophical",
    "Psychological",
    "Parody",
    "Police",
    "Romance",
    "Samurai",
    "School",
    "Sci-Fi",
    "Seinen",
    "Shoujo",
    "Shounen",
    "Slice of Life",
    "Sports",
    "Space",
    "Superhero",
    "Supernatural",
    "Super Power",
    "Thriller",
    "Time Travel",
    "Tragedy",
    "Vampire",
    "Wuxia",
  ];

  return (
    <>
      <div id="check" className="aside left">
        <div className="check">
          <h2>
            <span style={{ color: "#0377b9" }}>Genre</span> and Anime
          </h2>
        </div>
        <div className="genre-all">
          {genres.map((genre) => (
            <button key={genre}>{genre}</button>
          ))}
        </div>
      </div>
      <div id="blog" className="aside right"></div>
    </>
  );
}
