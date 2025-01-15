import { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";

export default function AnimeByStudio() {
  const [studioMasterpiece, setStudioMasterpiece] = useState([]);
  const [loadingImage, setLoadingImage] = useState(false);
  const [selectedStudio, setSelectedStudio] = useState("Studio Ghibli");

  useEffect(() => {
    fetch("./anime-studio-data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
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
    setLoadingImage(true);
    setSelectedStudio(studio);
    setTimeout(() => {
      setLoadingImage(false);
    }, 1000);
  };

  const selectedStudioImage = studioMasterpiece.find(
    (studio) => studio.studio === selectedStudio
  )?.image;

  return (
    <Fade triggerOnce delay={250} duration={1000}>
      <div id="masterpiece" className="masterpiece">
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
                onClick={
                  !loadingImage
                    ? () => handleStudioClick(studio.studio)
                    : undefined
                }
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
              <div
                className="studio-image"
                style={
                  !loadingImage
                    ? { transition: "1s" }
                    : {
                        filter: "blur(0.1rem)",
                      }
                }
              >
                <small>𑁍</small>
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
                color: "var(--color-white)",
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
    </Fade>
  );
}
