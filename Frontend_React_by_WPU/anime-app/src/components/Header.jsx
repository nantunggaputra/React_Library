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
            <a>
              <img src="WeeBoo.png" alt="WeeBoo" />
            </a>
          </div>
          <div className="center-menu">
            <a className="website">Blog</a>
            <a className="website">Event</a>
            <a className="website">Forum</a>
            <a className="website">Website</a>
            <a href="./landingpage" className="landingpage">
              Landing Page
            </a>
            <a href="./landingpage" className="landingpage">
              Updates
            </a>
            <a href="./landingpage" className="landingpage">
              Help
            </a>
            <span>{countryCode || "IP"}</span>
          </div>
          <div className="right-menu">
            <a href="./landingpage" className="landingpage">
              <button>Login</button>
            </a>
            <a href="./landingpage" className="landingpage">
              <button>Sign Up</button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
