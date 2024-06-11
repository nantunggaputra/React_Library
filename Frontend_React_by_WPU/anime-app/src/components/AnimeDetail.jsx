/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

function IndentedText({ children }) {
  return <span style={{ paddingLeft: "33px" }}>{children}</span>;
}

export default function AnimeDetail({ selectedAnime }) {
  return (
    <div className="details">
      <header>
        {selectedAnime.images &&
        selectedAnime.images.jpg &&
        selectedAnime.images.jpg.large_image_url &&
        selectedAnime.aired ? (
          <a
            href={
              selectedAnime.rating === "Rx - Hentai" ||
              selectedAnime.rating === "R+ - Mild Nudity"
                ? undefined
                : `https://myanimelist.net/search/all?q=${selectedAnime.title}&cat=all`
            }
            title={
              selectedAnime.rating === "Rx - Hentai" ||
              selectedAnime.rating === "R+ - Mild Nudity"
                ? undefined
                : "Search in My Anime List"
            }
            target={
              selectedAnime.rating === "Rx - Hentai" ||
              selectedAnime.rating === "R+ - Mild Nudity"
                ? undefined
                : "_blank"
            }
            rel="noopener noreferrer nofollow"
          >
            <img
              src={selectedAnime.images.jpg.large_image_url}
              alt={`${selectedAnime.title} Cover`}
              style={
                selectedAnime.rating === "Rx - Hentai" ||
                selectedAnime.rating === "R+ - Mild Nudity"
                  ? {
                      filter: "grayscale(1) brightness(0.3) contrast(0.3)",
                      opacity: "0.7",
                    }
                  : {}
              }
            />
          </a>
        ) : (
          setTimeout(() => {
            alert("Minna? What is the best anime for you? Let's Search");
            window.location.reload();
          })
        )}
        <div className="details-overview">
          <h2>
            <a
              href={
                selectedAnime.rating === "Rx - Hentai" ||
                selectedAnime.rating === "R+ - Mild Nudity"
                  ? undefined
                  : `https://www.bilibili.tv/id/search-result?q=${selectedAnime.title}`
              }
              title={
                selectedAnime.rating === "Rx - Hentai" ||
                selectedAnime.rating === "R+ - Mild Nudity"
                  ? undefined
                  : "Search in BiliBili | Bstation"
              }
              target={
                selectedAnime.rating === "Rx - Hentai" ||
                selectedAnime.rating === "R+ - Mild Nudity"
                  ? undefined
                  : "_blank"
              }
              rel="noopener noreferrer nofollow"
              style={{ cursor: "pointer" }}
            >
              {selectedAnime.title}
            </a>
          </h2>

          <small>
            {selectedAnime.aired.prop.from.year
              ? selectedAnime.aired.prop.from.year
              : ""}
            {selectedAnime.aired.prop.from.year && selectedAnime.score
              ? " | "
              : ""}
            {selectedAnime.score
              ? "IMDb ★ " + selectedAnime.score.toFixed(1) + "/10"
              : ""}
            <br />
            {selectedAnime.rating ? "Rating for " + selectedAnime.rating : ""}
          </small>
          <p>
            <b>
              {selectedAnime.status ? "Status: " + selectedAnime.status : ""}
            </b>
          </p>
        </div>
      </header>
      <section>
        <p>
          <em>{selectedAnime.synopsis}</em>
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
            {" DVDs " + selectedAnime.title + " "}
            or subscribing to official streaming services. Minna, your support
            ensures the continued production of quality content. Sankyuu~
          </em>
          <br />
          <br />
          <img
            src="WeeBoo.ico"
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
