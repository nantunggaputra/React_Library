/* eslint-disable react/prop-types */
import { useState } from "react";
import AnimeLegacy from "./AnimeLegacy";
import AnimeDetailLegacy from "./AnimeDetailLegacy";

function MainLegacyResult() {
  return (
    <>
      <br />
      <p className="search-results" style={{ margin: "0.2rem auto -0.4rem" }}>
        <span>Remember</span>{" "}
        <strong>
          Sunday Morning? Wee present The Best 2000s childhood anime...
        </strong>
      </p>
      <br />
    </>
  );
}

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

export default function MainLegacy({
  animesLegacy,
  selectedAnimeLegacy,
  onSelectedAnimeLegacy,
}) {
  return (
    <>
      <MainLegacyResult />
      <div className="main-legacy">
        {selectedAnimeLegacy && (
          <SelectedBox selectedAnimeLegacy={selectedAnimeLegacy} />
        )}
        {animesLegacy.length > 0 && (
          <ListBox
            animesLegacy={animesLegacy}
            onSelectedAnimeLegacy={onSelectedAnimeLegacy}
          />
        )}
      </div>
    </>
  );
}
