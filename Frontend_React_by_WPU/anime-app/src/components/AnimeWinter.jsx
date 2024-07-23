import { useState } from "react";

export default function AnimeWinter() {
  const categories = ["Sponsored", "Featured", "Remake", "Hiatus"];
  const [selectedCategory, setSelectedCategory] = useState("Featured");

  const userTimeHours = new Date().getHours();

  const getImageByTime = (time, imageOptions) => {
    for (let option of imageOptions) {
      if (time < option.limit) {
        return [option.image];
      }
    }
    return [imageOptions[imageOptions.length - 1].image];
  };

  const imageSponsoredOptions = [
    {
      limit: 8,
      image: {
        src: "https://cdn.myanimelist.net/images/anime/1003/142645l.jpg",
        title: "T.P BON",
      },
    },
    {
      limit: 14,
      image: {
        src: "https://cdn.myanimelist.net/images/anime/1801/142390l.jpg",
        title: "Ore dake Level Up na Ken",
      },
    },
    {
      limit: 20,
      image: {
        src: "https://cdn.myanimelist.net/images/anime/1948/143550l.jpg",
        title: "Sengoku Youko: Senma Konton-hen",
      },
    },
    {
      limit: 24,
      image: {
        src: "https://cdn.myanimelist.net/images/anime/1239/140803l.jpg",
        title: "Ao no Exorcist: Shimane Illuminati-hen",
      },
    },
  ];

  const imageFeaturedOptions = [
    {
      limit: 4,
      image: {
        src: "https://cdn.myanimelist.net/images/anime/1607/143049l.jpg",
        title: "Mahoutsukai no Yakusoku",
      },
    },
    {
      limit: 8,
      image: {
        src: "https://cdn.myanimelist.net/images/anime/1799/139199l.jpg",
        title: "Medalist",
      },
    },
    {
      limit: 12,
      image: {
        src: "https://cdn.myanimelist.net/images/anime/1530/143202l.jpg",
        title: "Momentary Lily",
      },
    },
    {
      limit: 16,
      image: {
        src: "https://cdn.myanimelist.net/images/anime/1011/142918l.jpg",
        title: "Izure Saikyou no Renkinjutsushi?",
      },
    },
    {
      limit: 20,
      image: {
        src: "https://cdn.myanimelist.net/images/anime/1501/143569l.jpg",
        title: "NEET Kunoichi to Nazeka Dousei Hajimemashita",
      },
    },
    {
      limit: 24,
      image: {
        src: "https://cdn.myanimelist.net/images/anime/1718/143481l.jpg",
        title: "Kimi no Koto ga Daidaisuki na 100-nin no Kanojo 2nd Season",
      },
    },
  ];

  const imageRemakeOptions = [
    {
      limit: 8,
      image: {
        src: "https://cdn.myanimelist.net/images/anime/1105/140422l.jpg",
        title: "The One Piece",
      },
    },
    {
      limit: 14,
      image: {
        src: "https://cdn.myanimelist.net/images/anime/1426/129194l.jpg",
        title: "Trigun Stampede",
      },
    },
    {
      limit: 20,
      image: {
        src: "https://cdn.myanimelist.net/images/anime/1599/136532l.jpg",
        title: "Rurouni Kenshin: Meiji Kenkaku Romantan",
      },
    },
    {
      limit: 24,
      image: {
        src: "https://cdn.myanimelist.net/images/anime/1059/142414l.jpg",
        title: "Ookami to Koushinryou: Merchant Meets the Wise Wolf",
      },
    },
  ];

  const imageHiatus = [
    {
      src: "https://cdn.myanimelist.net/images/anime/3/67807l.jpg",
      title: "Magic Kaito 1412",
    },
  ];

  const imageSponsored = getImageByTime(userTimeHours, imageSponsoredOptions);
  const imageFeatured = getImageByTime(userTimeHours, imageFeaturedOptions);
  const imageRemake = getImageByTime(userTimeHours, imageRemakeOptions);

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
          <span style={{ color: "var(--color-red)" }}>{selectedCategory}</span>{" "}
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
                (selectedCategory === "Hiatus" && "zᶻ")}
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
