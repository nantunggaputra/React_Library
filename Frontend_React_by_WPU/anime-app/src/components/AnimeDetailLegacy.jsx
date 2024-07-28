/* eslint-disable react/prop-types */
function IndentedText({ children }) {
  return <span style={{ paddingLeft: "33px" }}>{children}</span>;
}

export default function AnimeDetailLegacy({ selectedAnimeLegacy }) {
  const { title, images, aired, score, rating, status, synopsis } =
    selectedAnimeLegacy;

  const largeImageUrl = images?.jpg?.large_image_url;
  const airedYear = aired?.prop?.from?.year;

  return (
    <div className="details">
      <header>
        <a
          href={`https://myanimelist.net/search/all?q=${title}&cat=all`}
          title="Search anime in My Anime List"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <img src={largeImageUrl} alt={`${title} Cover`} />
        </a>
        <div className="details-overview">
          <h2>
            <a
              href={`https://www.bilibili.tv/id/search-result?q=${title}`}
              title="Search anime in BiliBili | Bstation"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              {title}
            </a>
          </h2>

          <small>
            {airedYear || ""}
            {airedYear && score ? " | " : ""}
            {score ? `MAL - IMDb ★ ${score.toFixed(1)}/10` : ""}
            <br />
            {rating ? `Rating for ${rating}` : ""}
          </small>
          <p>
            <b>{status ? `Channel: ${status}` : ""}</b>
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
        <p
          style={{
            textAlign: "right",
            color: "var(--color-text)",
            fontWeight: "600",
          }}
        >
          <em>WeeBoo</em>
        </p>
      </section>
    </div>
  );
}
