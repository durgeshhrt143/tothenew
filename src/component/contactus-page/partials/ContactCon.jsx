import React from "react";
import mail from "../../../images/mail.png";
const ContactCon = props => {
  return (
    <main className="contact-container has-text-centered">
      <section className="contact-address">
        <div className="container">
          <div className="columns is-row">
            <h1 className="column is-12 contact-title">Our Offices</h1>
            <div className="column">
              <ul className="columns is-row">
                <li className="column is-4">
                  <h3 className="contact-sub">NOIDA</h3>
                  <p className="contact-con">
                    2nd Floor, NSL Techzone SEZ, Noida-Greater Noida Expressway,
                    Sector 144, Noida, Uttar Pradesh 201306, India
                  </p>
                  <p className="contact-con">
                    Tel:<span>+91 120 4601883</span>
                  </p>
                </li>
                <li className="column is-4">
                  <h3 className="contact-sub">NOIDA</h3>
                  <p className="contact-con">
                    2nd Floor, NSL Techzone SEZ, Noida-Greater Noida Expressway,
                    Sector 144, Noida, Uttar Pradesh 201306, India
                  </p>
                  <p className="contact-con">
                    Tel:<span>+91 120 4601883</span>
                  </p>
                </li>
                <li className="column is-4">
                  <h3 className="contact-sub">NOIDA</h3>
                  <p className="contact-con">
                    2nd Floor, NSL Techzone SEZ, Noida-Greater Noida Expressway,
                    Sector 144, Noida, Uttar Pradesh 201306, India
                  </p>
                  <p className="contact-con">
                    Tel:<span>+91 120 4601883</span>
                  </p>
                </li>
                <li className="column is-4">
                  <h3 className="contact-sub">NOIDA</h3>
                  <p className="contact-con">
                    2nd Floor, NSL Techzone SEZ, Noida-Greater Noida Expressway,
                    Sector 144, Noida, Uttar Pradesh 201306, India
                  </p>
                  <p className="contact-con">
                    Tel:<span>+91 120 4601883</span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-mail">
        <div className="container">
          <div className="columns">
            <div className="column">
              <img src={mail} alt="mail" />
              <h1 className="contact-title" style={{ marginBottom: "20px" }}>
                Write to Us
              </h1>
              <a className="btn white-btn">info@qcin.org</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactCon;
