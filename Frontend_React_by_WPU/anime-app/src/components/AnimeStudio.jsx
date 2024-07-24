import { useState, useEffect } from "react";

export default function AnimeByStudio() {
  const [studioMasterpiece, setStudioMasterpiece] = useState([]);
  const [selectedStudio, setSelectedStudio] = useState("Studio Ghibli");

  useEffect(() => {
    fetch("./anime-studio-data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("No Network");
        }
        return response.json();
      })
      .then((data) => {
        setStudioMasterpiece(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleStudioClick = (studio) => {
    setSelectedStudio(studio);
  };

  const selectedStudioImage = studioMasterpiece.find(
    (studio) => studio.studio === selectedStudio
  )?.image;

  return (
    <>
      <div className="masterpiece">
        <div className="ornament"></div>
        <h2>
          <span style={{ color: "var(--color-red)" }}>
            {studioMasterpiece.length > 0 ? selectedStudio : "The Gift"}
          </span>{" "}
          {studioMasterpiece.length > 0 ? "Masterpiece" : "from Studio Anime"}
        </h2>
      </div>
      <div className="studio">
        {selectedStudioImage && (
          <div className="studio-all">
            {studioMasterpiece.map((studio) => (
              <button
                key={studio.studio}
                onClick={() => handleStudioClick(studio.studio)}
                className={studio.studio === selectedStudio ? "selected" : ""}
              >
                {studio.studio}
              </button>
            ))}
          </div>
        )}
        <div className="studio-overview">
          {selectedStudioImage ? (
            <>
              <div className="studio-image">
                <small>✦</small>
                <img
                  src={selectedStudioImage.src}
                  alt={selectedStudioImage.title}
                />
              </div>
              <p>
                <span>{selectedStudioImage.title}</span>
              </p>
            </>
          ) : (
            <h2
              style={{
                color: "var(--color-text)",
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%) translateY(16rem)",
                cursor: "default",
              }}
            >
              Please wait...
            </h2>
          )}
        </div>
        <div className="ornament"></div>
      </div>
    </>
  );
}
