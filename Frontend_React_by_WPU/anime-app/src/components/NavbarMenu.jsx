/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { useState } from "react";

function MenuLink({ href, onClick, label }) {
  return (
    <>
      <li>
        <a href={href} onClick={onClick}>
          {label}
        </a>
      </li>
      {label === "Genre" ? "" : " | "}
    </>
  );
}

export default function NavbarMenu() {
  const menuItems = [
    { href: "#home", label: "Home" },
    { href: "#favorite", label: "Favorite" },
    { href: "#category", label: "Category" },
    { href: "#genre", label: "Genre" },
  ];

  const [showLinks, setShowLinks] = useState(false);

  const handleToggle = () => {
    setShowLinks(!showLinks);
  };

  return (
    <div className="container">
      <div className="toggle-div">
        {showLinks ? (
          <menu className="links">
            {menuItems.map((item, index) => (
              <MenuLink
                key={index}
                href={item.href}
                onClick={handleToggle}
                label={item.label}
              />
            ))}
          </menu>
        ) : (
          <div className="arrow" onClick={handleToggle} title="Menu">
            ▼
          </div>
        )}
      </div>
    </div>
  );
}
