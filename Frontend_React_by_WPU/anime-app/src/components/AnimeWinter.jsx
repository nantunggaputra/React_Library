/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from "react";

let userTimeHours = new Date().getHours();

const image =
  userTimeHours < 8
    ? [
        {
          src: "https://cdn.myanimelist.net/images/anime/1799/139199l.jpg",
          title: "Medalist (Manga)",
        },
      ]
    : userTimeHours < 16
    ? [
        {
          src: "https://cdn.myanimelist.net/images/anime/1530/143202l.jpg",
          title: "Momentary Lily (TV)",
        },
      ]
    : [
        {
          src: "https://cdn.myanimelist.net/images/anime/1011/142918l.jpg",
          title: "Izure Saikyou no Renkinjutsushi?",
        },
      ];

export default function AnimeWinter() {
  return (
    <>
      <div className="featured">
        <h2>
          <span style={{ color: "#d372b8" }}>Featured</span> in Winter Anime
        </h2>
      </div>
      <div className="winter">
        <div className="winter-overview">
          <div className="winter-image">
            <small>❄</small>
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
