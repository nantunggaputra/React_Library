import { SiVercel } from "@icons-pack/react-simple-icons";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { SiSololearn } from "@icons-pack/react-simple-icons";
import { SiFreecodecamp } from "@icons-pack/react-simple-icons";
import { SiReact } from "@icons-pack/react-simple-icons";

export default function Footer() {
  return (
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
