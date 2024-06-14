import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Aside from "./components/Aside";
import Channels from "./components/Channels";
import Separator from "./components/Separator";
import Footer from "./components/Footer";

const animesData = [
  {
    mal_id: "No Search Result",
    title: "Minna? What is the best anime for you? Let's Search",
    year: 2024,
    image: "https://cdn.myanimelist.net/images/anime/7/75199.jpg",
  },
];

export default function App() {
  const [animes, setAnimes] = useState(animesData);
  const [selectedAnime, setSelectedAnime] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchAnime = async (query) => {
    try {
      const response = await axios.get(
        `https://api.jikan.moe/v4/anime?q=${query}&limit=25`
      );
      const fetchedAnimes = response.data.data;
      setAnimes(fetchedAnimes);
      setSelectedAnime(fetchedAnimes.length > 0 ? fetchedAnimes[0] : null);
      return fetchedAnimes;
    } catch (error) {
      console.error("Error fetching data:", error);
      setTimeout(() => {
        alert(
          `${error}\nMinna-san! An error occurred in the result data. Please enter another anime title or try again later.`
        );
        window.location.reload();
      });
      return [];
    }
  };

  const handleSelectedAnime = (anime) => {
    setSelectedAnime(anime);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-page">
        <h1></h1>
      </div>
    );
  }

  return (
    <>
      <Background />
      <Navbar fetchAnime={fetchAnime} />
      <Main
        animes={animes}
        fetchAnime={fetchAnime}
        selectedAnime={selectedAnime}
        onSelectedAnime={handleSelectedAnime}
      />
      <Aside />
      <Channels />
      <Separator />
      <Footer />
    </>
  );
}
