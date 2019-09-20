import React, { Component } from "react";
import flogo from "../../images/footer-logo.png";
class Footer extends Component {
  state = {
    toggle: false
  };
  toggleHandler = () => {
    const toggle = this.state.toggle === false ? !this.state.toggle : false;
    this.setState({ toggle });
  };
  render() {
    return (
      <React.Fragment>
        <footer className="top">
          <div className="container">
            <div className="columns">
              <div className="column is-2">
                <h3> Who We Are</h3>
                <ul>
                  <li>
                    <a>About</a>
                  </li>
                  <li>
                    <a>Leadership</a>
                  </li>
                  <li>
                    <a>Partners</a>
                  </li>
                  <li>
                    <a>Press Releases</a>
                  </li>
                  <li>
                    <a>Awards</a>
                  </li>
                  <li>
                    <a>Media Coverage</a>
                  </li>
                  <li>
                    <a>Events</a>
                  </li>
                  <li>
                    <a>CSR</a>
                  </li>
                  <li>
                    <a> Privacy Policy</a>
                  </li>
                </ul>
              </div>
              <div className="column is-2">
                <h3>What We Do</h3>
                <ul>
                  <li>
                    <a>Services</a>
                  </li>
                  <li>
                    <a>Technologies</a>
                  </li>
                  <li>
                    <a>Success Stories</a>
                  </li>
                  <li>
                    <a>Solutions</a>
                  </li>
                  <li>
                    <a>Industries</a>
                  </li>
                </ul>
              </div>
              <div className="column is-2">
                <h3>Knowledge</h3>
                <ul>
                  <li>
                    <a>Blog</a>
                  </li>
                  <li>
                    <a>Insights</a>
                  </li>
                </ul>
              </div>
              <div className="column is-4">
                <h3> Contact Us</h3>

                <ul>
                  <li>
                    <a>Request for Services</a>
                  </li>
                  <li>
                    <a>Join us!</a>
                  </li>
                  <li>
                    <a>Media Queries</a>
                  </li>
                  <li>
                    <a>Career</a>
                  </li>
                </ul>
              </div>
              <div className="column is-2">
                <h3>Connect With Us</h3>
                <img src={flogo} alt="flogo" />
                <p>©2019 TO THE NEW</p>
              </div>
            </div>
          </div>
        </footer>
        <footer className="bottom">
          <div className="container">
            <div className="columns">
              <h3 className="column is-12">
                <span className="is-service" onClick={this.toggleHandler}>
                  SERVICES
                </span>
              </h3>
              {this.state.toggle && (
                <React.Fragment>
                  <div className="column is-3 is-left">Digital Marketing</div>
                  <div className="column is-9 is-right">
                    <ul>
                      <li>
                        <a>Email Marketing</a>
                      </li>
                      <li>
                        <a>Search Engine Optimization</a>
                      </li>
                      <li>
                        <a>Marketing Automation</a>
                      </li>
                      <li>
                        <a>Social Listening</a>
                      </li>
                      <li>
                        <a>Digital Analytics</a>
                      </li>
                      <li>
                        <a>Web Analytics</a>
                      </li>
                      <li>
                        <a>Digital Marketing</a>
                      </li>
                      <li>
                        <a>Influencer Marketing</a>
                      </li>
                      <li>
                        <a>Content Marketing</a>
                      </li>
                      <li>
                        <a>Social Media Marketing</a>
                      </li>
                      <li>
                        <a>Creative Strategy</a>
                      </li>
                      <li>
                        <a>Digital Campaigns and Activations</a>
                      </li>
                      <li>
                        <a>Media planning and buying</a>
                      </li>
                    </ul>
                  </div>
                </React.Fragment>
              )}
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
