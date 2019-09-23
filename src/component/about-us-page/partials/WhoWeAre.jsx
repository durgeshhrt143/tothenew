import React from "react";
import OurClients from "./../../common/OurClients";
const WhoWeAre = props => {
  return (
    <section className="Who-we-Container">
      <div className="container">
        <div className="columns is-row">
          <h3 className="column is-12 title">Who we are?</h3>
          <div className="className column is-12">
            <img
              style={{ float: "right", paddingLeft: "20px" }}
              src={`http://static1.tothenew.com/sites/default/files/inline-images/TTN%20Floor%20%281%29_0.jpg`}
              alt="abc"
            />
            <p className="content">
              TO THE NEW is a premium digital technology company that provides
              end-to-end Product Engineering and Digital Transformation services
              to Fortune 500 companies and Silicon Valley startups across the
              globe.
            </p>
            <p className="content">
              We cover the entire gamut of product engineering including user
              experience design, web & mobile application development, cloud,
              devOps, big data, testing and infrastructure managed services to
              transform businesses digitally. At TO THE NEW, design led
              engineering is at the core of our offerings. Some of the
              cutting-edge technologies, frameworks and platforms we work on
              include MEAN, Grails, IoT, Blockchain, Bootstrap, AEM, Drupal,
              Hadoop, AWS, React, Ionic, Roku, iOS, and Android.
            </p>
            <p className="content">
              The DNA of our Product Engineering services include design led
              engineering, cloud-native development, microservices driven
              architecture, DevOps, & CICD-led processes. Being an Agile
              company, we respond to change and pivot fast to create the best
              market fit with a quick turnaround time.
            </p>
          </div>

          <h3 className="column is-12 title">What do we stand for</h3>
        </div>
        <ul className="columns is-row">
          <li className="column is-6">
            <div className="columns is-row">
              <figure className="column is-2">
                <img
                  src={`http://static1.tothenew.com/sites/default/files/2016-07/Social%20Customer%20Engagement_0.png`}
                  alt="abc"
                />
              </figure>
              <div className="column is-10">
                <h3 className="sub-title">Customer Success</h3>
                <p className="sub-content">
                  Customer success is more important than anything else
                </p>
              </div>
            </div>
          </li>
          <li className="column is-6">
            <div className="columns is-row">
              <figure className="column is-2">
                <img
                  src={`http://static1.tothenew.com/sites/default/files/2016-07/Social%20Customer%20Engagement_0.png`}
                  alt="abc"
                />
              </figure>
              <div className="column is-10">
                <h3 className="sub-title">Customer Success</h3>
                <p className="sub-content">
                  Customer success is more important than anything else
                </p>
              </div>
            </div>
          </li>
          <li className="column is-6">
            <div className="columns is-row">
              <figure className="column is-2">
                <img
                  src={`http://static1.tothenew.com/sites/default/files/2016-07/Social%20Customer%20Engagement_0.png`}
                  alt="abc"
                />
              </figure>
              <div className="column is-10">
                <h3 className="sub-title">Customer Success</h3>
                <p className="sub-content">
                  Customer success is more important than anything else
                </p>
              </div>
            </div>
          </li>
          <li className="column is-6">
            <div className="columns is-row">
              <figure className="column is-2">
                <img
                  src={`http://static1.tothenew.com/sites/default/files/2016-07/Social%20Customer%20Engagement_0.png`}
                  alt="abc"
                />
              </figure>
              <div className="column is-10">
                <h3 className="sub-title">Customer Success</h3>
                <p className="sub-content">
                  Customer success is more important than anything else
                </p>
              </div>
            </div>
          </li>
          <li className="column is-6">
            <div className="columns is-row">
              <figure className="is-2 column">
                <img
                  src={`http://static1.tothenew.com/sites/default/files/2016-07/Social%20Customer%20Engagement_0.png`}
                  alt="abc"
                />
              </figure>
              <div className="column is-10">
                <h3 className="sub-title">Customer Success</h3>
                <p className="sub-content">
                  Customer success is more important than anything else
                </p>
              </div>
            </div>
          </li>
          <li className="column is-6">
            <div className="columns is-row">
              <figure className="is-2 column">
                <img
                  src={`http://static1.tothenew.com/sites/default/files/2016-07/Social%20Customer%20Engagement_0.png`}
                  alt="abc"
                />
              </figure>

              <div className="column is-10">
                <h3 className="sub-title">Customer Success</h3>
                <p className="sub-content">
                  Customer success is more important than anything else
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default WhoWeAre;
