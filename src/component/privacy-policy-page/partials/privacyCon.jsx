import React, { Fragment } from "react";
import { Link } from "react-router-dom";
const PrivacyCon = props => {
  const { main_title, main_content, items } = props.data;
  const { main_title: t2, items: Items } = props.your_information;
  return (
    <section className="privacy-con">
      <div className="container inner">
        <div className="columns is-row">
          <p className="column is-12 main-content">{main_content}</p>
          <h1 className="main-title is-12 column">{main_title}</h1>
          {items.map((c, i) => (
            <Fragment key={c + i}>
              <h3 className="sub-title is-12 column">{c.title}</h3>
              <p className="sub-content is-12 column">{c.content}</p>
            </Fragment>
          ))}

          <h1 className="main-title is-12 column">{t2}</h1>
          {Items.map((c, i) => (
            <Fragment key={c + i}>
              <h3 className="sub-title is-12 column">{c.title}</h3>
              <p className="sub-content is-12 column">{c.content}</p>
            </Fragment>
          ))}
          <h3 className="sub-title is-12 column">
            YOUR CHOICES ABOUT YOUR INFORMATION
          </h3>
          <p className="sub-content is-12 column">
            You can review and correct the information about you that TO THE NEW
            keeps on file by logging into your account to update your password
            and billing information. Alternately, you can contact us directly at{" "}
            <Link to={`/`}>info@tothenew.com.</Link>
          </p>
          <h3 className="sub-title is-12 column">CHILDREN'S PRIVACY</h3>
          <p className="sub-content is-12 column">
            Protecting the privacy of young children is especially important.
            For that reason, TO THE NEW does not knowingly collect or solicit
            personal information from anyone under the age of 13. If you are
            under 13, please do not send any information about yourself to us,
            including your name, address, telephone number, or email address. No
            one under age 13 is allowed to provide any personal information to
            TO THE NEW. In the event that we learn that we have collected
            personal information from a child under age 13 without verification
            of parental consent, we will delete that information as quickly as
            possible. If you believe that we might have any information from or
            about a child under 13, please contact us at
            <Link to={`/`}>info@tothenew.com.</Link>
          </p>
          <h3 className="sub-title is-12 column">NOTIFICATION PROCEDURES</h3>
          <p className="sub-content is-12 column">
            It is our policy to provide notifications, whether such
            notifications are required by law or are for marketing or other
            business related purposes, to you via email notice, written or hard
            copy notice, or through conspicuous posting of such notice on the
            Service, as determined by TO THE NEW in its sole discretion. We
            reserve the right to determine the form and means of providing
            notifications to you, provided that you may opt out of certain means
            of notification as described in this Privacy Policy.
          </p>
          <h3 className="sub-title is-12 column">FEATURES ON OUR SITE</h3>
          <p className="sub-content is-12 column">
            If you use a bulletin board or chat room on this site, you should be
            aware that any personally identifiable information you submit there
            can be read, collected, or used by other users of these forums, and
            could be used to send you unsolicited messages. We are not
            responsible for the personal information you choose to submit in
            these forums. We also have testimonials on our site, for which users
            have given permission to have their personal information posted on
            our site with their testimonial.
          </p>
          <h3 className="sub-title is-12 column">LINKS TO OTHER WEB SITES</h3>
          <p className="sub-content is-12 column">
            Our Site includes links to other websites whose privacy practices
            may differ from those of other sites. If you submit personal
            information to any of those sites, your information is governed by
            their privacy statements. We encourage you to carefully read the
            privacy statement of any Web site you visit.
          </p>
          <h3 className="sub-title is-12 column">
            CHANGES TO OUR PRIVACY POLICY
          </h3>
          <p className="sub-content is-12 column">
            If we change our privacy policies and procedures materially, we will
            post those changes on the Service to keep you aware of what
            information we collect, how we use it and under what circumstances
            we may disclose it. Changes to this Privacy Policy are effective
            when they are posted on this page.
          </p>
          <p className="sub-content is-12 column">
            If you have any questions about this Privacy Policy, the practices
            of this site, or your dealings with this website, please contact us
            at <Link to={`/`}>info@tothenew.com</Link>, or send postal mail to
            <strong>1004 Toa Payoh North, #05-11, Singapore-318995.</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyCon;
