import { useState, useEffect } from "react";
import axios from "axios";

export default function AnimeByCategory() {
  const categories = ["Season Now", "Top Anime", "Top Manga", "Top Characters"];
  const [selectedCategory, setSelectedCategory] = useState("");
  const [animeList, setAnimeList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const fetchAnimeByCategory = async (category) => {
    setLoading(true);
    try {
      const url =
        (category === "Season Now" &&
          `https://api.jikan.moe/v4/seasons/now?limit=25`) ||
        (category === "Top Anime" &&
          `https://api.jikan.moe/v4/top/anime?limit=25`) ||
        (category === "Top Manga" &&
          `https://api.jikan.moe/v4/top/manga?limit=25`) ||
        (category === "Top Characters" &&
          `https://api.jikan.moe/v4/top/characters?limit=25`);

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

  let currentRank = "";

  if (currentIndex + 1 == 1 || currentIndex + 1 == 21) {
    currentRank = "ˢᵗ";
  } else if (currentIndex + 1 == 2 || currentIndex + 1 == 22) {
    currentRank = "ⁿᵈ";
  } else if (currentIndex + 1 == 3 || currentIndex + 1 == 23) {
    currentRank = "ʳᵈ";
  } else {
    currentRank = "ᵗʰ";
  }

  return (
    <>
      <div id="category" className="choose">
        <h2>
          <span style={{ color: "var(--color-orange)" }}>
            {selectedCategory ? selectedCategory : "Recommended"}
          </span>{" "}
          for you
        </h2>
      </div>
      <div className="category" style={{ minHeight: "43rem" }}>
        <div className="category-all">
          {categories.map((category) => (
            <button
              key={category}
              onClick={
                !loading ? () => setSelectedCategory(category) : undefined
              }
              className={category === selectedCategory ? "selected" : ""}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="category-overview">
          <h2
            style={{
              color: "var(--color-text)",
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%) translateY(22rem)",
              cursor: "default",
            }}
          >
            {selectedCategory ? loading && "Please wait..." : "Select Category"}
          </h2>
          {loading
            ? ""
            : animeList.length > 0 && (
                <>
                  <button tabIndex="up" onClick={handlePrev}>
                    ⥣
                  </button>
                  <div className="category-image">
                    <small>
                      {selectedCategory == "Season Now"
                        ? "▸"
                        : `${currentIndex + 1}${currentRank}`}
                    </small>
                    <img
                      style={
                        selectedCategory == "Top Characters"
                          ? {
                              border: "0.2rem solid var(--color-text)",
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
                    <p>
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
