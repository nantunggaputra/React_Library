import { useState, useRef } from "react";
import {
  SiVercel,
  SiGithub,
  SiSololearn,
  SiFreecodecamp,
  SiReact,
} from "@icons-pack/react-simple-icons";

export default function Footer() {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="gototop">
        <div className="container">
          <a href="#">
            <button title="Go to top">🠅</button>
          </a>
        </div>
      </div>
      <div className="music">
        <div className="container">
          <button
            title={isPlaying ? "Pause Backsound" : "Play Backsound"}
            onClick={togglePlayPause}
          >
            {isPlaying ? "♪" : "⯈"}
          </button>
        </div>
      </div>
      <div className="footer">
        <div className="audio-background">
          <audio
            ref={audioRef}
            src="Detective Conan feat TheFatRat - Xenogenesis (Outro Song).mp3"
            autoPlay
            loop
          ></audio>
        </div>
        <div className="social-icons">
          <a
            href="https://nantunggaputra.vercel.app/"
            target="_blank"
            rel="noopener"
          >
            <SiVercel color="#ffffff" size={24} />
          </a>
          <a
            href="https://github.com/nantunggaputra"
            target="_blank"
            rel="noopener"
          >
            <SiGithub color="#ffffff" size={24} />
          </a>
          <a
            href="https://www.sololearn.com/en/profile/29010238"
            target="_blank"
            rel="noopener"
          >
            <SiSololearn color="#ffffff" size={24} />
          </a>
          <a
            href="https://www.freecodecamp.org/fcc25a60d51-9b4d-4215-8292-018b8c933994"
            target="_blank"
            rel="noopener"
          >
            <SiFreecodecamp color="#ffffff" size={24} />
          </a>
          <a style={{ cursor: "pointer" }}>
            <SiReact color="#ffffff" size={24} />
          </a>
        </div>
        <h3>
          <a
            href="https://nantunggaputra.github.io/HTML/"
            target="_blank"
            rel="noopener"
          >
            web<span>dev</span>el<span>op</span>er
          </a>
        </h3>
        <p>
          Created by{" "}
          <a
            href="https://www.linkedin.com/in/nantungga-putra-451779116/"
            target="_blank"
            rel="noopener"
          >
            Nan<span>t</span>ungga Put<span>r</span>a
          </a>{" "}
          | &copy;2024
        </p>
      </div>
      <div className="foot">
        <div className="foot-menu">
          <div className="left-menu">
            <div>
              <h2>
                <a
                  href="https://nantunggaputra.github.io/HTML/"
                  target="_blank"
                  rel="noopener"
                >
                  WEBDEVELOPER
                </a>
              </h2>
              <small
                style={{
                  textTransform: "none",
                  color: "#7f7f7fec",
                  cursor: "text",
                }}
              >
                anggunnantunggaputra@gmail.com
              </small>
              <br />
              <br />
              <p>About Us</p>
              <p>Contact Us</p>
              <p className="fs">Fans Screening</p>
              <p className="afa">Anime Festival Asia (AFA)</p>
            </div>
            <div>
              <p>Sitemap</p>
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
            </div>
          </div>
          <div className="right-menu">
            <p
              style={{
                textTransform: "none",
                textAlign: "right",
                margin: "0.4rem 0",
              }}
            >
              Subscribe to anime newsletter
            </p>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Sensei! Submit your email"
                required
              />
              <button type="submit" title="Submit (Demo)">
                &#128276;
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
