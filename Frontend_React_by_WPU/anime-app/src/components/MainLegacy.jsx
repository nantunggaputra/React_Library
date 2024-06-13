/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import AnimeLegacy from "./AnimeLegacy";
import AnimeDetailLegacy from "./AnimeDetailLegacy";

function TextResult() {
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

function ListBox({ animesLegacy, onSelectedAnimeLegacy }) {
  const [isOpen1, setIsOpen1] = useState(true);

  return (
    <div
      className="box"
      style={animesLegacy.length > 1 ? {} : { overflow: "hidden" }}
    >
      <button
        className="btn-toggle"
        onClick={() => setIsOpen1((open) => !open)}
      >
        {isOpen1 ? "+" : "±"}
      </button>
      {isOpen1 && (
        <AnimeLegacy
          animesLegacy={animesLegacy}
          onSelectedAnimeLegacy={onSelectedAnimeLegacy}
        />
      )}
    </div>
  );
}

function SelectedBox({ selectedAnimeLegacy }) {
  const [isOpen2, setIsOpen2] = useState(true);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen2((open) => !open)}
      >
        {isOpen2 ? "+" : "±"}
      </button>
      {isOpen2 && (
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
      <TextResult />
      <div className="main">
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
