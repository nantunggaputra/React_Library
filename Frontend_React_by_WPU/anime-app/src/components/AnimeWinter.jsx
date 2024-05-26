/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from "react";

const image = [
  {
    src: "https://cdn.myanimelist.net/images/anime/1530/143202l.jpg",
    title: "Momentary Lily (TV)",
  },
];

export default function AnimeWinter() {
  return (
    <>
      <div className="featured">
        <h2>
          <span style={{ color: "#d372b8" }}>Featured</span> Winter Anime
        </h2>
      </div>
      <div className="winter">
        <div className="winter-overview">
          <div className="winter-image">
            <img src={image[0].src} alt={image[0].title} />
          </div>
          <p>
            <span style={{ color: "#0377b9" }}>{image[0].title}</span>
          </p>
        </div>
      </div>
    </>
  );
}
