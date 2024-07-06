/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";

function FloatingButton({
  titleOn,
  titleOff,
  state,
  toggleState,
  styleOn,
  styleOff,
  iconOn,
  iconOff,
}) {
  return (
    <div className="container">
      <button
        title={state ? titleOn : titleOff}
        onClick={toggleState}
        style={state ? styleOn : styleOff}
      >
        {state ? iconOn : iconOff}
      </button>
    </div>
  );
}

function AboutPage({ toggleOverlay }) {
  return (
    <div className="about">
      <div className="about-container">
        <button onClick={toggleOverlay}>×</button>
        <img className="logo" src="WeeBoo.png" alt=" " />
        <div className="anime-app-version">
          <h1>WeeBoo</h1>
          <h5>v0.1.4-beta (Public Beta)</h5>
          <h4>WeeBoo from Anime-App</h4>
          <p>
            WeeBoo | My Anime List is a Front-End SPA (Single Page Application)
            Web project built using React to display a list of anime. This
            project uses Vite for bundling and Visual Studio Code as the code
            editor. Mostly anime data is fetched from the Jikan - Unofficial
            MyAnimeList API.
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
  );
}

export default function Background() {
  const [connectionStatus, setConnectionStatus] = useState("offline");

  const updateOnlineStatus = () => {
    setConnectionStatus(navigator.onLine ? "online" : "offline");
  };

  const reloadOnlineStatus = () => {
    !navigator.onLine
      ? (setConnectionStatus("offline"), window.location.reload())
      : setConnectionStatus("online");
  };

  useEffect(() => {
    const handleStatusChange = () => updateOnlineStatus();
    window.addEventListener("online", handleStatusChange);
    window.addEventListener("offline", handleStatusChange);

    const interval = setInterval(updateOnlineStatus, 1000);

    return () => {
      window.removeEventListener("online", handleStatusChange);
      window.removeEventListener("offline", handleStatusChange);
      clearInterval(interval);
    };
  }, []);

  const [showOverlay, setShowOverlay] = useState(false);
  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
  };

  const [isTransitionActive, setIsTransitionActive] = useState(true);
  const toggleTransition = () => {
    setIsTransitionActive(!isTransitionActive);
  };

  useEffect(() => {
    document.body.classList.toggle("body-transition", isTransitionActive);
    document
      .querySelector(".silhouette-off")
      .classList.toggle("silhouette-on", isTransitionActive);
  }, [isTransitionActive]);

  const [isAnimationActive, setIsAnimationActive] = useState(true);
  const toggleAnimation = () => {
    setIsAnimationActive(!isAnimationActive);
  };

  useEffect(() => {
    document
      .querySelector(".background-container")
      .classList.toggle("clouds", isAnimationActive);
  }, [isAnimationActive]);

  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    audioRef.current &&
      (isPlaying ? audioRef.current.pause() : audioRef.current.play());
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      {showOverlay && <AboutPage toggleOverlay={toggleOverlay} />}
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
      <div className="connection">
        <FloatingButton
          titleOn="You are online"
          titleOff="No connection"
          state={connectionStatus === "online"}
          toggleState={reloadOnlineStatus}
          iconOn="•"
          iconOff="•"
          styleOn={{ color: "#13e713", fontSize: "2.5rem", cursor: "progress" }}
          styleOff={{ color: "#ff0000", fontSize: "2.5rem", cursor: "wait" }}
        />
      </div>
      <div className="informations">
        <FloatingButton
          titleOn="About WeeBoo"
          titleOff="About WeeBoo"
          state={showOverlay}
          toggleState={toggleOverlay}
          iconOn={<span style={{ fontSize: "1.2rem" }}>𝐢</span>}
          iconOff={<span style={{ fontSize: "1.2rem" }}>𝐢</span>}
        />
      </div>
      <div className="transitions">
        <FloatingButton
          titleOn="Background transitions on (30s to 90s)"
          titleOff="Background transitions off"
          state={isTransitionActive}
          toggleState={toggleTransition}
          iconOn="☯︎"
          iconOff="⊙"
        />
      </div>
      <div className="animations">
        <FloatingButton
          titleOn="Background animations on (Clouds)"
          titleOff="Background animations off"
          state={isAnimationActive}
          toggleState={toggleAnimation}
          iconOn="𖡎"
          iconOff="𖤐"
        />
      </div>
      <div className="music">
        <FloatingButton
          titleOn="Backsound on (Outro Song)"
          titleOff="Backsound off"
          state={isPlaying}
          toggleState={togglePlayPause}
          iconOn="♪"
          iconOff="ᯤ"
        />
      </div>
    </>
  );
}
