import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Trello, Activity, Info } from "react-feather";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header id="header" className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <div className="nav">
          <div className="logo">
            <NavLink to="/#home" exact>
              <img src="/landingpage/images/header/WeeBoo.png" alt="WeeBoo" />
            </NavLink>
          </div>
          <nav className="nav-links">
            <NavLink to="/#home" exact activeClassName="active">
              <Trello />
              <span>LANDING PAGE</span>
            </NavLink>
            <NavLink to="/updates/#updates" activeClassName="active">
              <Activity />
              <span>UPDATES</span>
            </NavLink>
            <NavLink to="/help/#help" activeClassName="active">
              <Info />
              <span>HELP</span>
            </NavLink>
          </nav>
        </div>
        <div className="auth-buttons">
          <NavLink to="/demo/#demo">
            <button className="btn btn-ghost">Login</button>
          </NavLink>
          <NavLink to="/demo/#demo">
            <button className="btn btn-primary">Sign Up</button>
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Header;
