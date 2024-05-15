/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

function IndentedText({ children }) {
  return <span style={{ paddingLeft: "3em" }}>{children}</span>;
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
              href={`https://www.youtube.com/results?search_query=Anime ${selectedAnime.title}`}
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
            <strong>
              {selectedAnime.status ? "Status: " + selectedAnime.status : ""}
            </strong>
          </p>
        </div>
      </header>
      <section>
        <p>
          <em>
            <IndentedText> </IndentedText>
            {selectedAnime.synopsis}
          </em>
        </p>
      </section>
    </div>
  );
}
