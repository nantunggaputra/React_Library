import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import {
  TrendingUp,
  Users,
  Film,
  Star,
  MessageCircle,
  Calendar,
  BarChart2,
  Lock,
  X,
  Mail,
  Eye,
  EyeOff,
} from "react-feather";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import AnimatedTypingText from "./AnimatedTypingText";

// Platform Stats Data
const platformStats = [
  {
    id: 1,
    icon: Film,
    label: "Total Anime",
    value: 15420,
    change: "+156",
    color: "blue",
  },
  {
    id: 2,
    icon: Users,
    label: "Active Users",
    value: 8750,
    change: "+324",
    color: "orange",
  },
  {
    id: 3,
    icon: MessageCircle,
    label: "Total Reviews",
    value: 19320,
    change: "+892",
    color: "red",
  },
  {
    id: 4,
    icon: Star,
    label: "Ratings Given",
    value: 45680,
    change: "+1.2k",
    color: "green",
  },
];

// Genre Distribution Data
const genreStats = [
  { genre: "Action", percentage: 28, count: 4318 },
  { genre: "Comedy", percentage: 22, count: 3392 },
  { genre: "Drama", percentage: 18, count: 2776 },
  { genre: "Romance", percentage: 15, count: 2313 },
  { genre: "Fantasy", percentage: 12, count: 1850 },
  { genre: "Sci-Fi", percentage: 5, count: 771 },
];

// Top Studios Data
const studioStats = [
  { name: "Studio MAPPA", animeCount: 234, percentage: 85 },
  { name: "Kyoto Animation", animeCount: 198, percentage: 72 },
  { name: "Ufotable", animeCount: 176, percentage: 64 },
  { name: "Bones", animeCount: 145, percentage: 53 },
  { name: "Production I.G", animeCount: 132, percentage: 48 },
];

// Locked Features Data
const lockedFeatures = [
  {
    id: 1,
    title: "My Anime List",
    description: "Track and manage your personal anime collection",
    icon: Film,
    color: "blue",
  },
  {
    id: 2,
    title: "Favorites",
    description: "Save your most beloved anime series",
    icon: Star,
    color: "orange",
  },
  {
    id: 3,
    title: "Rate Anime",
    description: "Share your ratings with the community",
    icon: TrendingUp,
    color: "red",
  },
  {
    id: 4,
    title: "Saved Reviews",
    description: "Keep track of your anime reviews",
    icon: MessageCircle,
    color: "green",
  },
  {
    id: 5,
    title: "My Track Progress",
    description: "Monitor your watching progress",
    icon: BarChart2,
    color: "blue",
  },
  {
    id: 6,
    title: "Personalized Recommendations",
    description: "Get AI-powered anime suggestions",
    icon: Calendar,
    color: "orange",
  },
];

