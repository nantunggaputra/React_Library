import { Fade } from "react-awesome-reveal";
import { useState, useCallback, useEffect } from "react";
import { ArrowLeftCircle, ArrowRightCircle } from "react-feather";
import AnimatedTypingText from "./AnimatedTypingText";

// Service Data
const services = [
  {
    title: "HOME",
    description: "Explore the latest anime and updates in one place.",
    image: "/landingpage/images/hero/service/HOME.webp",
  },
  {
    title: "SEARCH",
    description: "Find your favorite anime quickly.",
    image: "/landingpage/images/hero/service/SEARCH.webp",
  },
  {
    title: "FAVORITE",
    description: "Access editor's choice top anime anytime.",
    image: "/landingpage/images/hero/service/FAVORITE.webp",
  },
  {
    title: "FEATURED",
    description: "Discover trending and must-watch anime selections.",
    image: "/landingpage/images/hero/service/FEATURED.webp",
  },
  {
    title: "SUNDAY MORNING TV",
    description: "Enjoy childhood Sunday anime lineup.",
    image: "/landingpage/images/hero/service/SUNDAYMORNINGTV.webp",
  },
  {
    title: "CATEGORY",
    description: "Browse anime by various categories.",
    image: "/landingpage/images/hero/service/CATEGORY.webp",
  },
  {
    title: "STUDIO MASTERPIECE",
    description: "Explore iconic works from top anime studios.",
    image: "/landingpage/images/hero/service/STUDIOMASTERPIECE.webp",
  },
  {
    title: "GENRE",
    description: "Find anime based on your preferred genres.",
    image: "/landingpage/images/hero/service/GENRE.webp",
  },
  {
    title: "TRAILER",
    description: "Watch the latest anime teasers and trailers.",
    image: "/landingpage/images/hero/service/TRAILER.webp",
  },
  {
    title: "MAGAZINE",
    description: "Read exclusive anime news.",
    image: "/landingpage/images/hero/service/MAGAZINE.webp",
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
          <h2 className="styled-heading-text ">
            <AnimatedTypingText text="OUR SERVICE" />
          </h2>
          <Fade delay={750} duration={1000} triggerOnce>
            <Fade delay={250} duration={750} direction="up" triggerOnce>
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
                        {service.description}
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
        </section>
      </Fade>
    </section>
  );
}

export default Service;
