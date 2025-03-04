import { Fade } from "react-awesome-reveal";
import { useState, useCallback, useEffect } from "react";
import { ExternalLink, ArrowLeftCircle, ArrowRightCircle } from "react-feather";
import Particle from "./Particle";
import AnimatedTypingText from "./AnimatedTypingText";

// Service Data
const services = [
  {
    title: "HOME",
    description: "Explore the latest anime and updates in one place.",
    image: "/landingpage/images/hero/service/HOME.webp",
    url: "../#home",
  },
  {
    title: "SEARCH",
    description: "Find your favorite anime quickly.",
    image: "/landingpage/images/hero/service/SEARCH.webp",
    url: "../#search-container",
  },
  {
    title: "FAVORITE",
    description: "Access editor's choice top anime anytime.",
    image: "/landingpage/images/hero/service/FAVORITE.webp",
    url: "../#favorite",
  },
  {
    title: "FEATURED",
    description: "Discover trending and must-watch anime selections.",
    image: "/landingpage/images/hero/service/FEATURED.webp",
    url: "../#featured",
  },
  {
    title: "SUNDAY MORNING TV",
    description: "Enjoy childhood Sunday anime lineup.",
    image: "/landingpage/images/hero/service/SUNDAYMORNINGTV.webp",
    url: "../#legacy",
  },
  {
    title: "CATEGORY",
    description: "Browse anime by various categories.",
    image: "/landingpage/images/hero/service/CATEGORY.webp",
    url: "../#category",
  },
  {
    title: "STUDIO MASTERPIECE",
    description: "Explore iconic works from top anime studios.",
    image: "/landingpage/images/hero/service/STUDIOMASTERPIECE.webp",
    url: "../#masterpiece",
  },
  {
    title: "GENRE",
    description: "Find anime based on your preferred genres.",
    image: "/landingpage/images/hero/service/GENRE.webp",
    url: "../#genre",
  },
  {
    title: "TRAILER",
    description: "Watch the latest anime teasers and trailers.",
    image: "/landingpage/images/hero/service/TRAILER.webp",
    url: "../#recent",
  },
  {
    title: "MAGAZINE",
    description: "Read exclusive anime news.",
    image: "/landingpage/images/hero/service/MAGAZINE.webp",
    url: "../#magazine",
  },
];

function Service() {
  const [currentService, setCurrentService] = useState(0);

  const nextService = useCallback(() => {
    setCurrentService((prev) => (prev + 1) % services.length);
  }, []);

  const prevService = useCallback(() => {
    setCurrentService((prev) => (prev - 1 + services.length) % services.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      nextService();
    }, 4500);

    return () => clearInterval(timer);
  }, [nextService]);

  return (
    <section id="service" className="service">
      <Fade delay={250} duration={1000} triggerOnce>
        {/* Service Section */}
        <section className="service-section">
          <Particle />
          <h2 className="styled-heading-text service-title">
            <AnimatedTypingText text="OUR SERVICE" />
          </h2>
          <Fade delay={1250} duration={1000} triggerOnce>
            <p className="service-subtitle">
              Match the best anime experience with WeeBoo
            </p>
          </Fade>
          <Fade delay={1250} duration={1000} triggerOnce>
            <Fade delay={750} duration={750} direction="up" triggerOnce>
              <div className="service-container">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className={`service-card ${
                      index === currentService ? "active" : ""
                    }`}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="service-image"
                    />
                    <div className="service-info">
                      <h3 className="service-name">{service.title}</h3>
                      <p className="service-description">
                        <a href={service.url}>
                          <ExternalLink />
                          {service.description}
                        </a>
                      </p>
                    </div>
                  </div>
                ))}
                <button
                  onClick={prevService}
                  className="service-btn left"
                  aria-label="Previous service"
                >
                  <ArrowLeftCircle />
                </button>
                <button
                  onClick={nextService}
                  className="service-btn right"
                  aria-label="Next service"
                >
                  <ArrowRightCircle />
                </button>
              </div>
            </Fade>
            <div className="service-indicators">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentService(index)}
                  className={`indicator ${
                    index === currentService ? "active" : ""
                  }`}
                  aria-label={`Go to service ${index + 1}`}
                />
              ))}
            </div>
          </Fade>
        </section>
      </Fade>
    </section>
  );
}

export default Service;
