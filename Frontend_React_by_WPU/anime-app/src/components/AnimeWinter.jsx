export default function AnimeWinter() {
  const categories = ["Sponsored", "Featured", "Remake", "Hiatus"];

  const userTimeHours = new Date().getHours();

  const image =
    userTimeHours < 8
      ? [
          {
            src: "https://cdn.myanimelist.net/images/anime/1799/139199l.jpg",
            title: "Medalist",
          },
        ]
      : userTimeHours < 16
      ? [
          {
            src: "https://cdn.myanimelist.net/images/anime/1530/143202l.jpg",
            title: "Momentary Lily",
          },
        ]
      : [
          {
            src: "https://cdn.myanimelist.net/images/anime/1011/142918l.jpg",
            title: "Izure Saikyou no Renkinjutsushi?",
          },
        ];

  return (
    <>
      <div className="featured">
        <h2>
          <span style={{ color: "#d372b8" }}>Featured</span> in Winter Anime
        </h2>
      </div>
      <div className="winter">
        <div className="winter-all">
          {categories.map((category) => (
            <button
              key={category}
              onClick={undefined}
              className={category === "Featured" ? "selected" : ""}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="winter-overview">
          <div className="winter-image">
            <small>❅ ❄ ❆</small>
            <img src={image[0].src} alt={image[0].title} />
          </div>
          <p>
            <span>{image[0].title}</span>
          </p>
        </div>
      </div>
    </>
  );
}
