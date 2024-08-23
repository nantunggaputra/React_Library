import { useState, useEffect } from "react";
import { fetchAnimeData } from "./service/animeService";
import "./App.css";
import Background from "./components/Background";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Aside from "./components/Aside";
import Separator from "./components/Separator";
import Footer from "./components/Footer";

function LoadingPage() {
  return (
    <div className="loading-page">
      <h1></h1>
    </div>
  );
}

function ContentPage() {
  const initialAnimesData = [
    {
      mal_id: "No Data",
      title: "Minna-san? What is the best anime for you?",
      year: 2024,
      image: "https://cdn.myanimelist.net/images/anime/7/75199.jpg",
    },
  ];

  const [animes, setAnimes] = useState(initialAnimesData);
  const [selectedAnime, setSelectedAnime] = useState(null);

  const fetchAnime = async (query) => {
    const fetchedAnimes = await fetchAnimeData(query);
    setAnimes(fetchedAnimes);
    setSelectedAnime(fetchedAnimes[0] || null);
    return fetchedAnimes;
  };

  const handleSelectedAnime = (anime) => {
    setSelectedAnime(anime);
  };

  return (
    <>
      <Background />
      <Header />
      <Navbar fetchAnime={fetchAnime} />
      <Main
        animes={animes}
        fetchAnime={fetchAnime}
        selectedAnime={selectedAnime}
        onSelectedAnime={handleSelectedAnime}
      />
      <Aside />
      <Separator />
      <Footer />
    </>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <LoadingPage />}
      {!isLoading && <ContentPage />}
    </>
  );
}
