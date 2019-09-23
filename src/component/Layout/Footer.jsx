import React, { Component } from "react";
import { Link } from "react-router-dom";
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
                    <Link to={`/about-us`}>About</Link>
                  </li>
                  <li>
                    <Link to={`/leadership`}>Leadership</Link>
                  </li>
                  <li>
                    <Link to={`/partnership`}>Partners</Link>
                  </li>
                  <li>
                    <Link to={`/press-releases`}>Press Releases</Link>
                  </li>
                  <li>
                    <Link to={`/awards`}>Awards</Link>
                  </li>
                  <li>
                    <Link to={`/media-coverage`}>Media Coverage</Link>
                  </li>
                  <li>
                    <Link to={`/events`}>Events</Link>
                  </li>
                  <li>
                    <Link to={`/our-social-impact`}>CSR</Link>
                  </li>
                  <li>
                    <Link to={`/privacy-policy`}> Privacy Policy</Link>
                  </li>
                </ul>
              </div>
              <div className="column is-2">
                <h3>What We Do</h3>
                <ul>
                  <li>
                    <Link to={`/services`}>Services</Link>
                  </li>
                  <li>
                    <Link to={`/technologies`}>Technologies</Link>
                  </li>
                  <li>
                    <Link to={`/success-stories`}>Success Stories</Link>
                  </li>
                  <li>
                    <Link to={`/solutions`}>Solutions</Link>
                  </li>
                  <li>
                    <Link to={`/industries`}>Industries</Link>
                  </li>
                </ul>
              </div>
              <div className="column is-2">
                <h3>Knowledge</h3>
                <ul>
                  <li>
                    <Link to={`/blog`}>Blog</Link>
                  </li>
                  <li>
                    <Link to={`/insights`}>Insights</Link>
                  </li>
                </ul>
              </div>
              <div className="column is-4">
                <h3> Contact Us</h3>

                <ul>
                  <li>
                    <Link to={`/contact-us`}>Request for Services</Link>
                  </li>
                  <li>
                    <Link to={`/contact-us`}>Join us!</Link>
                  </li>
                  <li>
                    <Link to={`/contact-us`}>Media Queries</Link>
                  </li>
                  <li>
                    <Link to={`/jobs`}>Career</Link>
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
                        <Link to={`/`}>Email Marketing</Link>
                      </li>
                      <li>
                        <Link to={`/`}>Search Engine Optimization</Link>
                      </li>
                      <li>
                        <Link to={`/`}>Marketing Automation</Link>
                      </li>
                      <li>
                        <Link to={`/`}>Social Listening</Link>
                      </li>
                      <li>
                        <Link to={`/`}>Digital Analytics</Link>
                      </li>
                      <li>
                        <Link to={`/`}>Web Analytics</Link>
                      </li>
                      <li>
                        <Link to={`/`}>Digital Marketing</Link>
                      </li>
                      <li>
                        <Link to={`/`}>Influencer Marketing</Link>
                      </li>
                      <li>
                        <Link to={`/`}>Content Marketing</Link>
                      </li>
                      <li>
                        <Link to={`/`}>Social Media Marketing</Link>
                      </li>
                      <li>
                        <Link to={`/`}>Creative Strategy</Link>
                      </li>
                      <li>
                        <Link to={`/`}>Digital Campaigns and Activations</Link>
                      </li>
                      <li>
                        <Link to={`/`}>Media planning and buying</Link>
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
