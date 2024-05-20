/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

const images = [
  {
    src: "https://cdn.myanimelist.net/images/anime/1665/140360l.jpg",
    title: "Haikyuu!! Movie: Gomisuteba no Kessen",
  },
  {
    src: "https://cdn.myanimelist.net/images/anime/1138/133101l.jpg",
    title: "Meitantei Conan Movie 26: Kurogane no Submarine",
  },
  {
    src: "https://cdn.myanimelist.net/images/anime/1015/138006l.jpg",
    title: "Sousou no Frieren",
  },
  {
    src: "https://cdn.myanimelist.net/images/anime/1744/120789l.jpg",
    title: "Meitantei Conan Movie 25: Halloween no Hanayome",
  },
  {
    src: "https://cdn.myanimelist.net/images/anime/1908/135431l.jpg",
    title: "Bleach: Sennen Kessen-hen",
  },
  {
    src: "https://cdn.myanimelist.net/images/anime/1668/125323l.jpg",
    title: "One Piece Film: Red",
  },
  {
    src: "https://cdn.myanimelist.net/images/anime/1121/119044l.jpg",
    title: "Jujutsu Kaisen 0 Movie",
  },
  {
    src: "https://cdn.myanimelist.net/images/anime/1306/112616l.jpg",
    title: "Meitantei Conan Movie 24: Hiiro no Dangan",
  },
  {
    src: "https://cdn.myanimelist.net/images/anime/1245/116760l.jpg",
    title: "Gintama: The Final",
  },
  {
    src: "https://cdn.myanimelist.net/images/anime/1704/106947l.jpg",
    title: "Kimetsu no Yaiba Movie: Mugen Ressha-hen",
  },
  {
    src: "https://cdn.myanimelist.net/images/anime/1654/104884l.jpg",
    title: "Digimon Adventure: Last Evolution Kizuna",
  },
  {
    src: "https://cdn.myanimelist.net/images/anime/1010/98309l.jpg",
    title: "Meitantei Conan Movie 23: Konjou no Fist",
  },
  {
    src: "https://cdn.myanimelist.net/images/anime/1091/101664l.jpg",
    title: "Saint Seiya: Knights of the Zodiac",
  },
  {
    src: "https://cdn.myanimelist.net/images/anime/12/90104l.jpg",
    title: "Meitantei Conan Movie 22: Zero no Shikkounin",
  },
  {
    src: "https://cdn.myanimelist.net/images/anime/1736/93138l.jpg",
    title: "Boku no Hero Academia the Movie 1: Futari no Hero",
  },
  {
    src: "https://cdn.myanimelist.net/images/anime/9/86001l.jpg",
    title: "Kuroko no Basket Movie 4: Last Game",
  },
  {
    src: "https://cdn.myanimelist.net/images/anime/1557/123313l.jpg",
    title: "Sword Art Online Movie: Ordinal Scale",
  },
  {
    src: "https://cdn.myanimelist.net/images/anime/13/85391l.jpg",
    title: "Fairy Tail Movie 2: Dragon Cry",
  },
  {
    src: "https://cdn.myanimelist.net/images/anime/12/77614l.jpg",
    title: "Yu☆Gi☆Oh! The Dark Side of Dimensions",
  },
  {
    src: "https://cdn.myanimelist.net/images/anime/11/75045l.jpg",
    title: "JoJo no Kimyou na Bouken Part 3: Stardust Crusaders 2nd Season",
  },
  {
    src: "https://cdn.myanimelist.net/images/anime/4/78280l.jpg",
    title: "Boruto: Naruto the Movie",
  },
  {
    src: "https://cdn.myanimelist.net/images/anime/1491/134498l.jpg",
    title: "The Last: Naruto the Movie",
  },
  {
    src: "https://cdn.myanimelist.net/images/anime/10/62337l.jpg",
    title: "Hunter x Hunter Movie 2: The Last Mission",
  },
  {
    src: "https://cdn.myanimelist.net/images/anime/13/50871l.jpg",
    title: "Sengoku Basara Movie: The Last Party",
  },
];

export default function AnimeLove() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    if (isHovered) {
      const canvas = document.getElementById("canvas");
      const c = canvas.getContext("2d");
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;

      let animationId;

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
        for (let i = 0; i < 10; i++) {
          let x = Math.random() * canvas.width;
          let y = Math.random() * canvas.height;
          raindrops.push(new RainDrop(x, y));
        }

        const animate = () => {
          c.clearRect(0, 0, canvas.width, canvas.height);
          raindrops.forEach((drop) => drop.update());
          animationId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
          cancelAnimationFrame(animationId);
          c.clearRect(0, 0, canvas.width, canvas.height);
        };
      };
    }
  }, [currentIndex, isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div className="choice">
        <h2>Editor&apos;s Choice Anime</h2>
      </div>
      <div className="love">
        <div className="love-overview">
          <button tabIndex="up" onClick={handlePrev}>
            ⥣
          </button>
          <div className="love-image">
            <canvas id="canvas"></canvas>
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].title}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          </div>
          <p>
            Wee ♡{" "}
            <span style={{ color: "#0377b9" }}>
              {images[currentIndex].title}
            </span>
          </p>
          <button className="arrow" tabIndex="down" onClick={handleNext}>
            ⥥
          </button>
        </div>
      </div>
    </>
  );
}
