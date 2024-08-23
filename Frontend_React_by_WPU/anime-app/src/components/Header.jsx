import { useState, useEffect } from "react";

export default function Header() {
  const [countryCode, setCountryCode] = useState("");

  useEffect(() => {
    const fetchCountryCode = async () => {
      try {
        const response = await fetch("https://ipapi.co/country/");
        if (response.ok) {
          const country = await response.text();
          setCountryCode(country);
        } else {
          console.error("Error fetching data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCountryCode();
  }, []);

  return (
    <header>
      <div className="head">
        <div className="head-menu">
          <div className="left-menu">
            <img src="WeeBoo.png" alt="WeeBoo" />
          </div>
          <div className="center-menu">
            <a>Blog</a>
            <a>Event</a>
            <a>Forum</a>
            <a>Website</a>
            <a>Landing Page</a>
            <a>Updates</a>
            <a>Help</a>
            <a>{countryCode || "IP"}</a>
          </div>
          <div className="right-menu">
            <button>
              <a>Login</a>
            </button>
            <button>
              <a>Sign Up</a>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
