import { useState, useEffect, useRef } from "react";

export default function Background() {
  const [connectionStatus, setConnectionStatus] = useState("offline");

  const updateOnlineStatus = () => {
    if (!navigator.onLine) {
      setConnectionStatus("offline");
      return;
    }

    setConnectionStatus("online");
  };

  useEffect(() => {
    window.addEventListener("online", updateOnlineStatus);
    window.addEventListener("offline", updateOnlineStatus);

    setInterval(function () {
      updateOnlineStatus();
    }, 1000);

    return () => {
      window.removeEventListener("online", updateOnlineStatus);
      window.removeEventListener("offline", updateOnlineStatus);
    };
  }, []);

  const [showOverlay, setShowOverlay] = useState(false);

  const handleShowOverlay = () => setShowOverlay(true);
  const handleCloseOverlay = () => setShowOverlay(false);

  const [isTransitionActive, setIsTransitionActive] = useState(true);
  const toggleTransition = () => {
    setIsTransitionActive(!isTransitionActive);
  };

  useEffect(() => {
    if (isTransitionActive) {
      document.body.classList.add("body-transition");
      document.querySelector(".silhouette-off").classList.add("silhouette-on");
    } else {
      document.body.classList.remove("body-transition");
      document
        .querySelector(".silhouette-off")
        .classList.remove("silhouette-on");
    }
  }, [isTransitionActive]);

  const [isAnimationActive, setIsAnimationActive] = useState(true);
  const toggleAnimation = () => {
    setIsAnimationActive(!isAnimationActive);
  };

  useEffect(() => {
    if (isAnimationActive) {
      document.querySelector(".background-container").classList.add("clouds");
    } else {
      document
        .querySelector(".background-container")
        .classList.remove("clouds");
    }
  }, [isAnimationActive]);

  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <div className="connection">
        <div className="container">
          <button
            onClick={
              connectionStatus === "offline"
                ? () => window.location.reload()
                : () => updateOnlineStatus()
            }
            title={
              connectionStatus === "offline"
                ? "No connection"
                : "You are online"
            }
            style={
              connectionStatus === "offline"
                ? { color: "#ff0000", fontSize: "2.5rem", cursor: "wait" }
                : { color: "#13e713", fontSize: "2.5rem", cursor: "progress" }
            }
          >
            •
          </button>
        </div>
      </div>
      <div className="informations">
        <div className="container">
          <button
            onClick={showOverlay ? handleCloseOverlay : handleShowOverlay}
            title="About WeeBoo"
          >
            <span style={{ fontSize: "1.2rem" }}>i</span>
          </button>
        </div>
      </div>
      {showOverlay && (
        <div className="about">
          <div className="about-container">
            <button onClick={handleCloseOverlay}>×</button>
            <img className="logo" src="WeeBoo.png" alt=" " />
            <div className="anime-app-version">
              <h1>WeeBoo</h1>
              <h5>v0.1.4-beta (Public Beta)</h5>
              <h4>WeeBoo from Anime-App</h4>
              <p>
                WeeBoo | My Anime List is a Front-End SPA (Single Page
                Application) Web project built using React to display a list of
                anime. This project uses Vite for bundling and Visual Studio
                Code as the code editor. Mostly anime data is fetched from the
                Jikan - Unofficial MyAnimeList API.
              </p>
              <p>
                WeeBoo is designed and developed by Nantungga Putra, also later
                dedicated development team under Open Source Contribution.
              </p>
              <p>
                For Developers,{" "}
                <b>
                  <a
                    href="https://github.com/nantunggaputra/React_Library/issues/5"
                    target="_blank"
                    rel="noopener"
                  >
                    get involved
                  </a>
                </b>
                !
              </p>
            </div>
            <div className="title">
              <hr style={{ opacity: "0.2" }}></hr>
              <p>
                <a
                  href="https://github.com/nantunggaputra/React_Library/blob/main/Frontend_React_by_WPU/anime-app/README.md"
                  target="_blank"
                  rel="noopener"
                >
                  Anime-App
                </a>
              </p>
              <hr style={{ opacity: "0.2" }}></hr>
            </div>
            <div className="license">
              <hr style={{ opacity: "0.2" }}></hr>
              <p>
                <a
                  href="https://github.com/nantunggaputra/React_Library/blob/main/Frontend_React_by_WPU/anime-app/LICENSE"
                  target="_blank"
                  rel="noopener"
                >
                  Licensing Information
                </a>
              </p>
              <hr style={{ opacity: "0.2" }}></hr>
            </div>
            <div className="rights">
              <hr style={{ opacity: "0.2" }}></hr>
              <p>
                <a
                  href="https://github.com/nantunggaputra/React_Library/blob/main/Frontend_React_by_WPU/anime-app/RIGHTS.md"
                  target="_blank"
                  rel="noopener"
                >
                  End-User Rights
                </a>
              </p>
              <hr style={{ opacity: "0.2" }}></hr>
            </div>
            <div className="privacy-policy">
              <hr style={{ opacity: "0.2" }}></hr>
              <p>
                <a
                  href="https://github.com/nantunggaputra/React_Library/blob/main/Frontend_React_by_WPU/anime-app/PRIVACY_POLICY.md"
                  target="_blank"
                  rel="noopener"
                >
                  Privacy Policy
                </a>
              </p>
              <hr style={{ opacity: "0.2" }}></hr>
            </div>
            <div className="trademarks">
              <small>
                <b>
                  WeeBoo and the WeeBoo logos are trademarks of the Anime-App on
                  Nantungga Putra&apos;s GitHub Project
                </b>
              </small>
            </div>
          </div>
        </div>
      )}
      <img src="Silhouette Kaito Kid.webp" alt=" " className="silhouette-off" />
      <div className="background-container"></div>
      <div className="background-audio">
        <audio
          ref={audioRef}
          src="Detective Conan feat TheFatRat - Xenogenesis (Outro Song).mp3"
          autoPlay
          loop
        ></audio>
      </div>
      <div className="transitions">
        <div className="container">
          <button
            onClick={toggleTransition}
            title={
              isTransitionActive
                ? "Background transitions on (30s to 90s)"
                : "Background transitions off"
            }
          >
            {isTransitionActive ? "☯︎" : "⊙"}
          </button>
        </div>
      </div>
      <div className="animations">
        <div className="container">
          <button
            onClick={toggleAnimation}
            title={
              isAnimationActive
                ? "Background animations on (Clouds)"
                : "Background animations off"
            }
          >
            {isAnimationActive ? "𖡎" : "𖤐"}
          </button>
        </div>
      </div>
      <div className="music">
        <div className="container">
          <button
            title={isPlaying ? "Backsound on (Outro Song)" : "Backsound off"}
            onClick={togglePlayPause}
          >
            {isPlaying ? "♪" : "ᯤ"}
          </button>
        </div>
      </div>
    </>
  );
}
