import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Fade } from "react-awesome-reveal";

function Updates() {
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
    <section id="updates" className="updates">
      <Fade delay={0} duration={1000} triggerOnce></Fade>
    </section>
  );
}

export default Updates;
