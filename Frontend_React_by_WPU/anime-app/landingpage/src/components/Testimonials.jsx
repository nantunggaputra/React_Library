import { Fade } from "react-awesome-reveal";
import { Star } from "react-feather";
import Particle from "./Particle";
import AnimatedTypingText from "./AnimatedTypingText";

// Testimonials Data
const testimonials = [
  {
    id: 1,
    name: "Naruto-kun",
    role: "Manga Collector",
    avatar: "/landingpage/images/hero/testimonials/avatar1.webp",
    rating: 5,
    review:
      "Finally an app that understands us weeboos! The Sunday Morning TV section brings back so many childhood memories. Dattebayo! 💪",
  },
  {
    id: 2,
    name: "Hinata-chan",
    role: "Studio Ghibli Fanatic",
    avatar: "/landingpage/images/hero/testimonials/avatar2.webp",
    rating: 5,
    review:
      "The Studio Masterpiece section is amazing! I discovered so many hidden gems from my favorite studios. Arigatou gozaimasu! 🫶🏻",
  },
  {
    id: 3,
    name: "Sakura-chan",
    role: "Anime Enthusiast",
    avatar: "/landingpage/images/hero/testimonials/avatar3.webp",
    rating: 4,
    review:
      "WeeBoo is my go-to app for discovering new anime! The search feature is super fast and I love how organized everything is. Sugoi desu! 🌸",
  },
  {
    id: 4,
    name: "Kaito-senpai",
    role: "Seasonal Anime Hunter",
    avatar: "/landingpage/images/hero/testimonials/avatar4.webp",
    rating: 5,
    review:
      "Best anime tracking app I've used. The updates page keeps me informed about new features and the UI is clean. Subarashii! 🍜",
  },
  {
    id: 5,
    name: "Mikasa-san",
    role: "Action Anime Lover",
    avatar: "/landingpage/images/hero/testimonials/avatar5.webp",
    rating: 4,
    review:
      "Love the genre filtering system! Finding action-packed anime has never been easier. The trailer section is a nice touch too! ✨",
  },
  {
    id: 6,
    name: "Yugi-boy",
    role: "Otaku & Binge Watcher",
    avatar: "/landingpage/images/hero/testimonials/avatar6.webp",
    rating: 5,
    review:
      "WeeBoo made my anime marathon so much better! Everything I need is in one place. Can't wait for more features! Shinzou wo sasageyo! 🔥",
  },
];

function Testimonials() {
  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`star ${index < rating ? "filled" : ""}`}
        fill={index < rating ? "currentColor" : "none"}
      />
    ));
  };

  return (
    <section id="testimonials" className="testimonials">
      <Fade delay={250} duration={1000} triggerOnce>
        {/* Testimonials Section */}
        <section className="testimonials-section">
          <Particle />
          <h2 className="styled-heading-text testimonials-title">
            <AnimatedTypingText text="WHAT WEEBOOS SAY" />
          </h2>
          <Fade delay={1250} duration={1000} triggerOnce>
            <p className="testimonials-subtitle">
              Precise reviews from our amazing anime community
            </p>
          </Fade>
          <Fade delay={1250} duration={1000} triggerOnce>
            <div className="testimonials-container">
              {testimonials.map((testimonial, index) => (
                <Fade
                  key={testimonial.id}
                  delay={750 + index * 100}
                  duration={750}
                  direction="up"
                  triggerOnce
                >
                  <div className="testimonial-card">
                    <div className="testimonial-header">
                      <div className="testimonial-avatar">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          onError={(e) => {
                            e.target.src =
                              "/landingpage/images/header/WeeBoo.png";
                          }}
                        />
                      </div>
                      <div className="testimonial-info">
                        <h3 className="testimonial-name">{testimonial.name}</h3>
                        <p className="testimonial-role">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="testimonial-rating">
                      {renderStars(testimonial.rating)}
                    </div>
                    <p className="testimonial-review">{testimonial.review}</p>
                    <div className="testimonial-quote-mark">&ldquo;</div>
                  </div>
                </Fade>
              ))}
            </div>
          </Fade>
        </section>
      </Fade>
    </section>
  );
}

export default Testimonials;
