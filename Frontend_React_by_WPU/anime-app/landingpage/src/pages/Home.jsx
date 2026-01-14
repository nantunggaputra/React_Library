import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import Hero from "../components/Hero";
import Service from "../components/Service";
import Testimonials from "../components/Testimonials";
import Analytics from "../components/Analytics";
import LatestUpdate from "../components/LatestUpdate";
import Developers from "../components/Developers";

function Home() {
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
    <section id="home" className="home">
      <Fade delay={0} duration={1000} triggerOnce>
        {/* Hero Section */}
        <Hero />

        {/* Service Section */}
        <Service />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Analytics Section */}
        <Analytics />

        {/* Latest Update Section */}
        <LatestUpdate />

        {/* Developers Section */}
        <Developers />
      </Fade>
    </section>
  );
}

export default Home;
