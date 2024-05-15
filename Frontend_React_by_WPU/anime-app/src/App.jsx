/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import axios from "axios";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";

const animesData = [
  {
    mal_id: 1000000000,
    title: "What is the best anime for you? Let's Search",
    year: 2024,
    image: "https://cdn.myanimelist.net/images/anime/7/75199.jpg",
    score: 10,
    synopsis: "",
  },
];

export default function App() {
  const [animes, setAnimes] = useState(animesData);
  const [selectedAnime, setSelectedAnime] = useState(null);

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

  return (
    <>
      <Navbar fetchAnime={fetchAnime} />
      <Main
        animes={animes}
        fetchAnime={fetchAnime}
        selectedAnime={selectedAnime}
        onSelectedAnime={handleSelectedAnime}
      />
      <Footer />
    </>
  );
}
