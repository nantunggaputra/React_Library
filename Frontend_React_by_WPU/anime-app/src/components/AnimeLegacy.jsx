/* eslint-disable react/prop-types */
import { useState } from "react";

function AnimeListLegacy({
  animeLegacy,
  onSelectedAnimeLegacy,
  isSelectedLegacy,
}) {
  const { mal_id, title, images, aired, image, year } = animeLegacy;

  const largeImageUrl = images?.jpg?.large_image_url;
  const airedYear = aired?.prop?.from?.year;

  return (
    <li
      tabIndex={mal_id}
      onClick={() => onSelectedAnimeLegacy(animeLegacy)}
      className={isSelectedLegacy ? "selected" : ""}
    >
      {largeImageUrl ? (
        <>
          <img src={largeImageUrl} alt={title} />
          <h3>{title}</h3>
          <div>
            <p>
              <span>{airedYear || "Year"}</span>
            </p>
          </div>
        </>
      ) : (
        <>
          <img src={image} alt={title} />
          <h3>{title}</h3>
          <div>
            <p>
              <span>{year}</span>
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
          key={animeLegacy.mal_id}
          animeLegacy={animeLegacy}
          onSelectedAnimeLegacy={handleSelectedAnimeLegacy}
          isSelectedLegacy={animeLegacy.mal_id === selectedAnimeLegacyId}
        />
      ))}
    </ul>
  );
}
