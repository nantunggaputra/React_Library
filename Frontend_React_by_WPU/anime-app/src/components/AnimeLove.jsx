import { useState, useEffect, useRef } from "react";

export default function AnimeLove() {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const animationRef = useRef(null);

  useEffect(() => {
    fetch("./anime-love-data.json")
      .then((response) => response.json())
      .then((data) => setImages(data));
  }, []);

  const handlePrev = () => {
    setLoading(true);
    setTimeout(() => {
      setImages(images);
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setLoading(false);
    }, 500);
  };

  const handleNext = () => {
    setLoading(true);
    setTimeout(() => {
      setImages(images);
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
      setLoading(false);
    }, 500);
  };

  useEffect(() => {
    if (images.length === 0) return;

    const canvas = document.getElementById("canvas");
    const c = canvas.getContext("2d");
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const cleanup = () => {
      cancelAnimationFrame(animationRef.current);
      c.clearRect(0, 0, canvas.width, canvas.height);
    };

    if (isHovered) {
      const img = new Image();
      img.src = images[currentIndex].src;
      img.onload = () => {
        const pat = c.createPattern(img, "no-repeat");
        let increase = 1.5;
        c.fillStyle = pat;

        class RainDrop {
          constructor(x, y) {
            this.x = x;
            this.y = y;
            this.radius = increase;
            this.speed = Math.random() * 2;
            this.vx = this.speed;
            this.vy = this.vx * 2;
          }

          draw() {
            c.beginPath();
            c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            c.fill();
            c.closePath();
          }

          update() {
            if (this.y > canvas.height) {
              this.x = Math.random() * canvas.width;
              this.y = -5;
            }
            this.x += this.vx;
            this.y += this.vy;
            this.draw();
          }
        }

        let raindrops = [];
        for (let i = 0; i < 25; i++) {
          let x = Math.random() * canvas.width;
          let y = Math.random() * canvas.height;
          raindrops.push(new RainDrop(x, y));
        }

        const animate = () => {
          c.clearRect(0, 0, canvas.width, canvas.height);
          raindrops.forEach((drop) => drop.update());
          animationRef.current = requestAnimationFrame(animate);
        };

        animate();
      };

      return cleanup;
    } else {
      cleanup();
    }
  }, [currentIndex, isHovered, images]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  if (images.length === 0) {
    return (
      <>
        <div id="favorite" className="choice">
          <h2>
            <span style={{ color: "var(--color-primary-light)" }}>Loading</span>{" "}
            Favorite Anime
          </h2>
        </div>
        <div className="love">
          <div className="love-overview">
            <p>
              <span style={{ color: "var(--color-red)", cursor: "default" }}>
                Please wait...
              </span>
            </p>
          </div>
        </div>
      </>
    );
  }

  const { src, title } = images[currentIndex];

  return (
    <>
      <div id="favorite" className="choice">
        <h2>
          <span style={{ color: "var(--color-primary-light)" }}>Editor</span>
          &apos;s Choice Anime
        </h2>
      </div>
      <div className="love">
        <div className="love-overview">
          <button tabIndex="up" onClick={!loading ? handlePrev : undefined}>
            ⥣
          </button>
          {loading ? (
            <p>
              <span style={{ color: "var(--color-red)", cursor: "default" }}>
                Please wait...
              </span>
            </p>
          ) : (
            <>
              <div className="love-image">
                <canvas id="canvas"></canvas>
                <img
                  src={src}
                  alt={title}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                />
              </div>
              <p>
                <span style={{ color: "var(--color-red)" }}>Wee ♡ </span>
                {title}
              </p>
            </>
          )}

          <button tabIndex="down" onClick={!loading ? handleNext : undefined}>
            ⥥
          </button>
        </div>
      </div>
    </>
  );
}
