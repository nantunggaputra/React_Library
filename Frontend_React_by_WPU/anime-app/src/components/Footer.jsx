import {
  SiVercel,
  SiGithub,
  SiSololearn,
  SiFreecodecamp,
  SiReact,
} from "@icons-pack/react-simple-icons";

export default function Footer() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <footer>
      <div className="footer">
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
                @gmail.com
              </small>
              <br />
              <br />
              <p>About Us</p>
              <p>Contact Us</p>
              <p className="fs">Fans Screening</p>
              <p className="afa">Anime Festival Asia (ID)</p>
            </div>
            <div>
              <p className="rss">RSS</p>
              <p className="sitemap">Sitemap</p>
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
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
              <button type="submit" title="Subscribe">
                &#128276;
                <img src="Kaito Kid Logo 3D.webp" alt=" " />
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="gototop">
        <div className="container">
          <button>
            <a href="#" title="Go to top">
              ⥣
            </a>
          </button>
        </div>
      </div>
    </footer>
  );
}
