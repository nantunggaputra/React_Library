/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";

const image = [
  {
    src: "https://cdn.myanimelist.net/images/anime/1530/143202l.jpg",
    title: "Momentary Lily (TV)",
  },
];

export default function AnimeWinter() {
  const [isHovered, setIsHovered] = useState(false);
  const animationRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (isHovered) {
      const canvas = canvasRef.current;
      const c = canvas.getContext("2d");
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;

      const img = new Image();
      img.src = image[0].src;
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
        for (let i = 0; i < 10; i++) {
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

      return () => {
        cancelAnimationFrame(animationRef.current);
        const canvas = canvasRef.current;
        const c = canvas.getContext("2d");
        c.clearRect(0, 0, canvas.width, canvas.height);
      };
    }
  }, [isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    cancelAnimationFrame(animationRef.current);
    const canvas = canvasRef.current;
    const c = canvas.getContext("2d");
    c.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <>
      <div className="featured">
        <h2>Featured Winter Anime</h2>
      </div>
      <div className="winter">
        <div className="winter-overview">
          <div className="winter-image">
            <canvas id="canvas" ref={canvasRef}></canvas>
            <img
              src={image[0].src}
              alt={image[0].title}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          </div>
          <p>
            <span style={{ color: "#0377b9" }}>{image[0].title}</span>
          </p>
        </div>
      </div>
    </>
  );
}
