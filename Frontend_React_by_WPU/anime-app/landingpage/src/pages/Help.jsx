import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import { Book } from "react-feather";
import AnimatedTypingText from "../components/AnimatedTypingText";
import HelpCenter from "../components/HelpCenter";

function Help() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "instant" });
      }
    }
  }, [hash]);

  return (
    <section id="help" className="help">
      <Fade delay={0} duration={1000} triggerOnce>
        {/* Help Section */}
        <section className="help-section">
          <div className="help-header">
            <Fade delay={500} duration={750} direction="up" triggerOnce>
              <div className="help-badge">
                <Book />
                GUIDANCE
              </div>
            </Fade>
            <h2 className="styled-heading-text help-title">
              <AnimatedTypingText text="GET HELP" />
            </h2>
            <Fade delay={1250} duration={1000} triggerOnce>
              <p className="help-subtitle">
                Get our weeboos knowledge base or contact our support team for
                personalized assistance
              </p>
            </Fade>
          </div>
          {/* Help Center Section */}
          <HelpCenter />
        </section>
      </Fade>
    </section>
  );
}

export default Help;
