import { Fade } from "react-awesome-reveal";
import { useInView } from "react-intersection-observer";
import {
  TrendingUp,
  Users,
  Search,
  Star,
  Film,
  MessageCircle,
} from "react-feather";
import AnimatedTypingText from "./AnimatedTypingText";
import CountUp from "react-countup";

// Analytics Data
const analyticsData = [
  {
    id: 1,
    icon: Film,
    label: "Total Anime Database",
    value: 15420,
    suffix: "+",
    color: "blue",
    grade: "S",
  },
  {
    id: 2,
    icon: Users,
    label: "Active Weebs",
    value: 8750,
    suffix: "+",
    color: "orange",
    grade: "A+",
  },
  {
    id: 3,
    icon: Search,
    label: "Daily Searches",
    value: 24680,
    suffix: "+",
    color: "red",
    grade: "S+",
  },
  {
    id: 4,
    icon: Star,
    label: "Top Rated Shows",
    value: 2840,
    suffix: "+",
    color: "green",
    grade: "A",
  },
  {
    id: 5,
    icon: TrendingUp,
    label: "New Releases",
    value: 156,
    suffix: "",
    color: "blue",
    grade: "B+",
  },
  {
    id: 6,
    icon: MessageCircle,
    label: "Community Reviews",
    value: 19320,
    suffix: "+",
    color: "orange",
    grade: "S",
  },
];

// Counter Animation Component
function AnimatedCounter({ end, duration = 2000, inView }) {
  return (
    <CountUp
      end={end}
      duration={duration / 1000}
      separator=","
      redraw={false}
      start={inView ? 0 : end}
    />
  );
}

function Analytics() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section id="analytics" className="analytics">
      <Fade delay={250} duration={1000} triggerOnce>
        {/* Analytics Section */}
        <section className="analytics-section" ref={ref}>
          <div className="analytics-grid-background"></div>

          <div className="analytics-header">
            <Fade delay={500} duration={750} direction="up" triggerOnce>
              <div className="analytics-badge">
                <span className="badge-dot"></span>
                LIVE STATISTICS
              </div>
            </Fade>
            <h2 className="styled-heading-text analytics-title">
              <AnimatedTypingText text="PLATFORM ANALYTICS" />
            </h2>
            <Fade delay={1250} duration={1000} triggerOnce>
              <p className="analytics-subtitle">
                Real-time insights from our growing anime community
              </p>
            </Fade>
          </div>

          <Fade delay={1250} duration={1000} triggerOnce>
            <div className="analytics-container">
              {analyticsData.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Fade
                    key={stat.id}
                    delay={1500 + index * 100}
                    duration={750}
                    direction="up"
                    triggerOnce
                  >
                    <div className={`analytics-card ${stat.color}`}>
                      <div className="analytics-card-header">
                        <div className={`analytics-icon ${stat.color}`}>
                          <Icon />
                        </div>
                        <span className={`analytics-grade ${stat.color}`}>
                          {stat.grade}
                        </span>
                      </div>
                      <div className="analytics-value">
                        <AnimatedCounter end={stat.value} inView={inView} />
                        {stat.suffix && (
                          <span className="suffix">{stat.suffix}</span>
                        )}
                      </div>
                      <div className="analytics-label">{stat.label}</div>
                      <div className="analytics-glow"></div>
                    </div>
                  </Fade>
                );
              })}
            </div>
          </Fade>

          <Fade delay={2000} duration={1000} triggerOnce>
            <div className="analytics-footer">
              <div className="analytics-info">
                <div className="info-item">
                  <span className="info-label">Last Updated:</span>
                  <span className="info-value">Just Now</span>
                </div>
                <div className="info-divider"></div>
                <div className="info-item">
                  <span className="info-label">Data Accuracy:</span>
                  <span className="info-value">99.8%</span>
                </div>
                <div className="info-divider"></div>
                <div className="info-item">
                  <span className="info-label">Server Status:</span>
                  <span className="info-value status-live">
                    <span className="status-dot"></span>
                    Online
                  </span>
                </div>
              </div>
            </div>
          </Fade>
        </section>
      </Fade>
    </section>
  );
}

export default Analytics;
