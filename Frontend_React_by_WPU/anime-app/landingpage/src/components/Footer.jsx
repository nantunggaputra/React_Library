import { Fade } from "react-awesome-reveal";
import { NavLink } from "react-router-dom";
import { Mail, Linkedin, GitHub, Twitter } from "react-feather";
import { SiStackoverflow, SiBluesky } from "@icons-pack/react-simple-icons";
import AnimatedCtaButton from "./AnimatedCtaButton";

function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    general: [
      { name: "Landing Page", path: "/#home" },
      { name: "Updates", path: "/updates/#updates" },
      { name: "Help", path: "/help/#help" },
      { name: "Login", path: "/demo/#demo" },
      { name: "Sign Up", path: "/demo/#demo" },
    ],
    theApp: [
      { name: "App", path: "../" },
      { name: "Blog", path: "../" },
      { name: "Event", path: "../" },
      { name: "Forum", path: "../" },
      { name: "Website", path: "../" },
    ],
    resources: [
      {
        name: "Founder",
        path: "https://nantunggaputra.github.io/HTML/#home",
      },
      { name: "QR Code", path: "https://nantunggaputra.github.io/HTML/#qr" },
      {
        name: "Portfolio",
        path: "https://nantunggaputra.github.io/HTML/#portfolio",
      },
      {
        name: "Clients",
        path: "https://nantunggaputra.github.io/HTML/#clients",
      },
      {
        name: "Call to Action",
        path: "https://nantunggaputra.github.io/HTML/#cta",
      },
    ],
  };

  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      url: "mailto:anggunnantunggaputra@gmail.com",
      color: "blue",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://id.linkedin.com/in/nantungga-putra-451779116",
      color: "blue",
    },
    {
      name: "GitHub",
      icon: GitHub,
      url: "https://github.com/nantunggaputra",
      color: "white",
    },
    {
      name: "Stackoverflow",
      icon: SiStackoverflow,
      url: "https://stackoverflow.com",
      color: "white",
    },
    {
      name: "X",
      icon: Twitter,
      url: "https://x.com/nantunggaputra",
      color: "blue",
    },
    {
      name: "Bluesky",
      icon: SiBluesky,
      url: "https://bsky.app",
      color: "blue",
    },
  ];

  return (
    <footer id="footer" className="footer">
      <div className="footer-gradient-line"></div>

      <Fade delay={0} duration={1000} triggerOnce>
        <div className="footer-container">
          {/* Brand Section */}
          <div className="footer-brand">
            <Fade delay={250} duration={750} direction="up" triggerOnce>
              <div className="footer-logo">
                <img
                  src="/landingpage/images/header/WeeBoo.png"
                  alt="WeeBoo Logo"
                />
                <h3>WeeBoo</h3>
              </div>
              <p className="footer-tagline">
                Your ultimate anime companion. Discover, track, and enjoy the
                best anime experience.
              </p>
              <div className="footer-socials">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      aria-label={social.name}
                    >
                      <Icon />
                    </a>
                  );
                })}
              </div>
            </Fade>
          </div>

          {/* Navigation Links */}
          <div className="footer-links">
            <Fade delay={500} duration={750} direction="up" triggerOnce>
              <div className="footer-column">
                <h4 className="footer-column-title">General</h4>
                <ul className="footer-nav">
                  {footerLinks.general.map((link, index) => (
                    <li key={index}>
                      <NavLink to={link.path}>{link.name}</NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </Fade>

            <Fade delay={650} duration={750} direction="up" triggerOnce>
              <div className="footer-column">
                <h4 className="footer-column-title">The App</h4>
                <ul className="footer-nav">
                  {footerLinks.theApp.map((link, index) => (
                    <li key={index}>
                      <a href={link.path}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </Fade>

            <Fade delay={800} duration={750} direction="up" triggerOnce>
              <div className="footer-column">
                <h4 className="footer-column-title">Resources</h4>
                <ul className="footer-nav">
                  {footerLinks.resources.map((link, index) => (
                    <li key={index}>
                      <a href={link.path}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </Fade>
          </div>

          {/* Newsletter Section */}
          <div className="footer-newsletter">
            <Fade delay={950} duration={750} direction="up" triggerOnce>
              <h4 className="newsletter-title">
                Subscribe to WeeBoo&apos;s newsletter
              </h4>
              <p className="newsletter-description">
                Don&apos;t miss out. Get an email whenever wee post, no spam.
              </p>
              <NavLink to="/#home">
                <AnimatedCtaButton text="Subscribe Now" />
              </NavLink>
            </Fade>
          </div>
        </div>
      </Fade>

      {/* Copyright */}
      <Fade delay={1100} duration={750} triggerOnce>
        <div className="footer-copyright">
          <p>
            Copyright © 2024-{currentYear} WeeBoo | My Anime List. All rights
            reserved.
          </p>
        </div>
      </Fade>
    </footer>
  );
}

export default Footer;
