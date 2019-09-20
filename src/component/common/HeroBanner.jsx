import React from "react";
import Services from "../../images/services.jpg";
const HeroBanner = props => {
  return (
    <section className="hero-banner">
      <div className="overflow-bg">
        <img src={Services} alt="Services" />
      </div>
      <div className="text-con">
        <div className="container">
          <div className="columns is-row">
            <h1 className="column is-12">Services</h1>
            <p className="column is-12">
              Agility combined with design-­led engineering, cloud and analytics
              driven marketing results in great products, faster
            </p>
            <div className="column is-12">
              <ul className="is-breadcrumb">
                <li>
                  <a>Home</a>
                </li>
                <li>services</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
