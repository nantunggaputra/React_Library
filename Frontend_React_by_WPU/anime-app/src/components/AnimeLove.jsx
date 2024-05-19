/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const images = [
  {
    src: "https://cdn.myanimelist.net/images/anime/1665/140360l.jpg",
    title: "Haikyuu!! Movie: Gomisuteba no Kessen",
  },
  {
    src: "https://cdn.myanimelist.net/images/anime/1138/133101l.jpg",
    title: "Meitantei Conan Movie 26: Kurogane no Submarine",
  },
  {
    src: "https://cdn.myanimelist.net/images/anime/1744/120789l.jpg",
    title: "Meitantei Conan Movie 25: Halloween no Hanayome",
  },
  {
    src: "https://cdn.myanimelist.net/images/anime/1908/135431l.jpg",
    title: "Bleach: Sennen Kessen-hen",
  },
  {
    src: "https://cdn.myanimelist.net/images/anime/1668/125323l.jpg",
    title: "One Piece Film: Red",
  },
  {
    src: "https://cdn.myanimelist.net/images/anime/1121/119044l.jpg",
    title: "Jujutsu Kaisen 0 Movie",
  },
  {
    src: "https://cdn.myanimelist.net/images/anime/1306/112616l.jpg",
    title: "Meitantei Conan Movie 24: Hiiro no Dangan",
  },
  {
    src: "https://cdn.myanimelist.net/images/anime/1245/116760l.jpg",
    title: "Gintama: The Final",
  },
  {
    src: "https://cdn.myanimelist.net/images/anime/1704/106947l.jpg",
    title: "Kimetsu no Yaiba Movie: Mugen Ressha-hen",
  },
  {
    src: "https://cdn.myanimelist.net/images/anime/1654/104884l.jpg",
    title: "Digimon Adventure: Last Evolution Kizuna",
  },
  {
    src: "https://cdn.myanimelist.net/images/anime/1010/98309l.jpg",
    title: "Meitantei Conan Movie 23: Konjou no Fist",
  },
  {
    src: "https://cdn.myanimelist.net/images/anime/12/90104l.jpg",
    title: "Meitantei Conan Movie 22: Zero no Shikkounin",
  },
  {
    src: "https://cdn.myanimelist.net/images/anime/1736/93138l.jpg",
    title: "Boku no Hero Academia the Movie 1: Futari no Hero",
  },
  {
    src: "https://cdn.myanimelist.net/images/anime/1557/123313l.jpg",
    title: "Sword Art Online Movie: Ordinal Scale",
  },
  {
    src: "https://cdn.myanimelist.net/images/anime/13/85391l.jpg",
    title: "Fairy Tail Movie 2: Dragon Cry",
  },
  {
    src: "https://cdn.myanimelist.net/images/anime/12/77614l.jpg",
    title: "Yu☆Gi☆Oh! The Dark Side of Dimensions",
  },
  {
    src: "https://cdn.myanimelist.net/images/anime/4/78280l.jpg",
    title: "Boruto: Naruto the Movie",
  },
  {
    src: "https://cdn.myanimelist.net/images/anime/1491/134498l.jpg",
    title: "The Last: Naruto the Movie",
  },
  {
    src: "https://cdn.myanimelist.net/images/anime/10/62337l.jpg",
    title: "Hunter x Hunter Movie 2: The Last Mission",
  },
  {
    src: "https://cdn.myanimelist.net/images/anime/13/50871l.jpg",
    title: "Sengoku Basara Movie: The Last Party",
  },
];

export default function AnimeLove() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="love">
      <div className="love-overview">
        <button tabIndex="up" onClick={handlePrev}>
          ⯅
        </button>
        <div className="love-image">
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].title}
          />
        </div>
        <p>
          Wee ♥︎{" "}
          <span style={{ color: "#0377b9" }}>{images[currentIndex].title}</span>
        </p>
        <button className="arrow" tabIndex="down" onClick={handleNext}>
          ⯆
        </button>
      </div>
    </div>
  );
}
