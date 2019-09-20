import React from "react";
import img from "../../../images/DigitalTransformation.png";
const SliderBelow = props => {
  return (
    <section className="is-slider-below has-text-centered">
      <div className="container">
        <div className="columns is-column">
          <p className="column is-12 is-slider-below-content">
            We are a digital technology company providing end-to-end product
            development services. We leverage the power of experience design,
            cutting-edge engineering, and cloud to build disruptive web and
            mobile apps enabling digital transformation for businesss.
          </p>
          <p className="column is-12 is-slider-below-title">
            We drive product engineering and digital transformation with Agile
            methodologies as the backbone.
          </p>
          <div className="column is-12">
            <ul className="columns is-row">
              <li className="column is-6">
                <img src={img} alt="abc" />
                <h3 className="is-slider-below-heading">
                  Digital Transformation
                </h3>
                <p className="is-slider-below-con">
                  Help companies traverse the complex Digital Transformation
                  journey leveraging cutting-edge technologies
                </p>
              </li>
              <li className="column is-6">
                <img src={img} alt="abc" />
                <h3 className="is-slider-below-heading">
                  Digital Transformation
                </h3>
                <p className="is-slider-below-con">
                  Help companies traverse the complex Digital Transformation
                  journey leveraging cutting-edge technologies
                </p>
              </li>
              <div className="column">
                <a className="btn white-btn">View all services</a>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SliderBelow;
