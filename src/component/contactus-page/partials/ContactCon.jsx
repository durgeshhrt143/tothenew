import React from "react";
import ContactAddress from "./ContactAddress";
import mail from "../../../images/mail.png";
const ContactCon = props => {
  return (
    <main className="contact-container has-text-centered">
      <ContactAddress />
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
