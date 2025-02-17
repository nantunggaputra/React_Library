/* eslint-disable no-unused-vars */
import React, { Component } from "react";

class Resume extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  render() {
    if (!this.props.data) return null;

    const { resume } = this.props.data;

    const education = resume.education.map((education) => {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree}
            <span> &bull; </span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
        </div>
      );
    });

    const work = resume.work.map((work) => {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span> &bull; </span>
            <em className="date">{work.years}</em>
          </p>
          <p>{work.description}</p>
        </div>
      );
    });

    const skills = resume.skills.map((skills) => {
      const backgroundColor = this.getRandomColor();
      const className = `bar-expand ${skills.name.toLowerCase()}`;
      const width = skills.level;

      return (
        <li key={skills.name}>
          <span style={{ width, backgroundColor }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    });

    return (
      <section id="resume">
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Education</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{education}</div>
              </div>
            </div>
          </div>

          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>work</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{work}</div>
              </div>
            </div>
          </div>

          <div className="row skills">
            <div className="three columns header-col">
              <h1>
                <span>Skills</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <p>{resume.skillmessage}</p>

              <div className="bars">
                <ul className="skills">{skills}</ul>
              </div>
            </div>
          </div>
      </section>
    );
  }
}

export default Resume;
