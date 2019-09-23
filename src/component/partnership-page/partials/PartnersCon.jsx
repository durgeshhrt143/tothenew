import React, { Fragment } from "react";
const PartnersCon = props => {
  return (
    <Fragment>
      <section className="partners-container has-text-centered">
        <div className="container">
          <div className="columns is-row">
            <p className="column content">
              We leverage cutting-edge technologies of our partners to disrupt
              the digital ecosystem. We are proud to be associated with many
              such forward thinking businesses including Cloud Service
              Providers, Container Platforms, Enterprise Database Management
              Vendors, and Content Management Platforms.
            </p>
          </div>
        </div>
      </section>
      <section className="partner has-text-centered">
        <div className="container">
          <ul className="columns is-row">
            <li className="column is-6">
              <figure>
                <img
                  src={`http://static1.tothenew.com/sites/default/files/2018-12/aws-logo-new.png`}
                  alt="abc"
                />
              </figure>
              <p className="content">AWS Premier Consulting Partner</p>
            </li>
            <li className="column is-6">
              <figure>
                <img
                  src={`http://static1.tothenew.com/sites/default/files/2018-12/aws-logo-new.png`}
                  alt="abc"
                />
              </figure>
              <p className="content">AWS Premier Consulting Partner</p>
            </li>
            <li className="column is-6">
              <figure>
                <img
                  src={`http://static1.tothenew.com/sites/default/files/2018-12/aws-logo-new.png`}
                  alt="abc"
                />
              </figure>
              <p className="content">AWS Premier Consulting Partner</p>
            </li>
            <li className="column is-6">
              <figure>
                <img
                  src={`http://static1.tothenew.com/sites/default/files/2018-12/aws-logo-new.png`}
                  alt="abc"
                />
              </figure>
              <p className="content">AWS Premier Consulting Partner</p>
            </li>
          </ul>
        </div>
      </section>
    </Fragment>
  );
};

export default PartnersCon;
