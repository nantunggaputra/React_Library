/* eslint-disable react/prop-types */
import { useState } from "react";
import AnimeDetail from "./AnimeDetail";
import AnimeDetailLegacy from "./AnimeDetailLegacy";

export default function SelectedBox({ selectedAnime, legacy }) {
  const toggleOpen = (setIsOpen) => () => setIsOpen((open) => !open);
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="box">
      <button className="btn-toggle" onClick={toggleOpen(setIsOpen)}>
        {isOpen ? "+" : "±"}
      </button>
      {isOpen &&
        (legacy ? (
          <AnimeDetailLegacy selectedAnimeLegacy={selectedAnime} />
        ) : (
          <AnimeDetail selectedAnime={selectedAnime} />
        ))}
    </div>
  );
}
