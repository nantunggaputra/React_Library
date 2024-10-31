/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

class Footer extends Component {
  render() {
    if (!this.props.data) return null;

    const { social } = this.props.data;
    const networks = social.map((network) => {
      return (
        <li key={network.name}>
          <a href={network.url} target="_blank" rel="noreferrer">
            <i className={network.className}></i>
          </a>
        </li>
      );
    });

    return (
      <footer>
        <div className="row">
            <div className="twelve columns">
              <ul className="social-links">{networks}</ul>
              <ul className="copyright">
                <li>
                  Created by{" "}
                  <a title="Nantungga Putra" href="">
                    Nantungga Putra
                  </a>{" "}
                  | &copy;2024
                </li>
                <li>
                  Design by {""}
                  <a
                    title="Styleshout"
                    href="http://www.styleshout.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Styleshout
                  </a>
                </li>
              </ul>
            </div>

          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
