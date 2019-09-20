import React from "react";
const SolutionCon = props => {
  return (
    <section className="solution-con">
      <div className="container">
        <div className="columns is-column">
          <h1 className="column is-12 has-text-centered">
            Our Solution Accelerators
          </h1>
          <p className="column is-12 has-text-centered">
            Leveraging our years of extensive experience on emerging digital
            technologies, we have built innovative technology solutions for
            industry incumbents solving their critical business challenges.
          </p>
          <div className="column">
            <ul className="columns">
              <li className="column has-text-right solutions-item">
                <h3>OTT Platform Development</h3>
                <p>
                  We build custom OTT applications for
                  <strong className="solution-heading">
                    Media & Entertainment
                  </strong>
                  companies which provide rich, intuitive and omni-channel
                  experience to viewers across devices including web, mobile,
                  smart TV, media streaming devices and gaming consoles.
                </p>
                <p>
                  <a className="btn white-btn">Know more</a>
                </p>
              </li>
              <li className="column"></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionCon;
