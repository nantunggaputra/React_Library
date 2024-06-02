/* eslint-disable no-unused-vars */
import React, { useState } from "react";

export default function HamburgerMenu() {
  const [showMainButton, setShowMainButton] = useState(true);

  const handleMainButtonClick = () => {
    setShowMainButton(false);
  };

  const handleChildButtonClick = () => {
    setShowMainButton(true);
  };

  return (
    <div className="hamburger-menu">
      {showMainButton ? (
        <div className="container">
          <button
            className="button-parrent"
            style={{ fontWeight: "bolder", fontSize: "2.5rem" }}
            onClick={handleMainButtonClick}
            title="Menu"
          >
            =
          </button>
        </div>
      ) : (
        <>
          <div className="container">
            <button
              className="button-parrent"
              style={{ fontWeight: "lighter", fontSize: "1.5rem" }}
              onClick={handleChildButtonClick}
              title="Close"
            >
              ✖
            </button>
          </div>
          <div className="container">
            <button
              className="button-child button-home"
              onClick={handleChildButtonClick}
              title="Home"
            >
              <a href="#">⌂</a>
            </button>
          </div>
          <div className="container">
            <button
              className="button-child button-genre"
              onClick={handleChildButtonClick}
              title="Genre"
            >
              <a href="#check">★</a>
            </button>
          </div>
          <div className="container">
            <button
              className="button-child button-favorite"
              onClick={handleChildButtonClick}
              title="Favorite"
            >
              <a href="#choice">❤︎</a>
            </button>
          </div>
          <div className="container">
            <button
              className="button-child button-category"
              onClick={handleChildButtonClick}
              title="Category"
            >
              <a href="#choose">🎖</a>
            </button>
          </div>
        </>
      )}
    </div>
  );
}
