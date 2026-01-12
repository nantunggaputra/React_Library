import { Fade } from "react-awesome-reveal";
import {
  Package,
  AlertCircle,
  CheckCircle,
  XCircle,
  Edit3,
  Clock,
} from "react-feather";
import AnimatedTypingText from "./AnimatedTypingText";

// Update Data
const updates = [
  {
    id: 1,
    version: "0.1.9",
    status: "LIVE",
    type: "Beta",
    date: "Jan 1, 2026",
    updateType: "major",
    changes: {
      added: [
        "Landing Page with modern UI/UX design",
        "Analytics dashboard with real-time statistics",
        "Testimonials section from community",
        "Interactive service carousel showcase",
      ],
      fixed: [
        "Responsive layout issues on mobile devices",
        "Navigation menu scroll behavior",
      ],
      changed: [
        "Improved animation performance",
        "Updated color scheme for better contrast",
      ],
    },
  },
  {
    id: 2,
    version: "0.1.8",
    status: "Stable",
    type: "Beta",
    date: "Jan 15, 2025",
    updateType: "minor",
    changes: {
      added: [
        "Search functionality with autocomplete",
        "Genre filtering system",
        "User preference settings",
      ],
      fixed: ["API call optimization", "Memory leak in anime list component"],
      changed: ["Refactored service worker configuration"],
    },
  },
  {
    id: 3,
    version: "0.1.7",
    status: "Stable",
    type: "Beta",
    date: "Aug 13, 2024",
    updateType: "patch",
    changes: {
      added: [
        "Favorite anime bookmark feature",
        "Dark mode toggle (experimental)",
      ],
      fixed: [
        "Image loading performance",
        "Routing issues on page refresh",
        "CSS specificity conflicts",
      ],
      removed: ["Deprecated legacy components"],
    },
  },
  {
    id: 4,
    version: "0.1.6",
    status: "Stable",
    type: "Beta",
    date: "Jul 31, 2024",
    updateType: "minor",
    changes: {
      added: [
        "Studio Masterpiece section",
        "Magazine news integration",
        "Trailer preview functionality",
      ],
      fixed: ["Cross-browser compatibility issues"],
      changed: ["Optimized bundle size by 30%"],
    },
  },
  {
    id: 5,
    version: "0.1.5",
    status: "Archived",
    type: "Beta",
    date: "Jul 24, 2024",
    updateType: "patch",
    changes: {
      added: ["Sunday Morning TV legacy section"],
      fixed: ["TypeScript type errors", "ESLint warnings cleanup"],
    },
  },
];

function LatestUpdate() {
  const getUpdateTypeColor = (type) => {
    const colors = {
      major: "red",
      minor: "orange",
      patch: "blue",
      hotfix: "green",
    };
    return colors[type] || "blue";
  };

  const getStatusColor = (status) => {
    const colors = {
      LIVE: "green",
      Stable: "blue",
      Archived: "gray",
    };
    return colors[status] || "gray";
  };

  const renderChangeIcon = (type) => {
    const icons = {
      added: <CheckCircle />,
      fixed: <AlertCircle />,
      changed: <Edit3 />,
      removed: <XCircle />,
    };
    return icons[type];
  };

  return (
    <section id="latest-update" className="latest-update">
      <Fade delay={250} duration={1000} triggerOnce>
        {/* Latest Update Section */}
        <section className="latest-update-section">
          <div className="update-noise-background"></div>

          <div className="update-header">
            <Fade delay={500} duration={750} direction="up" triggerOnce>
              <div className="update-badge">
                <Package />
                CHANGELOG
              </div>
            </Fade>
            <h2 className="styled-heading-text update-title">
              <AnimatedTypingText text="LATEST UPDATES" />
            </h2>
            <Fade delay={1250} duration={1000} triggerOnce>
              <p className="update-subtitle">
                Track every improvement and new feature wee ship
              </p>
            </Fade>
          </div>

          <Fade delay={1250} duration={1000} triggerOnce>
            <div className="update-container">
              <div className="update-timeline"></div>

              {updates.map((update, index) => (
                <Fade
                  key={update.id}
                  delay={1500 + index * 150}
                  duration={750}
                  direction="up"
                  triggerOnce
                >
                  <div className="update-card-wrapper">
                    <div
                      className={`update-card ${index === 0 ? "latest" : ""}`}
                    >
                      {/* Card Header */}
                      <div className="update-card-header">
                        <div className="update-version-info">
                          <div className="version-badge">
                            <span className="version-number">
                              v{update.version}
                            </span>
                            <span
                              className={`version-type ${getUpdateTypeColor(
                                update.updateType
                              )}`}
                            >
                              {update.type}
                            </span>
                          </div>
                          <span
                            className={`status-badge ${getStatusColor(
                              update.status
                            )}`}
                          >
                            {update.status === "LIVE" && (
                              <span className="status-dot"></span>
                            )}
                            {update.status}
                          </span>
                        </div>
                        <div className="update-date">
                          <Clock />
                          <span>{update.date}</span>
                        </div>
                      </div>

                      {/* Update Type Badge */}
                      <div
                        className={`update-type-badge ${getUpdateTypeColor(
                          update.updateType
                        )}`}
                      >
                        {update.updateType.toUpperCase()} UPDATE
                      </div>

                      {/* Changes List */}
                      <div className="update-changes">
                        {update.changes.added && (
                          <div className="change-group">
                            <div className="change-header added">
                              {renderChangeIcon("added")}
                              <span>Added</span>
                            </div>
                            <ul className="change-list">
                              {update.changes.added.map((item, idx) => (
                                <li key={idx}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {update.changes.fixed && (
                          <div className="change-group">
                            <div className="change-header fixed">
                              {renderChangeIcon("fixed")}
                              <span>Fixed</span>
                            </div>
                            <ul className="change-list">
                              {update.changes.fixed.map((item, idx) => (
                                <li key={idx}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {update.changes.changed && (
                          <div className="change-group">
                            <div className="change-header changed">
                              {renderChangeIcon("changed")}
                              <span>Changed</span>
                            </div>
                            <ul className="change-list">
                              {update.changes.changed.map((item, idx) => (
                                <li key={idx}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {update.changes.removed && (
                          <div className="change-group">
                            <div className="change-header removed">
                              {renderChangeIcon("removed")}
                              <span>Removed</span>
                            </div>
                            <ul className="change-list">
                              {update.changes.removed.map((item, idx) => (
                                <li key={idx}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Fade>
              ))}
            </div>
          </Fade>
        </section>
      </Fade>
    </section>
  );
}

export default LatestUpdate;
