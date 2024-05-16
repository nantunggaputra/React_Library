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
          <img
            src={selectedAnime.images.jpg.large_image_url}
            alt={`${selectedAnime.title} Cover`}
          />
        ) : (
          setTimeout(() => {
            alert("Sensei? What is the best anime for you? Let's Search");
            window.location.reload();
          })
        )}
        <div className="details-overview">
          <h2>
            <a
              href={`https://www.bilibili.tv/id/search-result?q=${selectedAnime.title}`}
              title="Search in BiliBili | Bstation"
              target="_blank"
              rel="noopener noreferrer nofollow"
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
          <br />
          <em>
            <IndentedText> </IndentedText>
            Warning: Wee strongly advise against watching the listed anime
            titles through illegal means. Engaging in piracy harms the creators
            and the industry as a whole. Please support the hardworking creators
            by purchasing the original DVDs or subscribing to official streaming
            services. Sensei, your support ensures the continued production of
            quality content. Sankyuu~
          </em>
          <br />
          <br />
          <p style={{ textAlign: "right" }}>
            <em>WeeBoo</em>
          </p>
        </p>
      </section>
    </div>
  );
}
