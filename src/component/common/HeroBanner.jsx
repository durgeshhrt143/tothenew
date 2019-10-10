import React from "react";
import { Link } from "react-router-dom";
const HeroBanner = props => {
  const { img, title, content, page, alt } = props.data;
  return (
    <section className="hero-banner">
      <div className="overflow-bg">
        <img src={img} alt={alt} />
      </div>
      <div className="text-con">
        <div className="container">
          <div className="columns is-row">
            <h1 className="column is-12">{title}</h1>
            <p className="column is-12">{content}</p>
            <div className="column is-12">
              <ul className="is-breadcrumb">
                <li>
                  <Link to={`/`}>Home</Link>
                </li>
                <li>{page}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
