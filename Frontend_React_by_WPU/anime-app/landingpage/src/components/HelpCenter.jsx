import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import {
  Search,
  ChevronDown,
  ChevronUp,
  Home,
  Film,
  Star,
  Heart,
  User,
  Settings,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
} from "react-feather";

// Help Articles Data - Comprehensive A-Z Guide
const helpArticles = [
  // GETTING STARTED
  {
    id: 1,
    category: "Getting Started",
    icon: Home,
    title: "What is WeeBoo Anime App?",
    content:
      "WeeBoo is your ultimate anime companion - a comprehensive platform for discovering, tracking, and managing your anime journey. Built with React and powered by the Jikan API, WeeBoo provides access to over 15,000+ anime titles with real-time data from MyAnimeList.",
  },
  {
    id: 2,
    category: "Getting Started",
    icon: Home,
    title: "How to Create an Account?",
    content:
      "Creating an account is simple! Click the 'Sign Up' button in the header, enter your email and password, verify your email address, and you're ready to start your anime adventure. Account creation unlocks personalized features like watchlists, favorites, and recommendations.",
  },
  {
    id: 3,
    category: "Getting Started",
    icon: Home,
    title: "Navigating the Landing Page",
    content:
      "Our landing page features Hero section with latest updates, Service showcase of app features, Testimonials from our community, Platform Analytics with real-time stats, Latest Updates changelog, Developer profiles, and Footer with quick links. Each section is designed for easy navigation.",
  },

  // FEATURES
  {
    id: 4,
    category: "Features",
    icon: Film,
    title: "How to Search for Anime?",
    content:
      "Use the search bar in the main app to find anime by title, genre, studio, or year. Our autocomplete feature suggests anime as you type. You can also filter results by rating, popularity, airing status, and more to find exactly what you're looking for.",
  },
  {
    id: 5,
    category: "Features",
    icon: Film,
    title: "Understanding Anime Categories",
    content:
      "WeeBoo organizes anime into several categories: Home (latest updates), Favorite (editor's picks), Featured (trending now), Sunday Morning TV (classic childhood anime), Category (browse by type), Studio Masterpiece (works by top studios), Genre (filter by genre), Trailer (watch previews), and Magazine (anime news).",
  },
  {
    id: 6,
    category: "Features",
    icon: Film,
    title: "How to Filter by Genre?",
    content:
      "Navigate to the Genre section and select from 28+ genres including Action, Adventure, Comedy, Drama, Fantasy, Horror, Mystery, Romance, Sci-Fi, Slice of Life, and more. You can combine multiple genres to narrow down your search and discover anime that match your preferences.",
  },
  {
    id: 7,
    category: "Features",
    icon: Film,
    title: "Exploring Studio Masterpieces",
    content:
      "Discover iconic works from renowned studios like Studio Ghibli, Kyoto Animation, Ufotable, MAPPA, and Production I.G. Each studio has a unique style and storytelling approach. Browse curated collections to explore their best works.",
  },

  // ACCOUNT & PERSONALIZATION
  {
    id: 8,
    category: "Account",
    icon: User,
    title: "Managing Your Anime List",
    content:
      "Your personal anime list helps you organize titles into categories: Watching, Completed, On Hold, Dropped, and Plan to Watch. Update your progress, add notes, and track episodes watched. Your list syncs across all devices when you're logged in.",
  },
  {
    id: 9,
    category: "Account",
    icon: Star,
    title: "How to Add Favorites?",
    content:
      "Click the heart icon on any anime card to add it to your favorites. Your favorites are displayed on your profile and help our recommendation system suggest similar anime. You can manage your favorites list anytime from your profile dashboard.",
  },
  {
    id: 10,
    category: "Account",
    icon: Star,
    title: "Rating Anime",
    content:
      "Share your opinion by rating anime on a scale of 1-10. Your ratings contribute to community scores and help other users discover quality content. You can update your ratings anytime, and view your rating history in your profile.",
  },
  {
    id: 11,
    category: "Account",
    icon: Heart,
    title: "Writing and Saving Reviews",
    content:
      "Write detailed reviews to share your thoughts with the community. Include spoiler warnings when necessary. Your saved reviews are accessible from your profile, and you can edit or delete them anytime. Quality reviews earn community badges!",
  },
  {
    id: 12,
    category: "Account",
    icon: Settings,
    title: "Tracking Your Progress",
    content:
      "Monitor your anime watching journey with detailed statistics: total episodes watched, average rating given, favorite genres, most watched studios, watching streaks, and completion rates. View beautiful visualizations of your anime preferences over time.",
  },
  {
    id: 13,
    category: "Account",
    icon: Heart,
    title: "Getting Personalized Recommendations",
    content:
      "Our AI-powered recommendation engine analyzes your watch history, ratings, and favorites to suggest anime you'll love. The more you interact with the platform, the better your recommendations become. Discover hidden gems tailored to your taste!",
  },

  // TECHNICAL
  {
    id: 14,
    category: "Technical",
    icon: Settings,
    title: "Platform Analytics Explained",
    content:
      "Our analytics dashboard shows real-time platform statistics including total anime database size, active users, daily searches, top-rated shows, new releases, and community reviews. Data updates every hour to reflect the latest activity.",
  },
  {
    id: 15,
    category: "Technical",
    icon: Settings,
    title: "API and Data Sources",
    content:
      "WeeBoo uses the Jikan REST API v4, an unofficial MyAnimeList API, to fetch anime data. This ensures you get accurate, up-to-date information about anime, including titles, descriptions, ratings, episodes, airing dates, and more.",
  },
  {
    id: 16,
    category: "Technical",
    icon: Settings,
    title: "Browser Compatibility",
    content:
      "WeeBoo works best on modern browsers: Chrome 90+, Firefox 88+, Safari 14+, and Edge 90+. We recommend keeping your browser updated for the best experience. Mobile browsers on iOS and Android are fully supported.",
  },
  {
    id: 17,
    category: "Technical",
    icon: Settings,
    title: "Reporting Bugs or Issues",
    content:
      "Found a bug? Report it via our GitHub repository or contact support. Include: browser version, steps to reproduce, screenshots if applicable, and expected vs actual behavior. We review all reports and aim to fix issues within 48 hours.",
  },

  // FAQ
  {
    id: 18,
    category: "FAQ",
    icon: HelpCircle,
    title: "Is WeeBoo Free to Use?",
    content:
      "Yes! WeeBoo is completely free and open-source. Core features including search, browse, and viewing anime information are available to all users. Creating an account unlocks personalized features at no cost. We're committed to keeping anime accessible to everyone.",
  },
  {
    id: 19,
    category: "FAQ",
    icon: HelpCircle,
    title: "How Often is Data Updated?",
    content:
      "Anime data syncs from MyAnimeList multiple times daily. New releases, ratings, and episode counts update every 6 hours. Platform statistics (user activity, reviews, etc.) update in real-time. You'll always have access to the latest anime information.",
  },
  {
    id: 20,
    category: "FAQ",
    icon: HelpCircle,
    title: "Can I Contribute to WeeBoo?",
    content:
      "Absolutely! WeeBoo is open-source and welcomes contributions. You can: submit bug reports, suggest features, contribute code (Frontend, Backend, UI/UX), write documentation, or join our community discussions. Check our GitHub for contribution guidelines.",
  },
  {
    id: 21,
    category: "FAQ",
    icon: HelpCircle,
    title: "How to Contact Support?",
    content:
      "Reach us via email, join our Telegram community, submit issues on GitHub, or use the contact form in the footer. We typically respond within 24 hours. For urgent issues, use email with 'URGENT' in the subject line.",
  },
  {
    id: 22,
    category: "FAQ",
    icon: HelpCircle,
    title: "Privacy and Data Security",
    content:
      "Your privacy is our priority. We collect minimal data: email and password (encrypted), anime preferences and ratings, and usage analytics (anonymized). We never sell your data. Read our full Privacy Policy for details. You can request data deletion anytime.",
  },
  {
    id: 23,
    category: "FAQ",
    icon: HelpCircle,
    title: "Supported Languages",
    content:
      "Currently, WeeBoo is available in English with Indonesian support coming soon. Anime titles display in both English and Japanese (romaji). We're working on adding more languages based on community demand. Want to help translate? Join our localization team!",
  },
  {
    id: 24,
    category: "FAQ",
    icon: HelpCircle,
    title: "Mobile App Availability",
    content:
      "WeeBoo is a Progressive Web App (PWA), meaning you can install it on your mobile device for an app-like experience. On mobile browsers, look for the 'Add to Home Screen' option. Native iOS and Android apps are in development for 2026.",
  },
];

