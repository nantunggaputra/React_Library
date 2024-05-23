import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Separator from "./components/Separator";

const animesData = [
  {
    mal_id: 1000000000,
    title: "Sensei? What is the best anime for you? Let's Search",
    year: 2024,
    image: "https://cdn.myanimelist.net/images/anime/7/75199.jpg",
    score: 10,
    synopsis: "",
  },
];

export default function App() {
  const [animes, setAnimes] = useState(animesData);
  const [selectedAnime, setSelectedAnime] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchAnime = async (query) => {
    try {
      const response = await axios.get(
        `https://api.jikan.moe/v4/anime?q=${query}`
      );
      const fetchedAnimes = response.data.data;
      setAnimes(fetchedAnimes);
      setSelectedAnime(fetchedAnimes.length > 0 ? fetchedAnimes[0] : null);
      return fetchedAnimes;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  };

  const handleSelectedAnime = (anime) => {
    setSelectedAnime(anime);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <div className="loading-page"></div>;
  }

  return (
    <>
      <div className="background-container">
        <div className="clouds"></div>
      </div>
      <Navbar fetchAnime={fetchAnime} />
      <Main
        animes={animes}
        fetchAnime={fetchAnime}
        selectedAnime={selectedAnime}
        onSelectedAnime={handleSelectedAnime}
      />
      <Separator />
      <Footer />
      <div className="gototop">
        <div className="container">
          <a href="#">
            <button>🠅</button>
          </a>
        </div>
      </div>
    </>
  );
}
