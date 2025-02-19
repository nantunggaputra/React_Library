import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import {
  SiVercel,
  SiGithub,
  SiSololearn,
  SiFreecodecamp,
  SiReact,
} from "@icons-pack/react-simple-icons";
import FloatingButton from "./FloatingButton";

export default function Footer() {
  const [showLights, setShowLights] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const showLightsSwicth = () => {
    setShowLights(true);
    setTimeout(() => {
      setShowLights(false);
    }, 1250);
  };

  const [isCopied, setIsCopied] = useState(false);

  const copyUrlToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 10000);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <footer>
      <Fade triggerOnce delay={250} duration={1000}>
        <div className="footer">
          <div className="social-icons">
            <a
              href="https://nantunggaputra.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiVercel color="var(--color-white)" size={24} />
            </a>
            <a
              href="https://github.com/nantunggaputra"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGithub color="var(--color-white)" size={24} />
            </a>
            <a
              href="https://www.sololearn.com/en/profile/29010238"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiSololearn color="var(--color-white)" size={24} />
            </a>
            <a
              href="https://www.freecodecamp.org/fcc25a60d51-9b4d-4215-8292-018b8c933994"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiFreecodecamp color="var(--color-white)" size={24} />
            </a>
            <a style={{ cursor: "pointer" }}>
              <SiReact color="var(--color-white)" size={24} />
            </a>
          </div>
          <h3>
            <a
              href="https://nantunggaputra.github.io/HTML/"
              target="_blank"
              rel="noopener noreferrer"
            >
              web<span>dev</span>el<span>op</span>er
            </a>
          </h3>
          <p>
            Created by{" "}
            <a
              href="https://www.linkedin.com/in/nantungga-putra-451779116/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Nan<span>t</span>ungga Put<span>r</span>a
            </a>{" "}
            | &copy;2024
          </p>
        </div>
      </Fade>
      <div className="foot">
        <div className="foot-menu">
          <div className="left-menu">
            <div>
              <h2>
                <a
                  href="https://nantunggaputra.github.io/HTML/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WEB
                  <wbr />
                  DEVELOPER
                </a>
              </h2>
              <small
                style={{
                  textTransform: "none",
                  color: "#767676",
                  cursor: "text",
                }}
              >
                anggunnantunggaputra
                <wbr />
                &#64;gmail.com
              </small>
              <br />
              <br />
              <p>
                <a href="#home">Home</a>
              </p>
              <p>
                <a href="#search-container">Search</a>
              </p>
              <p>
                <a href="#favorite">Favorite</a>
              </p>
              <p>
                <a href="#featured">Featured</a>
              </p>
              <p>
                <a href="#legacy">Sunday Morning TV</a>
              </p>
              <p>
                <a href="#category">Category</a>
              </p>
              <p>
                <a href="#masterpiece">Studio Masterpiece</a>
              </p>
              <p>
                <a href="#genre">Genre</a>
              </p>
              <p>
                <a href="#recent">Trailer</a>
              </p>
              <p>
                <a href="#magazine">Magazine</a>
              </p>
            </div>
            <div>
              <p>
                <a
                  href="https://github.com/nantunggaputra/React_Library/blob/main/Frontend_React_by_WPU/anime-app/README.md"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  About Us
                </a>
              </p>
              <p>
                <a
                  href="https://github.com/nantunggaputra/React_Library/blob/main/Frontend_React_by_WPU/anime-app/CONTACT.md"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact Us
                </a>
              </p>
              <p className="fs">
                <a
                  href="https://titipjepang.com/?s=fans+screening&id=125306&post_type=post"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fans Screening
                </a>
              </p>
              <p className="afa">
                <a
                  href="https://animefestival.asia/afaid24/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Anime Festival Asia (ID)
                </a>
              </p>
              <p className="alt">
                <a
                  href="https://myanimelist.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Anime List
                </a>
              </p>
              <p className="ast">
                <a
                  href="https://www.bilibili.tv/id"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Anime Streaming
                </a>
              </p>
              <p>
                <a
                  href="https://github.com/nantunggaputra/React_Library/blob/main/Frontend_React_by_WPU/anime-app/RIGHTS.md"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms &amp; Conditions
                </a>
              </p>
              <p>
                <a
                  href="https://github.com/nantunggaputra/React_Library/blob/main/Frontend_React_by_WPU/anime-app/PRIVACY_POLICY.md"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </a>
              </p>
              <p>WeeBoo &#215; Detective Conan</p>
              <p>WeeBoo from Anime-App</p>
            </div>
          </div>
          <div className="right-menu">
            <form onSubmit={handleSubmit}>
              <label htmlFor="subs">
                <p
                  style={{
                    fontSize: "1.4rem",
                    textTransform: "none",
                    letterSpacing: "1.14px",
                    margin: "0.4rem 0",
                    cursor: "pointer",
                  }}
                >
                  Subscribe to anime newsletter
                </p>
              </label>
              <input type="email" id="subs" required />
              <button
                type="submit"
                title="Subscribe"
                onClick={showLightsSwicth}
              >
                &#128276;
                <img src="Kaito Kid Logo 3D.webp" alt="" />
              </button>
            </form>
          </div>
        </div>
      </div>
      {showLights && <div className="lights"></div>}
      <div className="share">
        <FloatingButton
          itemKey="share-button"
          titleOn="Copied to clipboard"
          titleOff="Share"
          state={isCopied}
          toggleState={copyUrlToClipboard}
          iconOn={"\u2713"}
          iconOff={"\u2317"}
        />
      </div>
      <div className="donation">
        <FloatingButton
          itemKey="donation-button"
          titleOn=""
          titleOff=""
          url="https://trakteer.id/nantunggaputra"
          target="_blank"
          titleLink="Donation"
          iconLink={"\u26C1"}
        />
      </div>
      <div className="pocket">
        <FloatingButton
          itemKey="pocket-button"
          titleOn=""
          titleOff=""
          url="https://contra.com/nantungga_putra_f5y67v1g"
          target="_blank"
          titleLink="Freelance"
          iconLink={"\u2726"}
        />
      </div>
      <div className="gototop">
        <FloatingButton
          itemKey="top-button"
          titleOn=""
          titleOff=""
          url="#"
          titleLink="Go to top"
          iconLink={"\u2963"}
        />
      </div>
    </footer>
  );
}
