import { useState } from "react";
import FloatingButton from "./FloatingButton";

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
        <FloatingButton
          titleOn="Menu"
          titleOff=""
          state={true}
          toggleState={handleMainButtonClick}
          styleOn={{
            fontWeight: "bolder",
            fontSize: "2.85rem",
          }}
          styleOff={{}}
          className="button-parrent"
          iconOn={"\u003D"}
          iconOff=""
        />
      ) : (
        <>
          <FloatingButton
            titleOn=""
            titleOff="Close"
            state={false}
            toggleState={handleChildButtonClick}
            styleOn={{}}
            styleOff={{
              fontWeight: "lighter",
              fontSize: "1.85rem",
            }}
            className="button-parrent"
            iconOn=""
            iconOff={"\u2716"}
          />
          {menus.map((menu) => (
            <FloatingButton
              key={menu}
              itemKey={menu}
              state={false}
              toggleState={null}
              className="button-child"
              url={"#" + menu.toLowerCase()}
              toggleStateLink={handleChildButtonClick}
              titleLink={menu}
              iconLink={
                (menu === "Home" && "\u2660") ||
                (menu === "Favorite" && "\u2665") ||
                (menu === "Category" && "\u2666") ||
                (menu === "Genre" && "\u2663")
              }
            />
          ))}
        </>
      )}
    </div>
  );
}
