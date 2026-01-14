import { Fade } from "react-awesome-reveal";
import { Users, MapPin, Heart, GitHub, Linkedin, Globe } from "react-feather";
import AnimatedTypingText from "./AnimatedTypingText";
import AnimatedCtaButton from "./AnimatedCtaButton";

// Developer Data
const developers = [
  {
    id: 1,
    name: "Nantungga Putra",
    role: "Frontend Developer",
    badge: "FOUNDER",
    status: "active",
    avatar: "/landingpage/images/developers/nantunggaputra.webp",
    location: "Indonesia · Remote",
    bio: "Passionate about creating seamless anime discovery experiences. Building WeeBoo with React and modern web technologies to bring anime lovers together.",
    skills: ["React.js", "Vite", "Tailwind CSS", "JavaScript", "CSS3", "HTML5"],
    interests: ["SPA Development", "Web App", "Landing Page", "Open Source"],
    socials: [
      {
        name: "GitHub",
        icon: GitHub,
        url: "https://github.com/nantunggaputra",
      },
      {
        name: "LinkedIn",
        icon: Linkedin,
        url: "https://id.linkedin.com/in/nantungga-putra-451779116",
      },
      {
        name: "Website",
        icon: Globe,
        url: "https://nantunggaputra.github.io/",
      },
    ],
  },
  {
    id: 2,
    name: "Your Name",
    role: "Backend Developer",
    badge: "OPEN POSITION",
    status: "open",
    avatar: null,
    callToAction: "IT'S YOUR TURN",
    location: "Worldwide · Remote",
    bio: "Join us to build the API infrastructure that powers WeeBoo. We need someone skilled in building scalable REST APIs, managing databases, and ensuring high performance for anime data delivery.",
    skills: [
      "Node.js",
      "Express",
      "MongoDB",
      "PostgreSQL",
      "REST API",
      "Docker",
    ],
    interests: [
      "API Design",
      "Database Optimization",
      "Microservices",
      "DevOps",
    ],
    ctaButton: "Join the Team",
  },
  {
    id: 3,
    name: "Your Name",
    role: "UI/UX Designer",
    badge: "OPEN POSITION",
    status: "open",
    avatar: null,
    callToAction: "WE NEED YOU",
    location: "Worldwide · Remote",
    bio: "Help us create beautiful and intuitive user experiences for anime lovers worldwide. Design the future of anime discovery with modern design systems and user-centered approach.",
    skills: [
      "Figma",
      "Design System",
      "Prototyping",
      "User Research",
      "Wireframing",
      "Adobe XD",
    ],
    interests: [
      "UI Design",
      "UX Research",
      "Interaction Design",
      "Accessibility",
    ],
    ctaButton: "Join the Team",
  },
];

function Developers() {
  return (
    <section id="developers" className="developers">
      <Fade delay={250} duration={1000} triggerOnce>
        {/* Developers Section */}
        <section className="developers-section">
          <div className="developers-header">
            <Fade delay={500} duration={750} direction="up" triggerOnce>
              <div className="developers-badge">
                <Users />
                THE TEAM
              </div>
            </Fade>
            <h2 className="styled-heading-text developers-title">
              <AnimatedTypingText text="MEET THE DEVELOPERS" />
            </h2>
            <Fade delay={1250} duration={1000} triggerOnce>
              <p className="developers-subtitle">
                WeeBoo is an open-source project. Join our dedicated team and
                help build the ultimate anime experience together!
              </p>
            </Fade>
          </div>

          <div className="developers-container">
            {developers.map((dev, index) => (
              <div
                key={dev.id}
                className="developer-card-wrapper"
                style={{ "--card-index": index }}
              >
                <Fade
                  delay={1500 + index * 200}
                  duration={750}
                  direction="up"
                  triggerOnce
                >
                  <div className={`developer-card ${dev.status}`}>
                    {/* Card Header */}
                    <div className="developer-card-header">
                      <span className={`developer-badge ${dev.status}`}>
                        {dev.badge}
                      </span>
                    </div>

                    {/* Avatar Section */}
                    <div className="developer-avatar-section">
                      <div className={`developer-avatar ${dev.status}`}>
                        {dev.avatar ? (
                          <img
                            src={dev.avatar}
                            alt={dev.name}
                            onError={(e) => {
                              e.target.src =
                                "/landingpage/images/header/WeeBoo.png";
                            }}
                          />
                        ) : (
                          <div className="avatar-placeholder">
                            <Users />
                          </div>
                        )}
                      </div>
                      {dev.callToAction && (
                        <h3 className="developer-cta-text">
                          {dev.callToAction}
                        </h3>
                      )}
                    </div>

                    {/* Developer Info */}
                    <div className="developer-info">
                      <h3 className="developer-name">
                        {dev.name}
                        <span className="developer-name-null"> |</span>
                      </h3>
                      <p className="developer-role">{dev.role}</p>
                      <div className="developer-location">
                        <MapPin />
                        <span>{dev.location}</span>
                      </div>
                    </div>

                    {/* Bio */}
                    <p className="developer-bio">{dev.bio}</p>

                    {/* Skills */}
                    <div className="developer-section">
                      <h4 className="section-title">TECHNOLOGIES</h4>
                      <div className="skills-list">
                        {dev.skills.map((skill, idx) => (
                          <span key={idx} className="skill-badge">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Interests */}
                    <div className="developer-section">
                      <h4 className="section-title">INTERESTS</h4>
                      <div className="interests-list">
                        {dev.interests.map((interest, idx) => (
                          <span key={idx} className="interest-badge">
                            <Heart />
                            {interest}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Social Links or CTA */}
                    {dev.socials ? (
                      <div className="developer-socials">
                        {dev.socials.map((social, idx) => {
                          const Icon = social.icon;
                          return (
                            <a
                              key={idx}
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
                    ) : (
                      <div className="developer-cta">
                        <a
                          href="https://github.com/nantunggaputra/React_Library/tree/main/Frontend_React_by_WPU/anime-app"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <AnimatedCtaButton text={dev.ctaButton} />
                        </a>
                      </div>
                    )}
                  </div>
                </Fade>
              </div>
            ))}
          </div>
        </section>
      </Fade>
    </section>
  );
}

export default Developers;
