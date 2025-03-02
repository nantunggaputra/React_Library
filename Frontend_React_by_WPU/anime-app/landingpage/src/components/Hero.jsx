import { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import { NavLink } from "react-router-dom";
import { ChevronsRight } from "react-feather";

// Partner Data
const partners = [
  { id: 1, name: "BSTATION", image: "./images/hero/partner/BSTATION.webp" },
  {
    id: 2,
    name: "CRUNCHYROLL",
    image: "./images/hero/partner/CRUNCHYROLL.webp",
  },
  {
    id: 3,
    name: "DISNEYPLUSHOTSTAR",
    image: "./images/hero/partner/DISNEYPLUSHOTSTAR.webp",
  },
  { id: 4, name: "FUNIMATION", image: "./images/hero/partner/FUNIMATION.webp" },
  { id: 5, name: "GENFLIX", image: "./images/hero/partner/GENFLIX.webp" },
  { id: 6, name: "IQIYI", image: "./images/hero/partner/IQIYI.webp" },
  { id: 7, name: "NETFLIX", image: "./images/hero/partner/NETFLIX.webp" },
  { id: 8, name: "PRIMEVIDEO", image: "./images/hero/partner/PRIMEVIDEO.webp" },
  { id: 9, name: "VIDIO", image: "./images/hero/partner/VIDIO.webp" },
  { id: 10, name: "VIU", image: "./images/hero/partner/VIU.webp" },
  { id: 11, name: "WETV", image: "./images/hero/partner/WETV.webp" },
];

function Hero() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="hero">
      <Fade delay={250} duration={1000} triggerOnce>
        {/* Hero Section: Left-side */}
        <div className="hero-content">
          <Fade delay={0} duration={750} direction="left" triggerOnce>
            <h2 className="hero-subtitle">WEEBOO FROM ANIME-APP</h2>
            <h1 className="hero-title">
              YOUR <span className="highlight">ULTIMATE</span> ANIME-APP{" "}
              <span className="highlight">STARTS</span> HERE!
            </h1>
            <p className="hero-description">
              Stay updated with the latest features, anime search
              functionalities, and exciting development progress of Anime-App.
              <br />
              <span>
                Be part of our journey and explore what&apos;s coming next!
              </span>
            </p>
            <NavLink to="/updates/#updates">
              <button className="hero-button">See Updates</button>
            </NavLink>
          </Fade>
          <Fade delay={250} duration={750} direction="up" triggerOnce>
            <div className="partner-info">
              <img
                src="/images/header/WeeBoo.png"
                alt="WeeBoo Logo"
                className="partner-logo"
              />
              <span className="partner-name">WEEBOO&apos;S PARTNER</span>
            </div>
            <div className="partner-logos">
              <div className="logo-slider">
                <div className="logo-track">
                  {partners.concat(partners).map((item, index) => (
                    <img
                      key={index}
                      src={item.image}
                      alt={item.name}
                      className="logo-item"
                    />
                  ))}
                </div>
              </div>
            </div>
          </Fade>
        </div>

        {/* Hero Section: Right-side */}
        <div className="hero-image-container">
          <Fade delay={0} duration={750} direction="right" triggerOnce>
            <img
              src="/images/hero/banner/Detective Conan Case Closed Brick Background.webp"
              alt="WeeBoo Banner"
              className={`hero-image ${isScrolled ? "scaled" : ""}`}
            />
            <Fade delay={250} duration={750} triggerOnce>
              <div className="hero-overlay-card">
                <div className="overlay-header">
                  <div>
                    <h3 className="overlay-title">
                      WeeBoo | My Anime List<span> 0.1 Beta</span>
                    </h3>
                    <p className="overlay-text description">
                      <b>WeeBoo | My Anime List</b> is a Front-End SPA (Single
                      Page Application) Web project built using <b>React</b> to
                      display a list of anime.
                    </p>
                    <p className="overlay-text developer">
                      <b>WeeBoo</b> is designed and developed by{" "}
                      <b>Nantungga Putra</b>, also later dedicated development
                      team under Open Source Contribution.
                    </p>
                  </div>
                  <img
                    src="/images/header/WeeBoo.png"
                    alt="WeeBoo Logo"
                    className="overlay-logo"
                  />
                </div>
                <div className="overlay-footer">
                  <span className="overlay-year">2024</span>
                  <a href="../">
                    <button className="overlay-button">
                      <ChevronsRight size={20} />
                    </button>
                  </a>
                </div>
              </div>
            </Fade>
          </Fade>
        </div>
      </Fade>
    </section>
  );
}

export default Hero;
