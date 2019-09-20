import React from "react";
import img from "../../../images/DigitalTransformation.png";
const ServicesCon = props => {
  return (
    <section className="services-con">
      <div className="container has-text-centered">
        <ul className="columns">
          <li
            className="column is-12"
            style={{ paddingBottom: "40px", width: "80%", margin: "0 auto" }}
          >
            We help Internet-based businesses and product companies design and
            develop cloud-native web and mobile solutions. We drive digital
            transformation for businesses by helping them provide a rich,
            seamless experience to their customers across digital channels
            resulting in higher engagement, efficiency, and profitability.
          </li>
        </ul>
        <ul className="columns top-border">
          <li className="column is-4 border">
            <img src={img} alt="abc" />
            <h3 className="is-slider-below-heading">Digital Transformation</h3>
            <p className="is-slider-below-con">
              Help companies traverse the complex Digital Transformation journey
              leveraging cutting-edge technologies
            </p>
          </li>
          <li className="column is-4 border">
            <img src={img} alt="abc" />
            <h3 className="is-slider-below-heading">Digital Transformation</h3>
            <p className="is-slider-below-con">
              Help companies traverse the complex Digital Transformation journey
              leveraging cutting-edge technologies
            </p>
          </li>
          <li className="column is-4 border">
            <img src={img} alt="abc" />
            <h3 className="is-slider-below-heading">Digital Transformation</h3>
            <p className="is-slider-below-con">
              Help companies traverse the complex Digital Transformation journey
              leveraging cutting-edge technologies
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ServicesCon;
