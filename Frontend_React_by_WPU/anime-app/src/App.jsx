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
    <section className="loading-page">
      <header>
        <h1>WeeBoo</h1>
        <h2>&times;</h2>
        <h2>Detective Conan</h2>
      </header>
      <article>
        <figure>
          <audio src="There is Always Only One Truth.aac" controls />
        </figure>
      </article>
      <footer>
        <span>
          <b>from</b>
        </span>
        <span>
          <b>Anime-App</b>
        </span>
      </footer>
    </section>
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
    try {
      const data = await fetchAnimeData(query);
      setAnimes(data);
      setSelectedAnime(data[0]);
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      alert(
        `${error}\nMinna-san! An error occurred in the result data. Please enter the correct title or try again later.`
      );
      window.location.reload();
      return [];
    }
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
