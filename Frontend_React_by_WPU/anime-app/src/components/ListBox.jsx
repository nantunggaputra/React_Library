/* eslint-disable react/prop-types */
import { useState } from "react";
import Anime from "./Anime";
import AnimeLegacy from "./AnimeLegacy";

export default function ListBox({ animes, onSelectedAnime, legacy }) {
  const toggleOpen = (setIsOpen) => () => setIsOpen((open) => !open);
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className="box"
      style={animes.length > 1 ? {} : { overflow: "hidden" }}
    >
      <button className="btn-toggle" onClick={toggleOpen(setIsOpen)}>
        {isOpen ? "+" : "±"}
      </button>
      {isOpen &&
        (legacy ? (
          <AnimeLegacy
            animesLegacy={animes}
            onSelectedAnimeLegacy={onSelectedAnime}
          />
        ) : (
          <Anime animes={animes} onSelectedAnime={onSelectedAnime} />
        ))}
    </div>
  );
}
