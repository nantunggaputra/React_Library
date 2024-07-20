/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import SelectedBox from "./SelectedBox";
import ListBox from "./ListBox";
import AnimeLove from "./AnimeLove";
import AnimeWinter from "./AnimeWinter";
import MainLegacy from "./MainLegacy";
import AnimeByCategory from "./AnimeCategory";
import AnimeByStudio from "./AnimeStudio";

const hasData = (data) => data !== "No Data";

function MainPage({ animes, selectedAnime, onSelectedAnime }) {
  return (
    <>
      <main className="main">
        {selectedAnime && hasData(selectedAnime.mal_id) && (
          <SelectedBox selectedAnime={selectedAnime} />
        )}
        {animes.length > 0 && (
          <ListBox animes={animes} onSelectedAnime={onSelectedAnime} />
        )}
      </main>
      {selectedAnime && hasData(selectedAnime.mal_id) && (
        <div className="box-separator"></div>
      )}
    </>
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
      <MainPage
        animes={animes}
        selectedAnime={selectedAnime}
        onSelectedAnime={onSelectedAnime}
      />
      <AnimeLove />
      <AnimeWinter />
      <MainLegacy
        animesLegacy={animeLegacyData}
        selectedAnimeLegacy={selectedAnimeLegacy}
        onSelectedAnimeLegacy={handleSelectedAnimeLegacy}
      />
      <AnimeByCategory />
      <AnimeByStudio />
    </>
  );
}
