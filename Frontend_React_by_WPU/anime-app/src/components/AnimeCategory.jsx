/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import axios from "axios";

const categories = ["Season Now", "Top Anime", "Top Manga", "Top Characters"];

export default function AnimeByCategory() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [animeList, setAnimeList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const fetchAnimeByCategory = async (category) => {
    setLoading(true);
    try {
      const url =
        (category === "Season Now" && `https://api.jikan.moe/v4/seasons/now`) ||
        (category === "Top Anime" && `https://api.jikan.moe/v4/top/anime`) ||
        (category === "Top Manga" && `https://api.jikan.moe/v4/top/manga`) ||
        (category === "Top Characters" &&
          `https://api.jikan.moe/v4/top/characters`);

      const response = await axios.get(url);
      if (response.data.data) {
        setAnimeList(response.data.data);
        setCurrentIndex(0);
      } else {
        setAnimeList([]);
      }
    } catch (error) {
      console.log("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (selectedCategory) {
      fetchAnimeByCategory(selectedCategory);
    }
  }, [selectedCategory]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? animeList.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === animeList.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <div id="choose" className="choose">
        <h2>
          <span style={{ color: "#fcbe14" }}>Recommended</span> for you
        </h2>
      </div>
      <div className="category" style={{ minHeight: "43rem" }}>
        <div className="category-all">
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
        <div className="category-overview">
          <h2
            style={{
              color: "#e1e8ed",
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%) translateY(22rem)",
            }}
          >
            {selectedCategory
              ? loading && "Please wait..."
              : "Sensei! Select a category"}
          </h2>
          {loading
            ? ""
            : animeList.length > 0 && (
                <>
                  <button tabIndex="up" onClick={handlePrev}>
                    ⥣
                  </button>
                  <div className="category-image">
                    <img
                      style={
                        selectedCategory == "Top Characters"
                          ? {
                              border: "0.2rem solid #e1e8ed",
                              filter: "grayscale(1)",
                              display: "block",
                              margin: "0 auto",
                            }
                          : { display: "block", margin: "0 auto" }
                      }
                      src={animeList[currentIndex].images.jpg.image_url}
                      alt={
                        animeList[currentIndex].title ||
                        animeList[currentIndex].name
                      }
                    />
                    <p style={{ color: "#0377b9" }}>
                      {animeList[currentIndex].title ||
                        animeList[currentIndex].name}
                    </p>
                  </div>
                  <button
                    className="arrow"
                    tabIndex="down"
                    onClick={handleNext}
                  >
                    ⥥
                  </button>
                </>
              )}
        </div>
      </div>
    </>
  );
}
