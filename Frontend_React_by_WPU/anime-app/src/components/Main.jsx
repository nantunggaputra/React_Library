/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import Anime from "./Anime";
import AnimeDetail from "./AnimeDetail";

function ListBox({ animes, onSelectedAnime }) {
  const [isOpen1, setIsOpen1] = useState(true);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen1((open) => !open)}
      >
        {isOpen1 ? "+" : "±"}
      </button>
      {isOpen1 && <Anime animes={animes} onSelectedAnime={onSelectedAnime} />}
    </div>
  );
}

function SelectedBox({ selectedAnime }) {
  const [isOpen2, setIsOpen2] = useState(true);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen2((open) => !open)}
      >
        {isOpen2 ? "+" : "±"}
      </button>
      {isOpen2 && <AnimeDetail selectedAnime={selectedAnime} />}
    </div>
  );
}

export default function Main({ animes }) {
  const [selectedAnime, setSelectedAnime] = useState(animes[0]);

  function handleSelectedAnime(id) {
    const newAnime = animes.filter((anime) => anime.mal_id === id);
    setSelectedAnime(newAnime[0]);
  }

  return (
    <main className="main">
      <ListBox animes={animes} onSelectedAnime={handleSelectedAnime} />
      <SelectedBox selectedAnime={selectedAnime} />
    </main>
  );
}
