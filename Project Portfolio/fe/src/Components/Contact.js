import { Component } from "react";
import { Fade, Slide } from "react-awesome-reveal";

class Contact extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const message = this.props.data.contactmessage;

    return (
      <section id="contact">
        <Fade bottom duration={1000}>
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
        </Fade>
        <div className="row">
          <Slide left duration={1300}>
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
          </Slide>

          <Slide right duration={1000}>
            <aside className="four columns footer-widgets">
              <div className="widget widget_contact">
                <h4>Address</h4>
                <p className="address">
                  {name}
                  <br />
                  {street}
                  <br />
                  {city}, {state}, {zip}
                </p>
              </div>
            </aside>
          </Slide>
        </div>
      </section>
    );
  }
}

export default Contact;
