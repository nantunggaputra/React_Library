import { useState } from "react";

export default function AnimeWinter() {
  const categories = ["Sponsored", "Featured", "Remake", "Hiatus"];
  const [selectedCategory, setSelectedCategory] = useState("Featured");

  const userTimeHours = new Date().getHours();

  const imageSponsored =
    userTimeHours < 8
      ? [
          {
            src: "https://cdn.myanimelist.net/images/anime/1003/142645l.jpg",
            title: "T.P BON",
          },
        ]
      : userTimeHours < 14
      ? [
          {
            src: "https://cdn.myanimelist.net/images/anime/1801/142390l.jpg",
            title: "Ore dake Level Up na Ken",
          },
        ]
      : userTimeHours < 20
      ? [
          {
            src: "https://cdn.myanimelist.net/images/anime/1948/143550l.jpg",
            title: "Sengoku Youko: Senma Konton-hen",
          },
        ]
      : [
          {
            src: "https://cdn.myanimelist.net/images/anime/1239/140803l.jpg",
            title: "Ao no Exorcist: Shimane Illuminati-hen",
          },
        ];

  const imageFeatured =
    userTimeHours < 4
      ? [
          {
            src: "https://cdn.myanimelist.net/images/anime/1799/139199l.jpg",
            title: "Medalist",
          },
        ]
      : userTimeHours < 8
      ? [
          {
            src: "https://cdn.myanimelist.net/images/anime/1607/143049l.jpg",
            title: "Mahoutsukai no Yakusoku",
          },
        ]
      : userTimeHours < 12
      ? [
          {
            src: "https://cdn.myanimelist.net/images/anime/1530/143202l.jpg",
            title: "Momentary Lily",
          },
        ]
      : userTimeHours < 16
      ? [
          {
            src: "https://cdn.myanimelist.net/images/anime/1011/142918l.jpg",
            title: "Izure Saikyou no Renkinjutsushi?",
          },
        ]
      : userTimeHours < 20
      ? [
          {
            src: "https://cdn.myanimelist.net/images/anime/1501/143569l.jpg",
            title: "NEET Kunoichi to Nazeka Dousei Hajimemashita",
          },
        ]
      : [
          {
            src: "https://cdn.myanimelist.net/images/anime/1718/143481l.jpg",
            title: "Kimi no Koto ga Daidaisuki na 100-nin no Kanojo 2nd Season",
          },
        ];

  const imageRemake =
    userTimeHours < 8
      ? [
          {
            src: "https://cdn.myanimelist.net/images/anime/1105/140422l.jpg",
            title: "The One Piece",
          },
        ]
      : userTimeHours < 14
      ? [
          {
            src: "https://cdn.myanimelist.net/images/anime/1426/129194l.jpg",
            title: "Trigun Stampede",
          },
        ]
      : userTimeHours < 20
      ? [
          {
            src: "https://cdn.myanimelist.net/images/anime/1599/136532l.jpg",
            title: "Rurouni Kenshin: Meiji Kenkaku Romantan",
          },
        ]
      : [
          {
            src: "https://cdn.myanimelist.net/images/anime/1059/142414l.jpg",
            title: "Ookami to Koushinryou: Merchant Meets the Wise Wolf",
          },
        ];

  const imageHiatus = [
    {
      src: "https://cdn.myanimelist.net/images/anime/13/46095l.jpg",
      title: "Magic Kaito",
    },
  ];

  const images = {
    Sponsored: imageSponsored,
    Featured: imageFeatured,
    Remake: imageRemake,
    Hiatus: imageHiatus,
  };

  const selectedImage = images[selectedCategory];

  return (
    <>
      <div className="featured">
        <h2>
          <span style={{ color: "#d372b8" }}>{selectedCategory}</span>{" "}
          {selectedCategory === "Featured" ? "in Winter Anime" : "Anime"}
        </h2>
      </div>
      <div className="winter">
        <div className="winter-all">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={category === selectedCategory ? "selected" : ""}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="winter-overview">
          <div className="winter-image">
            <small>
              {(selectedCategory === "Sponsored" && "$") ||
                (selectedCategory === "Featured" && "❅ ❄ ❆") ||
                (selectedCategory === "Remake" && "♲") ||
                (selectedCategory === "Hiatus" && "zᶻ ⏱")}
            </small>
            <img src={selectedImage[0].src} alt={selectedImage[0].title} />
          </div>
          <p>
            <span>{selectedImage[0].title}</span>
          </p>
        </div>
      </div>
    </>
  );
}
