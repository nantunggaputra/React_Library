/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Anime from "./Anime";
import AnimeDetail from "./AnimeDetail";
import AnimeLove from "./AnimeLove";
import AnimeWinter from "./AnimeWinter";
import MainLegacy from "./MainLegacy";
import AnimeByCategory from "./AnimeCategory";

const fetchDataComplete = (data) => data !== "No Data";

const toggleOpen = (setIsOpen) => () => setIsOpen((open) => !open);

function ListBox({ animes, onSelectedAnime }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className="box"
      style={animes.length > 1 ? {} : { overflow: "hidden" }}
    >
      <button className="btn-toggle" onClick={toggleOpen(setIsOpen)}>
        {isOpen ? "+" : "±"}
      </button>
      {isOpen && <Anime animes={animes} onSelectedAnime={onSelectedAnime} />}
    </div>
  );
}

function SelectedBox({ selectedAnime }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="box">
      <button className="btn-toggle" onClick={toggleOpen(setIsOpen)}>
        {isOpen ? "+" : "±"}
      </button>
      {isOpen && <AnimeDetail selectedAnime={selectedAnime} />}
    </div>
  );
}

export default function Main({ animes, selectedAnime, onSelectedAnime }) {
  const [animeLegacyData, setAnimeLegacyData] = useState([]);
  const [selectedAnimeLegacy, setSelectedAnimeLegacy] = useState(null);

  useEffect(() => {
    fetch("./anime-legacy-data.json")
      .then((response) => response.json())
      .then((data) => {
        setAnimeLegacyData(data);
        setSelectedAnimeLegacy(data[0]);
      });
  }, []);

  const handleSelectedAnimeLegacy = (animeLegacy) => {
    setSelectedAnimeLegacy(animeLegacy);
  };

  return (
    <>
      <main className="main">
        {selectedAnime && fetchDataComplete(selectedAnime.mal_id) && (
          <SelectedBox selectedAnime={selectedAnime} />
        )}
        {animes.length > 0 && (
          <ListBox animes={animes} onSelectedAnime={onSelectedAnime} />
        )}
      </main>
      {selectedAnime && fetchDataComplete(selectedAnime.mal_id) && (
        <div className="box-separator"></div>
      )}
      <AnimeLove />
      <AnimeWinter />
      <MainLegacy
        animesLegacy={animeLegacyData}
        selectedAnimeLegacy={selectedAnimeLegacy}
        onSelectedAnimeLegacy={handleSelectedAnimeLegacy}
      />
      <AnimeByCategory />
    </>
  );
}
