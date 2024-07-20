/* eslint-disable react/prop-types */
function IndentedText({ children }) {
  return <span style={{ paddingLeft: "33px" }}>{children}</span>;
}

const getImageStyle = (rating) => {
  return rating === "Rx - Hentai"
    ? {
        filter: "grayscale(1) brightness(0.3) contrast(0.3)",
        opacity: "0.7",
      }
    : {};
};

const getAnimeYear = (anime) => {
  return anime.aired?.prop?.from?.year || "";
};

const getAnimeScore = (anime) => {
  return anime.score ? `MAL - IMDb ★ ${anime.score.toFixed(1)}/10` : "";
};

const getAnimeRating = (anime) => {
  return anime.rating ? `Rating for ${anime.rating}` : "";
};

const getAnimeStatus = (anime) => {
  return anime.status ? `Status: ${anime.status}` : "";
};

const getLinkAttributes = (rating, url, title) => {
  return rating === "Rx - Hentai"
    ? {}
    : {
        href: url,
        title: title,
        target: "_blank",
        rel: "noopener noreferrer nofollow",
      };
};

export default function AnimeDetail({ selectedAnime }) {
  if (!selectedAnime) return null;

  const { title, images, aired, score, rating, synopsis } = selectedAnime;

  const largeImageUrl = images?.jpg?.large_image_url;
  const malLink = getLinkAttributes(
    rating,
    `https://myanimelist.net/search/all?q=${title}&cat=all`,
    "Search in My Anime List"
  );
  const biliLink = getLinkAttributes(
    rating,
    `https://www.bilibili.tv/id/search-result?q=${title}`,
    "Search in BiliBili | Bstation"
  );

  return (
    <div className="details">
      <header>
        {largeImageUrl && aired && (
          <a {...malLink}>
            <img
              src={largeImageUrl}
              alt={`${title} Cover`}
              style={getImageStyle(rating)}
            />
          </a>
        )}
        <div className="details-overview">
          <h2>
            <a {...biliLink} style={{ cursor: "pointer" }}>
              {title}
            </a>
          </h2>
          <small>
            {getAnimeYear(selectedAnime)}
            {getAnimeYear(selectedAnime) && score ? " | " : ""}
            {getAnimeScore(selectedAnime)}
            <br />
            {getAnimeRating(selectedAnime)}
          </small>
          <p>
            <b>{getAnimeStatus(selectedAnime)}</b>
          </p>
        </div>
      </header>
      <section>
        <p>
          <em>{synopsis}</em>
          <br />
          <br style={{ marginTop: "1.6rem" }} />
          <em>
            <IndentedText> </IndentedText>
            <strong>Warning: </strong>
            <span style={{ color: "#ef4444" }}>
              Wee strongly advise against watching the listed anime titles
              through illegal means.
            </span>{" "}
            Engaging in piracy harms the creators and the industry as a whole.
            Please support the hardworking creators by purchasing the original
            {" DVDs " + title + " "}
            or subscribing to official streaming services. Minna, your support
            ensures the continued production of quality content. Sankyuu~
          </em>
          <br />
          <br />
          <img
            src="WeeBoo.png"
            style={{
              width: "100%",
              margin: "-7rem",
              transform: "translateX(3rem) scale(2.5)",
              opacity: "0.05",
              filter: "grayscale(1) brightness(0.75) contrast(2.75)",
            }}
          />
        </p>
        <p style={{ textAlign: "right", color: "#e1e8ed", fontWeight: "600" }}>
          <em>WeeBoo</em>
        </p>
      </section>
    </div>
  );
}
