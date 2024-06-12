/* eslint-disable no-unused-vars */
import React, { useState } from "react";

/* eslint-disable react/prop-types */
function AnimeListLegacy({
  animeLegacy,
  onSelectedAnimeLegacy,
  isSelectedLegacy,
}) {
  return (
    <li
      tabIndex={animeLegacy.mal_id}
      onClick={() => onSelectedAnimeLegacy(animeLegacy)}
      className={isSelectedLegacy ? "selected" : ""}
    >
      {animeLegacy.images &&
      animeLegacy.images.jpg &&
      animeLegacy.images.jpg.large_image_url ? (
        <>
          <img
            src={animeLegacy.images.jpg.large_image_url}
            alt={`${animeLegacy.title} Cover`}
            style={
              animeLegacy.rating === "Rx - Hentai"
                ? {
                    filter: "grayscale(1) brightness(0.3) contrast(0.3)",
                    opacity: "0.7",
                  }
                : {}
            }
          />
          <h3>{animeLegacy.title}</h3>
          <div>
            <p>
              <span>
                {animeLegacy.aired.prop.from.year
                  ? animeLegacy.aired.prop.from.year
                  : "Year"}
              </span>
            </p>
          </div>
        </>
      ) : (
        <>
          <img src={animeLegacy.image} alt="Anime Cover" />
          <h3>{animeLegacy.title}</h3>
          <div>
            <p>
              <span>{animeLegacy.year}</span>
            </p>
          </div>
        </>
      )}
    </li>
  );
}

export default function AnimeLegacy({ animesLegacy, onSelectedAnimeLegacy }) {
  const [selectedAnimeLegacyId, setSelectedAnimeLegacyId] = useState(null);

  const handleSelectedAnimeLegacy = (animeLegacy) => {
    setSelectedAnimeLegacyId(animeLegacy.mal_id);
    onSelectedAnimeLegacy(animeLegacy);
  };

  return (
    <ul className="list list-anime">
      {animesLegacy?.map((animeLegacy) => (
        <AnimeListLegacy
          animeLegacy={animeLegacy}
          onSelectedAnimeLegacy={handleSelectedAnimeLegacy}
          key={animeLegacy.mal_id}
          isSelectedLegacy={animeLegacy.mal_id === selectedAnimeLegacyId}
        />
      ))}
    </ul>
  );
}
