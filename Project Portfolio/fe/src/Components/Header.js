import React, { Component } from "react";
import ParticlesBg from "particles-bg";

class Header extends Component {
  render() {
    if (!this.props.data) return null;
    const project = this.props.data.project;
    const github = this.props.data.github;
    const name = this.props.data.name;
    const description = this.props.data.description;

    return (
      <header id="home">
        <ParticlesBg type="circle" bg={true} />
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#nav-wrap" title="Hide navigation">
            Hide navigation
          </a>
          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#portfolio">
                Portofolio
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="row banner">
          <div className="banner-text">
              <h1 className="responsive-headline">{name}</h1>
              <h3>{description}</h3>
              <ul className="social">
                <a
                  href={project}
                  target="_blank"
                  rel="noreferrer"
                  className="button btn project-btn"
                >
                  <i className="fa fa-book"></i>Project
                </a>
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className="button btn github-btn"
                >
                  <i className="fa fa-github"></i>GitHub
                </a>
              </ul>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
