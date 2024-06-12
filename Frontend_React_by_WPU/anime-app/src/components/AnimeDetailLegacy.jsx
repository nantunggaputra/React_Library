/* eslint-disable no-unused-vars */
import React from "react";

/* eslint-disable react/prop-types */
function IndentedText({ children }) {
  return <span style={{ paddingLeft: "33px" }}>{children}</span>;
}

export default function AnimeDetailLegacy({ selectedAnimeLegacy }) {
  return (
    <div className="details">
      <header>
        {selectedAnimeLegacy.images &&
        selectedAnimeLegacy.images.jpg &&
        selectedAnimeLegacy.images.jpg.large_image_url &&
        selectedAnimeLegacy.aired ? (
          <a
            href={
              selectedAnimeLegacy.rating === "Rx - Hentai"
                ? undefined
                : `https://myanimelist.net/search/all?q=${selectedAnimeLegacy.title}&cat=all`
            }
            title={
              selectedAnimeLegacy.rating === "Rx - Hentai"
                ? undefined
                : "Search in My Anime List"
            }
            target={
              selectedAnimeLegacy.rating === "Rx - Hentai"
                ? undefined
                : "_blank"
            }
            rel="noopener noreferrer nofollow"
          >
            <img
              src={selectedAnimeLegacy.images.jpg.large_image_url}
              alt={`${selectedAnimeLegacy.title} Cover`}
              style={
                selectedAnimeLegacy.rating === "Rx - Hentai"
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
                selectedAnimeLegacy.rating === "Rx - Hentai"
                  ? undefined
                  : `https://www.bilibili.tv/id/search-result?q=${selectedAnimeLegacy.title}`
              }
              title={
                selectedAnimeLegacy.rating === "Rx - Hentai"
                  ? undefined
                  : "Search in BiliBili | Bstation"
              }
              target={
                selectedAnimeLegacy.rating === "Rx - Hentai"
                  ? undefined
                  : "_blank"
              }
              rel="noopener noreferrer nofollow"
              style={{ cursor: "pointer" }}
            >
              {selectedAnimeLegacy.title}
            </a>
          </h2>

          <small>
            {selectedAnimeLegacy.aired.prop.from.year
              ? selectedAnimeLegacy.aired.prop.from.year
              : ""}
            {selectedAnimeLegacy.aired.prop.from.year &&
            selectedAnimeLegacy.score
              ? " | "
              : ""}
            {selectedAnimeLegacy.score
              ? "IMDb ★ " + selectedAnimeLegacy.score.toFixed(1) + "/10"
              : ""}
            <br />
            {selectedAnimeLegacy.rating
              ? "Rating for " + selectedAnimeLegacy.rating
              : ""}
          </small>
          <p>
            <b>
              {selectedAnimeLegacy.status
                ? "Channel: " + selectedAnimeLegacy.status
                : ""}
            </b>
          </p>
        </div>
      </header>
      <section>
        <p>
          <em>{selectedAnimeLegacy.synopsis}</em>
          <br />
          <br style={{ marginTop: "1.6rem" }} />
          <em>
            <IndentedText> </IndentedText>
            <strong>Warning: </strong>
            <span style={{ color: "#ef4444" }}>
              We strongly advise against watching the listed anime titles
              through illegal means.
            </span>{" "}
            Engaging in piracy harms the creators and the industry as a whole.
            Please support the hardworking creators by purchasing the original
            {" DVDs " + selectedAnimeLegacy.title + " "}
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
