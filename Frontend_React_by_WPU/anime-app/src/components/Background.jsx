import { useState, useEffect } from "react";

export default function Background() {
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

  const [isTransitionActive, setIsTransitionActive] = useState(true);
  const toggleTransition = () => {
    setIsTransitionActive(!isTransitionActive);
  };

  useEffect(() => {
    if (isTransitionActive) {
      document.body.classList.add("body-transition");
    } else {
      document.body.classList.remove("body-transition");
    }
  }, [isTransitionActive]);

  return (
    <>
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
      <div className="background-container"></div>
    </>
  );
}
