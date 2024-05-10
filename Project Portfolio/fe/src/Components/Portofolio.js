import React, { Component } from "react";
import Zmage from "react-zmage";
import { Fade } from "react-awesome-reveal";

let id = 0;
class Portofolio extends Component {
  render() {
    if (!this.props.data) return null;
    const { portofolio } = this.props.data;

    const projects = portofolio.projects.map((projects) => {
      let projectImage = `images/portofolio/${projects.image}`;

      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap">
            <Zmage alt={projects.title} src={projectImage} />
            <div style={{ textAlign: "center" }}>{projects.title}</div>
          </div>
        </div>
      );
    });

    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check My Works</h1>
              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                {projects}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portofolio;
