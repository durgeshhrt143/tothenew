import React, { Component } from "react";
class ContactAddress extends Component {
  state = {
    istoggle: false
  };
  handleToggle = () => {
    this.setState({ istoggle: !this.state.istoggle });
  };
  render() {
    const { istoggle } = this.state;
    return (
      <section className="contact-address">
        <div className="container">
          <div className="columns is-row">
            <h1
              className="column is-12 contact-title"
              onClick={this.handleToggle}
            >
              Our Offices
            </h1>
            {istoggle && (
              <div className="column">
                <ul className="columns is-row">
                  <li className="column is-4">
                    <h3 className="contact-sub">NOIDA</h3>
                    <p className="contact-con">
                      2nd Floor, NSL Techzone SEZ, Noida-Greater Noida
                      Expressway, Sector 144, Noida, Uttar Pradesh 201306, India
                    </p>
                    <p className="contact-con">
                      Tel:<span>+91 120 4601883</span>
                    </p>
                  </li>
                  <li className="column is-4">
                    <h3 className="contact-sub">NOIDA</h3>
                    <p className="contact-con">
                      2nd Floor, NSL Techzone SEZ, Noida-Greater Noida
                      Expressway, Sector 144, Noida, Uttar Pradesh 201306, India
                    </p>
                    <p className="contact-con">
                      Tel:<span>+91 120 4601883</span>
                    </p>
                  </li>
                  <li className="column is-4">
                    <h3 className="contact-sub">NOIDA</h3>
                    <p className="contact-con">
                      2nd Floor, NSL Techzone SEZ, Noida-Greater Noida
                      Expressway, Sector 144, Noida, Uttar Pradesh 201306, India
                    </p>
                    <p className="contact-con">
                      Tel:<span>+91 120 4601883</span>
                    </p>
                  </li>
                  <li className="column is-4">
                    <h3 className="contact-sub">NOIDA</h3>
                    <p className="contact-con">
                      2nd Floor, NSL Techzone SEZ, Noida-Greater Noida
                      Expressway, Sector 144, Noida, Uttar Pradesh 201306, India
                    </p>
                    <p className="contact-con">
                      Tel:<span>+91 120 4601883</span>
                    </p>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }
}

export default ContactAddress;
