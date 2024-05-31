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
          <div className="links">
            <a> Home </a>|<a> Genre </a>|<a href="#choice"> Favorite </a>|
            <a href="#choose"> Category </a>
          </div>
        ) : (
          <div className="arrow">▼</div>
        )}
      </div>
    </div>
  );
}
