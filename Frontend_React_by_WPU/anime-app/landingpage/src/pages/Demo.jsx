import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import DashboardDemo from "../components/DashboardDemo";

function Demo() {
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
    <section id="demo" className="demo">
      <Fade delay={0} duration={1000} triggerOnce>
        {/* Dashboar Demo Section */}
        <DashboardDemo />
      </Fade>
    </section>
  );
}

export default Demo;
