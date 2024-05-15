/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
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

export default function Main({ animes, selectedAnime, onSelectedAnime }) {
  return (
    <main className="main">
      {animes.length > 0 && (
        <ListBox animes={animes} onSelectedAnime={onSelectedAnime} />
      )}
      {selectedAnime && <SelectedBox selectedAnime={selectedAnime} />}
    </main>
  );
}
