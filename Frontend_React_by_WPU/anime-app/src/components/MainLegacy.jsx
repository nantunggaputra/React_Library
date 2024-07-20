/* eslint-disable react/prop-types */
import SelectedBox from "./SelectedBox";
import ListBox from "./ListBox";

const hasData = (data) => data !== 0;

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

function MainLegacyPage({
  animesLegacy,
  selectedAnimeLegacy,
  onSelectedAnimeLegacy,
}) {
  return (
    <>
      <main className="main-legacy">
        {selectedAnimeLegacy && (
          <SelectedBox selectedAnime={selectedAnimeLegacy} legacy={true} />
        )}
        {animesLegacy.length >= 0 && (
          <ListBox
            animes={animesLegacy}
            onSelectedAnime={onSelectedAnimeLegacy}
            legacy={true}
          />
        )}
      </main>
      {selectedAnimeLegacy && hasData(selectedAnimeLegacy.mal_id) && (
        <div className="box-separator"></div>
      )}
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
      <MainLegacyPage
        animesLegacy={animesLegacy}
        selectedAnimeLegacy={selectedAnimeLegacy}
        onSelectedAnimeLegacy={onSelectedAnimeLegacy}
      />
    </>
  );
}
