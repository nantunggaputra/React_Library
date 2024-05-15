// import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      <div className="social-icons">
        <a
          href="https://github.com/nantunggaputra"
          target="_blank"
          rel="noopener"
        >
          Github
        </a>
        <a
          href="https://www.sololearn.com/en/profile/29010238"
          target="_blank"
          rel="noopener"
        >
          Sololearn
        </a>
        <a
          href="https://www.freecodecamp.org/fcc25a60d51-9b4d-4215-8292-018b8c933994"
          target="_blank"
          rel="noopener"
        >
          freeCodeCamp
        </a>
      </div>
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
  );
}
