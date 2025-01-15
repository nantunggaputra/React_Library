import { useState, useEffect, useRef } from "react";
import AboutPage from "./AboutPage";
import FloatingButton from "./FloatingButton";

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
      (isPlaying ? audioRef.current.play() : audioRef.current.pause());
    setIsPlaying(!isPlaying);
  };

  const userTimeHours = new Date().getHours();

  const selectedBacksound =
    userTimeHours < 12
      ? "Departure to the Front Lines (Yasuharu Takanashi).mp3"
      : userTimeHours < 18
      ? "The Last Magic II (Yasuharu Takanashi).mp3"
      : "The Last Magic I (Yasuharu Takanashi).mp3";

  return (
    <>
      {showOverlay && <AboutPage toggleOverlay={toggleOverlay} />}
      <img src="Silhouette Kaito Kid.webp" alt="" className="silhouette-off" />
      <div className="background-container"></div>
      <div className="background-audio">
        <audio ref={audioRef} src={selectedBacksound} loop></audio>
      </div>
      <div className="connection">
        <FloatingButton
          titleOn="You are online"
          titleOff="No connection"
          state={connectionStatus === "online"}
          toggleState={reloadOnlineStatus}
          iconOn={"\u2022"}
          iconOff={"\u2022"}
          styleOn={{ color: "#13e713", fontSize: "2.5rem", cursor: "progress" }}
          styleOff={{ color: "#ff0000", fontSize: "2.5rem", cursor: "wait" }}
        />
      </div>
      <div className="informations">
        <FloatingButton
          titleOn="About"
          titleOff="About"
          state={showOverlay}
          toggleState={toggleOverlay}
          iconOn={<span style={{ fontSize: "1.2rem" }}>{"\uD835\uDC22"}</span>}
          iconOff={<span style={{ fontSize: "1.2rem" }}>{"\uD835\uDC22"}</span>}
        />
      </div>
      <div className="transitions">
        <FloatingButton
          titleOn="Background transitions on (30s to 90s)"
          titleOff="Background transitions off"
          state={isTransitionActive}
          toggleState={toggleTransition}
          iconOn={"\u262F\uFE0E"}
          iconOff={"\u2299"}
        />
      </div>
      <div className="animations">
        <FloatingButton
          titleOn="Background animations on (Clouds)"
          titleOff="Background animations off"
          state={isAnimationActive}
          toggleState={toggleAnimation}
          iconOn={"\u2756"}
          iconOff={"\u22B9"}
        />
      </div>
      <div className="music">
        <FloatingButton
          titleOn="Backsound on (Yasuharu Takanashi)"
          titleOff="Backsound off"
          state={!isPlaying}
          toggleState={togglePlayPause}
          iconOn={"\u266C"}
          iconOff={"\u266A"}
        />
      </div>
    </>
  );
}
