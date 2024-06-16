/* eslint-disable react/prop-types */
import { useState } from "react";
import AnimeLegacy from "./AnimeLegacy";
import AnimeDetailLegacy from "./AnimeDetailLegacy";

const toggleOpen = (setIsOpen) => () => setIsOpen((open) => !open);

function ListBox({ animesLegacy, onSelectedAnimeLegacy }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className="box"
      style={animesLegacy.length > 1 ? {} : { overflow: "hidden" }}
    >
      <button className="btn-toggle" onClick={toggleOpen(setIsOpen)}>
        {isOpen ? "+" : "±"}
      </button>
      {isOpen && (
        <AnimeLegacy
          animesLegacy={animesLegacy}
          onSelectedAnimeLegacy={onSelectedAnimeLegacy}
        />
      )}
    </div>
  );
}

function SelectedBox({ selectedAnimeLegacy }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="box">
      <button className="btn-toggle" onClick={toggleOpen(setIsOpen)}>
        {isOpen ? "+" : "±"}
      </button>
      {isOpen && (
        <AnimeDetailLegacy selectedAnimeLegacy={selectedAnimeLegacy} />
      )}
    </div>
  );
}

let hasData = (data) => data !== 0;

function MainLegacyResult({ animesLegacy }) {
  return (
    <>
      <br />
      <p
        className="search-results"
        style={{ margin: "0.2rem auto -0.4rem", cursor: "default" }}
      >
        <span>{hasData(animesLegacy.length) ? "Remember" : "Yameru"}</span>{" "}
        <strong>
          {hasData(animesLegacy.length)
            ? "Sunday Morning? Wee present The Best 2000s childhood anime..."
            : "Minna-san! Please wait or you can Reload to get this anime..."}
        </strong>
      </p>
      <br />
    </>
  );
}

export default function MainLegacy({
  animesLegacy,
  selectedAnimeLegacy,
  onSelectedAnimeLegacy,
}) {
  return (
    <>
      <MainLegacyResult animesLegacy={animesLegacy} />
      <div className="main-legacy">
        {selectedAnimeLegacy && (
          <SelectedBox selectedAnimeLegacy={selectedAnimeLegacy} />
        )}
        <ListBox
          animesLegacy={animesLegacy}
          onSelectedAnimeLegacy={onSelectedAnimeLegacy}
        />
      </div>
    </>
  );
}
