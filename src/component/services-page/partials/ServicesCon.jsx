import React from "react";
import img from "../../../images/DigitalTransformation.png";
const ServicesCon = props => {
  const { main_content, items } = props.data;
  return (
    <section className="services-con">
      <div className="container has-text-centered">
        <ul className="columns">
          <li
            className="column is-12"
            style={{ paddingBottom: "40px", width: "80%", margin: "0 auto" }}
          >
            {main_content}
          </li>
        </ul>
        <ul className="columns top-border is-row">
          {items.map((c, i) => (
            <li className="column is-4 border is-4" key={i}>
              <img src={c.img} alt={c.alt} />
              <h3 className="is-slider-below-heading">{c.title}</h3>
              <p className="is-slider-below-con">{c.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ServicesCon;
