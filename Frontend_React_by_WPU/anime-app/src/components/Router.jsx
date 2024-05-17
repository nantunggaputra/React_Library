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
            <a href="#">Home</a>
            <a href="#">Genre</a>
            <a href="#">Category</a>
            <a href="#">Bstation</a>
          </div>
        ) : (
          <div className="arrow">&#x2B04;</div>
        )}
      </div>
    </div>
  );
}
