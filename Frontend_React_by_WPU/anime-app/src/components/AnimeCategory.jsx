import { useState, useEffect } from "react";
import { fetchAnimeByCategoryData } from "../service/animeCategoryService";
import { Fade } from "react-awesome-reveal";

export default function AnimeByCategory() {
  const categories = ["Season Now", "Top Anime", "Top Manga", "Top Characters"];
  const [selectedCategory, setSelectedCategory] = useState("");
  const [animeList, setAnimeList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingImage, setLoadingImage] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const fetchAnimeByCategory = async (category) => {
    setLoading(true);
    try {
      const data = await fetchAnimeByCategoryData(category);
      setAnimeList(data);
      setCurrentIndex(0);
    } catch (error) {
      console.log("Error fetching data:", error);
      setAnimeList([]);
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
    setLoadingImage(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? animeList.length - 1 : prevIndex - 1
    );
    setTimeout(() => {
      setLoadingImage(false);
    }, 1000);
  };

  const handleNext = () => {
    setLoadingImage(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === animeList.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => {
      setLoadingImage(false);
    }, 1000);
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
    <Fade triggerOnce delay={250} duration={1000}>
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
              color: "var(--color-white)",
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
                  <button
                    tabIndex="up"
                    onClick={!loadingImage ? handlePrev : undefined}
                  >
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
                        !loadingImage && selectedCategory == "Top Characters"
                          ? {
                              border: "0.2rem solid var(--color-white)",
                              filter: "grayscale(1)",
                              display: "block",
                              margin: "0 auto",
                            }
                          : !loadingImage &&
                            selectedCategory != "Top Characters"
                          ? { display: "block", margin: "0 auto" }
                          : loadingImage && selectedCategory != "Top Characters"
                          ? {
                              display: "block",
                              margin: "0 auto",
                              filter: "blur(0.1rem)",
                            }
                          : {
                              border: "0.2rem solid var(--color-white)",
                              display: "block",
                              margin: "0 auto",
                              filter: "grayscale(1) blur(0.25rem)",
                            }
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
                    onClick={!loadingImage ? handleNext : undefined}
                  >
                    ⥥
                  </button>
                </>
              )}
        </div>
      </div>
    </Fade>
  );
}
