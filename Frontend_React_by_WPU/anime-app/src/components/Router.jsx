import { useState } from "react";

export default function Router() {
  const [showLinks, setShowLinks] = useState(false);

  const handleToggle = () => {
    setShowLinks(!showLinks);
  };

  return (
    <div className="container">
      <div className="toggle-div" onClick={handleToggle}>
        {showLinks ? (
          <menu className="links">
            <li>
              <a href="#"> Home </a>
            </li>
            |
            <li>
              <a href="#choice"> Favorite </a>
            </li>
            |
            <li>
              <a href="#choose"> Category </a>
            </li>
            |
            <li>
              <a href="#check"> Genre </a>
            </li>
          </menu>
        ) : (
          <div className="arrow">▼</div>
        )}
      </div>
    </div>
  );
}
