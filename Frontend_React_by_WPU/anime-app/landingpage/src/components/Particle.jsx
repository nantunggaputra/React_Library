import { Fade } from "react-awesome-reveal";

function Particle({ quantity = 20 }) {
  return (
    <Fade delay={1000} duration={20000} triggerOnce>
      <div className="particle-container">
        {Array.from({ length: quantity }).map((_, index) => (
          <div
            key={index}
            className="particle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 1}s`,
            }}
          ></div>
        ))}
      </div>
    </Fade>
  );
}

export default Particle;
