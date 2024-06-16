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

  const menus = ["Home", "Favorite", "Category", "Genre"];

  return (
    <div className="hamburger-menu">
      {showMainButton ? (
        <div className="container">
          <button
            className="button-parrent"
            style={{ fontWeight: "bolder", fontSize: "2.85rem" }}
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
              style={{ fontWeight: "lighter", fontSize: "1.85rem" }}
              onClick={handleChildButtonClick}
              title="Close"
            >
              ✖
            </button>
          </div>
          {menus.map((menu) => (
            <div className="container" key={menu}>
              <button
                className={"button-child"}
                onClick={handleChildButtonClick}
                title={menu}
              >
                <a href={"#" + menu.toLowerCase()}>
                  {(menu === "Home" && "♤") ||
                    (menu === "Favorite" && "♡") ||
                    (menu === "Category" && "♢") ||
                    (menu === "Genre" && "♧")}
                </a>
              </button>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