const ITEMS_PER_PAGE = 6;

function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedId, setExpandedId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Getting Started",
    "Features",
    "Account",
    "Technical",
    "FAQ",
  ];

  // Filter articles
  const filteredArticles = helpArticles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.content.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Pagination
  const totalPages = Math.ceil(filteredArticles.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedArticles = filteredArticles.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const toggleArticle = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="help-center">
      <Fade delay={250} duration={1000} triggerOnce>
        {/* Search Section */}
        <div className="help-search-section">
          <Fade delay={500} duration={750} direction="up" triggerOnce>
            <div className="search-container">
              <Search className="search-icon" />
              <input
                type="text"
                placeholder="Search help articles..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="help-search-input"
              />
            </div>
          </Fade>
        </div>

        {/* Category Filter */}
        <Fade delay={750} duration={750} triggerOnce>
          <div className="help-categories">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => handleCategoryChange(category)}
                className={`category-btn ${
                  selectedCategory === category ? "active" : ""
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </Fade>

        {/* Results Count */}
        <Fade delay={1000} duration={750} triggerOnce>
          <div className="help-results">
            <p>
              Showing {startIndex + 1}-
              {Math.min(startIndex + ITEMS_PER_PAGE, filteredArticles.length)}{" "}
              of {filteredArticles.length} articles
            </p>
          </div>
        </Fade>

        {/* Articles List */}
        <div className="help-articles">
          {paginatedArticles.map((article, index) => {
            const Icon = article.icon;
            return (
              <Fade
                key={article.id}
                delay={1250 + index * 100}
                duration={750}
                direction="up"
                triggerOnce
              >
                <div className="help-article">
                  <div
                    className="article-header"
                    onClick={() => toggleArticle(article.id)}
                  >
                    <div className="article-title-wrapper">
                      <div className="article-icon">
                        <Icon />
                      </div>
                      <div className="article-info">
                        <span className="article-category">
                          {article.category}
                        </span>
                        <h3 className="article-title">{article.title}</h3>
                      </div>
                    </div>
                    <button className="expand-btn">
                      {expandedId === article.id ? (
                        <ChevronUp />
                      ) : (
                        <ChevronDown />
                      )}
                    </button>
                  </div>
                  {expandedId === article.id && (
                    <div className="article-content">
                      <p>{article.content}</p>
                    </div>
                  )}
                </div>
              </Fade>
            );
          })}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <Fade delay={2000} duration={750} triggerOnce>
            <div className="help-pagination">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="pagination-btn"
              >
                <ChevronLeft />
                Previous
              </button>

              <div className="pagination-numbers">
                {[...Array(totalPages)].map((_, index) => {
                  const page = index + 1;
                  if (
                    page === 1 ||
                    page === totalPages ||
                    (page >= currentPage - 1 && page <= currentPage + 1)
                  ) {
                    return (
                      <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`page-number ${
                          currentPage === page ? "active" : ""
                        }`}
                      >
                        {page}
                      </button>
                    );
                  } else if (
                    page === currentPage - 2 ||
                    page === currentPage + 2
                  ) {
                    return (
                      <span key={page} className="pagination-dots">
                        ...
                      </span>
                    );
                  }
                  return null;
                })}
              </div>

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="pagination-btn"
              >
                Next
                <ChevronRight />
              </button>
            </div>
          </Fade>
        )}
      </Fade>
    </section>
  );
}

export default HelpCenter;
