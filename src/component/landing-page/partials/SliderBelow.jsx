import React from "react";
import img from "../../../images/DigitalTransformation.png";
import { Link } from "react-router-dom";
const SliderBelow = props => {
  const { main_content, main_title, items } = props.content;
  return (
    <section className="is-slider-below has-text-centered">
      <div className="container">
        <div className="columns is-column">
          <p className="column is-12 is-slider-below-content">{main_content}</p>
          <p className="column is-12 is-slider-below-title">{main_title}</p>
          <div className="column is-12">
            <ul className="columns is-row">
              {items.map((c, i) => (
                <li className="column is-6" key={i}>
                  <img src={c.img} alt={c.alt} />
                  <h3 className="is-slider-below-heading">{c.title}</h3>
                  <p className="is-slider-below-con">{c.content}</p>
                </li>
              ))}
              <div className="column">
                <Link to={`/services`} className="btn white-btn">
                  View all services
                </Link>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SliderBelow;
