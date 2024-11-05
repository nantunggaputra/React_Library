import React, { Component } from "react";

class Contact extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const email = this.props.data.email;
    const message = this.props.data.contactmessage;

    return (
      <section id="contact">
          <div className="row section-head">
            <div className="two columns header-col">
              <h1>
                <span>Let's Connect</span>
              </h1>
            </div>
            <div className="ten columns">
              <p className="lead">{message}</p>
            </div>
          </div>
        <div className="row">
            <div className=" eight columns">
              <form id="contactForm">
                <fieldset>
                  <div>
                    <label htmlFor="contactName">
                      Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      defaultValue=""
                      size="35"
                      id="contactName"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="contactEmail">
                      Email <span className="required">*</span>
                    </label>
                    <input
                      type="email"
                      defaultValue=""
                      size="35"
                      id="contactEmail"
                      name="contactEmail"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="contactSubject">
                      Subject <span className="required">*</span>{" "}
                    </label>
                    <input
                      type="text"
                      defaultValue=" "
                      size="35"
                      id="contactSubject"
                      name="contactSubject"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="contactMessage">
                      Message <span className="required">*</span>{" "}
                    </label>
                    <textarea
                      cols="50"
                      rows="10"
                      id="contactMessage"
                      name="contactMessage"
                      resize="false"
                    ></textarea>
                  </div>
                  <div>
                    <button className="submit">Submit (Demo)</button>
                    <span id="image-loader">
                      <img src="images/loader.gif" alt="Submit" />
                    </span>
                  </div>
                </fieldset>
              </form>

              <div id="message-warning">Error</div>
              <div id="message-success">
                <i className="fa fa-check"></i>Your Message
                <br />
              </div>
            </div>

            <aside className="four columns footer-widgets">
              <div className="widget widget_contact">
                <h4>Address</h4>
                <p className="address">
                <span>{name}</span>
                    <br />
                    <span>Front End Web Developer</span>
                    <span>
                      {street}
                      <br />
                      {city}, {state}
                    </span>
                    <br />
                    <span>{email}</span>
                </p>
              </div>
            </aside>
        </div>
      </section>
    );
  }
}

export default Contact;