function DashboardDemo() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const handleLockedClick = () => {
    setShowLoginModal(true);
  };

  const closeLoginModal = () => {
    setShowLoginModal(false);
  };

  return (
    <section id="dashboard-demo" className="dashboard-demo">
      <Fade delay={250} duration={1000} triggerOnce>
        {/* Dashboard Section */}
        <section className="dashboard-section">
          {/* Welcome Header */}
          <div className="dashboard-header">
            <Fade delay={500} duration={750} direction="up" triggerOnce>
              <div className="welcome-badge">
                <span className="badge-dot"></span>
                DEMO STATISTICS
              </div>
            </Fade>
            <h2 className="styled-heading-text dashboard-title">
              <AnimatedTypingText text="PLATFORM ANALYTICS" />
            </h2>
            <Fade delay={1250} duration={1000} triggerOnce>
              <p className="dashboard-subtitle">
                Real-time insights and analytics from our growing anime
                community
              </p>
            </Fade>
          </div>

          {/* Platform Stats Cards */}
          <Fade delay={1250} duration={1000} triggerOnce>
            <div className="stats-grid" ref={ref}>
              {platformStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Fade
                    key={stat.id}
                    delay={1500 + index * 100}
                    duration={750}
                    direction="up"
                    triggerOnce
                  >
                    <div className={`stat-card ${stat.color}`}>
                      <div className="stat-icon">
                        <Icon />
                      </div>
                      <div className="stat-content">
                        <div className="stat-value">
                          <CountUp
                            end={stat.value}
                            duration={2}
                            separator=","
                            redraw={false}
                            start={inView ? 0 : stat.value}
                          />
                        </div>
                        <div className="stat-label">{stat.label}</div>
                        <div className={`stat-change ${stat.color}`}>
                          {stat.change} this month
                        </div>
                      </div>
                    </div>
                  </Fade>
                );
              })}
            </div>
          </Fade>

          {/* Genre Distribution */}
          <Fade delay={2000} duration={1000} triggerOnce>
            <div className="dashboard-widget">
              <h3 className="widget-title">Genre Distribution</h3>
              <div className="genre-chart">
                {genreStats.map((genre, index) => (
                  <div key={index} className="genre-item">
                    <div className="genre-info">
                      <span className="genre-name">{genre.genre}</span>
                      <span className="genre-count">{genre.count} anime</span>
                    </div>
                    <div className="genre-bar-container">
                      <div
                        className="genre-bar"
                        style={{ width: `${genre.percentage}%` }}
                      >
                        <span className="genre-percentage">
                          {genre.percentage}%
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Fade>

          {/* Top Studios */}
          <Fade delay={2250} duration={1000} triggerOnce>
            <div className="dashboard-widget">
              <h3 className="widget-title">Top Contributing Studios</h3>
              <div className="studio-list">
                {studioStats.map((studio, index) => (
                  <div key={index} className="studio-item">
                    <div className="studio-rank">#{index + 1}</div>
                    <div className="studio-info">
                      <span className="studio-name">{studio.name}</span>
                      <div className="studio-bar-container">
                        <div
                          className="studio-bar"
                          style={{ width: `${studio.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="studio-count">{studio.animeCount}</div>
                  </div>
                ))}
              </div>
            </div>
          </Fade>

          {/* Personal Features (Locked) */}
          <Fade delay={2500} duration={1000} triggerOnce>
            <div className="personal-features-section">
              <h3 className="section-title">More Personal Features</h3>
              <p className="section-description">
                Login to unlock personalized anime tracking and recommendations
              </p>
              <div className="locked-features-grid">
                {lockedFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <Fade
                      key={feature.id}
                      delay={2750 + index * 100}
                      duration={750}
                      direction="up"
                      triggerOnce
                    >
                      <div
                        className={`locked-card ${feature.color}`}
                        onClick={handleLockedClick}
                      >
                        <div className="locked-overlay">
                          <Lock className="lock-icon" />
                        </div>
                        <div className="locked-content">
                          <div className={`locked-icon ${feature.color}`}>
                            <Icon />
                          </div>
                          <h4 className="locked-title">{feature.title}</h4>
                          <p className="locked-description">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </Fade>
                  );
                })}
              </div>
            </div>
          </Fade>
        </section>
      </Fade>

      {/* Login Modal */}
      {showLoginModal && (
        <div className="login-modal-overlay" onClick={closeLoginModal}>
          <Fade duration={300}>
            <div className="login-modal" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeLoginModal}>
                <X />
              </button>

              <div className="modal-header">
                <img
                  src="/landingpage/images/header/WeeBoo.png"
                  alt="WeeBoo Logo"
                  className="modal-logo"
                />
                <h2 className="modal-title">Welcome Back!</h2>
                <p className="modal-subtitle">
                  Login to access your personal anime dashboard
                </p>
              </div>

              <form className="login-form">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <div className="input-wrapper">
                    <Mail className="input-icon" />
                    <input
                      type="email"
                      id="email"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <div className="input-wrapper">
                    <Lock className="input-icon" />
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      placeholder="Enter your password"
                      required
                    />
                    <button
                      type="button"
                      className="toggle-password"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff /> : <Eye />}
                    </button>
                  </div>
                </div>

                <button type="submit" className="btn-login">
                  Login
                </button>
              </form>

              <div className="modal-footer">
                <p>
                  Don&apos;t have an account? <a href="#signup">Sign up</a>
                </p>
              </div>
            </div>
          </Fade>
        </div>
      )}
    </section>
  );
}

export default DashboardDemo;
