import { useState, useEffect, useRef } from "react";

export default function Background() {
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
            {isTransitionActive ? "☯︎" : " "}
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
            {isAnimationActive ? "⛈" : " "}
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
