function Hero() {
  return (
    <section className="hero">
      {/* Hero Section: Left-side */}
      <div className="hero-content">
        <h2 className="hero-subtitle">WEEBOO FROM ANIME-APP</h2>
        <h1 className="hero-title">
          YOUR <span className="highlight">ULTIMATE</span> ANIME-APP{" "}
          <span className="highlight">STARTS</span> HERE!
        </h1>
        <p className="hero-description">
          Stay updated with the latest features, anime search functionalities,
          and exciting development progress of Anime-App.
          <br />
          <span>
            Be part of our journey and explore what&apos;s coming next!
          </span>
        </p>
        <button className="hero-button">See Updates</button>
      </div>
    </section>
  );
}

export default Hero;
