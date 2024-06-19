import { useState } from "react";

export default function Router() {
  const [showLinks, setShowLinks] = useState(false);

  const handleToggle = () => {
    setShowLinks(!showLinks);
  };

  return (
    <div className="container">
      <div className="toggle-div">
        {showLinks ? (
          <menu className="links">
            <li>
              <a href="#home" onClick={handleToggle}>
                {" "}
                Home{" "}
              </a>
            </li>{" "}
            |{" "}
            <li>
              <a href="#favorite" onClick={handleToggle}>
                {" "}
                Favorite{" "}
              </a>
            </li>{" "}
            |{" "}
            <li>
              <a href="#category" onClick={handleToggle}>
                {" "}
                Category{" "}
              </a>
            </li>{" "}
            |{" "}
            <li>
              <a href="#genre" onClick={handleToggle}>
                {" "}
                Genre{" "}
              </a>
            </li>
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
